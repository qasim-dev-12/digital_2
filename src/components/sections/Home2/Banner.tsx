import React from 'react';
import Link from 'next/link';
import CounterUp from '../../elements/CounterUp';

function Banner2() {
  return (
    <section className="banner-section-two">
      <div className="banner-slider">
        <div className="banner-slide">
          <div className="bg slide-image" style={{ backgroundImage: "url(assets/images/banner/banner2-1.png)" }}></div>
          <div className="container">
            <div className="outer-box">
              <div className="row">
                <div className="content-box col-xl-7 col-lg-7 offset-xl-1">
                  <div className="inner-box">
                    <div className="title-box">
                      <img className="shape-image1" src="assets/images/icons/shape-3.png" alt="Image" />
                      <h2 className="title animate-3">Digital <br />Prod<span>ucts</span></h2>
                      <div className="text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
                        <i className="icon-shape flaticon-scribble"></i>
                      </div>
                      <div className="text-two">
                        Empowering Growth Through Design & Development <i className="icon-shape flaticon-right-down"></i>
                      </div>
                      <div className="info-circle">
                        <img className="shape-circle1 animation__rotateY" src="assets/images/icons/circle-text1.png" alt="Image" />
                        <i className="icon fa-light fa-arrow-down-right"></i>
                      </div>
                    </div>
                    <div className="customer-info">
                      <div className="image-box">
                        <Link href="/page-contact"><img src="assets/images/resource/customer1.png" alt="Image" /></Link>
                      </div>
                      <div className="count-outer">
                        <div className="count-box"><span className="count-text"><CounterUp end={200} /></span>k</div>
                        <div className="count-title">satisfied <br />customers</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="image-clumn col-xl-4 col-lg-5">
                  <div className="inner-column">
                    <figure className="image tm-gsap-animate-circle">
                      <img src="assets/images/banner/banner2-2.png" alt="Image" />
                    </figure>
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

export default Banner2;
