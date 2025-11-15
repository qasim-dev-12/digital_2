import React from 'react';
import Link from 'next/link';
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

function Projects() {

    return (
        <>
        <section className="projects-section-two style-three">
            <div className="outer-box">
              <div className="container">
                <div className="sec-title">
                  <div className="row">
                    <div className="col-lg-5">
                      <span className="sub-title wow fadeInUp"><img className="icon-img" src="assets/images/icons/sub-title-shape.png" alt="Image"/> Projects</span>
                      <h2 className="title wow fadeInUp">Our selected <br/><span>projects</span></h2>
                    </div>
                    <div className="col-lg-5 offset-lg-2">
                      <div className="text mb-4">Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</div>
                      <Link href="/page-contact" className="theme-btn btn-style-four">
                        <span className="btn-title">read more</span>
                        <span className="dot-box"><span className="dot-item"></span></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="swiper-arry">
                  <button className="arry-prev swiper-arry-prev"><i className="fa-light fa-angle-left"></i></button>
                  <button className="arry-next swiper-arry-next"><i className="fa-light fa-angle-right"></i></button>
                </div>
              </div>
              <div className="swiper projects-swiper-one">
                <Swiper {...swiperOptions} className="swiper-wrapper">
                  <SwiperSlide className="swiper-slide">
                    <div className="project-block-two">
                      <div className="inner-box">
                        <div className="image-box">
                          <figure className="image">
                            <Link href="/page-project-details">
                              <img src="assets/images/resource/project2-1.jpg" alt="Image"/>
                              <img src="assets/images/resource/project2-1.jpg" alt="Image"/>
                            </Link>
                          </figure>
                        </div>
                        <div className="content-box text-center">
                          <h4 className="title"><Link href="/page-project-details">Mastartery</Link></h4>
                          <div className="text">Design - 2016</div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>       
                  <SwiperSlide className="swiper-slide">
                    <div className="project-block-two">
                      <div className="inner-box">
                        <div className="image-box">
                          <figure className="image">
                            <Link href="/page-project-details">
                              <img src="assets/images/resource/project2-2.jpg" alt="Image"/>
                              <img src="assets/images/resource/project2-2.jpg" alt="Image"/>
                            </Link>
                          </figure>
                        </div>
                        <div className="content-box text-center">
                          <h4 className="title"><Link href="/page-project-details">Roadmap</Link></h4>
                          <div className="text">Design - 2016</div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="project-block-two">
                      <div className="inner-box">
                        <div className="image-box">
                          <figure className="image">
                            <Link href="/page-project-details">
                              <img src="assets/images/resource/project2-1.jpg" alt="Image"/>
                              <img src="assets/images/resource/project2-1.jpg" alt="Image"/>
                            </Link>
                          </figure>
                        </div>
                        <div className="content-box text-center">
                          <h4 className="title"><Link href="/page-project-details">Mastartery</Link></h4>
                          <div className="text">Design - 2016</div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="project-block-two">
                      <div className="inner-box">
                        <div className="image-box">
                          <figure className="image">
                            <Link href="/page-project-details">
                              <img src="assets/images/resource/project2-3.jpg" alt="Image"/>
                              <img src="assets/images/resource/project2-3.jpg" alt="Image"/>
                            </Link>
                          </figure>
                        </div>
                        <div className="content-box text-center">
                          <h4 className="title"><Link href="/page-project-details">Behind Creta UX</Link></h4>
                          <div className="text">Design - 2016</div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="project-block-two">
                      <div className="inner-box">
                        <div className="image-box">
                          <figure className="image">
                            <Link href="/page-project-details">
                              <img src="assets/images/resource/project2-2.jpg" alt="Image"/>
                              <img src="assets/images/resource/project2-2.jpg" alt="Image"/>
                            </Link>
                          </figure>
                        </div>
                        <div className="content-box text-center">
                          <h4 className="title"><Link href="/page-project-details">Roadmap</Link></h4>
                          <div className="text">Design - 2016</div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="project-block-two">
                      <div className="inner-box">
                        <div className="image-box">
                          <figure className="image">
                            <Link href="/page-project-details">
                              <img src="assets/images/resource/project2-3.jpg" alt="Image"/>
                              <img src="assets/images/resource/project2-3.jpg" alt="Image"/>
                            </Link>
                          </figure>
                        </div>
                        <div className="content-box text-center">
                          <h4 className="title"><Link href="/page-project-details">Behind Creta UX</Link></h4>
                          <div className="text">Design - 2016</div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>                      
              </div>
            </div>    
        </section>
        </>
    )
}
export default Projects;
