import React from 'react';
import Link from 'next/link';
import CounterUp from '../../elements/CounterUp';

export default function Section2() {

  return (
    <section className="about-section-six">
      <div className="anim-icons">
        <div className="image-1 anim-fade-move" data-fade-from="right">
          <img src="assets/images/icons/theme-icon29.png" alt="" />
        </div>
        <div className="image-2 tm-gsap-img-parallax" data-fade-from="right">
          <img src="assets/images/icons/theme-icon30.png" alt="" />
        </div>
        <div className="image-3">
          <img src="assets/images/icons/shape-style64.png" alt="" />
        </div>
      </div>
      <div className="container">
        <div className="outer-box">
          <div className="sec-title">
            <span className="sub-title">
              <img className="icon-img" src="assets/images/icons/sub-title-shape.png" alt="" />
              Who we are
            </span>
            <h2 className="title anim-text-flip-move">
              We deliver innovative ideas to elevate your digital agency{" "}
              <span className="color1">and sharpen your brand</span>
            </h2>
          </div>
          <div className="row">
            <div className="content-column col-lg-7">
              <div className="inner-colmun">
                <div className="content-box">
                  <div className="text anim-fade-move">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim .
                  </div>
                  <div className="user-info-box anim-fade-move">
                    <Link href="/page-about" className="theme-btn btn-style-four">
                      <span className="btn-title">Read More</span>
                      <span className="dot-box">
                        <span className="dot-item"></span>
                      </span>
                    </Link>
                    <div className="user-info">
                      <div className="thumb">
                        <img src="assets/images/resource/user.png" alt="" />
                      </div>
                      <div className="info">
                        <h6 className="name">Eleanor Pena</h6>
                        <span className="designation">Manager</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="funfact-colmun col-lg-5">
              <div className="inner-colmun">
                <div className="funfact-block-two anim-fade-move" data-fade-from="left">
                  <div className="inner-box">
                    <div className="shape-icon">
                      <i className="icon flaticon-scribble"></i>
                    </div>
                    <div className="count-box">
                      <span className="count-text"><CounterUp end={10} /></span>+
                    </div>
                    <div className="text">
                      Eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
