import React, { useEffect } from 'react';
import Link from 'next/link';

 function Projects() {

  useEffect(() => {
    import('aos').then((AOS) => {
      AOS.init({ once: true, duration: 1000 });
      AOS.refreshHard();
    });
  }, []);

    return (
        <>
        <section className="projects-section-three pb-0">
            <div className="anim-icons">
            <div className="image-1 tm-gsap-animate-circle"><img src="assets/images/icons/shape-style23.png" alt="Image"/></div>
            <div className="image-2"><img src="assets/images/icons/section-bg-shape5.png" alt="Image"/></div>
            </div>
            <div className="scroll-text">
            <div className="title-stroke-text text2 fadeInUpBig">case<span> studies</span></div>
            </div>    
            <div className="container">
            <div className="sec-title">
                <div className="row align-items-center">
                <div className="col-lg-6">
                    <span className="sub-title wow fadeInUp"><img className="icon-img" src="assets/images/icons/sub-title-shape.png" alt="Image"/> Projects</span>
                    <h2 className="title wow fadeInUp">Our selected <br/><span>projects</span></h2>
                </div>
                <div className="col-lg-6">
                    <div className="text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</div>
                </div>
                </div>
            </div>
            </div>
            <div className="outer-box">
            <div className="row">
                <div className="project-block-three col-lg-6 col-md-6">
                <div className="inner-box" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                    <div className="image-box">
                    <figure className="image">
                        <Link href="/page-project-details">
                        <img src="assets/images/resource/project3-1.jpg" alt="Image"/>
                        <img src="assets/images/resource/project3-1.jpg" alt="Image"/>
                        </Link>
                    </figure>
                    </div>
                    <div className="content-box">
                    <h4 className="title"><Link href="/page-project-details">Mastartery</Link></h4>
                    <div className="text">Design - 2016</div>
                    </div>
                </div>
                </div>
                <div className="project-block-three col-lg-6 col-md-6">
                <div className="inner-box" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                    <div className="image-box">
                    <figure className="image">
                        <Link href="/page-project-details">
                        <img src="assets/images/resource/project3-2.jpg" alt="Image"/>
                        <img src="assets/images/resource/project3-2.jpg" alt="Image"/>
                        </Link>
                    </figure>
                    </div>
                    <div className="content-box">
                    <h4 className="title"><Link href="/page-project-details">Roadmap</Link></h4>
                    <div className="text">Design - 2016</div>
                    </div>
                </div>
                </div>
                <div className="project-block-three col-lg-6 col-md-6">
                <div className="inner-box" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
                    <div className="image-box">
                    <figure className="image">
                        <Link href="/page-project-details">
                        <img src="assets/images/resource/project3-3.jpg" alt="Image"/>
                        <img src="assets/images/resource/project3-3.jpg" alt="Image"/>
                        </Link>
                    </figure>
                    </div>
                    <div className="content-box">
                    <h4 className="title"><Link href="/page-project-details">Behind Creta UX</Link></h4>
                    <div className="text">Design - 2016</div>
                    </div>
                </div>
                </div>
                <div className="project-block-three col-lg-6 col-md-6">
                <div className="inner-box" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="800">
                    <div className="image-box">
                    <figure className="image">
                        <Link href="/page-project-details">
                        <img src="assets/images/resource/project3-4.jpg" alt="Image"/>
                        <img src="assets/images/resource/project3-4.jpg" alt="Image"/>
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
            <div className="project-button-circle" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
            <div className="inner">
                <div className="text-circle-box">
                <svg className="shape-circle1 animation__rotateY" xmlns="http://www.w3.org/2000/svg"     version="1.1" viewBox="0 0 200 200">
                    <defs>
                        <path d="M0, 100a100, 100 0 1, 0 200, 0a100, 100 0 1, 0 -200, 0" id="txt-path" />
                    </defs>
                    <circle cx="160" cy="100" r="80" fill="none" />
                    <text>
                        <textPath startOffset="0" href="#txt-path">
                            &nbsp;&nbsp;•&nbsp; My Projects &nbsp;• My Projects
                        </textPath>
                    </text>
                </svg>
                </div>
                <i className="icon fa-solid fa-arrow-right-long"></i>
            </div>
            </div>
        </section>
        </>
    )
}
export default Projects;
