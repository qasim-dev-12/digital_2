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
                  <div className="text anim-text-flip-move">We work with top industries across the UAE, offering tailored digital marketing strategies that boost visibility, engagement, and long-term growth.</div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="project-block scroll-text anim-fade-move col-lg-6 col-md-6" data-fade-from="top">
              <div className="inner-box scroll-anim-top">
                <div className="image-box">
                  <figure className="image">
                    <Link href="/industries/real-estate">
                      <img src="assets/images/resource/01 Real Estate.png" alt="Image" />
                      <img src="assets/images/resource/01 Real Estate.png" alt="Image" />
                    </Link>
                  </figure>
                </div>
                <div className="content-box">
                  <h4 className="title"><Link href="/industries/real-estate">Real Estate & Property Developers</Link></h4>
                  {/* <div className="text">Design - 2016</div> */}
                </div>
              </div>
            </div>
            <div className="project-block scroll-text anim-fade-move col-lg-5 offset-lg-1 col-md-6" data-fade-from="bottom" data-delay="0.25">
              <div className="inner-box scroll-anim-top">
                <div className="image-box">
                  <figure className="image">
                    <Link href="/industries/automotive-car-care">
                      <img src="assets/images/resource/02 Automotive.png" alt="Image" />
                      <img src="assets/images/resource/02 Automotive.png" alt="Image" />
                    </Link>
                  </figure>
                </div>
                <div className="content-box">
                  <h4 className="title"><Link href="/industries/automotive-car-care">Automotive & Car Care</Link></h4>
                  {/* <div className="text">Design - 2019</div> */}
                </div>
              </div>
            </div>
            <div className="project-block scroll-text anim-fade-move col-lg-5 col-md-6" data-fade-from="top">
              <div className="inner-box scroll-anim-top">
                <div className="image-box">
                  <figure className="image">
                    <Link href="/industries/healthcare-clinics">
                      <img src="assets/images/resource/03 Healthcare.png" alt="Image" />
                      <img src="assets/images/resource/03 Healthcare.png" alt="Image" />
                    </Link>
                  </figure>
                </div>
                <div className="content-box">
                  <h4 className="title"><Link href="/industries/healthcare-clinics">Healthcare & Clinics</Link></h4>
                  {/* <div className="text">Design - 2020</div> */}
                </div>
              </div>
            </div>
            <div className="project-block scroll-text anim-fade-move col-lg-6 offset-lg-1 col-md-6" data-fade-from="bottom" data-delay="0.45">
              <div className="inner-box scroll-anim-top">
                <div className="image-box">
                  <figure className="image">
                    <Link href="/industries/restaurants-cafes-fb-brands">
                      <img src="assets/images/resource/04 Restaurants.png" alt="Image" />
                      <img src="assets/images/resource/04 Restaurants.png" alt="Image" />
                    </Link>
                  </figure>
                </div>
                <div className="content-box">
                  <h4 className="title"><Link href="/industries/restaurants-cafes-fb-brands">Restaurants, Cafés & F&B Brands</Link></h4>
                  {/* <div className="text">Design - 2021</div> */}
                </div>
              </div>
            </div>
              <div className="project-block scroll-text anim-fade-move col-lg-6 col-md-6" data-fade-from="top">
              <div className="inner-box scroll-anim-top">
                <div className="image-box">
                  <figure className="image">
                    <Link href="/industries/e-commerce-online-stores">
                      <img src="assets/images/resource/05 E-Commerce.png" alt="Image" />
                      <img src="assets/images/resource/05 E-Commerce.png" alt="Image" />
                    </Link>
                  </figure>
                </div>
                <div className="content-box">
                  <h4 className="title"><Link href="/industries/e-commerce-online-stores">E-Commerce & Online Stores</Link></h4>
                  {/* <div className="text">Design - 2016</div> */}
                </div>
              </div>
            </div>
            <div className="project-block scroll-text anim-fade-move col-lg-5 offset-lg-1 col-md-6" data-fade-from="bottom" data-delay="0.25">
              <div className="inner-box scroll-anim-top">
                <div className="image-box">
                  <figure className="image">
                    <Link href="/industries/hospitality-tourism">
                      <img src="assets/images/resource/06 Hospitality.png" alt="Image" />
                      <img src="assets/images/resource/06 Hospitality.png" alt="Image" />
                    </Link>
                  </figure>
                </div>
                <div className="content-box">
                  <h4 className="title"><Link href="/industries/hospitality-tourism">Hospitality & Tourism</Link></h4>
                  {/* <div className="text">Design - 2019</div> */}
                </div>
              </div>
            </div>
            <div className="project-block scroll-text anim-fade-move col-lg-5 col-md-6" data-fade-from="top">
              <div className="inner-box scroll-anim-top">
                <div className="image-box">
                  <figure className="image">
                    <Link href="/industries/education-training-institutes">
                      <img src="assets/images/resource/07 Education.png" alt="Image" />
                      <img src="assets/images/resource/07 Education.png" alt="Image" />
                    </Link>
                  </figure>
                </div>
                <div className="content-box">
                  <h4 className="title"><Link href="/industries/education-training-institutes">Education & Training Institutes</Link></h4>
                  {/* <div className="text">Design - 2020</div> */}
                </div>
              </div>
            </div>
            <div className="project-block scroll-text anim-fade-move col-lg-6 offset-lg-1 col-md-6" data-fade-from="bottom" data-delay="0.45">
              <div className="inner-box scroll-anim-top">
                <div className="image-box">
                  <figure className="image">
                    <Link href="/industries/beauty-salon-personal-care">
                      <img src="assets/images/resource/08 Beauty.png" alt="Image" />
                      <img src="assets/images/resource/08 Beauty.png" alt="Image" />
                    </Link>
                  </figure>
                </div>
                <div className="content-box">
                  <h4 className="title"><Link href="/industries/beauty-salon-personal-care"> Beauty, Salon & Personal Care</Link></h4>
                  {/* <div className="text">Design - 2021</div> */}
                </div>
              </div>
            </div>
             <div className="project-block scroll-text anim-fade-move col-lg-6 col-md-6" data-fade-from="top">
              <div className="inner-box scroll-anim-top">
                <div className="image-box">
                  <figure className="image">
                    <Link href="/industries/construction-contracting">
                      <img src="assets/images/resource/09 Construction.png" alt="Image" />
                      <img src="assets/images/resource/09 Construction.png" alt="Image" />
                    </Link>
                  </figure>
                </div>
                <div className="content-box">
                  <h4 className="title"><Link href="/industries/construction-contracting">Construction & Contracting
