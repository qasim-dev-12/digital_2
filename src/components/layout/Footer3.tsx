import React from "react";
import Link from "next/link";

function Footer3 (){
  return (
    <footer className="main-footer footer-style-three">
      <div className="widgets-section">
        <div className="anim-icons">
          <div className="image-1 circleZoom">
            <img src="/assets/images/icons/theme-icon39.png"
              alt="Theme Icon"/>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="footer-column col-lg-4 col-md-6">
              <div className="footer-widget about-widget">
                <div className="logo">
                  <img src="/assets/images/logo-2.png"
                    alt="Company Logo" />
                </div>
                <div className="widget-content">
                  <div className="text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nonummy nibh euismod  dolore magna aliquam</div>
                  <div className="social-widget">
                    <ul className="social-icon-list1">
                      <li>
                        <Link href="https://twitter.com" target="_blank" aria-label="Twitter">
                          <i className="fab fa-twitter" />
                        </Link>
                      </li>
                      <li>
                        <Link href="https://facebook.com" target="_blank" aria-label="Facebook">
                          <i className="fab fa-facebook-f" />
                        </Link>
                      </li>
                      <li>
                        <Link href="https://pinterest.com" target="_blank" aria-label="Pinterest">
                          <i className="fab fa-pinterest-p" />
                        </Link>
                      </li>
                      <li>
                        <Link href="https://instagram.com" target="_blank" aria-label="Instagram">
                          <i className="fab fa-instagram" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-column col-lg-2 col-md-6">
              <div className="footer-widget links-widget">
                <h5 className="widget-title">Quick Links</h5>
                <ul className="user-links">
                  <li><Link href="/">About Us</Link></li>
                  <li><Link href="/">Our Team</Link></li>
                  <li><Link href="/">Our Portfolio</Link></li>
                  <li><Link href="/">Careers</Link></li>
                  <li><Link href="/">Contact Us</Link></li>
                  <li><Link href="/">Case Studies</Link></li>
                </ul>
              </div>
            </div>
            <div className="footer-column col-lg-3 col-md-6">
              <div className="footer-widget links-widget">
                <h5 className="widget-title">Our Solutions</h5>
                <ul className="user-links">
                  <li><Link href="/">Web Development</Link></li>
                  <li><Link href="/">UI/UX Design</Link></li>
                  <li><Link href="/">Mobile Application</Link></li>
                  <li><Link href="/">Cloud Service</Link></li>
                  <li><Link href="/">Cyber Security</Link></li>
                </ul>
              </div>
            </div>
            <div className="footer-column col-lg-3 col-md-6">
              <div className="footer-widget links-widget">
                <h5 className="widget-title">Contact Us</h5>
                <div className="widget-content">
                  <div className="contact-info-box">
                    <div className="icon-box">
                      <i className="fa fa-envelope" />
                    </div>
                    <div className="content-box">
                      <h6 className="title">Mail Us:</h6>
                      <p>
                        <Link href="mailto:hanson@example.com" className="link">
                          hanson@example.com
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="contact-info-box">
                    <div className="icon-box">
                      <i className="fa fa-map-marker-alt" />
                    </div>
                    <div className="content-box">
                      <h6 className="title">Address:</h6>
                      <p>4517 Washington Ave, New York 39495</p>
                    </div>
                  </div>
                  <div className="contact-info-box">
                    <div className="icon-box">
                      <i className="fa fa-phone" />
                    </div>
                    <div className="content-box">
                      <h6 className="title">Phone:</h6>
                      <p>
                        <Link href="tel:1234567890" className="link">
                          (123) 456-7890
                        </Link>
                      </p>
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
      </div>
    </footer>
  );
};

export default Footer3;