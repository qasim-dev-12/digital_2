import React from 'react';
import  { useState } from "react";

const ContactPage = () => {
  
const [loading, setLoading] = useState(false);
const [toast, setToast] = useState<{ type: "success" | "error"; text: string } | null>(null);
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const form = e.currentTarget;

  const data = {
    form_name: (form.elements.namedItem("form_name") as HTMLInputElement)?.value?.trim(),
    form_email: (form.elements.namedItem("form_email") as HTMLInputElement)?.value?.trim(),
    form_subject: (form.elements.namedItem("form_subject") as HTMLInputElement)?.value?.trim(),
    form_phone: (form.elements.namedItem("form_phone") as HTMLInputElement)?.value?.trim(),
    form_message: (form.elements.namedItem("form_message") as HTMLTextAreaElement)?.value?.trim(),
  };

  // basic validation
  if (!data.form_name || !data.form_email || !data.form_message) {
    setToast({ type: "error", text: "Please fill required fields (name, email, message)." });
    setTimeout(() => setToast(null), 3500);
    return;
  }

  setLoading(true);
  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const json = await res.json();
    if (res.ok && json.success) {
      setToast({ type: "success", text: "Message sent — thank you!" });
      (form as HTMLFormElement).reset();
    } else {
      console.error("Server error:", json);
      setToast({ type: "error", text: json.message || "Failed to send message." });
    }
  } catch (err) {
    console.error("Network error:", err);
    setToast({ type: "error", text: "Network error — try again later." });
  } finally {
    setLoading(false);
    setTimeout(() => setToast(null), 4000);
  }
};
  return (
    <>
      <section className="contact-details pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-6">
              <div className="sec-title">
                <span className="sub-title">Send us an email</span>
                <h2>Feel free to write</h2>
              </div>
             <form id="contact_form" name="contact_form" onSubmit={handleSubmit} noValidate>
    <div className="row">
      <div className="col-sm-6">
        <div className="mb-3">
          <input name="form_name" className="form-control" type="text" placeholder="Enter Name" />
        </div>
      </div>
      <div className="col-sm-6">
        <div className="mb-3">
          <input name="form_email" className="form-control required email" type="email" placeholder="Enter Email" />
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-sm-6">
        <div className="mb-3">
          <input name="form_subject" className="form-control required" type="text" placeholder="Enter Subject" />
        </div>
      </div>
      <div className="col-sm-6">
        <div className="mb-3">
          <input name="form_phone" className="form-control" type="text" placeholder="Enter Phone" />
        </div>
      </div>
    </div>

    <div className="mb-3">
      <textarea name="form_message" className="form-control required" rows={7} placeholder="Enter Message"></textarea>
    </div>

    {/* Botcheck hidden stays if you want */}
    <input name="form_botcheck" className="form-control" type="hidden" value="" />

    {/* Toast / message */}
    {toast && (
      <div style={{
        padding: 12, borderRadius: 8, color: "#000000ff",
        background: toast.type === "success" ? "#ffffffff" : "#820000ff",
        marginBottom: 12, display: "flex", alignItems: "center", gap: 10,
        
      }}>
        {/* developer-provided icon path (dev only) */}
        <img src="/mnt/data/8c8b45e2-774b-4cdd-a944-6a623d95d0e0.png" alt="" width={28} height={28} />
        <span>{toast.text}</span>
      </div>
    )}

    <div className="mb-5">
      <button type="submit" className="theme-btn btn-style-one mb-3 mb-xl-0" data-loading-text="Please wait..." disabled={loading}>
        <span className="btn-title">{loading ? "Sending..." : "Send message"}</span>
      </button>
      <button type="reset" className="theme-btn btn-style-one bg-theme-color5" style={{ marginLeft: 8 }}>
        <span className="btn-title">Reset</span>
      </button>
    </div>
  </form>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="contact-details__right">
                <div className="sec-title">
                  <span className="sub-title">Need any help?</span>
                  <h2>Get in touch with us</h2>
                  {/* <div className="text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor.
                  </div> */}
                </div>
                <ul className="list-unstyled contact-details__info">
                  <li className="d-flex align-items-center mb-4">
                    <div className="icon"><span className="fal fa-phone-plus"></span></div>
                    <div className="text ms-3">
                      <h4>Have any questions?</h4>
                      <a href="tel:+971567442268"> +971 56 744 2268</a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center mb-4">
                    <div className="icon"><span className="fal fa-envelope"></span></div>
                    <div className="text ms-3">
                      <h4>Write email</h4>
                      <a href="mailto:info@staytop.ae">info@staytop.ae</a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="icon"><span className="fal fa-location-arrow"></span></div>
                    <div className="text ms-3">
                      <h4>Visit anytime</h4>
                      <span>ACCICO Business Park, Office 503, Deira, Dubai, U.A.E</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="map-section">
        <iframe
          className="map w-100"
         
          src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Al%20Garhoud,%20Dubai,%20UAE+(My%20Business%20Name)&t=&z=14&ie=UTF8&iwloc=B&output=embed"

          title="Google Map"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        ></iframe>
      </section>
    </>
  );
};

export default ContactPage;
