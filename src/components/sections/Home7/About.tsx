import React from 'react'
import Link from 'next/link'

function About() {
    return (
        <>
            <section className="about-section style-two">
                <div className="anim-icons">
                    <div className="image-1 tm-gsap-img-parallax"><img src="assets/images/icons/shape-1.png" alt="image"/></div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="image-column col-lg-6">
                            <div className="inner-colmun">
                                <figure className="image">
                                    <img src="assets/images/resource/about1-1.png" alt="image"/>
                                </figure>
                            </div>
                        </div>
                        <div className="content-column col-lg-6">
                            <div className="inner-column">
                                <div className="sec-title">
                                    <span className="sub-title" ><img className="icon-img" src="assets/images/icons/sub-title-shape.png" alt="Image"/> ABOUT US</span>
                                    <h2 className="title" >We deliver innovative ideas to elevate your digital agency <span className="color1">and sharpen your brand</span></h2>
                                    <p className="text" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim .</p>							
                                </div>
                                <div className="btn-box">
                                    <Link href="/page-about" className="theme-btn btn-style-one"><span className="btn-title">Read More</span><i className="icon fa fa-arrow-up-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default About;
