import React from 'react';
import Link from 'next/link'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";



const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation ],
    slidesPerView: 3,
    autoplay: {
        delay: 8500,
        disableOnInteraction: false,
    },
    pagination: {
        clickable: true,
    },
    loop: true,
    breakpoints : {
        320: {
            slidesPerView: 1,
        },
        575: {
            slidesPerView: 2,
        },
        767: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 2,
        },
        1199: {
            slidesPerView: 3,
        },
        1350: {
            slidesPerView: 3,
        },
    }
}

function Service() {
    return (
        <>
            <section className="services-section-two no-border">
                <div className="anim-icons">
                <div className="image-1 tm-gsap-img-parallax"><img src="assets/images/icons/theme-icon33.png" alt="Image"/></div>
                </div>
                <div className="outer-box">
                <div className="container">
                    <div className="sec-title">
                    <div className="row">
                        <div className="col-lg-7">
                        <span className="sub-title wow fadeInUp"><img className="icon-img" src="assets/images/icons/sub-title-shape.png" alt="Image"/> Services</span>
                        <h2 className="title wow fadeInUp">We provide digital <br/>services <span>for You</span></h2>
                        </div>
                        <div className="col-lg-5">
                        <div className="text ps-lg-5 mt-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</div>
                        <Link href="/page-service-details" className="theme-btn btn-style-four ms-lg-5">
                            <span className="btn-title">All Services</span>
                            <span className="dot-box"><span className="dot-item"></span></span>
                        </Link>
                        </div>
                    </div>
                    </div>
                    <div className="swiper services-swiper-one">
                        <Swiper {...swiperOptions} className="swiper-wrapper">
                            <SwiperSlide className="swiper-slide">
                                <div className="service-block-two">
                                    <div className="inner-box">
                                        <div className="content-box">
                                            <div className="icon-box"><img className="icon-img" src="assets/images/icons/theme-icon9.png" alt="Image"/></div>
                                            <h4 className="title"><Link href="/page-service-details">Web Application <br/>Development</Link></h4>
                                            <Link className="btn-link" href="/page-service-details"><i className="icon fa-solid fa-arrow-down-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                            <div className="service-block-two">
                                <div className="inner-box">
                                <div className="content-box">
                                    <div className="icon-box"><img className="icon-img" src="assets/images/icons/theme-icon10.png" alt="Image"/></div>
                                    <h4 className="title"><Link href="/page-service-details">Creative Content <br/>Production</Link></h4>
                                    <Link className="btn-link" href="/page-service-details"><i className="icon fa-solid fa-arrow-down-right"></i></Link>
                                </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                            <div className="service-block-two">
                                <div className="inner-box">
                                <div className="content-box">
                                    <div className="icon-box"><img className="icon-img" src="assets/images/icons/theme-icon11.png" alt="Image"/></div>
                                    <h4 className="title"><Link href="/page-service-details">Project & Product <br/>Consulting </Link></h4>
                                    <Link className="btn-link" href="/page-service-details"><i className="icon fa-solid fa-arrow-down-right"></i></Link>
                                </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                            <div className="service-block-two">
                                <div className="inner-box">
                                <div className="content-box">
                                    <div className="icon-box"><img className="icon-img" src="assets/images/icons/theme-icon9.png" alt="Image"/></div>
                                    <h4 className="title"><Link href="/page-service-details">Web Application <br/>Development</Link></h4>
                                    <Link className="btn-link" href="/page-service-details"><i className="icon fa-solid fa-arrow-down-right"></i></Link>
                                </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                            <div className="service-block-two">
                                <div className="inner-box">
                                <div className="content-box">
                                    <div className="icon-box"><img className="icon-img" src="assets/images/icons/theme-icon10.png" alt="Image"/></div>
                                    <h4 className="title"><Link href="/page-service-details">Creative Content <br/>Production</Link></h4>
                                    <Link className="btn-link" href="/page-service-details"><i className="icon fa-solid fa-arrow-down-right"></i></Link>
                                </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                            <div className="service-block-two">
                                <div className="inner-box">
                                <div className="content-box">
                                    <div className="icon-box"><img className="icon-img" src="assets/images/icons/theme-icon11.png" alt="Image"/></div>
                                    <h4 className="title"><Link href="/page-service-details">Project & Product <br/>Consulting </Link></h4>
                                    <Link className="btn-link" href="/page-service-details"><i className="icon fa-solid fa-arrow-down-right"></i></Link>
                                </div>
                                </div>
                            </div>
                            </SwiperSlide>
                        </Swiper>
                    <div className="swiper__dots"></div>
                    </div>
                </div>
                <div className="bottom-text">
                    <span>Free</span>
                    <div className="text">Let's make something great work together</div>
                    <Link className="btn-link" href="/page-contact">Get Free Quote</Link>
                </div>
                </div>
            </section>
        </>
    )
}
export default Service;
