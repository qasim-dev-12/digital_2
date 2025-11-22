import React from 'react';

const ContactPage = () => {
  return (
    <>
      <section className="contact-details pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-6">
              <div className="sec-title">
                <span className="sub-title">Send us an email</span>
                <h2>Feel free to write</h2>
              </div>
              <form id="contact_form" name="contact_form" className="" action="/" method="post">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <input name="form_name" className="form-control" type="text" placeholder="Enter Name"/>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <input name="form_email" className="form-control required email" type="email" placeholder="Enter Email"/>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <input name="form_subject" className="form-control required" type="text" placeholder="Enter Subject"/>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <input name="form_phone" className="form-control" type="text" placeholder="Enter Phone"/>
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <textarea name="form_message" className="form-control required" rows={7} placeholder="Enter Message"></textarea>
                </div>
                <div className="mb-5">
                  <input name="form_botcheck" className="form-control" type="hidden" value=""/>
                  <button type="submit" className="theme-btn btn-style-one mb-3 mb-xl-0" data-loading-text="Please wait..."><span className="btn-title">Send message</span></button>
                  <button type="reset" className="theme-btn btn-style-one bg-theme-color5"><span className="btn-title">Reset</span></button>
                </div>
              </form>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="contact-details__right">
                <div className="sec-title">
                  <span className="sub-title">Need any help?</span>
                  <h2>Get in touch with us</h2>
                  <div className="text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor.
                  </div>
                </div>
                <ul className="list-unstyled contact-details__info">
                  <li className="d-flex align-items-center mb-4">
                    <div className="icon"><span className="fal fa-phone-plus"></span></div>
                    <div className="text ms-3">
                      <h4>Have any questions?</h4>
                      <a href="tel:+971522367120"> +971 52 236 7120</a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center mb-4">
                    <div className="icon"><span className="fal fa-envelope"></span></div>
                    <div className="text ms-3">
                      <h4>Write email</h4>
                      <a href="mailto:info@staytop.ae">info@staytop.ae</a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="icon"><span className="fal fa-location-arrow"></span></div>
                    <div className="text ms-3">
                      <h4>Visit anytime</h4>
                      <span>Dubai, United Arab Emirates </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="map-section">
        <iframe
          className="map w-100"
         
          src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Al%20Garhoud,%20Dubai,%20UAE+(My%20Business%20Name)&t=&z=14&ie=UTF8&iwloc=B&output=embed"

          title="Google Map"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        ></iframe>
      </section>
    </>
  );
};

export default ContactPage;
