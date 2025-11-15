import React, { useState } from 'react';
import Link from 'next/link';

const services = [
  {
    title: 'Digital Marketing',
    image: 'assets/images/resource/service8-1.jpg',
  },
  {
    title: 'Analytics  Data-Driven Insights',
    image: 'assets/images/resource/service8-2.jpg',
  },
  {
    title: 'Social Media Marketing',
    image: 'assets/images/resource/service8-2.jpg',
  },
  {
    title: 'E-Commerce Solutions',
    image: 'assets/images/resource/service8-3.jpg',
  },
  {
    title: 'Content Marketing',
    image: 'assets/images/resource/service8-3.jpg',
  },
  {
    title: 'Technology and Innovation',
    image: 'assets/images/resource/service8-4.jpg',
  },
  {
    title: 'Email Marketing',
    image: 'assets/images/resource/service8-4.jpg',
  },
  {
    title: 'Innovation & Marketing',
    image: 'assets/images/resource/service8-1.jpg',
  },
  {
    title: 'Branding and Creative',
    image: 'assets/images/resource/service8-1.jpg',
  },
];

function Service2() {
  const [activeImage, setActiveImage] = useState(services[0].image);
  const [activeIndex, setActiveIndex] = useState(0);


  return (
    <section className="services-section-eight">
      <div className="anim-icons">
        <div className="image-1 tm-gsap-img-parallax">
          <img src="assets/images/icons/shape-style20.png" alt="Shape" />
        </div>
      </div>

      <div className="scroll-text">
        <Link href="/#">
          <div className="title-stroke-text text2 fadeInUpBig"><span>View </span>More</div>
        </Link>
      </div>

      <div className="outer-box">
        <div className="bg bg-image" style={{ backgroundImage: 'url(assets/images/icons/section-bg-shape14.png)' }}></div>
        <div className="container">
          <div className="sec-title">
            <span className="sub-title">
              <img className="icon-img" src="assets/images/icons/sub-title-shape.png" alt="Sub" />
              Who we are
            </span>
            <h2 className="title">Where imagination <br />crosses <span className="color1">the finish line</span></h2>
          </div>

          <div className="row">
            <div className="image-column col-xl-5 col-md-6">
              <div className="inner-colmun">
                <div className="image-box">
                  <Link href="/page-service-details">
                    <img id="service-image" src={activeImage} alt="Service Visual" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="content-colmun col-xl-7 col-md-6">
              <div className="inner-colmun">
                <div className="services-list">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className={`service-block-eight ${index === activeIndex ? 'active' : ''}`}
                      onMouseEnter={() => {
                        setActiveImage(service.image);
                        setActiveIndex(index);
                      }}
                    >
                      <Link href="/page-service-details">
                        <img className="icon-img" src="assets/images/icons/sub-title-shape.png" alt="icon" />
                        <span className="title">{service.title}</span>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Service2;
