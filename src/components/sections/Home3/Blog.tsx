import React,{useEffect} from 'react'
import Link from 'next/link';

 function Blog() {

  useEffect(() => {
    import('aos').then((AOS) => {
      AOS.init({ once: true, duration: 1000 });
      AOS.refreshHard();
    });
  }, []);

    return (
        <>
            <section className="blog-section-two">
                <div className="container">
                    <div className="sec-title">
                        <div className="row">
                            <div className="col-lg-7">
                                <span className="sub-title wow fadeInUp"><img className="icon-img" src="assets/images/icons/sub-title-shape.png" alt="Image"/> From the blog</span>
                                <h2 className="title wow fadeInUp">Check out latest news <br/>update <span>& articles</span></h2>
                            </div>
                            <div className="col-lg-5">
                                <div className="text ps-lg-5 mt-lg-5">Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="blog-block-two col-lg-4 col-md-6">
                        <div className="inner-box" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                            <div className="image-box">
                            <figure className="image">
                                <Link href="/news-details">
                                <img src="assets/images/resource/blog3-1.png" alt="Image"/>
                                <img src="assets/images/resource/blog3-1.png" alt="Image"/>
                                </Link>
                            </figure>
                            </div>
                            <div className="content-box">
                            <div className="post-meta">
                                <div className="category">UI Design <span>.</span></div>
                                <div className="author">admin</div>
                            </div>
                            <h4 className="title"><Link href="/news-details">The Ultimate Guide to Content Marketing for Businesses</Link></h4>
                            <Link className="btn-link-style1" href="/news-details"><span className="btn-title">Read more</span> <i className="icon fa-light fa-arrow-down-right"></i></Link>
                            </div>
                        </div>
                        </div>
                        <div className="blog-block-two col-lg-4 col-md-6">
                        <div className="inner-box" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                            <div className="image-box">
                            <figure className="image">
                                <Link href="/news-details">
                                <img src="assets/images/resource/blog3-2.png" alt="Image"/>
                                <img src="assets/images/resource/blog3-2.png" alt="Image"/>
                                </Link>
                            </figure>
                            </div>
                            <div className="content-box">
                            <div className="post-meta">
                                <div className="category">UI Design <span>.</span></div>
                                <div className="author">admin</div>
                            </div>
                            <h4 className="title"><Link href="/news-details">The Ultimate Guide to Content Marketing for Businesses</Link></h4>
                            <Link className="btn-link-style1" href="/news-details"><span className="btn-title">Read more</span> <i className="icon fa-light fa-arrow-down-right"></i></Link>
                            </div>
                        </div>
                        </div>
                        <div className="blog-block-two col-lg-4 col-md-6">
                        <div className="inner-box" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
                            <div className="image-box">
                            <figure className="image">
                                <Link href="/news-details">
                                <img src="assets/images/resource/blog3-3.png" alt="Image"/>
                                <img src="assets/images/resource/blog3-3.png" alt="Image"/>
                                </Link>
                            </figure>
                            </div>
                            <div className="content-box">
                            <div className="post-meta">
                                <div className="category">UI Design <span>.</span></div>
                                <div className="author">admin</div>
                            </div>
                            <h4 className="title"><Link href="/news-details">The Ultimate Guide to Content Marketing for Businesses</Link></h4>
                            <Link className="btn-link-style1" href="/news-details"><span className="btn-title">Read more</span> <i className="icon fa-light fa-arrow-down-right"></i></Link>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Blog;
