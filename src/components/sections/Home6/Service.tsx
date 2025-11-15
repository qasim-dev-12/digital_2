import React from 'react';
import Link from 'next/link';


function Service() {
    return (
        <>
        <section className="services-section-four style-two overflow-hidden">
            <div className="anim-icons">
                    <div className="image-1 tm-gsap-animate-circle"><img src="assets/images/icons/shape-style23.png" alt="Image"/></div>
                </div>
            <div className="container">
            <div className="sec-title">
                <span className="sub-title"><img className="icon-img" src="assets/images/icons/sub-title-shape.png" alt="Image"/> our features</span>
                <h2 className="title">Together as a cohesive team, we create websites, digital experiences, <span className="color1">and native apps that inspire and connect</span></h2>
            </div>
            </div>
            <div className="outer-box">      
                <div className="container">
                    <div className="row">
                        <div className="service-block-four col-xl-4 col-md-6">
                            <div className="inner-box">
                                <div className="content-box">
                                    <h4 className="title"><Link href="/page-service-details">Brand Identity</Link></h4>
                                    <div className="category">2D & 3D Animation</div>
                                    <div className="icon-box"><img className="icon-img" src="assets/images/icons/theme-icon16.png" alt="Image"/></div>
                                    <div className="text">Proin efficitur, mauris vel condimentum pulvinar, velit orci consectetur</div>
                                    <Link className="btn-link" href="/page-service-details"><i className="icon fa-solid fa-arrow-down-right"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="service-block-four col-xl-4 col-md-6">
                            <div className="inner-box">
                                <div className="content-box">
                                    <h4 className="title"><Link href="/page-service-details">Web Design</Link></h4>
                                    <div className="category">Art Direction</div>
                                    <div className="icon-box"><img className="icon-img" src="assets/images/icons/theme-icon17.png" alt="Image"/></div>
                                    <div className="text">Proin efficitur, mauris vel condimentum pulvinar, velit orci consectetur</div>
                                    <Link className="btn-link" href="/page-service-details"><i className="icon fa-solid fa-arrow-down-right"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="service-block-four col-xl-4 col-md-6">
                            <div className="inner-box">
                                <div className="content-box">
                                    <h4 className="title"><Link href="/page-service-details">Digital Platform</Link></h4>
                                    <div className="category">Product Development</div>
                                    <div className="icon-box"><img className="icon-img" src="assets/images/icons/theme-icon18.png" alt="Image"/></div>
                                    <div className="text">Proin efficitur, mauris vel condimentum pulvinar, velit orci consectetur</div>
                                    <Link className="btn-link" href="/page-service-details"><i className="icon fa-solid fa-arrow-down-right"></i></Link>
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
export default Service;
