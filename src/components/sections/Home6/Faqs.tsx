import React, { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

const Faqs: React.FC = () => {
  const faqData: FaqItem[] = [
    {
      question: "What services does your digital agency offer?",
      answer:
        "We offer a wide range of digital services including website design, development, SEO, branding, and digital marketing tailored to your business needs.",
    },
    {
      question: "How long have you been in business?",
      answer:
        "Our team has been providing exceptional digital solutions for over 8 years, helping businesses grow their online presence.",
    },
    {
      question: "What industries do you specialize in?",
      answer:
        "We work with a diverse range of industries including technology, healthcare, real estate, retail, and many more.",
    },
    {
      question: "Do you design custom websites?",
      answer:
        "Yes, we specialize in designing fully customized websites that align with your brand and meet your business goals.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const toggleAccordion = (index: number): void => {
    setActiveIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <section className="faq-section">
      <div className="bg bg-image tm-gsap-img-parallax">
        <img src="assets/images/background/faq-bg.png" alt="Background" />
      </div>

      <div className="container">
        <div className="sec-title">
          <div className="row">
            <div className="col-lg-7">
              <span className="sub-title wow fadeInUp">
                <img
                  className="icon-img"
                  src="assets/images/icons/sub-title-shape.png"
                  alt="Icon"
                />
                Frequently Asked Questions
              </span>
              <h2 className="title wow fadeInUp">
                Clear Answers, To <br className="d-none d-sm-block" /> Quick{" "}
                <span>Solutions</span>
              </h2>
            </div>
            <div className="col-lg-5">
              <div className="text ps-lg-5">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat.
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="faq-column col-lg-8 order-lg-2">
            <div className="inner-column pt-0">
              <ul className="accordion-box wow fadeInLeft">
                {faqData.map((item: FaqItem, index: number) => (
                  <li
                    key={index}
                    className={`accordion block ${
                      activeIndex === index ? "active-block" : ""
                    }`}
                  >
                    <div
                      className={`acc-btn ${
                        activeIndex === index ? "active" : ""
                      }`}
                      onClick={() => toggleAccordion(index)}
                    >
                      {item.question}
                      <div className="icon far fa-angle-down"></div>
                    </div>

                    <div
                      className={`acc-content ${
                        activeIndex === index ? "current" : ""
                      }`}
                    >
                      <div className="content">
                        <div className="text">{item.answer}</div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="image-column col-lg-4">
            <div className="faq-img tm-gsap-img-parallax">
              <img
                src="assets/images/icons/shape-style13.png"
                alt="Shape"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
