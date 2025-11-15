import React from 'react';
import Link from 'next/link';
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
    navigation:{
        clickable: true,
        prevEl: ".swiper-arry-prev",
        nextEl: ".swiper-arry-next",
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
        <section className="services-section-six">
            <div className="scroll-text">
                <div className="title-stroke-text text2 fadeInUpBig">Our<span> Services</span></div>
            </div>
            <div className="outer-box">
                <div className="anim-icons">
                    <div className="image-1 circleZoom tm-gsap-img-parallax"><img src="assets/images/icons/shape-style36.png" alt="Image" /></div>
                </div>
                <div className="container">
                    <div className="sec-title">
                        <div className="row align-items-center">
                            <div className="col-lg-7 col-sm-9">
                                <span className="sub-title wow fadeInUp"><img className="icon-img" src="assets/images/icons/sub-title-shape.png" alt="Image" /> Services</span>
                                <h2 className="title wow fadeInUp">
                                    We Provide Digital <br />
                                    Services <span>for You</span>
                                </h2>
                            </div>
                            <div className="col-lg-5 col-sm-3">
                                <div className="swiper-arry">
                                    <button className="arry-prev swiper-arry-prev"><i className="fa-solid fa-chevron-left"></i></button>
                                    <button className="arry-next swiper-arry-next"><i className="fa-solid fa-chevron-right"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-outer services-swiper-one">
                        <Swiper {...swiperOptions} className="swiper-wrapper">
                            <SwiperSlide className="swiper-slide">
                                <div className="service-block-six">
                                    <div className="inner-column">
                                        <div className="icon-box">
                                            <img className="icon-img" src="assets/images/icons/theme-icon23.png" alt="Image" />
                                        </div>
                                        <div className="content-box">
                                            <h4 className="title">
                                                <Link href="/page-service-details">
                                                    Digital Marketing <br />
                                                    Strategies
                                                </Link>
                                            </h4>
                                        </div>
                                        <div className="image-box">
                                            <figure className="image">
                                                <img className="icon-img" src="assets/images/resource/service4-1.jpg" alt="Image"/>
                                                <img className="icon-img" src="assets/images/resource/service4-1.jpg" alt="Image"/>
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="service-block-six">
                                    <div className="inner-column">
                                        <div className="icon-box">
                                            <img className="icon-img" src="assets/images/icons/theme-icon24.png" alt="Image" />
                                        </div>
                                        <div className="content-box">
                                            <h4 className="title">
                                                <Link href="/page-service-details">
                                                    Web Design and <br />
                                                    Development
                                                </Link>
                                            </h4>
                                        </div>
                                        <div className="image-box">
                                            <figure className="image">
                                                <img className="icon-img" src="assets/images/resource/service4-2.jpg" alt="Image" />
                                                <img className="icon-img" src="assets/images/resource/service4-2.jpg" alt="Image" />
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="service-block-six">
                                    <div className="inner-column">
                                        <div className="icon-box">
                                            <img className="icon-img" src="assets/images/icons/theme-icon25.png" alt="Image" />
                                        </div>
                                        <div className="content-box">
                                            <h4 className="title">
                                                <Link href="/page-service-details">
                                                    Creative Design and <br />
                                                    Development
                                                </Link>
                                            </h4>
                                        </div>
                                        <div className="image-box">
                                            <figure className="image">
                                                <img className="icon-img" src="assets/images/resource/service4-3.jpg" alt="Image" />
                                                <img className="icon-img" src="assets/images/resource/service4-3.jpg" alt="Image" />
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="service-block-six">
                                    <div className="inner-column">
                                        <div className="icon-box">
                                            <img className="icon-img" src="assets/images/icons/theme-icon23.png" alt="Image" />
                                        </div>
                                        <div className="content-box">
                                            <h4 className="title">
                                                <Link href="/page-service-details">
                                                    Digital Marketing <br />
                                                    Strategies
                                                </Link>
                                            </h4>
                                        </div>
                                        <div className="image-box">
                                            <figure className="image">
                                                <img className="icon-img" src="assets/images/resource/service4-1.jpg" alt="Image" />
                                                <img className="icon-img" src="assets/images/resource/service4-1.jpg" alt="Image" />
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="service-block-six">
                                    <div className="inner-column">
                                        <div className="icon-box">
                                            <img className="icon-img" src="assets/images/icons/theme-icon24.png" alt="Image" />
                                        </div>
                                        <div className="content-box">
                                            <h4 className="title">
                                                <Link href="/page-service-details">
                                                    Web Design and <br />
                                                    Development
                                                </Link>
                                            </h4>
                                        </div>
                                        <div className="image-box">
                                            <figure className="image">
                                                <img className="icon-img" src="assets/images/resource/service4-2.jpg" alt="Image" />
                                                <img className="icon-img" src="assets/images/resource/service4-2.jpg" alt="Image" />
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="service-block-six">
                                    <div className="inner-column">
                                        <div className="icon-box">
                                            <img className="icon-img" src="assets/images/icons/theme-icon25.png" alt="Image" />
                                        </div>
                                        <div className="content-box">
                                            <h4 className="title">
                                                <Link href="/page-service-details">
                                                    Creative Design and <br />
                                                    Development
                                                </Link>
                                            </h4>
                                        </div>
                                        <div className="image-box">
                                            <figure className="image">
                                                <img className="icon-img" src="assets/images/resource/service4-3.jpg" alt="Image" />
                                                <img className="icon-img" src="assets/images/resource/service4-3.jpg" alt="Image" />
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="bottom-text">
                        <span>Free</span>
                        <div className="text">Let's make something great work together</div>
                        <Link className="btn-link" href="/page-contact">Get Free Quote</Link>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default Service;
