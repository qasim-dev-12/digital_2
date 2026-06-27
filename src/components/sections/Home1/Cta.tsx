import React from 'react'
import Link from 'next/link';

function CtaSection() {
    return (
        <>
      <section className="cta-section-two">
        <div className="anim-icons">
          <div className="image-1 tm-gsap-animate-circle"><img src="assets/images/icons/shape-style23.png" alt="image" /></div>
          <div className="image-2"><img src="assets/images/icons/dotted-map-5.png" alt="" /></div>
        </div>
        <div className="container">
          <div className="outer-box">
            <div className="sec-title text-center">
              <h2 className="title">Let’s make something <br /><span className="color1">great together!</span></h2>
            </div>
            <Link
  href="https://api.whatsapp.com/send/?phone=971567442268" 
  className="link-btn"
  aria-label="WhatsApp"
>
  <span className="btn-title">Contact with us</span>
  <img
    className="icon"
    src="assets/images/icons/arrow-border.png"
    alt="image"
  />
</Link>
          </div>
        </div>
      </section>
        </>
    )
}
export default CtaSection;