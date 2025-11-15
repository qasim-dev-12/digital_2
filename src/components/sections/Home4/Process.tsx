import React from 'react';
import Link from 'next/link';


function Process() {

    return (
        <>
        <section className="process-section style-two">
            <div className="anim-icons">
                    <div className="image-1"><img src="assets/images/icons/shape-style15.png" alt="Image"/></div>						
                </div>
            <div className="container">
                <div className="outer-box">
                    <div className="row">
                        <div className="process-block col-xl-3 col-md-6">
                            <div className="inner-box">
                                <div className="title-box">
                                    <div className="text">Step 01</div>
                                </div>
                                <div className="content-box">
                                    <div className="icon-box"><img className="icon-img" src="assets/images/icons/theme-icon5.png" alt="Image"/></div>
                                    <h4 className="title"><Link href="/page-project-details">Tailored Solutions</Link></h4>
                                    <div className="text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nonummy.</div>
                                    <div className="hover-lines"></div>
                                </div>
                            </div>
                        </div>
                        <div className="process-block col-xl-3 col-md-6">
                            <div className="inner-box">
                            <div className="title-box">
                                <div className="text">Step 02</div>
                            </div>
                            <div className="content-box">
                                <div className="icon-box"><img className="icon-img" src="assets/images/icons/theme-icon6.png" alt="Image"/></div>
                                <h4 className="title"><Link href="/page-project-details">Expert Team</Link></h4>
                                <div className="text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nonummy.</div>
                                <div className="hover-lines"></div>
                            </div>
                            </div>
                        </div>
                        <div className="process-block col-xl-3 col-md-6">
                            <div className="inner-box">
                            <div className="title-box">
                                <div className="text">Step 03</div>
                            </div>
                            <div className="content-box">
                                <div className="icon-box"><img className="icon-img" src="assets/images/icons/theme-icon7.png" alt="Image"/></div>
                                <h4 className="title"><Link href="/page-project-details">Driven Insights</Link></h4>
                                <div className="text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nonummy.</div>
                                <div className="hover-lines"></div>
                            </div>
                            </div>
                        </div>
                        <div className="process-block col-xl-3 col-md-6">
                            <div className="inner-box">
                            <div className="title-box">
                                <div className="text">Step 04</div>
                            </div>
                            <div className="content-box">
                                <div className="icon-box"><img className="icon-img" src="assets/images/icons/theme-icon8.png" alt="Image"/></div>
                                <h4 className="title"><Link href="/page-project-details">Ongoing Support</Link></h4>
                                <div className="text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nonummy.</div>
                                <div className="hover-lines"></div>
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
export default Process;
