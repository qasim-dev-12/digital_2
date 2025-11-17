import React from 'react'
import Link from 'next/link';

function ProjectSection() {
    return (
        <>
      <section className="projects-section">
        <div className="anim-icons">
          <div className="image-1 tm-gsap-img-parallax"><img src="assets/images/icons/shape-style20.png" alt="" /></div>
          <div className="image-2 tm-gsap-img-parallax"><img src="assets/images/icons/shape-style21.png" alt="" /></div>
        </div>
        <div className="container">
          <div className="sec-title pb-5">
            <div className="row content-row">
              <div className="col-lg-6">
                <span className="sub-title anim-text-flip-move"><img className="icon-img" src="assets/images/icons/sub-title-shape.png" alt="" />Industries we serve</span>
                <h2 className="title anim-text-split-char">Helping Businesses Grow Across  <span className="color1">Every Major Industry</span></h2>
              </div>
              <div className="col-lg-5 offset-lg-1">
                <div className="left-content">
                  <div className="text anim-text-flip-move">Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="project-block scroll-text anim-fade-move col-lg-6 col-md-6" data-fade-from="top">
              <div className="inner-box scroll-anim-top">
                <div className="image-box">
                  <figure className="image">
                    <Link href="/page-project-details">
                      <img src="assets/images/resource/project1-1.jpg" alt="Image" />
                      <img src="assets/images/resource/project1-1.jpg" alt="Image" />
                    </Link>
                  </figure>
                </div>
                <div className="content-box">
                  <h4 className="title"><Link href="/page-project-details">Real Estate & Property Developers</Link></h4>
                  {/* <div className="text">Design - 2016</div> */}
                </div>
              </div>
            </div>
            <div className="project-block scroll-text anim-fade-move col-lg-5 offset-lg-1 col-md-6" data-fade-from="bottom" data-delay="0.25">
              <div className="inner-box scroll-anim-top">
                <div className="image-box">
                  <figure className="image">
                    <Link href="/page-project-details">
                      <img src="assets/images/resource/project1-2.jpg" alt="Image" />
                      <img src="assets/images/resource/project1-2.jpg" alt="Image" />
                    </Link>
                  </figure>
                </div>
                <div className="content-box">
                  <h4 className="title"><Link href="/page-project-details">Automotive & Car Care</Link></h4>
                  <div className="text">Design - 2019</div>
                </div>
              </div>
            </div>
            <div className="project-block scroll-text anim-fade-move col-lg-5 col-md-6" data-fade-from="top">
              <div className="inner-box scroll-anim-top">
                <div className="image-box">
                  <figure className="image">
                    <Link href="/page-project-details">
                      <img src="assets/images/resource/project1-3.jpg" alt="Image" />
                      <img src="assets/images/resource/project1-3.jpg" alt="Image" />
                    </Link>
                  </figure>
                </div>
                <div className="content-box">
                  <h4 className="title"><Link href="/page-project-details">Healthcare & Clinics</Link></h4>
                  <div className="text">Design - 2020</div>
                </div>
              </div>
            </div>
            <div className="project-block scroll-text anim-fade-move col-lg-6 offset-lg-1 col-md-6" data-fade-from="bottom" data-delay="0.45">
              <div className="inner-box scroll-anim-top">
                <div className="image-box">
                  <figure className="image">
                    <Link href="/page-project-details">
                      <img src="assets/images/resource/project1-4.jpg" alt="Image" />
                      <img src="assets/images/resource/project1-4.jpg" alt="Image" />
                    </Link>
                  </figure>
                </div>
                <div className="content-box">
                  <h4 className="title"><Link href="/page-project-details">Restaurants, Cafés & F&B Brands</Link></h4>
                  <div className="text">Design - 2021</div>
                </div>
              </div>
            </div>
              <div className="project-block scroll-text anim-fade-move col-lg-6 offset-lg-1 col-md-6" data-fade-from="bottom" data-delay="0.45">
              <div className="inner-box scroll-anim-top">
                <div className="image-box">
                  <figure className="image">
                    <Link href="/page-project-details">
                      <img src="assets/images/resource/project1-4.jpg" alt="Image" />
                      <img src="assets/images/resource/project1-4.jpg" alt="Image" />
                    </Link>
                  </figure>
                </div>
                <div className="content-box">
                  <h4 className="title"><Link href="/page-project-details">E-Commerce & Online Stores
</Link></h4>
                  <div className="text">Design - 2021</div>
                </div>
              </div>
            </div>
              <div className="project-block scroll-text anim-fade-move col-lg-6 offset-lg-1 col-md-6" data-fade-from="bottom" data-delay="0.45">
              <div className="inner-box scroll-anim-top">
                <div className="image-box">
                  <figure className="image">
                    <Link href="/page-project-details">
                      <img src="assets/images/resource/project1-4.jpg" alt="Image" />
                      <img src="assets/images/resource/project1-4.jpg" alt="Image" />
                    </Link>
                  </figure>
                </div>
                <div className="content-box">
                  <h4 className="title"><Link href="/page-project-details">Hospitality & Tourism
</Link></h4>
                  <div className="text">Design - 2021</div>
                </div>
              </div>
            </div>
              <div className="project-block scroll-text anim-fade-move col-lg-6 offset-lg-1 col-md-6" data-fade-from="bottom" data-delay="0.45">
              <div className="inner-box scroll-anim-top">
                <div className="image-box">
                  <figure className="image">
                    <Link href="/page-project-details">
                      <img src="assets/images/resource/project1-4.jpg" alt="Image" />
                      <img src="assets/images/resource/project1-4.jpg" alt="Image" />
                    </Link>
                  </figure>
                </div>
                <div className="content-box">
                  <h4 className="title"><Link href="/page-project-details">Education & Training Institutes</Link></h4>
                  <div className="text">Design - 2021</div>
                </div>
              </div>
            </div>
              <div className="project-block scroll-text anim-fade-move col-lg-6 offset-lg-1 col-md-6" data-fade-from="bottom" data-delay="0.45">
              <div className="inner-box scroll-anim-top">
                <div className="image-box">
                  <figure className="image">
                    <Link href="/page-project-details">
                      <img src="assets/images/resource/project1-4.jpg" alt="Image" />
                      <img src="assets/images/resource/project1-4.jpg" alt="Image" />
                    </Link>
                  </figure>
                </div>
                <div className="content-box">
                  <h4 className="title"><Link href="/page-project-details">Beauty, Salon & Personal Care</Link></h4>
                  <div className="text">Design - 2021</div>
                </div>
              </div>
            </div>
              <div className="project-block scroll-text anim-fade-move col-lg-6 offset-lg-1 col-md-6" data-fade-from="bottom" data-delay="0.45">
              <div className="inner-box scroll-anim-top">
                <div className="image-box">
                  <figure className="image">
                    <Link href="/page-project-details">
                      <img src="assets/images/resource/project1-4.jpg" alt="Image" />
                      <img src="assets/images/resource/project1-4.jpg" alt="Image" />
                    </Link>
                  </figure>
                </div>
                <div className="content-box">
                  <h4 className="title"><Link href="/page-project-details">Construction & Contracting</Link></h4>
                  <div className="text">Design - 2021</div>
                </div>
              </div>
            </div>
              <div className="project-block scroll-text anim-fade-move col-lg-6 offset-lg-1 col-md-6" data-fade-from="bottom" data-delay="0.45">
              <div className="inner-box scroll-anim-top">
                <div className="image-box">
                  <figure className="image">
                    <Link href="/page-project-details">
                      <img src="assets/images/resource/project1-4.jpg" alt="Image" />
                      <img src="assets/images/resource/project1-4.jpg" alt="Image" />
                    </Link>
                  </figure>
                </div>
                <div className="content-box">
                  <h4 className="title"><Link href="/page-project-details">Logistics & Transport
</Link></h4>
                  <div className="text">Design - 2021</div>
                </div>
              </div>
            </div>
              <div className="project-block scroll-text anim-fade-move col-lg-6 offset-lg-1 col-md-6" data-fade-from="bottom" data-delay="0.45">
              <div className="inner-box scroll-anim-top">
                <div className="image-box">
                  <figure className="image">
                    <Link href="/page-project-details">
                      <img src="assets/images/resource/project1-4.jpg" alt="Image" />
                      <img src="assets/images/resource/project1-4.jpg" alt="Image" />
                    </Link>
                  </figure>
                </div>
                <div className="content-box">
                  <h4 className="title"><Link href="/page-project-details">Cleaning & Home Services</Link></h4>
                  <div className="text">Design - 2021</div>
                </div>
              </div>
            </div>
              <div className="project-block scroll-text anim-fade-move col-lg-6 offset-lg-1 col-md-6" data-fade-from="bottom" data-delay="0.45">
              <div className="inner-box scroll-anim-top">
                <div className="image-box">
                  <figure className="image">
                    <Link href="/page-project-details">
                      <img src="assets/images/resource/project1-4.jpg" alt="Image" />
                      <img src="assets/images/resource/project1-4.jpg" alt="Image" />
                    </Link>
                  </figure>
                </div>
                <div className="content-box">
                  <h4 className="title"><Link href="/page-project-details"> Technology & IT Services</Link></h4>
                  <div className="text">Design - 2021</div>
                </div>
              </div>
            </div>
          </div>
          <div className="btn-box anim-fade-move" data-fade-from="top">
            <Link href="/page-project-details" className="btn-link anim-fade-move" data-fade-from="top" data-ease="bounce">View All Work <img className="icon-img" src="assets/images/icons/theme-icon4.png" alt="" /></Link>
          </div>
        </div>
      </section>
        </>
    )
}
export default ProjectSection;