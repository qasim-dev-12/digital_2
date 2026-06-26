// components/Footer.tsx
import React, { useEffect, useState } from "react";
import Link from "next/link";
import emailjs from "@emailjs/browser";

type Toast = { type: "success" | "error"; text: string } | null;

const Footer: React.FC = ()=> {
  const [email, setEmail] = useState<string>("");
  const [toast, setToast] = useState<Toast>(null);
  const [loading, setLoading] = useState<boolean>(false);

  // Use env vars in production. Fallback to your current keys below for dev.
  const SERVICE_ID =  "service_qdbgus6";
  const TEMPLATE_ID = "template_criwo48";
  const PUBLIC_KEY =  "EAGq_P3uzDdc4rHda";

  // Initialize EmailJS once
  useEffect(() => {
    try {
      if (PUBLIC_KEY) {
        // emailjs.init is safe to call multiple times, but we call it once.
        emailjs.init(PUBLIC_KEY);
        console.info("EmailJS initialized with public key.");
      } else {
        console.warn("No EmailJS public key found. Set NEXT_PUBLIC_EMAILJS_PUBLIC_KEY.");
      }
    } catch (err) {
      console.error("EmailJS init error:", err);
    }
  }, [PUBLIC_KEY]);

  const validateEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !validateEmail(email)) {
      setToast({ type: "error", text: "Please enter a valid email." });
      setTimeout(() => setToast(null), 3000);
      return;
    }

    // Adjust these keys to match your EmailJS template variables.
    const templateParams = {
      email, // if your template uses {{email}}
      // Example additional fields:
      // from_name: "Website visitor",
      // message: "Subscribe request"
    };

    setLoading(true);
    console.log("Attempting to send email via EmailJS:", {
      service: SERVICE_ID,
      template: TEMPLATE_ID,
      templateParams,
      publicKey: PUBLIC_KEY,
    });

    try {
      // Pass PUBLIC_KEY as fourth arg as a fallback if init failed / not called:
      const result = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      console.log("EmailJS success:", result);

      setLoading(false);
      setEmail("");
      setToast({ type: "success", text: "Your Email has been Sent Successfully. Thank You!" });
      setTimeout(() => setToast(null), 4000);
    } catch (err: any) {
      setLoading(false);
      console.error("EmailJS error (full):", err);
      // Extract friendly message if present:
      const friendly = err?.text || err?.message || "Failed to send. Try again later.";
      setToast({ type: "error", text: friendly });
      setTimeout(() => setToast(null), 4000);
    }
  };

  return (
    <footer className="main-footer footer-style-one overflow-hidden">
      <div className="widgets-section">
        <div className="anim-icons">
          <div className="image-1 bounce-x">
            <img src="/assets/images/icons/shape-style53.png" alt="Shape Icon" />
          </div>
          <div className="image-2 bounce-y">
            <img src="/assets/images/icons/shape-style53.png" alt="Shape Icon" />
          </div>
        </div>
        <div className="footer-middle">
          <div className="container">
            <div className="row">
              <div className="footer-column col-lg-5">
                <div className="footer-widget about-widget wow fadeInLeft">
                  <h1 className="title">Let’s Talk</h1>
                  <div className="widget-content">
                    <div className="text">
                      We’re here to help you grow faster with smart digital strategies
                      <br className="d-none d-xl-block" />
                      and creative solutions built for your business.
                    </div>
                    <div className="social-widget">
                      <ul className="social-icon-list1">
                        <li>
                          <a href="https://www.facebook.com/staytopmedia" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/staytop.media" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.tiktok.com/@staytop.media" aria-label="TikTok" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-tiktok" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.linkedin.com/company/staytopmedia" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin-in" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.youtube.com/@StayTopMedia/shorts" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-youtube" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="footer-column col-lg-2">
                <div className="footer-widget links-widget col wow fadeInLeft" data-wow-delay="100ms">
                  <h5 className="widget-title">Quick Link</h5>
                  <div className="widget-content">
                    <ul className="user-links">
                      <li><Link href="/about">About Us</Link></li>
                      <li><Link href="/services">Services</Link></li>
                      <li><Link href="/industries">Industries</Link></li>
                      <li><Link href="/pricing">Pricing</Link></li>
                      <li><Link href="/contact">Contact Us</Link></li>
                      <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                      <li><Link href="/terms-of-service">Terms of Service</Link></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="footer-column col-lg-5">
                <div className="footer-widget subscribe-widget wow fadeInLeft" data-wow-delay="200ms">
                  <h5 className="text">Get the latest inspiration & insights</h5>
                  <div className="subscribe-form-one">
                    <form onSubmit={sendEmail} noValidate>
                      <div className="form-group" style={{ position: "relative" }}>
                        <label htmlFor="emailaddress" className="sr-only">Email Address</label>
                        <input
                          id="emailaddress"
                          name="email"
                          type="email"
                          placeholder="Email Address"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          style={{ padding: "12px 48px 12px 14px", borderRadius: 6, width: "100%" }}
                        />
                        <button
                          type="submit"
                          className="theme-btn"
                          disabled={loading}
                          aria-busy={loading}
                          style={{
                            position: "absolute",
                            right: 6,
                            top: "50%",
                            transform: "translateY(-50%)",
                            border: "none",
                            background: "#1f2937",
                            color: "#fff",
                            padding: "10px 12px",
                            borderRadius: 6,
                          }}
                        >
                          {loading ? "Sending…" : <i className="icon flaticon-paper-plane" />}
                        </button>
                      </div>
                    </form>

                    {/* toast */}
                    {toast && (
                      <div
                        role="status"
                        aria-live="polite"
                        style={{
                          position: "fixed",
                          right: 20,
                          bottom: 28,
                          zIndex: 9999,
                          minWidth: 300,
                          borderRadius: 12,
                          color: "#fff",
                          boxShadow: "0 12px 36px rgba(0,0,0,0.45)",
                          overflow: "hidden",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            gap: 12,
                            alignItems: "center",
                            padding: "14px 16px",
                            background: toast.type === "success" ? "#06431a" : "#3b0a0a",
                          }}
                        >
                          {/* Using the uploaded file path as requested. In production, move to /public */}
                          <img
                            // developer: provided uploaded file path -> used here as the img src
                            src="/mnt/data/8c8b45e2-774b-4cdd-a944-6a623d95d0e0.png"
                            alt=""
                            width={28}
                            height={28}
                            style={{ display: "block" }}
                          />
                          <div>
                            <div style={{ fontWeight: 700, marginBottom: 4 }}>
                              {toast.type === "success" ? "Success" : "Error"}
                            </div>
                            <div style={{ fontSize: 14 }}>{toast.text}</div>
                          </div>
                        </div>
                      </div>
                    )}

                  </div>

                  <div className="row">
                    <div className="footer-widget col wow fadeInLeft" data-wow-delay="400ms">
                      <h5 className="widget-title">Address</h5>
                      <div className="widget-content">
                        <div className="text">
                          Dubai , United Arab Emirates <br className="d-none d-lg-block" />
                        </div>
                      </div>
                    </div>
                    <div className="footer-widget col wow fadeInLeft" data-wow-delay="400ms">
                      <h5 className="widget-title">Support</h5>
                      <div className="widget-content">
                        <div className="text">
                          info@staytop.ae<br className="d-none d-lg-block" />
                          +971 52 236 7120
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <div className="inner-container justify-content-center">
              <p className="copyright-text">
                © {new Date().getFullYear()} All rights reserved by staytop.ae
              </p>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
