import React from 'react';
import Link from 'next/link';


function Process() {
    return (
        <>
        <section className="process-section style-three">
            <div className="anim-icons">
                    <div className="image-4"><img src="assets/images/icons/section-bg-shape12.png" alt="Image"/></div>
                    <div className="image-5 tm-gsap-img-parallax"><img src="assets/images/icons/shape-style37.png" alt="Image"/></div>
                </div>
            <div className="sec-title text-center">
            <span className="sub-title"><img className="icon-img" src="assets/images/icons/sub-title-shape.png" alt="Image"/> How It Work</span>
            <h2 className="title">Our Standard Design <br/><span className="color1">Thinking Process</span></h2>
            </div>
            <div className="container">
                <div className="outer-box">
                    <div className="row">
                        <div className="col-xl-3 col-md-6">
                            <div className="process-block-two">
                                <div className="inner-box">
                                    <div className="title-box">
                                        <div className="text text-center">Step 01</div>
                                    </div>
                                    <div className="content-box">
                                        <div className="icon-box"><i className="icon flaticon-notes"></i></div>
                                        <div className="content-inner">
                                            <h4 className="title"><Link href="#">User <br/>Research</Link></h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                            <div className="process-block-two">
                            <div className="inner-box">
                                <div className="title-box">
                                <div className="text text-center">Step 02</div>
                                </div>
                                <div className="content-box">
                                <div className="icon-box"><i className="icon flaticon-technical-support"></i></div>                  
                                <div className="content-inner">
                                    <h4 className="title"><Link href="#">Define <br/>Problems</Link></h4>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                            <div className="process-block-two">
                            <div className="inner-box">
                                <div className="title-box">
                                <div className="text text-center">Step 03</div>
                                </div>
                                <div className="content-box">
                                <div className="icon-box"><i className="icon flaticon-database"></i></div>
                                <div className="content-inner">
                                    <h4 className="title"><Link href="#">Design and <br/>Prototype</Link></h4>
                                </div>
                                </div>
                            </div>
                            </div>            
                        </div>
                        <div className="col-xl-3 col-md-6">
                            <div className="process-block-two">
                            <div className="inner-box">
                                <div className="title-box">
                                <div className="text text-center">Step 04</div>
                                </div>
                                <div className="content-box">
                                <div className="icon-box"><i className="icon flaticon-digital-marketing"></i></div>
                                <div className="content-inner">
                                    <h4 className="title"><Link href="#">Evaluation & <br/>Testing</Link></h4>
                                </div>
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
export default Process;
