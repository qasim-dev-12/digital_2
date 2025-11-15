import React from 'react'
import Link from 'next/link';

 function Process() {
    return (
        <>
          <section className="process-section theme-color-bg">
            <div className="container">     
              <div className="outer-box">
                <div className="sec-title light text-center">
                  <span className="sub-title wow fadeInUp"><img className="icon-img" src="assets/images/icons/sub-title-shape-2.png" alt="Image"/> How It Work</span>
                  <h2 className="title wow fadeInUp">Our Standard Design <br/><span>Thinking Process</span></h2>
                </div>
                <div className="row">
                  <div className="process-block col-xl-3 col-md-6">
                    <div className="inner-box">
                      <div className="title-box">
                        <div className="text">Step 01</div>
                      </div>
                      <div className="content-box border-radius">
                        <div className="icon-box"><img className="icon-img" src="assets/images/icons/theme-icon5.png" alt="Image"/></div>
                        <h4 className="title"><Link href="/page-project-details">Tailored Solutions</Link></h4>
                        <div className="text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nonummy.</div>
                      </div>
                    </div>
                  </div>
                  <div className="process-block col-xl-3 col-md-6">
                    <div className="inner-box">
                      <div className="title-box">
                        <div className="text">Step 02</div>
                      </div>
                      <div className="content-box border-radius">
                        <div className="icon-box"><img className="icon-img" src="assets/images/icons/theme-icon6.png" alt="Image"/></div>
                        <h4 className="title"><Link href="/page-project-details">Expert Team</Link></h4>
                        <div className="text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nonummy.</div>
                      </div>
                    </div>
                  </div>
                  <div className="process-block col-xl-3 col-md-6">
                    <div className="inner-box">
                      <div className="title-box">
                        <div className="text">Step 03</div>
                      </div>
                      <div className="content-box border-radius">
                        <div className="icon-box"><img className="icon-img" src="assets/images/icons/theme-icon7.png" alt="Image"/></div>
                        <h4 className="title"><Link href="/page-project-details">Driven Insights</Link></h4>
                        <div className="text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nonummy.</div>
                      </div>
                    </div>
                  </div>
                  <div className="process-block col-xl-3 col-md-6">
                    <div className="inner-box">
                      <div className="title-box">
                        <div className="text">Step 04</div>
                      </div>
                      <div className="content-box border-radius">
                        <div className="icon-box"><img className="icon-img" src="assets/images/icons/theme-icon8.png" alt="Image"/></div>
                        <h4 className="title"><Link href="/page-project-details">Ongoing Support</Link></h4>
                        <div className="text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nonummy.</div>
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
export default Process;
