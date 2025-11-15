import React from 'react'
import Link from 'next/link'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

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
        <section className="services-section">
          <div className="anim-icons">
            <div className="image-1"><img src="assets/images/icons/shape-style15.png" alt="" /></div>
          </div>
          <div className="container">
            <div className="sec-title">
              <span className="sub-title"><img className="icon-img" src="assets/images/icons/sub-title-shape.png" alt="" />Services</span>
              <h2 className="title title-image anim-text-flip-move">
                We provide digital <br />services <span className="color1"><img className="shape-image-1" src="assets/images/icons/title-image.png" alt="" /> for you</span>
              </h2>
            </div>
            <div className="outer-box p-0">
              <div className="swiper-outer">
                <div className="swiper services-swiper">
                  <Swiper {...swiperOptions} className="swiper-wrapper">
                    <SwiperSlide className="swiper-slide">
                      <div className="service-block anim-fade-move" data-fade-from="right" data-delay="0.15">
                        <div className="inner-box">
                          <div className="image-box">
                            <figure className="image">
                              <img src="assets/images/resource/service1-1.jpg" alt="Image" />
                              <img src="assets/images/resource/service1-1.jpg" alt="Image" />
                            </figure>
                            <div className="icon-box">
                              <img className="icon-img" src="assets/images/icons/theme-icon1.png" alt="icon" />
                            </div>
                          </div>
                          <div className="content-box">
                            <h4 className="title"><Link href="/page-service-details">Brand Identity Design</Link></h4>
                            <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="service-block anim-fade-move" data-fade-from="right" data-delay="0.30">
                        <div className="inner-box">
                          <div className="image-box">
                            <figure className="image">
                              <img src="assets/images/resource/service1-2.jpg" alt="Image" />
                              <img src="assets/images/resource/service1-2.jpg" alt="Image" />
                            </figure>
                            <div className="icon-box">
                              <img className="icon-img" src="assets/images/icons/theme-icon2.png" alt="icon" />
                            </div>
                          </div>
                          <div className="content-box">
                            <h4 className="title"><Link href="/page-service-details">Web Design & Development</Link></h4>
                            <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="service-block anim-fade-move" data-fade-from="left" data-delay="0.45">
                        <div className="inner-box">
                          <div className="image-box">
                            <figure className="image">
                              <img src="assets/images/resource/service1-3.jpg" alt="Image" />
                              <img src="assets/images/resource/service1-3.jpg" alt="Image" />
                            </figure>
                            <div className="icon-box">
                              <img className="icon-img" src="assets/images/icons/theme-icon3.png" alt="icon" />
                            </div>
                          </div>
                          <div className="content-box">
                            <h4 className="title"><Link href="/page-service-details">Digital Marketing</Link></h4>
                            <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="service-block anim-fade-move" data-fade-from="left" data-delay="0.45">
                        <div className="inner-box">
                          <div className="image-box">
                            <figure className="image">
                              <img src="assets/images/resource/service1-3.jpg" alt="Image" />
                              <img src="assets/images/resource/service1-3.jpg" alt="Image" />
                            </figure>
                            <div className="icon-box">
                              <img className="icon-img" src="assets/images/icons/theme-icon3.png" alt="icon" />
                            </div>
                          </div>
                          <div className="content-box">
                            <h4 className="title"><Link href="/page-service-details">Digital Marketing</Link></h4>
                            <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
              <div className="swiper-arry">
                <button className="arry-prev swiper-arry-prev"><i className="fa-solid fa-chevron-left"></i></button>
                <button className="arry-next swiper-arry-next"><i className="fa-solid fa-chevron-right"></i></button>
              </div>
            </div>
            <div className="bottom-text anim-fade-move" data-fade-from="left">
              <span>call</span>
              <div className="text">Let's make something great work together</div>
              <Link className="btn-link" href="page-contact">Get Free Quote</Link>
            </div>
          </div>
        </section>
        </>
    )
}
export default Service;