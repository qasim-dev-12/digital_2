import React, { useState } from 'react';

const Faqs = () => {

     // Manage the state to track which accordion is open
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [activeIndex2, setActiveIndex2] = useState<number | null>(null);

     // Toggle function for accordion items
    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const toggleAccordion2 = (index2: number) => {
        setActiveIndex2(activeIndex2 === index2 ? null : index2);
    };


    // Accordion data
    const faqs = [
        {
            question: "What services does your digital agency offer?",
            answer: "I cannot say enough good things about the team at [Company Name]. They took our vision and turned it into a stunning website that perfectly captures our brand. The process was seamless, and they kept us informed every step of the way."
        },
        {
            question: "How long have you been in business?",
            answer: "I cannot say enough good things about the team at [Company Name]. They took our vision and turned it into a stunning website that perfectly captures our brand. The process was seamless, and they kept us informed every step of the way."
        },
        {
            question: "What industries do you specialize in?",
            answer: "I cannot say enough good things about the team at [Company Name]. They took our vision and turned it into a stunning website that perfectly captures our brand. The process was seamless, and they kept us informed every step of the way."
        },
        {
            question: "Do you design custom websites?",
            answer: "I cannot say enough good things about the team at [Company Name]. They took our vision and turned it into a stunning website that perfectly captures our brand. The process was seamless, and they kept us informed every step of the way."
        },
    ];

    const faqs2 = [
        {
            question: "What services does your digital agency offer?",
            answer: "I cannot say enough good things about the team at [Company Name]. They took our vision and turned it into a stunning website that perfectly captures our brand. The process was seamless, and they kept us informed every step of the way."
        },
        {
            question: "How long have you been in business?",
            answer: "I cannot say enough good things about the team at [Company Name]. They took our vision and turned it into a stunning website that perfectly captures our brand. The process was seamless, and they kept us informed every step of the way."
        },
        {
            question: "What industries do you specialize in?",
            answer: "I cannot say enough good things about the team at [Company Name]. They took our vision and turned it into a stunning website that perfectly captures our brand. The process was seamless, and they kept us informed every step of the way."
        },
        {
            question: "Do you design custom websites?",
            answer: "I cannot say enough good things about the team at [Company Name]. They took our vision and turned it into a stunning website that perfectly captures our brand. The process was seamless, and they kept us informed every step of the way."
        },
    ];


    return (
        <>
        <section className="faqs-section pt-120 pb-120">
            <div className="container">
                <div className="row">
                <div className="faq-column col-lg-6">
                    <div className="inner-column">
                    <ul className="accordion-box style-two wow fadeInLeft">
                        {faqs.map((faq, index) => (
                        <li key={index} className={`accordion block ${activeIndex === index ? 'active-block' : ''}`}>
                            <div className={`acc-btn ${activeIndex === index ? 'active' : ''}`} onClick={() => toggleAccordion(index)}>
                                {faq.question}
                                <div className="icon far fa-angle-down"></div>
                            </div>
                            <div className={`acc-content ${activeIndex === index ? 'current' : ''}`}>
                                <div className="content">
                                    <div className="text">{faq.answer}</div>
                                </div>
                            </div>
                        </li>
                        ))}
                    </ul>
                    </div>
                </div>
                <div className="faq-column col-lg-6">
                    <div className="inner-column">
                    <ul className="accordion-box style-two wow fadeInLeft">
                            {faqs2.map((faq, index2) => (
                            <li key={index2} className={`accordion block pl-30 pr-30 ${activeIndex2 === index2 ? 'active-block' : ''}`}>
                                <div className={`acc-btn ${activeIndex2 === index2 ? 'active' : ''}`} onClick={() => toggleAccordion2(index2)}>
                                    {faq.question}
                                    <div className="icon far fa-angle-down"></div>
                                </div>
                                <div className={`acc-content ${activeIndex2 === index2 ? 'current' : ''}`}>
                                    <div className="content">
                                        <div className="text">{faq.answer}</div>
                                    </div>
                                </div>
                            </li>
                            ))}
                        </ul>
                    </div>
                </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default Faqs;