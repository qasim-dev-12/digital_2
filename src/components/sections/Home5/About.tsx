import React from 'react';
import CounterUp from '../../elements/CounterUp';


function About() {
    return (
        <>
        <section className="about-section-four">
            <div className="anim-icons">
            <div className="image-1 tm-gsap-img-parallax"><img src="assets/images/icons/shape-style10.png" alt="Image"/></div>
            <div className="image-2"><img src="assets/images/icons/shape-style59.png" alt="Image"/></div>
            </div>
                <div className="container">
                    <div className="outer-box">
                        <div className="sec-title">
                            <span className="sub-title"><img className="icon-img" src="assets/images/icons/sub-title-shape.png" alt="Imagfe"/>about Us</span>
                            <h2 className="title">We are dedicated to creating high-tech web experiences that beautifully unite <span className="color1">creativity and innovation</span></h2>
                        </div>
                        <div className="bottom-border"></div>
                        <div className="row g-0 align-items-center">
                            <div className="funfact-colmun col-xl-3 col-md-4 col-sm-6 col-xs-12">
                                <div className="funfact-block">
                                    <div className="inner-box">
                                        <div className="count-title">Established for</div>
                                        <div className="count-box">
                                            <span className="count-text"><CounterUp end={10} /></span>Years
                                        </div>
                                    </div>
                                </div>					
                            </div>
                            <div className="funfact-colmun col-xl-3 col-md-4 col-sm-6 col-xs-12">
                                <div className="funfact-block">
                                    <div className="inner-box">
                                        <div className="count-title">Work Across</div>
                                        <div className="count-box">
                                            <span className="count-text"><CounterUp end={12} /></span>Countries
                                        </div>
                                    </div>
                                </div>					
                            </div>
                            <div className="funfact-colmun col-xl-3 col-md-4 col-sm-6 col-xs-12">
                                <div className="funfact-block">
                                    <div className="inner-box">
                                        <div className="count-title">Over</div>
                                        <div className="count-box">
                                            <span className="count-text"><CounterUp end={51} /></span>Projects
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-colmun col-xl-3">
                                <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim .</div>
                            </div>
                        </div>
                    </div>			
                </div>
        </section>
        </>
    )
}
export default About;
