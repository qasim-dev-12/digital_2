import React from 'react';
import Link from 'next/link';

const BlogOne = () => {
  return (
    <section className="blog-details pt-120 pb-120">
      <div className="container">
        <div className="row">
          {/* Blog Content */}
          <div className="col-xl-8 col-lg-7">
            <div className="blog-details__left">
              <div className="blog-details__img">
                <img
                  src="/assets/images/resource/news-details.jpg"
                  alt="News Details"
                />
                <div className="blog-details__date">
                  <span className="day">28</span>
                  <span className="month">Aug</span>
                </div>
              </div>

              <div className="blog-details__content">
                <ul className="blog-details__meta list-unstyled">
                  <li>
                    <Link href="/news-details">
                      <i className="fas fa-user-circle" /> Admin
                    </Link>
                  </li>
                  <li>
                    <Link href="/news-details">
                      <i className="fas fa-comments" /> 02 Comments
                    </Link>
                  </li>
                </ul>

                <h3 className="blog-details__title">
                  Delivering the best web design agency
                </h3>

                {[...Array(3)].map((_, i) => (
                  <p className="blog-details__text-2" key={i}>
                    Mauris non dignissim purus, ac commodo diam. Donec sit amet
                    lacinia nulla. Aliquam quis purus in justo pulvinar tempor.
                    Aliquam tellus nulla, sollicitudin at euismod nec, feugiat
                    at nisi. Quisque vitae odio nec lacus interdum tempus.
                    Phasellus a rhoncus erat. Vivamus vel eros vitae est aliquet
                    pellentesque vitae et nunc. Sed vitae leo vitae nisl
                    pellentesque semper.
                  </p>
                ))}
              </div>

              <div className="blog-details__bottom">
                <p className="blog-details__tags">
                  <span>Tags</span>
                  <Link href="/news-details">Business</Link>
                  <Link href="/news-details">Agency</Link>
                </p>

                <div className="blog-details__social-list">
                  {['twitter', 'facebook', 'pinterest-p', 'instagram'].map((icon) => (
                    <Link href="/news-details" key={icon}>
                      <i className={`fab fa-${icon}`} />
                    </Link>
                  ))}
                </div>
              </div>

              <div className="nav-links">
                <div className="prev">
                  <Link href="/news-details" rel="prev">
                    Bring to the table win-win survival strategies
                  </Link>
                </div>
                <div className="next">
                  <Link href="/news-details" rel="next">
                    How to lead a healthy &amp; well-balanced life
                  </Link>
                </div>
              </div>

              {/* Comments */}
              <div className="comment-one">
                <h3 className="comment-one__title">2 Comments</h3>

                {[{ name: 'Kevin Martin' }, { name: 'Sarah Albert' }].map((user, i) => (
                  <div className="comment-one__single" key={i}>
                    <div className="comment-one__image">
                      <img
                        src="/assets/images/resource/testi1-1.jpg"
                        alt={user.name}
                      />
                    </div>
                    <div className="comment-one__content">
                      <h3>{user.name}</h3>
                      <p>
                        Mauris non dignissim purus, ac commodo diam. Donec sit
                        amet lacinia nulla. Aliquam quis purus in justo pulvinar
                        tempor. Aliquam tellus nulla, sollicitudin at euismod.
                      </p>
                      <Link
                        href="/news-details"
                        className="theme-btn btn-style-one comment-one__btn"
                      >
                        Reply
                      </Link>
                    </div>
                  </div>
                ))}

                {/* Comment Form */}
                <div className="comment-form">
                  <h3 className="comment-form__title mb-30">Leave a Comment</h3>
                  <form id="contact_form" name="contact_form" method="post">
                    <div className="row">
                      <div className="col-sm-6 mb-3">
                        <input
                          name="form_name"
                          className="form-control"
                          type="text"
                          placeholder="Enter Name"
                        />
                      </div>
                      <div className="col-sm-6 mb-3">
                        <input
                          name="form_email"
                          className="form-control"
                          type="email"
                          placeholder="Enter Email"
                        />
                      </div>
                    </div>
                    <div className="mb-3">
                      <textarea
                        name="form_message"
                        className="form-control"
                        rows={5}
                        placeholder="Enter Message"
                      ></textarea>
                    </div>
                    <div className="mb-3">
                      <input
                        name="form_botcheck"
                        className="form-control"
                        type="hidden"
                        value=""
                      />
                      <button
                        type="submit"
                        className="theme-btn btn-style-one"
                        data-loading-text="Please wait..."
                      >
                        <span className="btn-title">Submit Comment</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-xl-4 col-lg-5">
            <aside className="sidebar">
              {/* Search */}
              <div className="sidebar__single sidebar__search">
                <form
                  className="sidebar__search-form"
                  onSubmit={(e) => e.preventDefault()}
                  role="search"
                >
                  <label htmlFor="sidebar-search" className="visually-hidden">
                    Search
                  </label>
                  <input
                    type="search"
                    id="sidebar-search"
                    name="q"
                    placeholder="Search here"
                    className="form-control"
                    aria-label="Search"
                  />
                  <button type="submit" aria-label="Submit Search">
                    <i className="far fa-search" />
                  </button>
                </form>
              </div>
              {/* Latest Posts */}
              <div className="sidebar__single sidebar__post">
                <h3 className="sidebar__title">Latest Posts</h3>
                <ul className="sidebar__post-list list-unstyled">
                  {[1, 2, 3].map((num) => (
                    <li key={num}>
                      <div className="sidebar__post-image">
                        <img
                          src={`/assets/images/resource/news-${num}.jpg`}
                          alt={`News ${num}`}
                        />
                      </div>
                      <div className="sidebar__post-content">
                        <h3>
                          <span className="sidebar__post-content-meta">
                            <i className="fas fa-user-circle" /> Admin
                          </span>
                          <Link href="/news-details">
                            {
                              [
                                'Top crypto exchange influencers',
                                'Necessity may give us best virtual court',
                                'You should know about business plan',
                              ][num - 1]
                            }
                          </Link>
                        </h3>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Categories */}
              <div className="sidebar__single sidebar__category">
                <h3 className="sidebar__title">Categories</h3>
                <ul className="sidebar__category-list list-unstyled">
                  {[
                    'Blueprint Design',
                    'Transforming Design',
                    'Landscape Design',
                    'Urban Design',
                    'Industrial Design',
                  ].map((cat, i) => (
                    <li key={i} className={cat === 'Transforming Design' ? 'active' : ''}>
                      <Link href="/news-details">
                        {cat}
                        <span className="icon-right-arrow" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              <div className="sidebar__single sidebar__tags">
                <h3 className="sidebar__title">Tags</h3>
                <div className="sidebar__tags-list">
                  {['All Project', 'Consultancy', 'Experience', 'Interior', 'Design'].map(
                    (tag, i) => (
                      <Link href="/" key={i}>
                        {tag}
                      </Link>
                    )
                  )}
                </div>
              </div>

              {/* Comments */}
              <div className="sidebar__single sidebar__comments">
                <h3 className="sidebar__title">Recent Comments</h3>
                <ul className="sidebar__comments-list list-unstyled">
                  {[1, 2, 3, 4].map((i) => (
                    <li key={i}>
                      <div className="sidebar__comments-icon">
                        <i className="fas fa-comments" />
                      </div>
                      <div className="sidebar__comments-text-box">
                        {i % 2 === 1 ? (
                          <p>
                            A WordPress commenter on <br />
                            launch new mobile app
                          </p>
                        ) : (
                          <>
                            <p>
                              <span>John Doe</span> on template:
                            </p>
                            <h5>comments</h5>
                          </>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogOne;
