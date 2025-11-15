import Link from 'next/link';
import React from 'react';

const pricingData = [
  {
    title: 'Silver pack',
    price: 59,
    icon: '/assets/images/icons/theme-icon36.png',
    features: [
      'Schedule meetings as a team',
      'Round-Robin, Fixed Round-Robin',
      'Collective Events',
      'Advanced Routing Forms',
      'Team Workflows',
    ],
    delay: '0.15',
  },
  {
    title: 'Gold pack',
    price: 89,
    icon: '/assets/images/icons/theme-icon37.png',
    features: [
      'Schedule meetings as a team',
      'Round-Robin, Fixed Round-Robin',
      'Collective Events',
      'Advanced Routing Forms',
      'Team Workflows',
    ],
    delay: '0.25',
    active: true,
  },
  {
    title: 'Platinum pack',
    price: 99,
    icon: '/assets/images/icons/theme-icon38.png',
    features: [
      'Quick and efficient project',
      'Cost-effective solutions tailored',
      'Globally recognized quality',
      'Tailored solutions to fit',
      'Delivering more value for less.',
    ],
    delay: '0.35',
  },
];

const Pricing = () => {
  return (
    <section className="pricing-section-three pt-120 pb-60">
      <div className="container">
        <div className="row">
          {pricingData.map((item, index) => (
            <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
              <div className={`pricing-block-three anim-fade-move ${item.active ? 'active' : ''}`} data-fade-from={index === 2 ? 'right' : 'left'} data-delay={item.delay}>
                <div className="inner-box">
                  <div className="shape-image1"><img src={item.icon} alt={`${item.title} Icon`} /></div>
                  <h4 className="title">{item.title}</h4>
                  <div className="price-box">
                    <h4 className="price">
                      <sup>$</sup>
                      {item.price}
                    </h4>
                    <span className="validaty">/month</span>
                  </div>
                  <div className="text">Highly recommended for small teams who seek to upgrade their time</div>
                  <div className="list-title">What you will get:</div>
                  <ul className="features">
                    {item.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                  <div className="btn-box">
                    <Link className="theme-btn btn-style-one dark-bg hover-dark" href="/page-contact"><span className="btn-title">Choose Plan</span></Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
