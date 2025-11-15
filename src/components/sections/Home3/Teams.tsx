import React from 'react'
import Link from 'next/link';

 function Teams() {


    return (
        <>
        <section className="team-section-two">
            <div className="anim-icons">
                    <div className="image-1"><img src="assets/images/icons/section-bg-shape7.png" alt="Image"/></div>
                </div>
            <div className="container">
            <div className="sec-title text-center">
                <span className="sub-title wow fadeInUp"><img className="icon-img" src="assets/images/icons/sub-title-shape.png" alt="Image"/> Our Team</span>
                <h2 className="title wow fadeInUp">The geniuses behind <br/><span>The scenes</span></h2>
            </div>
            <div className="outer-box">
                <div className="row">
                <div className="col-lg-4 col-md-6">
                    <div className="team-block-two" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                    <div className="inner-box text-center">
                        <div className="image-box">                            
                        <figure className="image">
                            <Link href="/page-team-details">
                            <img src="assets/images/resource/team2-1.png" alt="Image"/>
                            </Link>
                            <svg className="shape-style1" width="236" height="374" viewBox="0 0 236 374" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M236 0H80.5397L0 198.584H67.4286L11.2381 374L206.032 132.389H136.73L236 0Z" fill="#D9F45F"/>
                            </svg>
                            <ul className="social-icon-list1">
                            <li><Link href="#"><i className="flaticon-instagram"></i></Link></li>
                            <li><Link href="#"><i className="flaticon-twitter"></i></Link></li>
                            <li><Link href="#"><i className="flaticon-linkedin"></i></Link></li>
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
                <div className="col-lg-4 col-md-6">
                    <div className="team-block-two" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                    <div className="inner-box text-center">
                        <div className="image-box">                            
                        <figure className="image">
                            <Link href="/page-team-details">
                            <img src="assets/images/resource/team2-2.png" alt="Image"/>
                            </Link>
                            <svg className="shape-style1" width="236" height="374" viewBox="0 0 236 374" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M236 0H80.5397L0 198.584H67.4286L11.2381 374L206.032 132.389H136.73L236 0Z" fill="#D9F45F"/>
                            </svg>
                            <ul className="social-icon-list1">
                            <li><Link href="#"><i className="flaticon-instagram"></i></Link></li>
                            <li><Link href="#"><i className="flaticon-twitter"></i></Link></li>
                            <li><Link href="#"><i className="flaticon-linkedin"></i></Link></li>
                            </ul>
                        </figure>                  
                        </div>
                        <div className="content-box">
                        <h4 className="name"><Link href="/page-team-details">Eleanor Pena</Link></h4>
                        <span className="designation">UX Designer, Research</span>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="team-block-two" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                    <div className="inner-box text-center">
                        <div className="image-box">                            
                        <figure className="image">
                            <Link href="/page-team-details">
                            <img src="assets/images/resource/team2-3.png" alt="Image"/>
                            </Link>
                            <svg className="shape-style1" width="236" height="374" viewBox="0 0 236 374" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M236 0H80.5397L0 198.584H67.4286L11.2381 374L206.032 132.389H136.73L236 0Z" fill="#D9F45F"/>
                            </svg>
                            <ul className="social-icon-list1">
                            <li><Link href="#"><i className="flaticon-instagram"></i></Link></li>
                            <li><Link href="#"><i className="flaticon-twitter"></i></Link></li>
                            <li><Link href="#"><i className="flaticon-linkedin"></i></Link></li>
                            </ul>
                        </figure>
                        </div>
                        <div className="content-box">
                        <h4 className="name"><Link href="/page-team-details">Brooklyn Simmons</Link></h4>
                        <span className="designation">UX Designer, Research</span>
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
export default Teams;
