import React from 'react';

function Banner() {
    return (
        <>
        <section className="banner-section-seven">
            <div className="banner-slider">
                <div className="banner-slide">
                    <div className="bg slide-image" style={{backgroundImage: 'url(assets/images/banner/banner7-1.png)'}}></div>
                    <div className="anim-icons">
                    <div className="shape-image1 tm-gsap-animate-circle"><img src="assets/images/banner/banner7-2.png" alt="Image"/></div>
                    <img className="shape-image2" src="assets/images/banner/banner7-3.png" alt="Image"/>
                    <img className="shape-image3" src="assets/images/banner/banner7-4.png" alt="Image"/>
                    <img className="shape-image4" src="assets/images/banner/banner7-5.png" alt="Image"/>
                    </div>
                    <div className="outer-box">
                        <div className="container">
                            <div className="row">
                            <div className="content-box col-lg-12">
                                <div className="inner-box">
                                    <div className="sub-title">Creative</div>
                                <h2 className="title animate-3">Digital</h2>
                                <div className="text-box">
                                    <div className="text-two">Agency</div>
                                    <div className="text">We are dedicated to delivering high-quality solutions that help your business grow. Our experienced team works closely with clients to ensure every project meets their expectations and goals.</div>
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
export default Banner;
