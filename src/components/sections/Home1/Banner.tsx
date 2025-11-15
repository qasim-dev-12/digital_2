import React from 'react';
import Link from 'next/link';
import CounterUp from '../../elements/CounterUp';

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
                    <div className="title-box">
                      <h1 className="title tm-split-text split-in-right">
                        Designing the future,<img className="shape-image-2" src="assets/images/icons/shape-style3.png" alt="" /> <br />
                        powering <span><img className="shape-image-1" src="assets/images/icons/shape-style2.png" alt="" /> your solutions</span>
                      </h1>
                    </div>
                    <div className="image-box">
                      <figure className="image-1 anim-fade-move" data-fade-from="right"><img src="assets/images/banner/banner1-1.jpg" alt="Image" /></figure>
                      <div className="customer-info anim-fade-move" data-fade-from="right" data-delay="0.05">
                        <div className="image-box">
                          <Link href="/page-contact"><img src="assets/images/resource/customer1.png" alt="" /></Link>
                        </div>
                        <div className="count-outer">
                          <div className="count-box"><span className="count-text"><CounterUp end={200} /></span>k</div>
                          <div className="count-title">satisfied <br />customers</div>
                        </div>
                      </div>
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
