import React from 'react';
import Link from 'next/link';


function TeamAwards() {

    return (
        <>
        <section className="team-awards-section">
            <div className="anim-icons">
            <div className="image-1"><img src="assets/images/icons/section-bg-shape10.png" alt="Image"/></div>
            <div className="image-2 circleZoom tm-gsap-img-parallax"><img src="assets/images/icons/shape-style34.png" alt="Image"/></div>
            <div className="image-3"><img src="assets/images/icons/shape-style56.png" alt="Image"/></div>
            </div>
            <div className="container">
            <div className="outer-box">
            <div className="row">
            <div className="col-xl-5 col-lg-5">
            <div className="sticky-section">
                <div className="sec-title">
                <span className="sub-title wow fadeInUp"><img className="icon-img" src="assets/images/icons/sub-title-shape.png" alt="Image"/> Awards</span>
                <h2 className="title wow fadeInUp">Awards Of <span>Our Team</span></h2>
                <div className="text">Elevate your brand with <span>the Agencyo</span> Agency – everything from strategy to advertising & scale.</div>
                <div className="btn-box">
                    <Link href="/page-contact" className="theme-btn btn-style-three"><div className="btn-title">More Awards</div><i className="icon flaticon-top-right"></i></Link>
                    <div className="image-shape1 bounce-x"><img src="assets/images/icons/arrow-shape.png" alt="Image"/></div>
                </div>
                </div>
                <div className="content-column">
                <div className="figure tm-gsap-animate-circle"><img src="assets/images/icons/shape-style8.png" alt="Image"/></div>
                </div>
            </div>
            </div>
            <div className="col-xl-6 col-lg-7 offset-xl-1">
            <div className="team-award-block" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                <div className="inner-box">
                <div className="number">01</div>
                <div className="content-box">
                    <div className="award-image-top"><img src="assets/images/resource/award3-a1.png" alt="Image"/></div>
                    <div className="title">Design of the year.</div>
                    <div className="year">2018</div>
                    <div className="award-image style1"><img src="assets/images/resource/award3-1.png" alt="Image"/></div>
                </div>
                </div>
            </div>
            <div className="team-award-block" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                <div className="inner-box">
                <div className="number">02</div>
                <div className="content-box">
                    <div className="award-image-top"><img src="assets/images/resource/award3-a2.png" alt="Image"/></div>
                    <div className="title">Design of the year.</div>
                    <div className="year">2023</div>
                    <div className="award-image"><img src="assets/images/resource/award3-2.png" alt="Image"/></div>
                </div>
                </div>
            </div>
            <div className="team-award-block" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
                <div className="inner-box">
                <div className="number">03</div>
                <div className="content-box">
                    <div className="award-image-top"><img src="assets/images/resource/award3-a3.png" alt="Image"/></div>
                    <div className="title">Design of the year.</div>
                    <div className="year">2024</div>
                    <div className="award-image"><img src="assets/images/resource/award3-3.png" alt="Image"/></div>
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
export default TeamAwards;
