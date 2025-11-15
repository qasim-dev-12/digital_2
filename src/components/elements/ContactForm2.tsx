import React from 'react';

function ContactForm (){
    return (
        <form method="post" action="/" id="contact-form">
            <div className="row gx-3">
                <div className="form-group col-lg-12 col-md-12 col-sm-12">
                    <label htmlFor="full_name" className="visually-hidden">Full Name</label>
                    <input
                        type="text"
                        id="full_name"
                        name="full_name"
                        placeholder="Your Name"
                        required
                        className="form-control"
                    />
                </div>

                <div className="form-group col-lg-12 col-md-12 col-sm-12">
                    <label htmlFor="email" className="visually-hidden">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email Address"
                        required
                        className="form-control"
                    />
                </div>

                <div className="form-group col-lg-12 col-md-12 col-sm-12">
                    <label htmlFor="website" className="visually-hidden">Website</label>
                    <input
                        type="url"
                        id="website"
                        name="website"
                        placeholder="Website"
                        required
                        className="form-control"
                    />
                </div>

                <div className="form-group col-lg-12 col-md-12 col-sm-12">
                    <label htmlFor="message" className="visually-hidden">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Your Comment"
                        required
                        className="form-control"
                        rows={5}
                    ></textarea>
                </div>

                <div className="form-group col-lg-12 col-md-12 col-sm-12">
                    <button
                        className="theme-btn btn-style-one"
                        type="submit"
                        name="submit-form"
                    >
                        <span className="btn-title">GET SOLUTION</span>
                    </button>
                </div>
            </div>
        </form>
    );
};

export default ContactForm;