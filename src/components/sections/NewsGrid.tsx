import React, { useEffect } from 'react';
import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    title: 'Five ways that can develop your business website',
    image: '/assets/images/resource/blog1-1.jpg',
    delay: 200,
  },
  {
    id: 2,
    title: 'Five ways that can develop your business website',
    image: '/assets/images/resource/blog1-2.jpg',
    delay: 400,
  },
  {
    id: 3,
    title: 'Five ways that can develop your business website',
    image: '/assets/images/resource/blog1-3.jpg',
    delay: 600,
  },
  {
    id: 4,
    title: 'Five ways that can develop your business website',
    image: '/assets/images/resource/blog1-2.jpg',
    delay: 400,
  },
  {
    id: 5,
    title: 'Five ways that can develop your business website',
    image: '/assets/images/resource/blog1-3.jpg',
    delay: 600,
  },
  {
    id: 6,
    title: 'Five ways that can develop your business website',
    image: '/assets/images/resource/blog1-1.jpg',
    delay: 200,
  },
];

const BlogOne = () => {
  useEffect(() => {
    import('aos').then((AOS) => {
      AOS.init({ once: true, duration: 1000 });
      AOS.refreshHard();
    });
  }, []);

  return (
    <section className="blog-section pt-120 pb-60">
      <div className="container">
        <div className="row">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="blog-block col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={post.delay}
            >
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image">
                    <Link href="/news-details">
                      <img src={post.image} alt={post.title} />
                      <img src={post.image} alt={post.title} />
                    </Link>
                  </figure>
                </div>
                <div className="content-box">
                  <h4 className="title">
                    <Link href="/news-details">{post.title}</Link>
                  </h4>
                  <Link className="btn-link-style1" href="/news-details">
                    <span className="btn-title">Read more</span>{' '}
                    <i className="icon fa-light fa-arrow-down-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogOne;
