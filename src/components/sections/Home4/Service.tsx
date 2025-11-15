import React from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation ],
    slidesPerView: 4,
    autoplay: {
        delay: 8500,
        disableOnInteraction: false,
    },
    pagination:{
        clickable: true,
    },
    loop: true,
    breakpoints : {
        320: {
            slidesPerView: 1,
        },
        575: {
            slidesPerView: 1,
        },
        767: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
        1199: {
            slidesPerView: 4,
        },
        1350: {
            slidesPerView: 4,
        },
    }
}

function Service() {
    return (
        <>
        <section className="services-section-five">
            <div className="outer-box">
            <div className="anim-icons">
                <div className="image-1 tm-gsap-animate-circle"><img src="assets/images/icons/shape-style32.png" alt="Image"/></div>
            </div>
            <div className="container">
                <div className="sec-title">
                <div className="row">
                    <div className="col-lg-7">
                    <span className="sub-title wow fadeInUp"><img className="icon-img" src="assets/images/icons/sub-title-shape.png" alt="Image"/> Services</span>
                    <h2 className="title wow fadeInUp">We Provide Digital <br/>Services <img src="assets/images/icons/title-image.png" alt="Image"/> <span>for You</span></h2>
                    </div>
                    <div className="col-lg-5">
                    <div className="text ms-lg-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</div>
                    <div className="btn-box">
                        <Link href="/page-services" className="theme-btn btn-style-four ms-lg-5">
                        <span className="btn-title">All Services</span>
                        <span className="dot-box"><span className="dot-item"></span></span>
                        </Link>
                    </div>              
                    </div>
                </div>
                </div>
                <div className="carousel-outer">
                <div className="swiper services-swiper-two">
                    <Swiper {...swiperOptions} className="swiper-wrapper">
                    <SwiperSlide className="swiper-slide">
                        <div className="service-block-five">
                        <div className="inner-column">
                            <div className="image-box">
                            <div className="inner-box">
                                <figure className="image"><img className="icon-img" src="assets/images/resource/service3-1.jpg" alt="Image"/></figure>
                                <div className="icon-box"><img className="icon-img" src="assets/images/icons/theme-icon19.png" alt="Image"/></div>
                            </div>
                            </div>
                            <div className="content-box">
                            <h4 className="title"><Link href="/page-service-details">Digital Marketing Strategies</Link></h4>
                            <Link className="btn-link" href="/page-service-details"><i className="icon fa-solid fa-arrow-down-right"></i></Link>
                            </div>
                        </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="service-block-five">
                        <div className="inner-column">
                            <div className="image-box">
                            <div className="inner-box">
                                <figure className="image"><img className="icon-img" src="assets/images/resource/service3-2.jpg" alt="Image"/></figure>
                                <div className="icon-box"><img className="icon-img" src="assets/images/icons/theme-icon20.png" alt="Image"/></div>
                            </div>
                            </div>
                            <div className="content-box">
                            <h4 className="title"><Link href="/page-service-details">Web Design and Development</Link></h4>
                            <Link className="btn-link" href="/page-service-details"><i className="icon fa-solid fa-arrow-down-right"></i></Link>
                            </div>
                        </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="service-block-five">
                        <div className="inner-column">
                            <div className="image-box">
                            <div className="inner-box">
                                <figure className="image"><img className="icon-img" src="assets/images/resource/service3-3.jpg" alt="Image"/></figure>
                                <div className="icon-box"><img className="icon-img" src="assets/images/icons/theme-icon21.png" alt="Image"/></div>
                            </div>
                            </div>
                            <div className="content-box">
                            <h4 className="title"><Link href="/page-service-details">Creative Design and Development</Link></h4>
                            <Link className="btn-link" href="/page-service-details"><i className="icon fa-solid fa-arrow-down-right"></i></Link>
                            </div>
                        </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="service-block-five">
                        <div className="inner-column">
                            <div className="image-box">
                            <div className="inner-box">
                                <figure className="image"><img className="icon-img" src="assets/images/resource/service3-4.jpg" alt="Image"/></figure>
                                <div className="icon-box"><img className="icon-img" src="assets/images/icons/theme-icon22.png" alt="Image"/></div>
                            </div>
                            </div>
                            <div className="content-box">
                            <h4 className="title"><Link href="/page-service-details">Digital Marketing Strategies</Link></h4>
                            <Link className="btn-link" href="/page-service-details"><i className="icon fa-solid fa-arrow-down-right"></i></Link>
                            </div>
                        </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="service-block-five">
                        <div className="inner-column">
                            <div className="image-box">
                            <div className="inner-box">
                                <figure className="image"><img className="icon-img" src="assets/images/resource/service3-2.jpg" alt="Image"/></figure>
                                <div className="icon-box"><img className="icon-img" src="assets/images/icons/theme-icon20.png" alt="Image"/></div>
                            </div>
                            </div>
                            <div className="content-box">
                            <h4 className="title"><Link href="/page-service-details">Web Design and Development</Link></h4>
                            <Link className="btn-link" href="/page-service-details"><i className="icon fa-solid fa-arrow-down-right"></i></Link>
                            </div>
                        </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="service-block-five">
                        <div className="inner-column">
                            <div className="image-box">
                            <div className="inner-box">
                                <figure className="image"><img className="icon-img" src="assets/images/resource/service3-3.jpg" alt="Image"/></figure>
                                <div className="icon-box"><img className="icon-img" src="assets/images/icons/theme-icon21.png" alt="Image"/></div>
                            </div>
                            </div>
                            <div className="content-box">
                            <h4 className="title"><Link href="/page-service-details">Creative Design and Development</Link></h4>
                            <Link className="btn-link" href="/page-service-details"><i className="icon fa-solid fa-arrow-down-right"></i></Link>
                            </div>
                        </div>
                        </div>
                    </SwiperSlide>
                    </Swiper>
                    <div className="swiper__dots"></div>
                </div>
                </div>
            </div>
            </div>
        </section>
        </>
    )
}
export default Service;
