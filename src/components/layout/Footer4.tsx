import React from 'react';
import Link from 'next/link';
   

function Footer4 () {

    return (
        <>
            <footer className="main-footer footer-style-four">
                <div className="widgets-section">
                    <div className="anim-icons">
                        <div className="image-1 tm-gsap-img-parallax"><img src="assets/images/icons/shape-style55.png" alt="Image" /></div>
                        <div className="image-2"><img src="assets/images/icons/shape-style57.png" alt="Image" /></div>
                    </div>
                    <div className="footer-top">
                        <div className="container">
                            <div className="outer-box">
                                <h1 className="title">Let’s Start a Project</h1>
                                <Link href="/" className="link-btn"><i className="icon fa-solid fa-arrow-right"/></Link>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="footer-column col-lg-4 col-md-6">
                                <div className="footer-widget about-widget wow fadeInLeft">
                                    <div className="logo">
                                        <img src="assets/images/logo-2.png" alt="Image" />
                                    </div>
                                    <div className="widget-content">
                                        <div className="text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nonummy nibh euismod dolore magna aliquam</div>
                                        <div className="social-widget">
                                            <ul className="social-icon-list">
                                                <li>
                                                    <Link href="/"><i className="fab fa-twitter"/></Link>
                                                </li>
                                                <li>
                                                    <Link href="/"><i className="fab fa-facebook-f"/></Link>
                                                </li>
                                                <li>
                                                    <Link href="/"><i className="fab fa-pinterest-p"/></Link>
                                                </li>
                                                <li>
                                                    <Link href="/"><i className="fab fa-instagram"/></Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="footer-column col-lg-2 col-md-6">
                                <div className="footer-widget links-widget wow fadeInLeft" data-wow-delay="200ms">
                                    <h5 className="widget-title">Quick Link</h5>
                                    <div className="widget-content">
                                        <ul className="user-links">
                                            <li><Link href="/">About Us</Link></li>
                                            <li><Link href="/">Our Team</Link></li>
                                            <li><Link href="/">Our Portfolio</Link></li>
                                            <li><Link href="/">Careers</Link></li>
                                            <li><Link href="/">Contact Us</Link></li>
                                            <li><Link href="/">Case Study</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="footer-column col-lg-3 col-md-6">
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
                            <div className="footer-column col-lg-3 col-md-6">
                                <div className="footer-widget links-widget wow fadeInLeft" data-wow-delay="400ms">
                                    <h5 className="widget-title">Stay with us</h5>
                                    <div className="widget-content">
                                        <ul className="user-links style-two">
                                            <li><Link href="/">Behance</Link></li>
                                            <li><Link href="/">Upwork</Link></li>
                                            <li><Link href="/">Dribbble</Link></li>
                                            <li><Link href="/">Fiverr</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="inner-container">
                            <p className="copyright-text">
                                © {new Date().getFullYear()} All rights reserved by Digitaal.com
                            </p>
                            <ul className="policy-link">
                                <li><Link href="/">Privacy Policy</Link></li>
                                <li>|</li>
                                <li><Link href="/">Term of Service</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer4;