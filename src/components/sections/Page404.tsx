import Link from 'next/link';
import React from 'react';


function Error (){
  return (
    <section className="error-page pt-120 pb-70">
      <div className="auto-container">
        <div className="error-page__inner text-center">
          <div className="error-page__title-box mb-30">
            <img src="/assets/images/resource/404.png" alt="404 Error" />
            <h3 className="error-page__sub-title mt-20">Page not found!</h3>
          </div>
          <p className="error-page__text mb-30">
            Sorry, we can't find that page! The page you are looking for does not exist.
          </p>
          <form
            className="error-page__form mb-30"
            onSubmit={(e) => e.preventDefault()}
            role="search"
          >
            <label htmlFor="error-search" className="visually-hidden">
              Search
            </label>
            <div className="error-page__form-input d-flex align-items-center justify-content-center">
              <input
                type="search"
                id="error-search"
                name="q"
                placeholder="Search here"
                className="form-control"
                aria-label="Search"
              />
              <button type="submit" aria-label="Submit Search">
                <i className="far fa-magnifying-glass" />
              </button>
            </div>
          </form>
          <Link className="theme-btn btn-style-one shop-now" href="/">
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Error;