import React from 'react';
import Link from 'next/link';

function Team() {
    return (
        <>
      <section className="team-section">
        <div className="scroll-text">
          <div className="title-stroke-text text2 fadeInUpBig"><span>Our </span>team</div>
        </div>
        <div className="anim-icons">
          <div className="image-1">
            <img src="assets/images/icons/shape-style26.png" alt="Image" />
          </div>
        </div>
        <div className="container">
          <div className="sec-title">
            <div className="row">
              <div className="col-lg-7">
                <span className="sub-title wow fadeInUp"><img className="icon-img" src="assets/images/icons/sub-title-shape.png" alt="Image" /> Our Team</span>
                <h2 className="title wow fadeInUp">The geniuses behind <br /><span>The scenes</span></h2>
              </div>
              <div className="col-lg-5">
                <div className="text ps-lg-5">Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</div>
              </div>
            </div>
          </div>
        </div>
        <div className="outer-box">
          <div className="container">
            <div className="row g-0">
              <div className="team-clomun col-lg-4 col-md-6">
                <div className="team-block" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                  <div className="inner-box text-center">
                    <div className="image-box">
                      <figure className="image">
                        <Link href="/page-team-details">
                          <img src="assets/images/resource/team1-1.png" alt="Image" />
                        </Link>
                        <ul className="social-icon-list1">
                          <li>
                            <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                          </li>
                          <li>
                            <Link href="#"><i className="fab fa-linkedin-in"></i></Link>
                          </li>
                          <li>
                            <Link href="#"><i className="fab fa-youtube"></i></Link>
                          </li>
                        </ul>
                      </figure>
                    </div>
                    <div className="content-box">
                      <h4 className="name"><Link href="/page-team-details">Brooklyn Simmons</Link></h4>
                      <span className="designation">Project Manager</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="team-clomun col-lg-4 col-md-6">
                <div className="team-block" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                  <div className="inner-box text-center">
                    <div className="image-box">
                      <figure className="image">
                        <Link href="/page-team-details">
                          <img src="assets/images/resource/team1-2.png" alt="Image" />
                        </Link>
                      </figure>
                      <ul className="social-icon-list1">
                        <li>
                          <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                        </li>
                        <li>
                          <Link href="#"><i className="fab fa-linkedin-in"></i></Link>
                        </li>
                        <li>
                          <Link href="#"><i className="fab fa-youtube"></i></Link>
                        </li>
                      </ul>
                    </div>
                    <div className="content-box">
                      <h4 className="name"><Link href="/page-team-details">Eleanor Pena</Link></h4>
                      <span className="designation">UX Designer, Research</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="team-clomun col-lg-4 col-md-6">
                <div className="team-block" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
                  <div className="inner-box text-center">
                    <div className="image-box">
                      <figure className="image">
                        <Link href="page-team-details.html">
                          <img src="assets/images/resource/team1-3.png" alt="Image" />
                        </Link>
                        <ul className="social-icon-list1">
                          <li>
                            <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                          </li>
                          <li>
                            <Link href="#"><i className="fab fa-linkedin-in"></i></Link>
                          </li>
                          <li>
                            <Link href="#"><i className="fab fa-youtube"></i></Link>
                          </li>
                        </ul>
                      </figure>
                    </div>
                    <div className="content-box">
                      <h4 className="name"><Link href="/page-team-details">Arlene McCoy</Link></h4>
                      <span className="designation">Project Manager</span>
                    </div>
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
export default Team;
