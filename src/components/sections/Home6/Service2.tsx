import React, { useState } from 'react';
import Link from 'next/link';

function Service2() {
  const [activeIndex, setActiveIndex] = useState(1); 

  const services = [
    { number: "01", title: "UX/ UI Design" },
    { number: "02", title: "Development" },
    { number: "03", title: "SEO Marketing" },
    { number: "04", title: "Video Production" },
  ];

  return (
    <section className="services-section-seven">
      <div className="inner-section">
        <div className="anim-icons tm-gsap-img-parallax">
          <img className="images-shape1" src="assets/images/icons/shape-style45.png" alt="Shape" />
        </div>
        <div className="container">
          <div className="sec-title">
            <div className="row">
              <div className="col-lg-7">
                <span className="sub-title wow fadeInUp">
                  <img className="icon-img" src="assets/images/icons/sub-title-shape.png" alt="Icon" /> Services
                </span>
                <h2 className="title mb-lg-0 wow fadeInUp">
                  We Provide Digital <br /> Services <span>for You</span>
                </h2>
              </div>
              <div className="col-lg-5">
                <div className="text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                </div>
                <Link href="/page-contact" className="theme-btn btn-style-four">
                  <span className="btn-title">All Services</span>
                  <span className="dot-box"><span className="dot-item"></span></span>
                </Link>
              </div>
            </div>
          </div>

          <div className="outer-box">
            {services.map((service, index) => (
              <div className="service-block-seven" key={index}>
                <div
                  className={`inner-box ${activeIndex === index ? 'active' : ''}`}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className="title-box">
                    <div className="number"><span>{service.number}</span></div>
                    <div className="title">{service.title}</div>
                  </div>
                  <div className="content-box">
                    <div className="image-column">
                      <div className="inner-column">
                        <figure className="image">
                          <img src="assets/images/resource/service5-1.jpg" alt="Service" />
                        </figure>
                        <div className="icon-box">
                          <div className="inner">
                            <Link href="/page-service-details">
                              <i className="icon flaticon-right-down"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-column">
                      <div className="inner-column">
                        <div className="info-list">
                          <div className="list-item"><span>Branding identity</span> UI/UX Design</div>
                          <div className="list-item"><span>Strategy and planning</span> Wireframe & prototype</div>
                          <div className="list-item"><span>rebrand</span> motion</div>
                          <div className="list-item"><span>pitchdesk</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Service2;
