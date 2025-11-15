import React from 'react';
import Link from 'next/link';

function Projects() {
    return (
        <>
          <section className="projects-section-two">
            <div className="anim-icons">
              <div className="image-1 tm-gsap-animate-circle"><img src="assets/images/icons/shape-style23.png" alt="Image" /></div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-4 scroll-to-fixed-parent">
                  <div className="scroll-to-fixed-child">
                    <div className="sec-title">
                      <span className="sub-title wow fadeInUp"><img className="icon-img" src="assets/images/icons/sub-title-shape.png" alt="Image" /> Projects</span>
                      <h2 className="title wow fadeInUp">Our selected <br /><span>projects</span></h2>
                      <Link href="/page-project-details" className="theme-btn btn-style-four">
                        <span className="btn-title">See More</span>
                        <span className="dot-box"><span className="dot-item"></span></span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="title-text mb-5">Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</div>
                  <div className="project-outer">
                    <div className="project-block-two" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                      <div className="inner-box">
                        <div className="image-box">
                          <figure className="image">
                            <Link href="/page-project-details">
                              <img src="assets/images/resource/project2-1.jpg" alt="Image" />
                              <img src="assets/images/resource/project2-1.jpg" alt="Image" />
                            </Link>
                          </figure>
                        </div>
                        <div className="content-box">
                          <h4 className="title"><Link href="/page-project-details">Mastartery</Link></h4>
                          <div className="text">Design - 2016</div>
                        </div>
                      </div>
                    </div>
                    <div className="project-block-two" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                      <div className="inner-box">
                        <div className="image-box">
                          <figure className="image">
                            <Link href="/page-project-details">
                              <img src="assets/images/resource/project2-2.jpg" alt="Image" />
                              <img src="assets/images/resource/project2-2.jpg" alt="Image" />
                            </Link>
                          </figure>
                        </div>
                        <div className="content-box">
                          <h4 className="title"><Link href="/page-project-details">Roadmap</Link></h4>
                          <div className="text">Design - 2016</div>
                        </div>
                      </div>
                    </div>
                    <div className="project-block-two" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                      <div className="inner-box">
                        <div className="image-box">
                          <figure className="image">
                            <Link href="/page-project-details">
                              <img src="assets/images/resource/project2-3.jpg" alt="Image" />
                              <img src="assets/images/resource/project2-3.jpg" alt="Image" />
                            </Link>
                          </figure>
                        </div>
                        <div className="content-box">
                          <h4 className="title"><Link href="/page-project-details">Behind Creta UX</Link></h4>
                          <div className="text">Design - 2016</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="scroll-text">
              <div className="title-stroke-text text2 fadeInUpBig"><span>our case studies</span></div>
            </div>
          </section>
        </>
    )
}
export default Projects;
