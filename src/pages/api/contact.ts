// pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

type ResponseData = {
  success: boolean;
  message?: string;
  error?: string;
};

const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = Number(process.env.SMTP_PORT || 587);
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const TO_EMAIL = process.env.TO_EMAIL || "staytopdev@gmail.com";
const FROM_EMAIL = process.env.FROM_EMAIL || `no-reply@${process.env.NEXT_PUBLIC_VERCEL_URL ?? "example.com"}`;

// local file path from your upload (developer instruction)
const UPLOADED_IMAGE_PATH = "/mnt/data/8c8b45e2-774b-4cdd-a944-6a623d95d0e0.png";

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: SMTP_PORT === 465, // true for port 465, false for other ports
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
});

/**
 * Basic server-side validation for required fields.
 */
function validatePayload(body: any) {
  const required = ["form_name", "form_email", "form_message"];
  const missing = required.filter((k) => !body?.[k] || String(body[k]).trim() === "");
  return { ok: missing.length === 0, missing };
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  const body = req.body ?? {};
  const { ok, missing } = validatePayload(body);

  if (!ok) {
    return res.status(400).json({
      success: false,
      message: `Missing required fields: ${missing.join(", ")}`,
    });
  }

  const {
    form_name,
    form_email,
    form_subject = "",
    form_phone = "",
    form_message,
  } = body;

  const subject = form_subject ? `Contact: ${form_subject}` : `Contact form from ${form_name}`;

  const html = `
    <h2>New contact form submission</h2>
    <p><strong>Name:</strong> ${escapeHtml(form_name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(form_email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(form_phone || "N/A")}</p>
    <p><strong>Subject:</strong> ${escapeHtml(form_subject || "N/A")}</p>
    <h3>Message</h3>
    <p>${escapeHtml(form_message).replace(/\n/g, "<br/>")}</p>
    <hr />
    <p>Received: ${new Date().toISOString()}</p>
  `;

  // Prepare attachments array; attach the uploaded file if it exists
  const attachments: { filename: string; path: string }[] = [];
  try {
    if (fs.existsSync(UPLOADED_IMAGE_PATH)) {
      attachments.push({
        filename: path.basename(UPLOADED_IMAGE_PATH),
        path: UPLOADED_IMAGE_PATH,
      });
      console.info("Attachment found and will be included:", UPLOADED_IMAGE_PATH);
    } else {
      console.info("No attachment found at:", UPLOADED_IMAGE_PATH);
    }
  } catch (err) {
    console.warn("Error checking attachment path:", err);
  }

  try {
    // Verify transporter (optional, but helpful for clearer errors)
    await transporter.verify();

    await transporter.sendMail({
      from: `${form_name} <${FROM_EMAIL}>`,
      to: TO_EMAIL,
      subject,
      html,
      replyTo: form_email,
      attachments: attachments.length ? attachments : undefined,
    });

    return res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (err: any) {
    console.error("Failed to send email:", err);
    // Provide actionable message to frontend, but not sensitive details
    return res.status(500).json({ success: false, message: "Failed to send email", error: String(err?.message ?? err) });
  }
}

/**
 * Simple HTML escape to avoid injection in email body.
 */
function escapeHtml(unsafe: any) {
  const s = String(unsafe ?? "");
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
