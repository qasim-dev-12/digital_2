import React from 'react';
import Link from 'next/link';
import CounterUp from '../../elements/CounterUp';


function Banner() {

    return (
        <>
          <section className="banner-section-five">
            <div className="banner-slider">
              <div className="banner-slide">
                <div className="anim-icons">
                  <img className="image-1" src="assets/images/banner/banner5-3.png" alt="Image"/>
                  <img className="image-2" src="assets/images/icons/shape-style58.png" alt="Image"/>
                </div>
                <div className="outer-box">
                  <div className="container">
                    <div className="row">
                      <div className="content-box col-lg-12">
                        <div className="inner-box">
                          <h2 className="title animate-3">Creative <span className="span-1">digital</span> <br/><span className="span-2">agency</span></h2>
                          <div className="title-box">
                            <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</div>
                            <div className="customer-info">
                              <div className="btn-box">
                                <Link href="/page-about" className="theme-btn btn-style-four btn-md">
                                  <span className="btn-title">Read More</span>
                                  <span className="dot-box"><span className="dot-item"></span></span>
                                </Link>
                              </div>
                              <div className="author-image">
                                <Link href="/page-contact"><img src="assets/images/resource/customer1.png" alt="Image"/></Link>
                              </div>        
                              <div className="count-outer">
                                <div className="count-box"><span className="count-text"><CounterUp end={200} /></span>k</div>
                                <div className="count-title">satisfied <br/>customers <i className="icon-shape flaticon-scribble"></i></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="image-box">
                    <div className="inner-box" style={{backgroundImage: 'url(assets/images/banner/banner5-1.jpg)'}}>
                      <figure className="image">
                        <span className="text-stroke">Digitaal</span>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
    )
}
export default Banner;
