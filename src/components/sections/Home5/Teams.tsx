import React, {useEffect} from 'react'
import Link from 'next/link';

function Teams() {

  useEffect(() => {
    import('aos').then((AOS) => {
      AOS.init({ once: true, duration: 1000 });
      AOS.refreshHard();
    });
  }, []);

    return (
        <>
        <section className="team-section-four">
            <div className="anim-icons">
                <div className="image-1"><img src="assets/images/icons/shape-style59.png" alt="Image"/></div>
            </div>
            <div className="container">
            <div className="sec-title">
                <div className="row">
                <div className="col-lg-7">
                    <span className="sub-title wow fadeInUp"><img className="icon-img" src="assets/images/icons/sub-title-shape.png" alt="Image"/> Our Team</span>
                    <h2 className="title wow fadeInUp">The geniuses behind <br/><span>The scenes</span></h2>
                </div>
                <div className="col-lg-5">
                    <div className="text ps-lg-5">Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</div>
                </div>
                </div>
            </div>
            <div className="outer-box">
                <div className="row">
                <div className="col-lg-4 col-md-6">
                    <div className="team-block-four" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                    <div className="inner-box text-center">
                        <div className="image-box">                            
                        <figure className="image">
                            <Link href="/page-team-details">
                            <img src="assets/images/resource/team4-1.png" alt="Image"/>
                            </Link>
                            <ul className="social-icon-list1">
                            <li><Link href="#"><i className="fab fa-facebook-f"></i></Link></li>
                            <li><Link href="#"><i className="fab fa-linkedin-in"></i></Link></li>
                            <li><Link href="#"><i className="fab fa-youtube"></i></Link></li>
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
                    <div className="team-block-four" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                    <div className="inner-box text-center">
                        <div className="image-box">                            
                        <figure className="image">
                            <Link href="/page-team-details">
                            <img src="assets/images/resource/team4-2.png" alt="Image"/>
                            </Link>
                        </figure>
                        <ul className="social-icon-list1">
                            <li><Link href="#"><i className="fab fa-facebook-f"></i></Link></li>
                            <li><Link href="#"><i className="fab fa-linkedin-in"></i></Link></li>
                            <li><Link href="#"><i className="fab fa-youtube"></i></Link></li>
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
                    <div className="team-block-four" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                    <div className="inner-box text-center">
                        <div className="image-box">                            
                        <figure className="image">
                            <Link href="/page-team-details">
                            <img src="assets/images/resource/team4-3.png" alt="Image"/>
                            </Link>
                            <ul className="social-icon-list1">
                            <li><Link href="#"><i className="fab fa-facebook-f"></i></Link></li>
                            <li><Link href="#"><i className="fab fa-linkedin-in"></i></Link></li>
                            <li><Link href="#"><i className="fab fa-youtube"></i></Link></li>
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
                    <div className="team-block-four" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                    <div className="inner-box text-center">
                        <div className="image-box">                            
                        <figure className="image">
                            <Link href="/page-team-details">
                            <img src="assets/images/resource/team4-4.png" alt="Image"/>
                            </Link>
                            <ul className="social-icon-list1">
                            <li><Link href="#"><i className="fab fa-facebook-f"></i></Link></li>
                            <li><Link href="#"><i className="fab fa-linkedin-in"></i></Link></li>
                            <li><Link href="#"><i className="fab fa-youtube"></i></Link></li>
                            </ul>
                        </figure>
                        </div>
                        <div className="content-box">
                            <h4 className="name"><Link href="/page-team-details">Guy Hawkins</Link></h4>
                            <span className="designation">UX Designer, Research</span>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="team-block-four" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
                    <div className="inner-box text-center">
                        <div className="image-box">                            
                        <figure className="image">
                            <Link href="/page-team-details">
                            <img src="assets/images/resource/team4-5.png" alt="Image"/>
                            </Link>
                        </figure>
                        <ul className="social-icon-list1">
                            <li><Link href="#"><i className="fab fa-facebook-f"></i></Link></li>
                            <li><Link href="#"><i className="fab fa-linkedin-in"></i></Link></li>
                            <li><Link href="#"><i className="fab fa-youtube"></i></Link></li>
                        </ul>
                        </div>
                        <div className="content-box">
                        <h4 className="name"><Link href="/page-team-details">Jenny Wilson</Link></h4>
                        <span className="designation">UX Designer, Research</span>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="team-block-four" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="700">
                    <div className="inner-box text-center">
                        <div className="team-member">
                        <div className="inner">
                            <div>
                            <div className="total">10+</div>
                            <h4 className="title"><Link href="/page-team-details">Other Member</Link></h4>
                            <Link className="btn-link-style" href="page-team-details.html">See All Members</Link>
                            </div>
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
export default Teams;
