import React, { useState } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Thumbs, Navigation } from 'swiper/modules';
import type SwiperType from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

const Testimonials: React.FC = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  const swiperOptions = {
    modules: [Autoplay, Thumbs, Navigation],
    slidesPerView: 1,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    loop: true,
    thumbs: thumbsSwiper ? { swiper: thumbsSwiper } : undefined,
  };

  const testimonialSlides = [
    {
      name: 'Tina Brown',
      designation: 'Designer',
      text: 'They took our vision and turned it into a stunning website that perfectly captures our brand. The process was seamless, and they kept us informed every step of the way.',
      img: 'assets/images/icons/quote1-3.png',
      rating: 5,
    },
    {
      name: 'John Doe',
      designation: 'Developer',
      text: 'They took our vision and turned it into a stunning website that perfectly captures our brand. The process was seamless, and they kept us informed every step of the way.',
      img: 'assets/images/icons/quote1-3.png',
      rating: 5,
    },
    {
      name: 'Sarah Smith',
      designation: 'Manager',
      text: 'They took our vision and turned it into a stunning website that perfectly captures our brand. The process was seamless, and they kept us informed every step of the way.',
      img: 'assets/images/icons/quote1-3.png',
      rating: 5,
    },
  ];

  const thumbsImages = [
    'assets/images/resource/thumb1.png',
    'assets/images/resource/thumb2.png',
    'assets/images/resource/thumb3.png',
  ];

  return (
    <section className="testimonial-section-four overflow-hidden">
      <div
        className="bg bg-image tm-gsap-animate-horizontal"
        style={{ backgroundImage: 'url(assets/images/icons/shape-style11.png)' }}
      />

      <div className="anim-icons">
        <figure className="image image-1">
            <Link href="#"><img src="assets/images/resource/testi4-1.jpg" alt="Image" /></Link>
        </figure>
        <figure className="image image-2">
            <Link href="#"><img src="assets/images/resource/testi4-2.jpg" alt="Image" /></Link>
        </figure>
        <figure className="image image-3">
            <Link href="#"><img src="assets/images/resource/testi4-3.jpg" alt="Image" /></Link>
        </figure>
        <figure className="image image-4">
            <Link href="#"><img src="assets/images/resource/testi4-4.jpg" alt="Image" /></Link>
        </figure>
        <figure className="image image-5">
            <Link href="#"><img src="assets/images/resource/testi4-5.jpg" alt="Image" /></Link>
        </figure>
    </div>

      <div className="container">
        <div className="sec-title text-center">
          <span className="sub-title wow fadeInUp">
            <img className="icon-img" src="assets/images/icons/sub-title-shape.png" alt="Image" /> Testimonial
          </span>
          <h2 className="title wow fadeInUp">
            Hear what others say <br /> about <span className="theme-color1">partnering with us</span>
          </h2>
        </div>

        <div className="carousel-outer col-lg-8 offset-lg-2">
          <Swiper
            onSwiper={setThumbsSwiper}
            slidesPerView={3}
            spaceBetween={10}
            watchSlidesProgress={true}
            className="testimonial-thumbs"
          >
            {thumbsImages.map((src, i) => (
              <SwiperSlide key={i}>
                <img src={src} alt={`Thumb ${i + 1}`} />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper {...swiperOptions} className="testimonial-swiper-three">
            {testimonialSlides.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="testimonial-block-four">
                  <div className="inner-box text-center">
                    <div className="quote-icon">
                      <img src={item.img} alt="Quote Icon" />
                    </div>
                    <p className="text">{item.text}</p>
                    <div className="rating">
                      {[...Array(item.rating)].map((_, idx) => (
                        <i key={idx} className="icon fa-solid fa-star"></i>
                      ))}
                    </div>
                    <div className="user-info">
                      <h4 className="name">{item.name}</h4>
                      <span className="designation">{item.designation}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;