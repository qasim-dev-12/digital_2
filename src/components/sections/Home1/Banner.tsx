import React from 'react';
import Link from 'next/link';
import CounterUp from '../../elements/CounterUp';
import {Swiper} from 'swiper/react';
import { SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";
import Image from 'next/image';
export default function Section1() {
  return (
    <section className="banner-section-one">
      <div className="banner-slider">
        <div className="banner-slide">
          <div className="anim-icons">
            <img className="image-1" src="assets/images/icons/shape-style1.png" alt="" />
            <img className="image-2 tm-gsap-animate-circle" data-fade-from="top" data-fade-offset="100" data-ease="bounce" src="assets/images/icons/shape-style4.png" alt="" />
            <img className="image-3" src="assets/images/icons/shape-style43.png" alt="" />
          </div>
          <div className="container">
            <div className="outer-box">
              <div className="row">
                <div className="content-box col-12">
                  <div className="inner-box">
                    {/* <div className="title-box">
                      <h1 className="title tm-split-text split-in-right">
                        TRANSFORM REACH <img className="shape-image-2" src="assets/images/icons/shape-style3.png" alt="" /> <br />
                           <span><img className="shape-image-1" src="assets/images/icons/shape-style2.png" alt="" /> INTO REVENUE.</span>
                      </h1>
                    </div> */}
                    <div className="image-box">
                       <Swiper
    modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
  >
    <SwiperSlide>
        <figure className="image-1 anim-fade-move" data-fade-from="right">
          <Image
            src="/assets/images/banner/digi-banner.png"
            alt="Digital Banner"
            width={1920}
            height={800}
            priority     // <— THIS PRELOADS THE HERO IMAGE
            className="w-full h-auto object-cover"
          />
        </figure>
      </SwiperSlide>

    <SwiperSlide>
        <figure className="image-1 anim-fade-move" data-fade-from="right"><img src="assets/images/banner/google-banner.png" alt="Image" /></figure>
    </SwiperSlide>

    <SwiperSlide>
        <figure className="image-1 anim-fade-move" data-fade-from="right"><img src="assets/images/banner/social-banner.png" alt="Image" /></figure>
    </SwiperSlide>

    <SwiperSlide>
        <figure className="image-1 anim-fade-move" data-fade-from="right"><img src="assets/images/banner/web-banner.png" alt="Image" /></figure>
    </SwiperSlide>
  </Swiper>
                    
                      <div className="customer-info anim-fade-move" data-fade-from="right" data-delay="0.05">
                        <div className="image-box">
                          <Link href="/page-contact"><img src="assets/images/resource/customer1.png" alt="" /></Link>
                        </div>
                        <div className="count-outer">
                          <div className="count-box"><span className="count-text"><CounterUp end={100} /></span>k</div>
                          <div className="count-title">satisfied <br />customers</div>
                        </div>
                         
                      </div>
                       
                       
                    </div>
                    {/* <div className='text-right'>
                         <Link
  href="https://api.whatsapp.com/send/?phone=971567442268"
  className="flex items-center gap-2 px-4 py-4 bg-[#25D366] text-white uppercase tracking-wide leading-none transition-all duration-500 font-[Avenir] animate-wobble wobble-btn inline-block"
>
 <Image src="/assets/images/whastapp.png" alt="hello" width={230} height={170} />
</Link>
<Link
  href="tel:+971567442268"
  className="call-us-btn flex items-center gap-2 px-4 py-4 bg-[#25D366] text-white uppercase tracking-wide leading-none transition-all duration-500 font-[Avenir] animate-wobble wobble-btn inline-block"
>
  <img src="/assets/images/phone-call.png" alt="Call Us" className="call-icon" />
  <span>Call Us</span>
</Link>

                    </div> */}

                    <div className='text-center mt-20'>
  <Link
    href="https://api.whatsapp.com/send/?phone=971567442268"
    className="custom-btn whatsapp-btn wobble-btn"
  >
    <img src="/assets/images/new-50.png" alt="hello" className="btn-icon " />
    <span>WhatsApp Us</span>
  </Link>

  <Link
    href="tel:+971567442268"
    className="custom-btn call-btn wobble-btn"
  >
    <img src="/assets/images/phone-call.png" alt="Call Us" className="btn-icon" />
    <span>Call Us</span>
  </Link>
</div>

                
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
