import Link from 'next/link'
import React from 'react';


 function Banner() {
    return (
        <>
        <section className="banner-section-three">
            <div className="banner-slider">
                <div className="banner-slide">
                    <div className="anim-icons">
                        <img className="image-1" src="assets/images/icons/shape-style17.png" alt="Image"/>
                        <img className="image-2" src="assets/images/icons/shape-style27.png" alt="Image"/>
                        <img className="image-3" src="assets/images/icons/shape-style28.png" alt="Image"/>
                    </div>
                    <div className="outer-box">
                        <div className="row">
                            <div className="content-box col-xl-7 col-lg-8">
                                <div className="inner-box">
                                    <h1 className="title animate-3">Your ultimate <br/><span>Digital agency</span></h1>
                                    <div className="text-box">
                                    <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</div>
                                    <Link href="/page-about" className="theme-btn btn-style-four">
                                        <span className="btn-title">Read More</span>
                                        <span className="dot-box"><span className="dot-item"></span></span>
                                    </Link>
                                    <div className="icon-shape"><img src="assets/images/icons/arrow-down.png" alt="Image"/></div>
                                    </div>
                                </div>
                            </div>
                            <div className="image-clumn col-xl-5 col-lg-4">
                                <div className="inner-column">
                                    <figure className="image tm-gsap-animate-circle"><img src="assets/images/banner/banner3-2.png" alt="Image"/></figure>
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
export default Banner;
