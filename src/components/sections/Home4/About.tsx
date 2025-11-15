import React from 'react';
import Link from 'next/link';


function About() {

    return (
        <>
        <section className="about-section-three">
            <div className="anim-icons">
                    <div className="image-1 "><img src="assets/images/icons/section-bg-shape6.png" alt="Image"/></div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="image-column col-lg-6">
                            <div className="inner-column">
                                <figure className="image-one">
                                    <img src="assets/images/resource/about3-1.png" alt="image"/>
                                </figure>
                            </div>
                        </div>
                        <div className="content-column col-lg-6">
                            <div className="inner-column">
                                <div className="sec-title">
                                    <span className="sub-title"><img className="icon-img" src="assets/images/icons/sub-title-shape.png" alt="Image"/>Our strategy</span>
                                    <h2 className="title">Redefining the World for <span className="color1">a Better Tomorrow</span></h2>
                                    <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim .</p>							
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="info-box">
                                            <div className="inner">
                                                <div className="icon-box">
                                                    <i className="icon flaticon-mission"></i>
                                                </div>											
                                                <h4>Company Mission</h4>
                                                <div className="text">Our mission is to empower busi with cutting-edge digital solu</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="info-box">
                                            <div className="inner">
                                                <div className="icon-box">
                                                    <i className="icon flaticon-target-1"></i>
                                                </div>											
                                                <h4>Company Vision & Goals</h4>
                                                <div className="text">We are dedicated to crafting digi experiences that seamlessly</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="btn-box">
                                    <Link href="#" className="btn-link">Contact With Us <i className="icon fa fa-arrow-up-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
        </>
    )
}
export default About;
