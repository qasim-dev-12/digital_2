import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface ServiceProps {
  className?: string;
}


const Service: React.FC<ServiceProps> = ({ className }) => {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay },
    }),
  };

  const services = [
    { title: 'Brand Identity', category: '2D & 3D Animation', icon: 'theme-icon16.png', delay: 0.2 },
    { title: 'Web Design', category: 'Art Direction', icon: 'theme-icon17.png', delay: 0.4 },
    { title: 'Digital Platform', category: 'Product Development', icon: 'theme-icon18.png', delay: 0.6 },
  ];

  return (
    <section className={`services-section-four ${className || ''}`}>
      <div className="scroll-text">
        <div className="title-stroke-text text1 fadeInUpBig">
          <span>Our </span>features
        </div>
      </div>
      <div className="outer-box">
        <div className="container">
          <div className="row">
            {services.map((item, index) => (
              <div key={index} className="service-block-four col-xl-4 col-md-6">
                <motion.div
                  className="inner-box"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={item.delay}
                  variants={fadeUp}
                >
                  <div className="content-box">
                    <h4 className="title">
                      <Link href="/page-service-details">{item.title}</Link>
                    </h4>
                    <div className="category">{item.category}</div>
                    <div className="icon-box">
                      <img className="icon-img" src={`assets/images/icons/${item.icon}`} alt="Icon" />
                    </div>
                    <div className="text">
                      Proin efficitur, mauris vel condimentum pulvinar, velit orci consectetur
                    </div>
                    <Link className="btn-link" href="/page-service-details">
                      <i className="icon fa-solid fa-arrow-down-right"></i>
                    </Link>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
