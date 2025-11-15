import React from 'react';
import Link from 'next/link';

function About() {
    return (
        <>
            <section className="about-section-two">
                <div className="container">
                    <div className="row g-5">
                        <div className="image-column col-lg-6">
                            <div className="inner-column">
                                <div className="image-box">
                                    <figure className="image-1">
                                        <img src="assets/images/resource/about1-2.jpg" alt="About Us" />
                                    </figure>
                                    <div className="info-circle">
                                        <div className="inner">
                                            <div className="text-circle-box">
                                                <svg className="shape-circle1 animation__rotateY" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 200 200">
                                                    <defs>
                                                        <path d="M0, 100a100, 100 0 1, 0 200, 0a100, 100 0 1, 0 -200, 0" id="txt-path"></path>
                                                    </defs>
                                                    <circle cx="160" cy="100" r="80" fill="none"></circle>
                                                    <text>
                                                        <textPath startOffset="0" xlinkHref="#txt-path">
                                                            &nbsp;&nbsp;•&nbsp; about us &nbsp;• about us &nbsp;• about us &nbsp;• about us
                                                        </textPath>
                                                    </text>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="content-column col-lg-6">
                            <div className="inner-column">
                                <div className="content-box">
                                    <div className="sec-title mb-100">
                                        <span className="sub-title wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                                            <img className="icon-img" src="assets/images/icons/sub-title-shape.png" alt="Sub Title Shape" />
                                            ABOUT US
                                        </span>
                                        <h2 className="title wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                                            We deliver innovative ideas to elevate your digital agency <span className="color1">and sharpen your brand</span>
                                        </h2>
                                        <p className="text wow fadeInUp mb-40" data-wow-delay="300ms" data-wow-duration="1500ms">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
                                        </p>
                                        <div className="btn-box">
                                            <Link href="/page-contact" className="theme-btn btn-style-four">
                                                <span className="btn-title">Read More</span>
                                                <span className="dot-box"><span className="dot-item"></span></span>
                                            </Link>
                                        </div>
                                    </div>
                                    <figure className="image-2">
                                        <img src="assets/images/resource/about1-3.jpg" alt="About Us" />
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;
