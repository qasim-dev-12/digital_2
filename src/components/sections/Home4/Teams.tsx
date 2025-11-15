import React from 'react';
import Link from 'next/link';

function Teams() {
    return (
        <>
            <section className="team-section-three">
                <div className="scroll-text">
                    <div className="title-stroke-text text2 fadeInUpBig"><span>Meet Our </span>Team</div>
                </div>
                <div className="outer-box">
                    <div className="container">
                        <div className="sec-title">
                            <div className="row">
                                <div className="col-lg-7">
                                    <span className="sub-title wow fadeInUp"><img className="icon-img" src="assets/images/icons/sub-title-shape.png" alt="Image" /> Our Team</span>
                                    <h2 className="title wow fadeInUp">
                                        The geniuses behind <br />
                                        <span>The scenes</span>
                                    </h2>
                                </div>
                                <div className="col-lg-5">
                                    <div className="text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="team-block-three" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                                    <div className="inner-box text-center">
                                        <div className="image-box">
                                            <figure className="image">
                                                <Link href="/page-team-details">
                                                    <img src="assets/images/resource/team3-1.png" alt="Image" />
                                                </Link>
                                                <svg className="shape-style1" width="304" height="543" viewBox="0 0 304 543" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M304 0H103.746L0 288.319H86.8571L14.4762 543L265.397 192.212H176.127L304 0Z" />
                                                </svg>
                                                <ul className="social-icon-list1">
                                                    <li>
                                                        <Link href="#"><i className="fab fa-instagram"></i></Link>
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
                                            <h4 className="name"><Link href="/page-team-details">Wade Warren</Link></h4>
                                            <span className="designation">UX Designer, Research</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="team-block-three" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                                    <div className="inner-box text-center">
                                        <div className="image-box">
                                            <figure className="image">
                                                <Link href="/page-team-details">
                                                    <img src="assets/images/resource/team3-2.png" alt="Image" />
                                                </Link>
                                                <svg className="shape-style1" width="304" height="543" viewBox="0 0 304 543" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M304 0H103.746L0 288.319H86.8571L14.4762 543L265.397 192.212H176.127L304 0Z" />
                                                </svg>
                                            </figure>
                                            <ul className="social-icon-list1">
                                                <li>
                                                    <Link href="#"><i className="fab fa-instagram"></i></Link>
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
                                            <h4 className="name"><Link href="/page-team-details">Leslie Alexander</Link></h4>
                                            <span className="designation">UX Designer, Research</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="team-block-three" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
                                    <div className="inner-box text-center">
                                        <div className="image-box">
                                            <figure className="image">
                                                <Link href="/page-team-details">
                                                    <img src="assets/images/resource/team3-3.png" alt="Image" />
                                                </Link>
                                                <svg className="shape-style1" width="304" height="543" viewBox="0 0 304 543" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M304 0H103.746L0 288.319H86.8571L14.4762 543L265.397 192.212H176.127L304 0Z" />
                                                </svg>
                                                <ul className="social-icon-list1">
                                                    <li>
                                                        <Link href="#"><i className="fab fa-instagram"></i></Link>
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
                                            <h4 className="name"><Link href="/page-team-details">Eleanor Pena</Link></h4>
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
