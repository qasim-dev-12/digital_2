import React from 'react'

 function Socials() {
    return (
        <>
          <section className="socials-section overflow-hidden">
            <div className="anim-icons">
              <img className="image-1 tm-gsap-animate-circle" src="assets/images/icons/shape-style7.png" alt="Image" />
            </div>
            <div className="outer-box">
              <div className="container">
                <div className="sec-title">
                  <span className="sub-title wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms"><img className="icon-img" src="assets/images/icons/sub-title-shape.png" alt="Image" />Join Agency</span>
                  <h2 className="title wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">Join Our Digital agency <br /><span className="color1">Innovators</span></h2>
                </div>
                <div className="row">
                  <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="social-block" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                      <div className="inner-box">
                        <div className="icon-box">
                          <i className="icon flaticon-instagram"></i>
                        </div>
                        <h4 className="title">Follow <br />Instagram</h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="social-block" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                      <div className="inner-box">
                        <div className="icon-box">
                          <i className="icon flaticon-facebook-app-symbol"></i>
                        </div>
                        <h4 className="title">Follow <br />Facebook</h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="social-block" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                      <div className="inner-box">
                        <div className="icon-box">
                          <i className="icon flaticon-twitter"></i>
                        </div>
                        <h4 className="title">Follow on <br />Twitter</h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="social-block" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                      <div className="inner-box">
                        <div className="icon-box">
                          <i className="icon flaticon-linkedin"></i>
                        </div>
                        <h4 className="title">Follow <br />Linkedin</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
    )
}
export default Socials;
