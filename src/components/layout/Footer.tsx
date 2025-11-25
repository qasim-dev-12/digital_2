import React from "react";
import Link from "next/link";
// import emailjs from '@emailjs/browser';
import { useState } from 'react';

function Footer (){
   const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  return (
    <footer className="main-footer footer-style-one overflow-hidden">
      <div className="widgets-section">
        <div className="anim-icons">
          <div className="image-1 bounce-x">
            <img src="assets/images/icons/shape-style53.png" alt="Shape Icon" />
          </div>
          <div className="image-2 bounce-y">
            <img src="assets/images/icons/shape-style53.png" alt="Shape Icon" />
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
                     
                      We’re here to help you grow faster with smart digital strategies  <br className="d-none d-xl-block" />
                    and creative solutions built for your business.
                    </div>
                    <div className="social-widget">
                      <ul className="social-icon-list1">

  <li>
    <Link 
      href="https://www.facebook.com/staytopmedia"
      aria-label="Facebook"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fab fa-facebook-f" />
    </Link>
  </li>

  <li>
    <Link 
      href="https://www.instagram.com/staytop.media"
      aria-label="Instagram"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fab fa-instagram" />
    </Link>
  </li>

  <li>
    <Link 
      href="https://www.tiktok.com/@staytop.media"
      aria-label="TikTok"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fab fa-tiktok" />
    </Link>
  </li>

  <li>
    <Link 
      href="https://www.linkedin.com/company/staytopmedia"
      aria-label="LinkedIn"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fab fa-linkedin-in" />
    </Link>
  </li>

  <li>
    <Link 
      href="https://www.youtube.com/@StayTopMedia/shorts"
      aria-label="YouTube"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fab fa-youtube" />
    </Link>
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
                    </ul>
                  </div>
                </div>
              </div>
              <div className="footer-column col-lg-5">
                <div className="footer-widget subscribe-widget wow fadeInLeft" data-wow-delay="200ms">
                  <h5 className="text">Get the latest inspiration & insights</h5>
                  <div className="subscribe-form-one">
              <form action="https://formsubmit.co/5be63403285be579579961521192e3f0" method="POST">
  <input type="hidden" name="_captcha" value="false" />
  <div className="form-group" style={{ position: "relative" }}>
    <input
      type="email"
      name="email"
      className="email"
      placeholder="Email Address"
      required
    />
    <button type="submit" className="theme-btn">
      <i className="icon flaticon-paper-plane"></i>
    </button>
  </div>
</form>


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
                          {/* (+123) 456789 00 */}
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