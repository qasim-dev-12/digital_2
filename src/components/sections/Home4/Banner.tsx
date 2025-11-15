import React, { useEffect } from 'react';
import Link from 'next/link';


function Banner() {
    return (
        <>
            <section className="banner-section-four">
                <div className="banner-slider">
                <div className="banner-slide">
                    <div className="anim-icons">
                    <img className="shape-image1 tm-gsap-animate-circle" src="assets/images/icons/shape-style18.png" alt="Image"/>
                    <img className="shape-image2 tm-gsap-animate-circle" src="assets/images/icons/shape-style19.png" alt="Image"/>
                    <img className="shape-image3" src="assets/images/icons/section-bg-shape9.png" alt="Image"/>
                    </div>
                    <div className="container">
                    <div className="outer-box">
                        <div className="row">
                        <div className="content-box col-xl-6 col-lg-7">
                            <div className="inner-box">
                            <span className="sub-title"><img className="icon-img" src="assets/images/icons/sub-title-shape.png" alt="Image"/> Engineering a Better</span>
                            <h2 className="title">Innovating <span className="color1">for a Better</span> Future</h2>
                            <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                            <div className="btn-box">
                                <Link href="#" className="theme-btn btn-style-four">
                                <span className="btn-title">read more</span>
                                <span className="dot-box"><span className="dot-item"></span></span>
                                </Link>
                            </div>
                            </div>
                        </div>
                        <div className="image-clumn col-xl-4 col-lg-5">
                            <div className="inner-column">
                            <div className="info-circle">
                                <div className="inner">
                                    <div className="text-circle-box">
                                        <svg
                                        className="shape-circle1 animation__rotateY"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        version="1.1"
                                        viewBox="0 0 200 200"
                                        >
                                        <defs>
                                            <path
                                            d="M0,100a100,100 0 1,0 200,0a100,100 0 1,0 -200,0"
                                            id="txt-path"
                                            ></path>
                                        </defs>
                                        <circle cx="160" cy="100" r="80" fill="none"></circle>
                                        <text>
                                            <textPath startOffset="0" xlinkHref="#txt-path">
                                            &nbsp;&nbsp;•&nbsp; My Projects &nbsp;• My Projects
                                            </textPath>
                                        </text>
                                        </svg>
                                    </div>
                                    <i className="icon fa-regular fa-arrow-down-long"></i>
                                    </div>

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
export default Banner;
