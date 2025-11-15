import React from 'react'
import Link from 'next/link';

function BlogSection() {
    return (
        <>
      <section className="blog-section style-two">
        <div className="container">
          <div className="sec-title">
            <div className="row">
              <div className="col-lg-7">
                <span className="sub-title wow fadeInUp"><img className="icon-img" src="assets/images/icons/sub-title-shape.png" alt="Image" /> From the blog</span>
                <h2 className="title wow fadeInUp">Check out latest news <br />update <span>& articles</span></h2>
              </div>
              <div className="col-lg-5">
                <div className="text ps-lg-5 mt-lg-5">Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="blog-block col-lg-4 col-md-6">
              <div className="inner-box" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                <div className="image-box">
                  <figure className="image">
                    <Link href="/news-details">
                      <img src="assets/images/resource/blog2-1.jpg" alt="Image" />
                      <img src="assets/images/resource/blog2-1.jpg" alt="Image" />
                    </Link>
                  </figure>
                </div>
                <div className="content-box">
                  <h4 className="title"><Link href="/news-details">Five ways that can develop your business website</Link></h4>
                  <Link className="btn-link-style1" href="news-details"><span className="btn-title">Read more</span> <i className="icon fa-light fa-arrow-down-right"></i></Link>
                </div>
              </div>
            </div>
            <div className="blog-block col-lg-4 col-md-6">
              <div className="inner-box" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                <div className="image-box">
                  <figure className="image">
                    <Link href="/news-details">
                      <img src="assets/images/resource/blog2-2.jpg" alt="Image" />
                      <img src="assets/images/resource/blog2-2.jpg" alt="Image" />
                    </Link>
                  </figure>
                </div>
                <div className="content-box">
                  <h4 className="title"><Link href="/news-details">Five ways that can develop your business website</Link></h4>
                  <Link className="btn-link-style1" href="news-details"><span className="btn-title">Read more</span> <i className="icon fa-light fa-arrow-down-right"></i></Link>
                </div>
              </div>
            </div>
            <div className="blog-block col-lg-4 col-md-6">
              <div className="inner-box" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
                <div className="image-box">
                  <figure className="image">
                    <Link href="/news-details">
                      <img src="assets/images/resource/blog2-3.jpg" alt="Image" />
                      <img src="assets/images/resource/blog2-3.jpg" alt="Image" />
                    </Link>
                  </figure>
                </div>
                <div className="content-box">
                  <h4 className="title"><Link href="/news-details">Five ways that can develop your business website</Link></h4>
                  <Link className="btn-link-style1" href="news-details"><span className="btn-title">Read more</span> <i className="icon fa-light fa-arrow-down-right"></i></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        </>
    )
}
export default BlogSection;