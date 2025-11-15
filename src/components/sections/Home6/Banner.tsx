import React from 'react';
import Link from 'next/link';

function Banner() {

    return (
        <>
        <section className="banner-section-six">
            <div className="anim-icons">
            <div className="image-1 bounce-y tm-gsap-img-parallax"><img src="assets/images/banner/banner6-2.png" alt="Image"/></div>
            </div>
            <div className="banner-slider">
                <div className="banner-slide">
                    <div className="bg slide-image" style={{backgroundImage: 'url(assets/images/banner/banner6-1.jpg)'}}></div>
                    <div className="outer-box">
                        <div className="content-box">
                            <div className="inner-box">
                            <span className="sub-title"><img className="icon-img" src="assets/images/icons/sub-title-shape.png" alt="Image"/> Engineering a Better</span>
                            <h1 className="title">Innovating <span className="color1">for a Better</span> Future</h1>
                            <div className="btn-box">
                                <Link href="/page-contact" className="theme-btn btn-style-four">
                                <span className="btn-title">Read More</span>
                                <span className="dot-box"><span className="dot-item"></span></span>
                                </Link>
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
