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
    { title: 'Strategic Brand Identity', category: 'Positioning | Messaging | Creative Direction', icon: 'theme-icon16.png', delay: 0.2,text:'We develop powerful brand identities built on clarity, consistency, and strategy—helping your business stand out and stay memorable.' },
    { title: 'High-Impact Web Design', category: 'UI/UX | Responsive Design | Conversion-Focused', icon: 'theme-icon17.png', delay: 0.4,text:' We design fast, modern, and intuitive websites that deliver smooth user experiences and turn visitors into customers.' },
    { title: 'Digital Platform Development', category: 'Web Apps | Tools | Custom Solutions', icon: 'theme-icon18.png', delay: 0.6,text:' We build scalable digital platforms tailored to your goals—combining functionality, performance, and seamless user interaction.' },
  ];

  return (
    <section className={`services-section-four ${className || ''}`}>
      <div className="scroll-text">
        <div className="title-stroke-text text1 fadeInUpBig">
          <span>Our </span>Strengths
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
                      {item.text}
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
