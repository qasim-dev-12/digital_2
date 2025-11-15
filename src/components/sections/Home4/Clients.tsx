import React from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const swiperOptions = {
    modules: [Autoplay ],
    slidesPerView: 5,
    autoplay: {
        delay: 8500,
        disableOnInteraction: false,
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
            slidesPerView: 3,
        },
        991: {
            slidesPerView: 4,
        },
        1199: {
            slidesPerView: 5,
        },
        1350: {
            slidesPerView: 5,
        },
    }
}

function Clients() {
    return (
        <>
            <section className="clients-section-three">
                <div className="container">      
                    <div className="outer-box">
                        <div className="sec-title">
                        <h6 className="text"><span>Trusted by <span className="color1">25k+</span> businesses</span></h6>
                        </div>
                        <div className="swiper clients-swiper">
                        <Swiper {...swiperOptions} className="swiper-wrapper">
                            <SwiperSlide className="swiper-slide">
                                <div className="client-block-three">
                                    <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><Link href="#"><img src="assets/images/resource/client4-1.png" alt="Image"/></Link></figure>
                                    </div>
                                    </div>
                                </div>
                            </SwiperSlide>          
                            <SwiperSlide className="swiper-slide">
                                <div className="client-block-three">
                                    <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><Link href="#"><img src="assets/images/resource/client4-2.png" alt="Image"/></Link></figure>
                                    </div>
                                    </div>
                                </div>
                            </SwiperSlide>          
                            <SwiperSlide className="swiper-slide">
                                <div className="client-block-three">
                                    <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><Link href="#"><img src="assets/images/resource/client4-3.png" alt="Image"/></Link></figure>
                                    </div>
                                    </div>
                                </div>
                            </SwiperSlide>          
                            <SwiperSlide className="swiper-slide">
                                <div className="client-block-three">
                                    <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><Link href="#"><img src="assets/images/resource/client4-4.png" alt="Image"/></Link></figure>
                                    </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="client-block-three">
                                    <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><Link href="#"><img src="assets/images/resource/client4-5.png" alt="Image"/></Link></figure>
                                    </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="client-block-three">
                                    <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><Link href="#"><img src="assets/images/resource/client4-1.png" alt="Image"/></Link></figure>
                                    </div>
                                    </div>
                                </div>
                            </SwiperSlide>          
                            <SwiperSlide className="swiper-slide">
                                <div className="client-block-three">
                                    <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><Link href="#"><img src="assets/images/resource/client4-2.png" alt="Image"/></Link></figure>
                                    </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Clients;
