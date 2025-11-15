import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const services = [
  {
    number: '01',
    title: 'UX/ UI Design',
    icon: 'flaticon-paint-roller',
    Image: 'service2-1.png',
  },
  {
    number: '02',
    title: 'Development',
    icon: 'flaticon-mobile-development',
    Image: 'service2-1.png',
  },
  {
    number: '03',
    title: 'SEO Marketing',
    icon: 'flaticon-seo',
    Image: 'service2-1.png',
  },
  {
    number: '04',
    title: 'Video Production',
    icon: 'flaticon-film',
    Image: 'service2-1.png',
  },
];

function ServiceSection() {
  const [activeIndex, setActiveIndex] = useState(1); 

   useEffect(() => {
     import('aos').then((AOS) => {
       AOS.init({ once: true, duration: 1000 });
       AOS.refreshHard();
     });
   }, []);

  return (
    <section className="services-section-three">
      <div className="anim-icons">
        <div className="image-1">
          <img src="assets/images/icons/section-bg-shape6.png" alt="Background" />
        </div>
      </div>

      <div className="container">
        <div className="sec-title">
          <div className="row">
            <div className="col-lg-7">
              <span className="sub-title wow fadeInUp">
                <img className="icon-img" src="assets/images/icons/sub-title-shape.png" alt="Shape" />
                Services
              </span>
              <h2 className="title mb-lg-0 wow fadeInUp">
                We Provide Digital <br />Services <span>for You</span>
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
          {services.map((service, index) => {
            const isActive = activeIndex === index;
            return (
              <div
                className="service-block-three"
                key={index}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={200 + index * 100}
              >
                <div
                  className={`inner-box ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveIndex(index)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="title-box">
                    <div className="number"><span>{service.number}</span></div>
                    <div className="title">{service.title}</div>
                    <div className="icon-box"><i className={`icon ${service.icon}`}></i></div>
                  </div>
                  {isActive && (
                    <div className="content-box">
                      <div className="row">
                        <div className="image-column col-lg-6">
                          <div className="inner-column">
                            <figure className="image">
                              <img src={`assets/images/resource/${service.Image}`} alt={service.title} />
                            </figure>
                            <div className="icon-box">
                              <Link href="/page-service-details">
                                <i className="icon flaticon-right-down"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="content-column col-lg-5">
                          <div className="inner-column">
                            <div className="text">
                              Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                            </div>
                            <div className="info-list">
                              <div className="list-item"><span>Corporate Identity</span> UI/UX Design</div>
                              <div className="list-item"><span>Visual planning</span> Wireframe Design</div>
                              <div className="list-item"><span>Rebrand</span> Brand Experience</div>
                              <div className="list-item"><span>Illustrative System</span></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default ServiceSection