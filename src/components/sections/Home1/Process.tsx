import React from 'react';
import Link from 'next/link';

const processSteps = [
  {
    step: 'Step 01',
    icon: 'assets/images/icons/theme-icon5.png',
    title: 'Research & Planning',
    text: 'We analyze your goals, target audience, and brand requirements to build a clear roadmap for success.',
  },
  {
    step: 'Step 02',
    icon: 'assets/images/icons/theme-icon6.png',
    title: 'Strategy & Creative Execution',
    text: 'Our team develops data-driven marketing strategies and produces compelling creatives tailored to your brand.',
  },
  {
    step: 'Step 03',
    icon: 'assets/images/icons/theme-icon7.png',
    title: 'Launch & Optimization',
    text: 'We execute campaigns across selected platforms and continuously optimize them for maximum performance.',
  },
  {
    step: 'Step 04',
    icon: 'assets/images/icons/theme-icon8.png',
    title: 'Reporting & Ongoing Support',
    text: 'You receive transparent performance reports, insights, and continuous support to ensure long-term growth.',
  },
];

const ProcessSection = () => {
  return (
    <section className="process-section">
      <div className="anim-icons">
        <div className="image-1 tm-gsap-img-parallax">
          <img src="assets/images/icons/shape-style52.png" alt="image" />
        </div>
      </div>

      <div className="scroll-text">
        <div className="title-stroke-text text2 fadeInUpBig"><span>Our</span> Process</div>
      </div>

      <div className="container">
        <div className="outer-box">
          <div className="row">
            {processSteps.map((step, idx) => (
              <div className="process-block col-xl-3 col-md-6" key={idx}>
                <div className="inner-box">
                  <div className="title-box">
                    <div className="text">{step.step}</div>
                  </div>
                  <div className="content-box">
                    <div className="icon-box">
                      <img className="icon-img" src={`/${step.icon}`} alt="icon" />
                    </div>
                    <h4 className="title">
                      <Link href="/page-project-details">{step.title}</Link>
                    </h4>
                    <div className="text">{step.text}</div>
                    <div className="hover-lines"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
