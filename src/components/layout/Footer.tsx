import React from "react";
import Link from "next/link";

function Footer (){

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
                      Lorem ipsum dolor sit amet, consectetuer adipiscing <br className="d-none d-xl-block" />
                      elit sed diam nonummy.
                    </div>
                    <div className="social-widget">
                      <ul className="social-icon-list1">
                        <li><Link href="/" aria-label="Twitter"><i className="fab fa-twitter" /></Link></li>
                        <li><Link href="/" aria-label="Facebook"><i className="fab fa-facebook-f" /></Link></li>
                        <li><Link href="/" aria-label="Pinterest"><i className="fab fa-pinterest-p" /></Link></li>
                        <li><Link href="/" aria-label="Instagram"><i className="fab fa-instagram" /></Link></li>
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
                      <li><Link href="/">About Us</Link></li>
                      <li><Link href="/">Our Team</Link></li>
                      <li><Link href="/">Our Portfolio</Link></li>
                      <li><Link href="/">Careers</Link></li>
                      <li><Link href="/">Contact Us</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="footer-column col-lg-5">
                <div className="footer-widget subscribe-widget wow fadeInLeft" data-wow-delay="200ms">
                  <h5 className="text">Get the latest inspiration & insights</h5>
                  <div className="subscribe-form-one">
                    <form method="post" action="#">
                      <div className="form-group" style={{ position: "relative" }}>
                        <label htmlFor="emailaddress" className="sr-only">Email Address</label>
                        <input
                          type="email"
                          id="emailaddress"
                          name="emailaddress"
                          className="email"
                          placeholder="Email Address"
                          required
                        />
                        <button type="submit" className="theme-btn" aria-label="Submit email">
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
                          4140 Parker Rd. Allentown, <br className="d-none d-lg-block" />
                          New Mexico 31134
                        </div>
                      </div>
                    </div>
                    <div className="footer-widget col wow fadeInLeft" data-wow-delay="400ms">
                      <h5 className="widget-title">Support</h5>
                      <div className="widget-content">
                        <div className="text">
                          needhelp@company.com <br className="d-none d-lg-block" />
                          (+123) 456789 00
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
                © {new Date().getFullYear()} All rights reserved by Digitaal.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );

};
export default Footer;