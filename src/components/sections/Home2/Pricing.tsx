import React, { useState } from 'react';
import Link from 'next/link';

function Pricing() {
  const [activePlan, setActivePlan] = useState('month');

  return (
    <>
      <section className="pricing-section">
        <div className="auto-container">
          <div className="row">
            <div className="content-column col-xl-5">
              <div className="inner-column">
                <div className="sec-title">
                  <span className="sub-title">
                    <img className="icon-img" src="assets/images/icons/sub-title-shape.png" alt="Image" />Pricing
                  </span>
                  <h2 className="title">
                    Choose Right Pricing <br /> Plans for <span className="color1">Your Business</span>
                  </h2>
                </div>
                <div className="info-box">
                  <span className="icon fa fa-check"></span>
                  <h4 className="title">Quality Services</h4>
                  <div className="text">
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                  </div>
                </div>
                <div className="info-box">
                  <span className="icon fa fa-check"></span>
                  <h4 className="title">Business Management</h4>
                  <div className="text">
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
                  </div>
                </div>
                
                {/* Toggle Buttons */}
                <div className="tm-pricing-smart-switcher-button round-switch-btn">
                  <ul className="switch-buttons pt-1 mb-60">
                    <li className={activePlan === 'month' ? 'active' : ''}>
                      <button
                        type="button"
                        className={`btn-toggle ${activePlan === 'month' ? 'active' : ''}`}
                        onClick={() => setActivePlan('month')}
                      >
                        <span className="title">Monthly</span>
                      </button>
                    </li>
                    <li className={activePlan === 'year' ? 'active' : ''}>
                      <button
                        type="button"
                        className={`btn-toggle ${activePlan === 'year' ? 'active' : ''}`}
                        onClick={() => setActivePlan('year')}
                      >
                        <span className="title">Yearly</span> <span className="price-offer">20% Off</span>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Pricing Plans */}
            <div className="pricing-column col-xl-7">
              <div className="inner-column wow fadeInLeft">
                
                {/* Basic Plan */}
                <div className="tm-pricing-table pricing-block">
                  <div className="inner-box">
                    <div className="icon-box">
                      <i className="icon flaticon-digitalization"></i>
                    </div>
                    <h4 className="title">Basic Plan</h4>

                    {activePlan === 'month' ? (
                      <div className="price-box price-normal">
                        <h4 className="price"><span>$</span>49</h4>
                        <span className="validaty">/ Monthly</span>
                      </div>
                    ) : (
                      <div className="price-box price-secondary">
                        <h4 className="price"><span>$</span>79</h4>
                        <span className="validaty">/ Yearly</span>
                      </div>
                    )}

                    <ul className="features">
                      <li>24/7 system monitoring</li>
                      <li>Security management</li>
                      <li>Patch management</li>
                      <li>Remote support</li>
                    </ul>
                    <div className="btn-box">
                      <Link href="/page-pricing" className="theme-btn btn-style-one">
                        <span className="btn-title">Choose Plan</span>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Pro Plan */}
                <div className="tm-pricing-table pricing-block pull-left">
                  <div className="inner-box">
                    <div className="icon-box">
                      <i className="icon flaticon-digital-marketing"></i>
                    </div>
                    <h4 className="title">Pro Plan</h4>

                    {activePlan === 'month' ? (
                      <div className="price-box price-normal">
                        <h4 className="price"><span>$</span>69</h4>
                        <span className="validaty">/ Monthly</span>
                      </div>
                    ) : (
                      <div className="price-box price-secondary">
                        <h4 className="price"><span>$</span>89</h4>
                        <span className="validaty">/ Yearly</span>
                      </div>
                    )}

                    <ul className="features">
                      <li>24/7 system monitoring</li>
                      <li>Security management</li>
                      <li>Patch management</li>
                      <li>Remote support</li>
                    </ul>
                    <div className="btn-box">
                      <Link href="/page-pricing" className="theme-btn btn-style-one dark-bg">
                        <span className="btn-title">Choose plan</span>
                      </Link>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default Pricing;
