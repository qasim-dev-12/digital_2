import React from 'react';
import Link from 'next/link';

function Pricing() {

    return (
        <>
            <section className="pricing-section-two bg-transparent">
                <div className="anim-icons">
                    <div className="image-1"><img src="assets/images/icons/shape-style15.png" alt="Image"/></div>
                    
                    <div className="image-3 circleZoom tm-gsap-img-parallax"><img src="assets/images/icons/theme-icon17.png" alt="Image"/></div>
                </div>
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <span className="sub-title wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms"><img className="icon-img" src="assets/images/icons/sub-title-shape.png" alt="Image"/>Price Plan</span>
                        <h2 className="title wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">Our focus is on <br/>excellence, not <span className="color1">excess</span></h2>
                    </div>
                    <div className="pricing-outer">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="pricing-block-three anim-fade-move" data-fade-from="left" data-delay="0.15">
                                    <div className="inner-box">
                                        <div className="shape-image1"><img src="assets/images/icons/theme-icon36.png" alt="Image"/></div>
                                        <h4 className="title">Silver pack</h4>
                                        <div className="price-box">
                                            <h4 className="price"><sup>$</sup>59</h4>
                                            <span className="validaty">/month</span>
                                        </div>
                                        <div className="text">Highly recommended for small teams who seek to upgrade their time</div>
                                        <div className="list-title">What you will get:</div>
                                        <ul className="features">
                                            <li>Schedule meetings as a team</li>
                                            <li>Round-Robin, Fixed Round-Robin</li>
                                            <li>Collective Events</li>
                                            <li>Advanced Routing Forms</li>
                                            <li>Team Workflows</li>
                                        </ul>
                                        <div className="btn-box">
                                            <Link href="/page-contact" className="theme-btn btn-style-one dark-bg hover-dark"><span className="btn-title">Choose Plan</span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="pricing-block-three active anim-fade-move" data-fade-from="left" data-delay="0.25">
                                    <div className="inner-box">
                                        <div className="shape-image1"><img src="assets/images/icons/theme-icon37.png" alt="Image"/></div>
                                        <h4 className="title">Gold pack</h4>
                                        <div className="price-box">
                                            <h4 className="price"><sup>$</sup>89</h4>
                                            <span className="validaty">/month</span>
                                        </div>
                                        <div className="text">Highly recommended for small teams who seek to upgrade their time </div>
                                        <div className="list-title">What you will get:</div>
                                        <ul className="features">
                                            <li>Schedule meetings as a team</li>
                                            <li>Round-Robin, Fixed Round-Robin</li>
                                            <li>Collective Events</li>
                                            <li>Advanced Routing Forms</li>
                                            <li>Team Workflows</li>
                                        </ul>
                                        <div className="btn-box">
                                            <Link href="/page-contact" className="theme-btn btn-style-one dark-bg hover-dark"><span className="btn-title">Choose Plan</span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="pricing-block-three anim-fade-move" data-fade-from="right" data-delay="0.35">
                                    <div className="inner-box">
                                        <div className="shape-image1"><img src="assets/images/icons/theme-icon38.png" alt="Image"/></div>
                                        <h4 className="title">Platinum pack</h4>
                                        <div className="price-box">
                                            <h4 className="price"><sup>$</sup>99</h4>
                                            <span className="validaty">/month</span>
                                        </div>
                                        <div className="text">Highly recommended for small teams who seek to upgrade their time </div>
                                        <div className="list-title">What you will get:</div>
                                        <ul className="features">
                                            <li>Quick and efficient project</li>
                                            <li>Cost-effective solutions tailored</li>
                                            <li>Globally recognized quality</li>
                                            <li>Tailored solutions to fit</li>
                                            <li>Delivering more value for less.</li>
                                        </ul>
                                        <div className="btn-box">
                                            <Link href="/page-contact" className="theme-btn btn-style-one dark-bg hover-dark"><span className="btn-title">Choose Plan</span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>	
                </div>
            </section>
        </>
    )
}
export default Pricing;