</Link></h4>
                  {/* <div className="text">Design - 2016</div> */}
                </div>
              </div>
            </div>
            <div className="project-block scroll-text anim-fade-move col-lg-5 offset-lg-1 col-md-6" data-fade-from="bottom" data-delay="0.25">
              <div className="inner-box scroll-anim-top">
                <div className="image-box">
                  <figure className="image">
                    <Link href="/industries/logistics-transport">
                      <img src="assets/images/resource/10 Logistics.png" alt="Image" />
                      <img src="assets/images/resource/10 Logistics.png" alt="Image" />
                    </Link>
                  </figure>
                </div>
                <div className="content-box">
                  <h4 className="title"><Link href="/industries/logistics-transport">Logistics & Transport</Link></h4>
                  {/* <div className="text">Design - 2019</div> */}
                </div>
              </div>
            </div>
            <div className="project-block scroll-text anim-fade-move col-lg-5 col-md-6" data-fade-from="top">
              <div className="inner-box scroll-anim-top">
                <div className="image-box">
                  <figure className="image">
                    <Link href="/industries/cleaning-home-services">
                      <img src="assets/images/resource/11 Cleaning.png" alt="Image" />
                      <img src="assets/images/resource/11 Cleaning.png" alt="Image" />
                    </Link>
                  </figure>
                </div>
                <div className="content-box">
                  <h4 className="title"><Link href="/industries/cleaning-home-services">Cleaning & Home Services</Link></h4>
                  {/* <div className="text">Design - 2020</div> */}
                </div>
              </div>
            </div>
            <div className="project-block scroll-text anim-fade-move col-lg-6 offset-lg-1 col-md-6" data-fade-from="bottom" data-delay="0.45">
              <div className="inner-box scroll-anim-top">
                <div className="image-box">
                  <figure className="image">
                    <Link href="/industries/technology-it-services">
                      <img src="assets/images/resource/12 Technology.png" alt="Image" />
                      <img src="assets/images/resource/12 Technology.png" alt="Image" />
                    </Link>
                  </figure>
                </div>
                <div className="content-box">
                  <h4 className="title"><Link href="/industries/technology-it-services">Technology & IT Services</Link></h4>
                  {/* <div className="text">Design - 2021</div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="btn-box anim-fade-move" data-fade-from="top">
            <Link href="/industries" className="btn-link anim-fade-move" data-fade-from="top" data-ease="bounce">View All Work <img className="icon-img" src="assets/images/icons/theme-icon4.png" alt="" /></Link>
          </div>
        </div>
      </section>
        </>
    )
}
export default ProjectSection;