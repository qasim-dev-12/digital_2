import React from 'react';

function ContactForm (){
    return (
        <form action="/" className="contact-form">
            <div className="row g-3">
                <div className="col-sm-6">
                    <label htmlFor="name" className="visually-hidden">Your Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        required
                        className="form-control"
                    />
                </div>
                <div className="col-sm-6">
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
                <div className="col-sm-6">
                    <label htmlFor="subject" className="visually-hidden">Subject</label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        placeholder="Enter Subject"
                        required
                        className="form-control"
                    />
                </div>
                <div className="col-sm-6">
                    <label htmlFor="phone" className="visually-hidden">Phone</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="Enter Phone"
                        className="form-control"
                    />
                </div>
            </div>
            <div className="my-3">
                <label htmlFor="message" className="visually-hidden">Message</label>
                <textarea
                    id="message"
                    name="message"
                    placeholder="Write a Message"
                    required
                    className="form-control"
                    rows={5}
                ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">SEND A MESSAGE</button>
        </form>
    );
};

export default ContactForm;