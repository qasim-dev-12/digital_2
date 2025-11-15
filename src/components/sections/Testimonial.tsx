import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation ],
    slidesPerView: 1,
    autoplay: {
        delay: 8500,
        disableOnInteraction: false,
    },
    navigation:{
        clickable: true,
        prevEl: ".testimonial-arry-prev",
        nextEl: ".testimonial-arry-next",
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
            slidesPerView: 1,
        },
        991: {
            slidesPerView: 1,
        },
        1199: {
            slidesPerView: 1,
        },
        1350: {
            slidesPerView: 1,
        },
    }
}

function Testimonial() {
    return (
        <>
        <section className="testimonial-section pt-120 pb-120">
          <div className="container">
            <div className="sec-title">
              <div className="row">
                <div className="col-xxl-6 col-xl-7 col-lg-8">
                  <span className="sub-title"><img className="icon-img" src="assets/images/icons/sub-title-shape.png" alt="" />Our Testimonials</span>
                  <h2 className="title">Hear what others say <br />about <span className="color1">partnering with us</span></h2>
                </div>
                <div className="col-xxl-5 col-xl-5 col-lg-4 offset-xxl-1">
                  <p className="text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="review-box">
                  <div className="bg-shape1"><img src="assets/images/icons/shape-style6.png" alt="image" /></div>
                  <div className="title">4.8</div>
                  <div className="rating">
                    <i className="icon fa-solid fa-star"></i>
                    <i className="icon fa-solid fa-star"></i>
                    <i className="icon fa-solid fa-star"></i>
                    <i className="icon fa-solid fa-star"></i>
                    <i className="icon fa-solid fa-star"></i>
                  </div>
                  <div className="text">Eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="swiper testimonial-swiper-one">
                  <Swiper {...swiperOptions} className="swiper-wrapper pb-0">
                    <SwiperSlide className="swiper-slide">
                      <div className="testimonial-block">
                        <div className="inner-box">
                          <div className="quote-icon">
                            <svg width="272" height="272" viewBox="0 0 272 272" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M56.0827 163.548C50.5004 177.635 41.6768 191.58 29.8606 205.002C26.1003 209.273 25.623 215.37 28.6735 220.172C31.0227 223.866 34.9738 225.97 39.1574 225.97C40.3361 225.97 41.5357 225.804 42.7185 225.46C67.762 218.142 126.179 192.153 127.748 109.078C128.354 77 104.891 49.4415 74.3404 46.337C57.5021 44.6519 40.6557 50.1221 28.1714 61.4071C15.6704 72.7044 8.49854 88.8328 8.49854 105.663C8.49854 133.74 28.4287 158.294 56.0827 163.548ZM39.5683 74.02C47.508 66.844 57.5021 63.0215 68.0982 63.0215C69.5965 63.0215 71.1072 63.0962 72.6221 63.2538C94.4407 65.466 111.188 85.4543 110.748 108.755C109.664 166.238 78.5406 192.115 52.7666 203.691C60.9221 192.659 67.3304 181.312 71.8875 169.811C73.6638 165.333 73.3692 160.327 71.0823 156.077C68.6875 151.62 64.4167 148.457 59.374 147.399C39.7427 143.294 25.4985 125.738 25.4985 105.663C25.4985 93.6348 30.6284 82.1009 39.5683 74.02Z"
                                fill="white"
                                fillOpacity="0.05"
                              />
                              <path
                                d="M164.42 220.173C166.769 223.866 170.721 225.971 174.904 225.971C176.083 225.971 177.278 225.805 178.465 225.46C203.509 218.143 261.921 192.153 263.49 109.079C264.088 77.0007 240.63 49.442 210.075 46.3376C193.216 44.6235 176.398 50.1186 163.914 61.4077C151.413 72.705 144.241 88.8334 144.241 105.663C144.241 133.741 164.171 158.294 191.821 163.549C186.235 177.648 177.411 191.593 165.599 205.007C161.839 209.282 161.366 215.375 164.42 220.173ZM207.626 169.82C209.402 165.342 209.112 160.336 206.829 156.086C204.43 151.625 200.163 148.462 195.117 147.4C175.485 143.295 161.241 125.739 161.241 105.663C161.241 93.6312 166.371 82.1015 175.311 74.0206C183.246 66.8446 193.241 63.0221 203.841 63.0221C205.335 63.0221 206.846 63.0968 208.365 63.2545C230.179 65.4666 246.93 85.4549 246.49 108.755C245.411 166.242 214.283 192.116 188.509 203.691C196.661 192.668 203.06 181.321 207.626 169.82Z"
                                fill="white"
                                fillOpacity="0.05"
                              />
                            </svg>
                          </div>
                          <div className="rating">
                            <i className="icon fa fa-star"></i>
                            <i className="icon fa fa-star"></i>
                            <i className="icon fa fa-star"></i>
                            <i className="icon fa fa-star"></i>
                            <i className="icon fa fa-star"></i>
                            <i className="icon fa fa-star"></i>
                            <i className="icon fa fa-star"></i>
                          </div>
                          <p className="text">We cannot say enough good things about the team at [Company Name]. They took our vision and turned it into a stunning website that perfectly captures our and they kept us informed every step way</p>
                          <div className="info-box">
                            <div className="user-thumb">
                              <img className="user" src="assets/images/resource/testi1-1.jpg" alt="image" />
                            </div>
                            <div className="user-info">
                              <h4 className="name">Tina Brown</h4>
                              <span className="designation">DESIGNER</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="testimonial-block">
                        <div className="inner-box">
                          <div className="quote-icon">
                            <svg width="272" height="272" viewBox="0 0 272 272" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M56.0827 163.548C50.5004 177.635 41.6768 191.58 29.8606 205.002C26.1003 209.273 25.623 215.37 28.6735 220.172C31.0227 223.866 34.9738 225.97 39.1574 225.97C40.3361 225.97 41.5357 225.804 42.7185 225.46C67.762 218.142 126.179 192.153 127.748 109.078C128.354 77 104.891 49.4415 74.3404 46.337C57.5021 44.6519 40.6557 50.1221 28.1714 61.4071C15.6704 72.7044 8.49854 88.8328 8.49854 105.663C8.49854 133.74 28.4287 158.294 56.0827 163.548ZM39.5683 74.02C47.508 66.844 57.5021 63.0215 68.0982 63.0215C69.5965 63.0215 71.1072 63.0962 72.6221 63.2538C94.4407 65.466 111.188 85.4543 110.748 108.755C109.664 166.238 78.5406 192.115 52.7666 203.691C60.9221 192.659 67.3304 181.312 71.8875 169.811C73.6638 165.333 73.3692 160.327 71.0823 156.077C68.6875 151.62 64.4167 148.457 59.374 147.399C39.7427 143.294 25.4985 125.738 25.4985 105.663C25.4985 93.6348 30.6284 82.1009 39.5683 74.02Z"
                                fill="white"
                                fillOpacity="0.05"
                              />
                              <path
                                d="M164.42 220.173C166.769 223.866 170.721 225.971 174.904 225.971C176.083 225.971 177.278 225.805 178.465 225.46C203.509 218.143 261.921 192.153 263.49 109.079C264.088 77.0007 240.63 49.442 210.075 46.3376C193.216 44.6235 176.398 50.1186 163.914 61.4077C151.413 72.705 144.241 88.8334 144.241 105.663C144.241 133.741 164.171 158.294 191.821 163.549C186.235 177.648 177.411 191.593 165.599 205.007C161.839 209.282 161.366 215.375 164.42 220.173ZM207.626 169.82C209.402 165.342 209.112 160.336 206.829 156.086C204.43 151.625 200.163 148.462 195.117 147.4C175.485 143.295 161.241 125.739 161.241 105.663C161.241 93.6312 166.371 82.1015 175.311 74.0206C183.246 66.8446 193.241 63.0221 203.841 63.0221C205.335 63.0221 206.846 63.0968 208.365 63.2545C230.179 65.4666 246.93 85.4549 246.49 108.755C245.411 166.242 214.283 192.116 188.509 203.691C196.661 192.668 203.06 181.321 207.626 169.82Z"
                                fill="white"
                                fillOpacity="0.05"
                              />
                            </svg>
                          </div>
                          <div className="rating">
                            <i className="icon fa fa-star"></i>
                            <i className="icon fa fa-star"></i>
                            <i className="icon fa fa-star"></i>
                            <i className="icon fa fa-star"></i>
                            <i className="icon fa fa-star"></i>
                          </div>
                          <p className="text">We cannot say enough good things about the team at [Company Name]. They took our vision and turned it into a stunning website that perfectly captures our and they kept us informed every step way</p>
                          <div className="info-box">
                            <div className="user-thumb">
                              <img className="user" src="assets/images/resource/testi1-1.jpg" alt="image" />
                            </div>
                            <div className="user-info">
                              <div className="user">
                                <h4 className="name">Tina Brown</h4>
                                <span className="designation">DESIGNER</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="testimonial-block">
                        <div className="inner-box">
                          <div className="quote-icon">
                            <svg width="272" height="272" viewBox="0 0 272 272" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M56.0827 163.548C50.5004 177.635 41.6768 191.58 29.8606 205.002C26.1003 209.273 25.623 215.37 28.6735 220.172C31.0227 223.866 34.9738 225.97 39.1574 225.97C40.3361 225.97 41.5357 225.804 42.7185 225.46C67.762 218.142 126.179 192.153 127.748 109.078C128.354 77 104.891 49.4415 74.3404 46.337C57.5021 44.6519 40.6557 50.1221 28.1714 61.4071C15.6704 72.7044 8.49854 88.8328 8.49854 105.663C8.49854 133.74 28.4287 158.294 56.0827 163.548ZM39.5683 74.02C47.508 66.844 57.5021 63.0215 68.0982 63.0215C69.5965 63.0215 71.1072 63.0962 72.6221 63.2538C94.4407 65.466 111.188 85.4543 110.748 108.755C109.664 166.238 78.5406 192.115 52.7666 203.691C60.9221 192.659 67.3304 181.312 71.8875 169.811C73.6638 165.333 73.3692 160.327 71.0823 156.077C68.6875 151.62 64.4167 148.457 59.374 147.399C39.7427 143.294 25.4985 125.738 25.4985 105.663C25.4985 93.6348 30.6284 82.1009 39.5683 74.02Z"
                                fill="white"
                                fillOpacity="0.05"
                              />
                              <path
                                d="M164.42 220.173C166.769 223.866 170.721 225.971 174.904 225.971C176.083 225.971 177.278 225.805 178.465 225.46C203.509 218.143 261.921 192.153 263.49 109.079C264.088 77.0007 240.63 49.442 210.075 46.3376C193.216 44.6235 176.398 50.1186 163.914 61.4077C151.413 72.705 144.241 88.8334 144.241 105.663C144.241 133.741 164.171 158.294 191.821 163.549C186.235 177.648 177.411 191.593 165.599 205.007C161.839 209.282 161.366 215.375 164.42 220.173ZM207.626 169.82C209.402 165.342 209.112 160.336 206.829 156.086C204.43 151.625 200.163 148.462 195.117 147.4C175.485 143.295 161.241 125.739 161.241 105.663C161.241 93.6312 166.371 82.1015 175.311 74.0206C183.246 66.8446 193.241 63.0221 203.841 63.0221C205.335 63.0221 206.846 63.0968 208.365 63.2545C230.179 65.4666 246.93 85.4549 246.49 108.755C245.411 166.242 214.283 192.116 188.509 203.691C196.661 192.668 203.06 181.321 207.626 169.82Z"
                                fill="white"
                                fillOpacity="0.05"
                              />
                            </svg>
                          </div>
                          <div className="rating">
                            <i className="icon fa fa-star"></i>
                            <i className="icon fa fa-star"></i>
                            <i className="icon fa fa-star"></i>
                            <i className="icon fa fa-star"></i>
                            <i className="icon fa fa-star"></i>
                          </div>
                          <p className="text">We cannot say enough good things about the team at [Company Name]. They took our vision and turned it into a stunning website that perfectly captures our and they kept us informed every step way</p>
                          <div className="info-box">
                            <div className="user-thumb">
                              <img className="user" src="assets/images/resource/testi1-1.jpg" alt="image" />
                            </div>
                            <div className="user-info">
                              <div className="user">
                                <h4 className="name">Tina Brown</h4>
                                <span className="designation">DESIGNER</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                  <div className="testimonial-arry">
                    <button className="arry-prev testimonial-arry-prev"><i className="fa-light fa-arrow-left-long"></i></button>
                    <button className="arry-next testimonial-arry-next"><i className="fa-light fa-arrow-right-long"></i></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </>
    )
}
export default Testimonial;