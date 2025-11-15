import React from 'react';
import Link from 'next/link';


function Projects() {

    return (
        <>
            <section className="projects-section-two style-two">
                <div className="anim-icons">
                <div className="image-1 circleZoom tm-gsap-img-parallax"><img src="assets/images/icons/shape-style23.png" alt="Image"/></div>
                </div>    
                <div className="container">
                <div className="sec-title">
                    <div className="row">
                    <div className="col-lg-4">
                        <div className="sticky-section">
                        <span className="sub-title wow fadeInUp"><img className="icon-img" src="assets/images/icons/sub-title-shape.png" alt="Image"/> Projects</span>
                        <h2 className="title wow fadeInUp">Our selected <br/><span>projects</span></h2>
                        <div className="btn-box">
                            <Link href="/page-services" className="theme-btn btn-style-four">
                            <span className="btn-title">All Services</span>
                            <span className="dot-box"><span className="dot-item"></span></span>
                            </Link>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="row">
                        <div className="project-block-two col-lg-12 col-md-6">
                            <div className="inner-box">
                            <div className="image-box">
                                <figure className="image">
                                <Link href="/page-project-details">
                                    <img src="assets/images/resource/project2-1.jpg" alt="Image"/>
                                    <img src="assets/images/resource/project2-1.jpg" alt="Image"/>
                                </Link>
                                </figure>
                            </div>
                            <div className="content-box">
                                <h4 className="title"><Link href="/page-project-details">Mastartery</Link></h4>
                                <div className="text">Design - 2016</div>
                            </div>
                            </div>
                        </div>
                        <div className="project-block-two col-lg-12 col-md-6">
                            <div className="inner-box">
                            <div className="image-box">
                                <figure className="image">
                                <Link href="/page-project-details">
                                    <img src="assets/images/resource/project2-2.jpg" alt="Image"/>
                                    <img src="assets/images/resource/project2-2.jpg" alt="Image"/>
                                </Link>
                                </figure>
                            </div>
                            <div className="content-box">
                                <h4 className="title"><Link href="/page-project-details">Roadmap</Link></h4>
                                <div className="text">Design - 2016</div>
                            </div>
                            </div>
                        </div>
                        <div className="project-block-two col-lg-12 col-md-6">
                            <div className="inner-box">
                            <div className="image-box">
                                <figure className="image">
                                <Link href="/page-project-details">
                                    <img src="assets/images/resource/project2-3.jpg" alt="Image"/>
                                    <img src="assets/images/resource/project2-3.jpg" alt="Image"/>
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
                </div>
            </section>
        </>
    )
}
export default Projects;
