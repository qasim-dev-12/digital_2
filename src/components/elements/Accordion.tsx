import React, { useState } from 'react';

interface AccordionItem {
  key: number;
  question: string;
  answer: string;
}

const items: AccordionItem[] = [
  {
    key: 1,
    question: 'Is my technology allowed on tech?',
    answer: 'There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.',
  },
  {
    key: 2,
    question: 'How to soft launch your business?',
    answer: 'There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.',
  },
  {
    key: 3,
    question: 'How to turn visitors into contributors',
    answer: 'There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.',
  },
  {
    key: 4,
    question: 'How can I find my solutions?',
    answer: 'There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.',
  },
];

const Accordion: React.FC = ({service}) => {
  console.log("Accordion service prop:", service);
  const [activeKey, setActiveKey] = useState<number | null>(1);

  const handleToggle = (key: number) => {
    setActiveKey(prev => (prev === key ? null : key));
  };

  return (
    <ul className="accordion-box mt-30 wow fadeInRight">
     {service?.faqs?.map((item, index) => (
  <li
    key={index}
    className={`accordion block ${activeKey === index ? 'active-block' : ''}`}
    onClick={() => handleToggle(index)}
  >
    <div className={`acc-btn ${activeKey === index ? 'active' : ''}`}>
      {item.q}
      <div className="icon fa fa-plus" />
    </div>

    <div className={`acc-content ${activeKey === index ? 'current' : ''}`}>
      <div className="content">
        <div className="text">{item.a}</div>
      </div>
    </div>
  </li>
))}

    </ul>
  );
};

export default Accordion;