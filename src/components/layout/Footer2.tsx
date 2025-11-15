import React from "react";
import Link from "next/link";

function Footer2 (){

  return (
    <footer className="main-footer footer-style-two">
      <div className="large-container">
        <div className="widgets-section">
          <div className="anim-icons">
            <div className="image-1 bounce-x">
              <img src="/assets/images/icons/shape-style54.png" alt="Decoration" />
            </div>
            <div className="image-2 bounce-y">
              <img src="/assets/images/icons/shape-style54.png" alt="Decoration" />
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="footer-column col-xl-6">
                <div className="footer-widget about-widget wow fadeInLeft">
                  <h1 className="title">Let’s Talk</h1>
                  <div
                    className="footer-widget subscribe-widget wow fadeInLeft"
                    data-wow-delay="200ms"
                  >
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
                  </div>
                  <div className="widget-content">
                    <div className="text">
                      Lorem ipsum dolor sit amet, consectetuer adipiscing
                      <br className="d-none d-lg-block" />
                      elit sed diam nonummy.
                    </div>
                    <div className="social-widget">
                      <ul className="social-icon-list1">
                        <li><Link href="/"><i className="fab fa-twitter" /></Link></li>
                        <li><Link href="/"><i className="fab fa-facebook-f" /></Link></li>
                        <li><Link href="/"><i className="fab fa-pinterest-p" /></Link></li>
                        <li><Link href="/"><i className="fab fa-instagram" /></Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="footer-right-column">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="contacts-widget mt-50 wow fadeInLeft" data-wow-delay="100ms">
                        <div className="text">
                          <h5 className="title">Contact Us</h5>
                          <ul>
                            <li>
                              <Link href="mailto:needhelp@company.com" className="mail">
                                needhelp@company.com
                              </Link>
                            </li>
                            <li>
                              <Link href="tel:+12345678900" className="phone">
                                (+123) 456789 00
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <Link
                          href="/page-contact"
                          className="contact-us wow fadeInUp animated"
                          style={{ visibility: "visible", animationName: "fadeInUp" }}
                        >
                          <span className="title">
                            Contact <br /> with us
                          </span>
                          <i className="icon flaticon-top-right" />
                        </Link>
                      </div>
                    </div>
                    <div className="footer-column col-xl-6">
                      <div className="footer-widget links-widget wow fadeInLeft" data-wow-delay="200ms">
                        <h5 className="widget-title">Quick Links</h5>
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
                    <div className="footer-column col-xl-6">
                      <div className="footer-widget links-widget wow fadeInLeft" data-wow-delay="300ms">
                        <h5 className="widget-title">Our Solutions</h5>
                        <div className="widget-content">
                          <ul className="user-links">
                            <li><Link href="/">Web Development</Link></li>
                            <li><Link href="/">UI/UX Design</Link></li>
                            <li><Link href="/">Mobile Application</Link></li>
                            <li><Link href="/">Cloud Service</Link></li>
                            <li><Link href="/">Cyber Security</Link></li>
                          </ul>
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

export default Footer2;