import React, {useEffect} from 'react'
import Link from 'next/link';

export default function TeamGrid() {
  useEffect(() => {
    import('aos').then((AOS) => {
      AOS.init({ once: true, duration: 1000 });
      AOS.refreshHard();
    });
  }, []);

    return (
        <>
        <section className="team-section-three pb-50">
          {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, porro?</p> */}
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="team-block-three" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                  <div className="inner-box text-center">
                    <div className="image-box">                            
                      <figure className="image">
                        <Link href="/page-team/real-estate">
                          <img src="assets/images/resource/01-Real Estate.png" alt="Image"/>
                        </Link>
                        <svg className="shape-style1" width="304" height="543" viewBox="0 0 304 543" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M304 0H103.746L0 288.319H86.8571L14.4762 543L265.397 192.212H176.127L304 0Z"/>
                        </svg>
                        {/* <ul className="social-icon-list1">
                          <li><Link href="#"><i className="fab fa-instagram"></i></Link></li>
                          <li><Link href="#"><i className="fab fa-linkedin-in"></i></Link></li>
                          <li><Link href="#"><i className="fab fa-youtube"></i></Link></li>
                        </ul> */}
                        <ul className="social-icon-list1">
                          <Link href="/page-about" className="theme-btn btn-style-four">
                      <span className="btn-title">Read More</span>
                      <span className="dot-box">
                        <span className="dot-item"></span>
                      </span>
                    </Link>
                        </ul>
                       
                      </figure>
                    </div>
                    <div className="content-box">
                      <h4 className="name"><Link href="/page-team/real-estate">Real Estate & Property Developers</Link></h4>
                      <span className="designation">Luxury property marketing</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="team-block-three" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                  <div className="inner-box text-center">
                    <div className="image-box">                            
                      <figure className="image">
                        <Link href="/page-team/automotive-car-care">
                          <img src="assets/images/resource/02-Automotive.png" alt="Image"/>
                        </Link>
                        <svg className="shape-style1" width="304" height="543" viewBox="0 0 304 543" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M304 0H103.746L0 288.319H86.8571L14.4762 543L265.397 192.212H176.127L304 0Z"/>
                        </svg>
                      </figure>
                    <ul className="social-icon-list1">
                          <Link href="/page-about" className="theme-btn btn-style-four">
                      <span className="btn-title">Read More</span>
                      <span className="dot-box">
                        <span className="dot-item"></span>
                      </span>
                    </Link>
                        </ul>
                    </div>
                    <div className="content-box">
                      <h4 className="name"><Link href="/page-team/automotive-car-care">Automotive & Car Care</Link></h4>
                      <span className="designation">Precision car detailing</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
              
                <div className="team-block-three" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
                  <div className="inner-box text-center">
                    <div className="image-box">                            
                      <figure className="image">
                        <Link href="/page-team/healthcare-clinics">
                          <img src="assets/images/resource/03-Healthcare.png" alt="Image"/>
                        </Link>
                        <svg className="shape-style1" width="304" height="543" viewBox="0 0 304 543" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M304 0H103.746L0 288.319H86.8571L14.4762 543L265.397 192.212H176.127L304 0Z"/>
                        </svg>
                      <ul className="social-icon-list1">
                          <Link href="/page-about" className="theme-btn btn-style-four">
                      <span className="btn-title">Read More</span>
                      <span className="dot-box">
                        <span className="dot-item"></span>
                      </span>
                    </Link>
                        </ul>
                      </figure>
                    </div>
                    <div className="content-box">
                      <h4 className="name"><Link href="/page-team/healthcare-clinics">Healthcare & Clinics</Link></h4>
                      <span className="designation">Trusted patient care</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
              
                <div className="team-block-three" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                  <div className="inner-box text-center">
                    <div className="image-box">                            
                      <figure className="image">
                        <Link href="/page-team/restaurants-cafes-fb-brands">
                          <img src="assets/images/resource/04-Restaurants.png" alt="Image"/>
                        </Link>
                        <svg className="shape-style1" width="304" height="543" viewBox="0 0 304 543" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M304 0H103.746L0 288.319H86.8571L14.4762 543L265.397 192.212H176.127L304 0Z"/>
                        </svg>
                      </figure>
                    <ul className="social-icon-list1">
                          <Link href="/page-about" className="theme-btn btn-style-four">
                      <span className="btn-title">Read More</span>
                      <span className="dot-box">
                        <span className="dot-item"></span>
                      </span>
                    </Link>
                        </ul>
                    </div>
                    <div className="content-box">
                      <h4 className="name"><Link href="/page-team/restaurants-cafes-fb-brands">Restaurants, Cafés & F&B Brands</Link></h4>
                      <span className="designation">Flavor-first dining experiences</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
              
                <div className="team-block-three" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
                  <div className="inner-box text-center">
                    <div className="image-box">                            
                      <figure className="image">
                        <Link href="/page-team/e-commerce-online-stores">
                          <img src="assets/images/resource/05-E-Commerce.png" alt="Image"/>
                        </Link>
                        <svg className="shape-style1" width="304" height="543" viewBox="0 0 304 543" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M304 0H103.746L0 288.319H86.8571L14.4762 543L265.397 192.212H176.127L304 0Z"/>
                        </svg>
                      <ul className="social-icon-list1">
                          <Link href="/page-about" className="theme-btn btn-style-four">
                      <span className="btn-title">Read More</span>
                      <span className="dot-box">
                        <span className="dot-item"></span>
                      </span>
                    </Link>
                        </ul>
                      </figure>
                    </div>
                    <div className="content-box">
                      <h4 className="name"><Link href="/page-team/e-commerce-online-stores">E-Commerce & Online Stores</Link></h4>
                      <span className="designation">Convert clicks to sales</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
              
                <div className="team-block-three" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                  <div className="inner-box text-center">
                    <div className="image-box">                            
                      <figure className="image">
                        <Link href="/page-team/hospitality-tourism">
                          <img src="assets/images/resource/06-Hospitality.png" alt="Image"/>
                        </Link>
                        <svg className="shape-style1" width="304" height="543" viewBox="0 0 304 543" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M304 0H103.746L0 288.319H86.8571L14.4762 543L265.397 192.212H176.127L304 0Z"/>
                        </svg>
                      <ul className="social-icon-list1">
                          <Link href="/page-about" className="theme-btn btn-style-four">
                      <span className="btn-title">Read More</span>
                      <span className="dot-box">
                        <span className="dot-item"></span>
                      </span>
                    </Link>
                        </ul>
                      </figure>
                    </div>
                    <div className="content-box">
                      <h4 className="name"><Link href="/page-team/hospitality-tourism">Hospitality & Tourism</Link></h4>
                      <span className="designation">Memorable guest stays</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
              
                <div className="team-block-three" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                  <div className="inner-box text-center">
                    <div className="image-box">                            
                      <figure className="image">
                        <Link href="/page-team/education-training-institutes">
                          <img src="assets/images/resource/07-Education.png" alt="Image"/>
                        </Link>
                        <svg className="shape-style1" width="304" height="543" viewBox="0 0 304 543" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M304 0H103.746L0 288.319H86.8571L14.4762 543L265.397 192.212H176.127L304 0Z"/>
                        </svg>
                       <ul className="social-icon-list1">
                          <Link href="/page-about" className="theme-btn btn-style-four">
                      <span className="btn-title">Read More</span>
                      <span className="dot-box">
                        <span className="dot-item"></span>
                      </span>
                    </Link>
                        </ul>
                      </figure>
                    </div>
                    <div className="content-box">
                      <h4 className="name"><Link href="/page-team/education-training-institutes">Education & Training Institutes</Link></h4>
                      <span className="designation"> Learning that empowers</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
              
                <div className="team-block-three" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                  <div className="inner-box text-center">
                    <div className="image-box">                            
                      <figure className="image">
                        <Link href="/page-team/beauty-salon-personal-care">
                          <img src="assets/images/resource/08-Salons.png" alt="Image"/>
                        </Link>
                        <svg className="shape-style1" width="304" height="543" viewBox="0 0 304 543" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M304 0H103.746L0 288.319H86.8571L14.4762 543L265.397 192.212H176.127L304 0Z"/>
                        </svg>
                       <ul className="social-icon-list1">
                          <Link href="/page-about" className="theme-btn btn-style-four">
                      <span className="btn-title">Read More</span>
                      <span className="dot-box">
                        <span className="dot-item"></span>
                      </span>
                    </Link>
                        </ul>
                      </figure>
                    </div>
                    <div className="content-box">
                      <h4 className="name"><Link href="/page-team/beauty-salon-personal-care">Beauty, Salon & Personal Care</Link></h4>
                      <span className="designation"> Beauty that shines</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
              
                <div className="team-block-three" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                  <div className="inner-box text-center">
                    <div className="image-box">                            
                      <figure className="image">
                        <Link href="/page-team/construction-contracting">
                          <img src="assets/images/resource/09-Construction.png" alt="Image"/>
                        </Link>
                        <svg className="shape-style1" width="304" height="543" viewBox="0 0 304 543" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M304 0H103.746L0 288.319H86.8571L14.4762 543L265.397 192.212H176.127L304 0Z"/>
                        </svg>
                      <ul className="social-icon-list1">
                          <Link href="/page-about" className="theme-btn btn-style-four">
                      <span className="btn-title">Read More</span>
                      <span className="dot-box">
                        <span className="dot-item"></span>
                      </span>
                    </Link>
                        </ul>
                      </figure>
                    </div>
                    <div className="content-box">
                      <h4 className="name"><Link href="/page-team/construction-contracting">Construction & Contracting</Link></h4>
                      <span className="designation">Building with precision</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
              
                <div className="team-block-three" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                  <div className="inner-box text-center">
                    <div className="image-box">                            
                      <figure className="image">
                        <Link href="/page-team/logistics-transport">
                          <img src="assets/images/resource/10-Logistics.png" alt="Image"/>
                        </Link>
                        <svg className="shape-style1" width="304" height="543" viewBox="0 0 304 543" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M304 0H103.746L0 288.319H86.8571L14.4762 543L265.397 192.212H176.127L304 0Z"/>
                        </svg>
                      <ul className="social-icon-list1">
                          <Link href="/page-about" className="theme-btn btn-style-four">
                      <span className="btn-title">Read More</span>
                      <span className="dot-box">
                        <span className="dot-item"></span>
                      </span>
                    </Link>
                        </ul>
                      </figure>
                    </div>
                    <div className="content-box">
                      <h4 className="name"><Link href="/page-team/logistics-transport">Logistics & Transport</Link></h4>
                      <span className="designation">Reliable delivery networks</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
              
                <div className="team-block-three" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                  <div className="inner-box text-center">
                    <div className="image-box">                            
                      <figure className="image">
                        <Link href="/page-team/cleaning-home-services">
                          <img src="assets/images/resource/11-Home Services.png" alt="Image"/>
                        </Link>
                        <svg className="shape-style1" width="304" height="543" viewBox="0 0 304 543" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M304 0H103.746L0 288.319H86.8571L14.4762 543L265.397 192.212H176.127L304 0Z"/>
                        </svg>
                       <ul className="social-icon-list1">
                          <Link href="/page-about" className="theme-btn btn-style-four">
                      <span className="btn-title">Read More</span>
                      <span className="dot-box">
                        <span className="dot-item"></span>
                      </span>
                    </Link>
                        </ul>
                      </figure>
                    </div>
                    <div className="content-box">
                      <h4 className="name"><Link href="/page-team/cleaning-home-services">Cleaning & Home Services</Link></h4>
                      <span className="designation">Spotless, dependable service</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
              
                <div className="team-block-three" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                  <div className="inner-box text-center">
                    <div className="image-box">                            
                      <figure className="image">
                        <Link href="/page-team/technology-it-services">
                          <img src="assets/images/resource/12-Technology.png" alt="Image"/>
                        </Link>
                        <svg className="shape-style1" width="304" height="543" viewBox="0 0 304 543" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M304 0H103.746L0 288.319H86.8571L14.4762 543L265.397 192.212H176.127L304 0Z"/>
                        </svg>
                      <ul className="social-icon-list1">
                          <Link href="/page-about" className="theme-btn btn-style-four">
                      <span className="btn-title">Read More</span>
                      <span className="dot-box">
                        <span className="dot-item"></span>
                      </span>
                    </Link>
                        </ul>
                      </figure>
                    </div>
                    <div className="content-box">
                      <h4 className="name"><Link href="/page-team/technology-it-services">Technology & IT Services</Link></h4>
                      <span className="designation">Scalable tech solutions</span>
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
