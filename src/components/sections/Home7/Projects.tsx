import React from 'react';
import Link from 'next/link'


function Projects() {
    return (
        <>
            <section className="projects-section-six">
                <div className="scroll-text">
                <div className="title-stroke-text text2 fadeInUpBig">case <span> studies</span></div>
                </div>
                <div className="anim-icons">
                <div className="image-1 tm-gsap-animate-circle"><img src="assets/images/icons/shape-style23.png" alt="Image"/></div>
                </div>
                    <div className="container">
                        <div className="project-block-six scroll-text anim-fade-move" data-fade-from="top">
                            <div className="inner-box scroll-anim-top">
                                <div className="row align-items-center">
                                    <div className="col-xxl-5 col-xl-6 col-md-12">
                                        <div className="image-box">
                                            <figure className="image">
                                                <Link href="/page-project-details">
                                                    <img src="assets/images/resource/project7-1.jpg" alt="Image"/>
                                                    <img src="assets/images/resource/project7-1.jpg" alt="Image"/>
                                                </Link>
                                            </figure>
                                        </div>
                                    </div>
                                    <div className="col-xxl-7 col-xl-6 col-md-12">
                                        <div className="content-box">
                                            <div className="sl-number">1</div>
                                            <div className="categories">Product Design</div>
                                            <h3 className="title"><Link href="/page-project-details">Harmony website <br/> design</Link></h3>
                                            <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim  minim odio labore adipiscing elit amet neque</div>
                                            <Link href="/page-project-details" className="theme-btn btn-style-four">
                                                <span className="btn-title">View Project Details</span>
                                                <span className="dot-box"><span className="dot-item"></span></span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="project-block-six scroll-text anim-fade-move" data-fade-from="top">
                            <div className="inner-box scroll-anim-top">
                                <div className="row align-items-center">
                                    <div className="col-xxl-5 col-xl-6 col-md-12">
                                        <div className="image-box">
                                            <figure className="image">
                                                <Link href="/page-project-details">
                                                    <img src="assets/images/resource/project7-2.jpg" alt="Image"/>
                                                    <img src="assets/images/resource/project7-2.jpg" alt="Image"/>
                                                </Link>
                                            </figure>
                                        </div>
                                    </div>
                                    <div className="col-xxl-7 col-xl-6 col-md-12">
                                        <div className="content-box">
                                            <div className="sl-number">2</div>
                                            <div className="categories">Product Design</div>
                                            <h3 className="title"><Link href="/page-project-details">Harmony website <br/> design</Link></h3>
                                            <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim  minim odio labore adipiscing elit amet neque</div>
                                            <Link href="/page-project-details" className="theme-btn btn-style-four">
                                                <span className="btn-title">View Project Details</span>
                                                <span className="dot-box"><span className="dot-item"></span></span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="project-block-six scroll-text anim-fade-move" data-fade-from="top">
                            <div className="inner-box scroll-anim-top">
                                <div className="row align-items-center">
                                    <div className="col-xxl-5 col-xl-6 col-md-12">
                                        <div className="image-box">
                                            <figure className="image">
                                                <Link href="/page-project-details">
                                                    <img src="assets/images/resource/project7-3.jpg" alt="Image"/>
                                                    <img src="assets/images/resource/project7-3.jpg" alt="Image"/>
                                                </Link>
                                            </figure>
                                        </div>
                                    </div>
                                    <div className="col-xxl-7 col-xl-6 col-md-12">
                                        <div className="content-box">
                                            <div className="sl-number">3</div>
                                            <div className="categories">Product Design</div>
                                            <h3 className="title"><Link href="/page-project-details">Harmony website <br/> design</Link></h3>
                                            <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim  minim odio labore adipiscing elit amet neque</div>
                                            <Link href="/page-project-details" className="theme-btn btn-style-four">
                                                <span className="btn-title">View Project Details</span>
                                                <span className="dot-box"><span className="dot-item"></span></span>
                                            </Link>
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
