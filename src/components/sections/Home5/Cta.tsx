import React from 'react'
import Link from 'next/link';
import CounterUp from '../../elements/CounterUp';


function Teams() {

    return (
        <>
        <section className="cta-section">
            <div className="anim-icons">
                    <div className="image-1"><img src="assets/images/icons/section-bg-shape10.png" alt="Image"/></div>
                </div>
            <div className="outer-box">
                <div className="container">
                    <div className="row">
                        <div className="content-column col-xl-8 col-md-12">
                            <div className="inner-colmun">
                            <div className="title-box">
                                <h2 className="title">have <span className="color1">a project?</span><br/>let’s talk</h2>
                                <div className="text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nonummy.Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nonummy.</div>
                            </div>
                            <div className="counter-box">
                                <div className="count-outer">
                                <div className="count-box">
                                    <span className="count-text"><CounterUp end={99} /></span>%
                                </div>
                                <div className="count-title">client satisfaction</div>
                                </div>
                                <div className="count-outer">
                                <div className="count-box">
                                    <span className="count-text"><CounterUp end={67} /></span>%
                                </div>
                                <div className="count-title">Product Design</div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="image-column col-xl-4 col-md-12">
                            <div className="inner-colmun">
                            <div className="image-box circleZoom tm-gsap-img-parallax">
                                <img src="assets/images/icons/shape-style14.png" alt="Image"/>
                            </div>
                            <Link href="/page-contact" className="link-btn">
                                <span className="btn-title">Contact with us</span>
                                <img className="icon" src="assets/images/icons/arrow-border.png" alt="Image"/>
                            </Link>
                            </div>
                        </div>
                    </div>						
                </div>
            </div>
        </section>
        </>
    )
}
export default Teams;
