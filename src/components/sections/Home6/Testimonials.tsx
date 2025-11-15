import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    autoplay: {
        delay: 8500,
        disableOnInteraction: false,
    },
    navigation: {
        clickable: true,
        prevEl: ".testimonial-arry-prev",
        nextEl: ".testimonial-arry-next",
    },
    loop: true,
    breakpoints: {
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
    },
};

function Testimonials() {
    return (
        <>
            <section className="testimonial-section-five">
                <div className="anim-icons">
                    <div className="image-1">
                        <img src="assets/images/icons/shape-style61.png" alt="Image" />
                    </div>
                </div>
                <div className="inner-container">
                    <div className="bg bg-image">
                        <img src="assets/images/background/bg-testimonial5.jpg" alt="Image" />
                    </div>
                    <div className="container">
                        <div className="sec-title">
                            <span className="sub-title wow fadeInUp">
                                <img className="icon-img" src="assets/images/icons/sub-title-shape.png" alt="Image" /> Testimonial
                            </span>
                            <h2 className="title wow fadeInUp">
                                Hear what others say <br />
                                about <span className="theme-color1">partnering with us</span>
                            </h2>
                            <div className="testimonial-arry">
                                <button className="arry-prev testimonial-arry-prev">
                                    <i className="fa-light fa-solid fa-angle-left"></i>
                                </button>
                                <button className="arry-next testimonial-arry-next">
                                    <i className="fa-light fa-solid fa-angle-right"></i>
                                </button>
                            </div>
                        </div>
                        <div className="outer-box">
                            <div className="row">
                                <div className="col-xl-5">
                                    <div className="review-box">
                                        <div className="bg-shape1">
                                            <img src="assets/images/icons/shape-style47.png" alt="Image" />
                                        </div>
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
                                <div className="col-xl-7">
                                    <div className="swiper testimonial-swiper-one">
                                        <Swiper {...swiperOptions} className="swiper-wrapper">
                                            <SwiperSlide className="swiper-slide">
                                                <div className="testimonial-block-five">
                                                    <div className="inner-box">
                                                        <div className="quote-icon">
                                                            <svg width="83" height="80" viewBox="0 0 83 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M63.2673 31.8969C64.9092 27.7538 67.5044 23.6523 70.9797 19.7045C72.0857 18.4484 72.2261 16.6552 71.3289 15.2429C70.6379 14.1564 69.4758 13.5375 68.2454 13.5375C67.8987 13.5375 67.5459 13.5864 67.198 13.6877C59.8323 15.8398 42.6509 23.4838 42.1894 47.9174C42.0112 57.3522 48.9118 65.4577 57.8974 66.3708C62.8499 66.8664 67.8047 65.2575 71.4766 61.9384C75.1533 58.6157 77.2627 53.872 77.2627 48.9221C77.2627 40.664 71.4009 33.4423 63.2673 31.8969ZM68.1245 58.2287C65.7893 60.3393 62.8499 61.4636 59.7334 61.4636C59.2927 61.4636 58.8484 61.4416 58.4028 61.3952C51.9856 60.7446 47.06 54.8657 47.1894 48.0127C47.508 31.1059 56.6621 23.4948 64.2427 20.0903C61.844 23.3349 59.9592 26.6723 58.6189 30.0549C58.0964 31.372 58.1831 32.8442 58.8557 34.0942C59.5601 35.4052 60.8162 36.3354 62.2993 36.6467C68.0732 37.854 72.2627 43.0175 72.2627 48.9221C72.2627 52.4597 70.7539 55.852 68.1245 58.2287Z"
                                                                    fill="#D9F45F"
                                                                />
                                                                <path
                                                                    d="M31.4029 15.2434C30.7119 14.157 29.5498 13.5381 28.3194 13.5381C27.9727 13.5381 27.6211 13.5869 27.272 13.6882C19.9063 15.8403 2.72609 23.4844 2.26466 47.9179C2.08889 57.3527 8.98829 65.4582 17.9751 66.3713C22.9336 66.8754 27.8799 65.2592 31.5518 61.9389C35.2285 58.6162 37.3379 53.8725 37.3379 48.9226C37.3379 40.6645 31.4761 33.4429 23.3437 31.8974C24.9868 27.7507 27.582 23.6491 31.0561 19.7038C32.1621 18.4465 32.3013 16.6545 31.4029 15.2434ZM18.6954 30.053C18.1729 31.3701 18.2584 32.8423 18.9297 34.0923C19.6353 35.4045 20.8902 36.3347 22.3746 36.6472C28.1485 37.8545 32.3379 43.018 32.3379 48.9226C32.3379 52.4614 30.8291 55.8525 28.1998 58.2292C25.8658 60.3398 22.9263 61.4641 19.8086 61.4641C19.3692 61.4641 18.9248 61.4421 18.4781 61.3957C12.062 60.7451 7.13529 54.8662 7.26469 48.0132C7.58206 31.1052 16.7373 23.4954 24.3179 20.0908C21.9204 23.333 20.0381 26.6704 18.6954 30.053Z"
                                                                    fill="#D9F45F"
                                                                />
                                                            </svg>
                                                        </div>
                                                        <p className="text">We cannot say enough good things about the team at there. They took our vision lorem ipsum and turned it into a stunning website that perfectly captures</p>
                                                        <div className="rating-box">
                                                            <div className="info-box">
                                                                <div className="user-thumb">
                                                                    <img className="user" src="assets/images/resource/testi1-1.jpg" alt="Image" />
                                                                </div>
                                                                <div className="user-info">
                                                                    <h4 className="name">Tina Brown</h4>
                                                                    <span className="designation">DESIGNER</span>
                                                                </div>
                                                            </div>
                                                            <div className="rating">
                                                                <i className="icon fa fa-star"></i>
                                                                <i className="icon fa fa-star"></i>
                                                                <i className="icon fa fa-star"></i>
                                                                <i className="icon fa fa-star"></i>
                                                                <i className="icon fa fa-star"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide className="swiper-slide">
                                                <div className="testimonial-block-five">
                                                    <div className="inner-box">
                                                        <div className="quote-icon">
                                                            <svg width="83" height="80" viewBox="0 0 83 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M63.2673 31.8969C64.9092 27.7538 67.5044 23.6523 70.9797 19.7045C72.0857 18.4484 72.2261 16.6552 71.3289 15.2429C70.6379 14.1564 69.4758 13.5375 68.2454 13.5375C67.8987 13.5375 67.5459 13.5864 67.198 13.6877C59.8323 15.8398 42.6509 23.4838 42.1894 47.9174C42.0112 57.3522 48.9118 65.4577 57.8974 66.3708C62.8499 66.8664 67.8047 65.2575 71.4766 61.9384C75.1533 58.6157 77.2627 53.872 77.2627 48.9221C77.2627 40.664 71.4009 33.4423 63.2673 31.8969ZM68.1245 58.2287C65.7893 60.3393 62.8499 61.4636 59.7334 61.4636C59.2927 61.4636 58.8484 61.4416 58.4028 61.3952C51.9856 60.7446 47.06 54.8657 47.1894 48.0127C47.508 31.1059 56.6621 23.4948 64.2427 20.0903C61.844 23.3349 59.9592 26.6723 58.6189 30.0549C58.0964 31.372 58.1831 32.8442 58.8557 34.0942C59.5601 35.4052 60.8162 36.3354 62.2993 36.6467C68.0732 37.854 72.2627 43.0175 72.2627 48.9221C72.2627 52.4597 70.7539 55.852 68.1245 58.2287Z"
                                                                    fill="#D9F45F"
                                                                />
                                                                <path
                                                                    d="M31.4029 15.2434C30.7119 14.157 29.5498 13.5381 28.3194 13.5381C27.9727 13.5381 27.6211 13.5869 27.272 13.6882C19.9063 15.8403 2.72609 23.4844 2.26466 47.9179C2.08889 57.3527 8.98829 65.4582 17.9751 66.3713C22.9336 66.8754 27.8799 65.2592 31.5518 61.9389C35.2285 58.6162 37.3379 53.8725 37.3379 48.9226C37.3379 40.6645 31.4761 33.4429 23.3437 31.8974C24.9868 27.7507 27.582 23.6491 31.0561 19.7038C32.1621 18.4465 32.3013 16.6545 31.4029 15.2434ZM18.6954 30.053C18.1729 31.3701 18.2584 32.8423 18.9297 34.0923C19.6353 35.4045 20.8902 36.3347 22.3746 36.6472C28.1485 37.8545 32.3379 43.018 32.3379 48.9226C32.3379 52.4614 30.8291 55.8525 28.1998 58.2292C25.8658 60.3398 22.9263 61.4641 19.8086 61.4641C19.3692 61.4641 18.9248 61.4421 18.4781 61.3957C12.062 60.7451 7.13529 54.8662 7.26469 48.0132C7.58206 31.1052 16.7373 23.4954 24.3179 20.0908C21.9204 23.333 20.0381 26.6704 18.6954 30.053Z"
                                                                    fill="#D9F45F"
                                                                />
                                                            </svg>
                                                        </div>
                                                        <p className="text">We cannot say enough good things about the team at there. They took our vision lorem ipsum and turned it into a stunning website that perfectly captures</p>
                                                        <div className="rating-box">
                                                            <div className="info-box">
                                                                <div className="user-thumb">
                                                                    <img className="user" src="assets/images/resource/testi1-1.jpg" alt="Image" />
                                                                </div>
                                                                <div className="user-info">
                                                                    <h4 className="name">Tina Brown</h4>
                                                                    <span className="designation">DESIGNER</span>
                                                                </div>
                                                            </div>
                                                            <div className="rating">
                                                                <i className="icon fa fa-star"></i>
                                                                <i className="icon fa fa-star"></i>
                                                                <i className="icon fa fa-star"></i>
                                                                <i className="icon fa fa-star"></i>
                                                                <i className="icon fa fa-star"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide className="swiper-slide">
                                                <div className="testimonial-block-five">
                                                    <div className="inner-box">
                                                        <div className="quote-icon">
                                                            <svg width="83" height="80" viewBox="0 0 83 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M63.2673 31.8969C64.9092 27.7538 67.5044 23.6523 70.9797 19.7045C72.0857 18.4484 72.2261 16.6552 71.3289 15.2429C70.6379 14.1564 69.4758 13.5375 68.2454 13.5375C67.8987 13.5375 67.5459 13.5864 67.198 13.6877C59.8323 15.8398 42.6509 23.4838 42.1894 47.9174C42.0112 57.3522 48.9118 65.4577 57.8974 66.3708C62.8499 66.8664 67.8047 65.2575 71.4766 61.9384C75.1533 58.6157 77.2627 53.872 77.2627 48.9221C77.2627 40.664 71.4009 33.4423 63.2673 31.8969ZM68.1245 58.2287C65.7893 60.3393 62.8499 61.4636 59.7334 61.4636C59.2927 61.4636 58.8484 61.4416 58.4028 61.3952C51.9856 60.7446 47.06 54.8657 47.1894 48.0127C47.508 31.1059 56.6621 23.4948 64.2427 20.0903C61.844 23.3349 59.9592 26.6723 58.6189 30.0549C58.0964 31.372 58.1831 32.8442 58.8557 34.0942C59.5601 35.4052 60.8162 36.3354 62.2993 36.6467C68.0732 37.854 72.2627 43.0175 72.2627 48.9221C72.2627 52.4597 70.7539 55.852 68.1245 58.2287Z"
                                                                    fill="#D9F45F"
                                                                />
                                                                <path
                                                                    d="M31.4029 15.2434C30.7119 14.157 29.5498 13.5381 28.3194 13.5381C27.9727 13.5381 27.6211 13.5869 27.272 13.6882C19.9063 15.8403 2.72609 23.4844 2.26466 47.9179C2.08889 57.3527 8.98829 65.4582 17.9751 66.3713C22.9336 66.8754 27.8799 65.2592 31.5518 61.9389C35.2285 58.6162 37.3379 53.8725 37.3379 48.9226C37.3379 40.6645 31.4761 33.4429 23.3437 31.8974C24.9868 27.7507 27.582 23.6491 31.0561 19.7038C32.1621 18.4465 32.3013 16.6545 31.4029 15.2434ZM18.6954 30.053C18.1729 31.3701 18.2584 32.8423 18.9297 34.0923C19.6353 35.4045 20.8902 36.3347 22.3746 36.6472C28.1485 37.8545 32.3379 43.018 32.3379 48.9226C32.3379 52.4614 30.8291 55.8525 28.1998 58.2292C25.8658 60.3398 22.9263 61.4641 19.8086 61.4641C19.3692 61.4641 18.9248 61.4421 18.4781 61.3957C12.062 60.7451 7.13529 54.8662 7.26469 48.0132C7.58206 31.1052 16.7373 23.4954 24.3179 20.0908C21.9204 23.333 20.0381 26.6704 18.6954 30.053Z"
                                                                    fill="#D9F45F"
                                                                />
                                                            </svg>
                                                        </div>
                                                        <p className="text">We cannot say enough good things about the team at there. They took our vision lorem ipsum and turned it into a stunning website that perfectly captures</p>
                                                        <div className="rating-box">
                                                            <div className="info-box">
                                                                <div className="user-thumb">
                                                                    <img className="user" src="assets/images/resource/testi1-1.jpg" alt="Image" />
                                                                </div>
                                                                <div className="user-info">
                                                                    <h4 className="name">Tina Brown</h4>
                                                                    <span className="designation">DESIGNER</span>
                                                                </div>
                                                            </div>
                                                            <div className="rating">
                                                                <i className="icon fa fa-star"></i>
                                                                <i className="icon fa fa-star"></i>
                                                                <i className="icon fa fa-star"></i>
                                                                <i className="icon fa fa-star"></i>
                                                                <i className="icon fa fa-star"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        </Swiper>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Testimonials;
