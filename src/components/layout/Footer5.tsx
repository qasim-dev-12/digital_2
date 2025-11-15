import React from 'react';
import Link from 'next/link';

function Footer5 (){

    return (
        <>
        <footer className="main-footer footer-style-five">
          <div className="anim-icons">
            <div className="image-1"><img src="assets/images/icons/shape-style62.png" alt="Image"/></div>
            <div className="image-2"><img src="assets/images/icons/shape-style63.png" alt="Image"/></div>
          </div>
          <div className="widgets-section">
            <div className="bg bg-image" style={{backgroundImage: 'url(assets/images/icons/section-bg-shape13.png)'}}></div>
            <div className="anim-icons">
              <div className="image-3 tm-gsap-img-parallax"><img src="assets/images/icons/shape-style23.png" alt="Image"/></div>
            </div>
            <div className="footer-top">
              <div className="container">
                <div className="outer-box">
                  <div className="logo">
                    <img src="assets/images/logo-2.png" alt="Image"/>
                  </div>
                  <div className="social-widget">
                      <ul className="social-icon-list">
                        <li><Link href="/"><i className="fab fa-twitter"/></Link></li>
                        <li><Link href="/"><i className="fab fa-facebook-f"/></Link></li>
                        <li><Link href="/"><i className="fab fa-pinterest-p"/></Link></li>
                        <li><Link href="/"><i className="fab fa-instagram"/></Link></li>
                      </ul>
                    </div>
                </div>
              </div>
            </div>
            <div className="footer-middle">
              <div className="container">
                <div className="row"> 
                  <div className="footer-column col-lg-6">
                    <div className="footer-widget about-widget wow fadeInLeft">
                      <div className="widget-content">
                        <div className="content-box">
                          <h6 className="sub-title">Phone:</h6>
                          <div className="text"><Link href="tel:1234567890" className="link">(123) 456-7890</Link></div>
                        </div>
                        <div className="content-box">
                          <h6 className="sub-title">Address :</h6>
                          <div className="text">4517 Washington Ave. New <br/>york  USA</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-5 offset-xl-1 col-lg-6">
                    <div className="row">
                      <div className="footer-column col-md-6">
                        <div className="footer-widget links-widget wow fadeInLeft" data-wow-delay="200ms">
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
                      <div className="footer-column col-md-6">
                        <div className="footer-widget links-widget wow fadeInLeft" data-wow-delay="200ms">
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
            <div className="footer-bottom-two">
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
        </>
    );
};

export default Footer5;