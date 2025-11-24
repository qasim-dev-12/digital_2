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
                              <img src="assets/images/resource/04 PPC Services.png" alt="Image" />
                              <img src="assets/images/resource/04 PPC Services.png" alt="Image" />
                            </figure>
                            <div className="icon-box">
                              <img className="icon-img" src="assets/images/icons/theme-icon1.png" alt="icon" />
                            </div>
                          </div>
                          <div className="content-box">
                            <h4 className="title"><Link href="/page-services/google-ads">Google Ads Services</Link></h4>
                            <div className="text">We run high-performing paid campaigns designed to generate instant traffic, quality leads, and measurable ROI.</div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="service-block anim-fade-move" data-fade-from="right" data-delay="0.30">
                        <div className="inner-box">
                          <div className="image-box">
                            <figure className="image">
                              <img src="assets/images/resource/06 Web Development.png" alt="Image" />
                              <img src="assets/images/resource/06 Web Development.png" alt="Image" />
                            </figure>
                            <div className="icon-box">
                              <img className="icon-img" src="assets/images/icons/theme-icon2.png" alt="icon" />
                            </div>
                          </div>
                          <div className="content-box">
                            <h4 className="title"><Link href="/page-services/web-development">Web Design & Development</Link></h4>
                            <div className="text">We design and develop fast, modern, and responsive websites tailored to your brand and optimized for performance.
</div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="service-block anim-fade-move" data-fade-from="left" data-delay="0.45">
                        <div className="inner-box">
                          <div className="image-box">
                            <figure className="image">
                              <img src="assets/images/resource/01 Digital Marketing.png" alt="Image" />
                              <img src="assets/images/resource/01 Digital Marketing.png" alt="Image" />
                            </figure>
                            <div className="icon-box">
                              <img className="icon-img" src="assets/images/icons/theme-icon3.png" alt="icon" />
                            </div>
                          </div>
                          <div className="content-box">
                            <h4 className="title"><Link href="/page-services/digital-marketing">Digital Marketing</Link></h4>
                            <div className="text">We create data-driven strategies that increase brand visibility, improve conversions, and accelerate your business growth.</div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="service-block anim-fade-move" data-fade-from="left" data-delay="0.45">
                        <div className="inner-box">
                          <div className="image-box">
                            <figure className="image">
                              
                              <img src="assets\images\resource\02 Social Media Marketing.png" alt="Image" />
                              <img src="assets\images\resource\02 Social Media Marketing.png" alt="Image" />
                            </figure>
                            <div className="icon-box">
                              <img className="icon-img" src="assets/images/icons/theme-icon3.png" alt="icon" />
                            </div>
                          </div>
                          <div className="content-box">
                            <h4 className="title"><Link href="/page-services/social-media-marketing">Social Media Marketing</Link></h4>
                            <div className="text">We build engaging content and targeted campaigns that grow your audience and convert followers into loyal customers.</div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                     <SwiperSlide className="swiper-slide">
                      <div className="service-block anim-fade-move" data-fade-from="left" data-delay="0.45">
                        <div className="inner-box">
                          <div className="image-box">
                            <figure className="image">
                              <img src="assets/images/resource/03 SEO Services.png" alt="Image" />
                              <img src="assets/images/resource/03 SEO Services.png" alt="Image" />
                            </figure>
                            <div className="icon-box">
                              <img className="icon-img" src="assets/images/icons/theme-icon3.png" alt="icon" />
                            </div>
                          </div>
                          <div className="content-box">
                            <h4 className="title"><Link href="/page-services/seo-services">SEO Services</Link></h4>
                            <div className="text">We optimize your website to rank higher on search engines, attract organic traffic, and improve long-term visibility..</div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                     <SwiperSlide className="swiper-slide">
                      <div className="service-block anim-fade-move" data-fade-from="left" data-delay="0.45">
                        <div className="inner-box">
                          <div className="image-box">
                            <figure className="image">
                              <img src="/assets/images/resource/05 Email Marketing.png" alt="Image" />
                              <img src="/assets/images/resource/05 Email Marketing.png" alt="Image" />
                            </figure>
                            <div className="icon-box">
                              <img className="icon-img" src="assets/images/icons/theme-icon3.png" alt="icon" />
                            </div>
                          </div>
                          <div className="content-box">
                            <h4 className="title"><Link href="/page-services/email-marketing">Email Marketing</Link></h4>
                            <div className="text">We craft personalized email sequences that nurture your audience, boost engagement, and increase repeat sales.</div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>

                     <SwiperSlide className="swiper-slide">
                      <div className="service-block anim-fade-move" data-fade-from="left" data-delay="0.45">
                        <div className="inner-box">
                          <div className="image-box">
                            <figure className="image">
                              <img src="assets/images/resource/07 Mobile App Development.png" alt="Image" />
                              <img src="assets/images/resource/07 Mobile App Development.png" alt="Image" />
                            </figure>
                            <div className="icon-box">
                              <img className="icon-img" src="assets/images/icons/theme-icon3.png" alt="icon" />
                            </div>
                          </div>
                          <div className="content-box">
                            <h4 className="title"><Link href="/page-services/mobile-app-development">Mobile App Development</Link></h4>
                            <div className="text">We create intuitive, high-quality mobile apps that enhance user experience and bring your ideas to life on iOS and Android.</div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
              <div className="swiper-arry mb-40">
                <button className="arry-prev swiper-arry-prev"><i className="fa-solid fa-chevron-left"></i></button>
                <button className="arry-next swiper-arry-next"><i className="fa-solid fa-chevron-right"></i></button>
              </div>
            </div>
            <div className="bottom-text anim-fade-move d-flex gap-2" data-fade-from="left mt-400">
              
              <h4 className='text-center'>Grow your traffic and revenue with targeted digital marketing services</h4>
            
                
             <Link href="https://api.whatsapp.com/send/?phone=971522367120" className='text-center' target="_blank" rel="noopener noreferrer">
             
              <span className='border bg-red-400 border-green ml-10 p-20  '>Whatsapp Now</span>
             </Link> 
           
              
            </div>
           

          </div>
        </section>
        </>
    )
}
export default Service;