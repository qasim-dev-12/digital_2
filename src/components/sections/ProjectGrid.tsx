import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Link from 'next/link';
import Image from 'next/image';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 4,
  autoplay: {
    delay: 8500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.project__arry-next',
    prevEl: '.project__arry-prev',
  },
  loop: true,
  breakpoints: {
    320: { slidesPerView: 1 },
    575: { slidesPerView: 2 },
    767: { slidesPerView: 2 },
    991: { slidesPerView: 2 },
    1199: { slidesPerView: 3 },
    1350: { slidesPerView: 4 },
  },
};

const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("tab-1");

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  const renderTabImage = (tabId: string, imageSrc: string) => (
    <Image
      id={tabId}
      className={`tab-img ${activeTab === tabId ? 'active' : ''}`}
      src={imageSrc}
      alt={`Project image for ${tabId}`}
      width={500}
      height={300}
      style={{ width: '100%', height: 'auto' }}
    />
  );

  return (
    <section className="project-area pt-130">
      <div className="project__wrp">
        <div className="swiper project__slider">
          <Swiper {...swiperOptions} className="swiper-wrapper">
            {Array.from({ length: 8 }, (_, index) => {
              const tabId = `tab-${index + 1}`;
              return (
                <SwiperSlide
                  key={tabId}
                  className="swiper-slide"
                  onMouseEnter={() => handleTabClick(tabId)}
                >
                  <Link href="/page-project-details" className="project__item">
                    <div className="content">
                      <span>{String(index + 1).padStart(2, '0')}</span>
                      <h4>{`Project Title ${index + 1}`}</h4>
                      <p>Law plan involves outlining the steps and strategies to achieve.</p>
                    </div>
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        <div className="project__slider-arrys">
          <button className="project__arry-prev" aria-label="Previous Slide">
            <i className="fa-regular fa-arrow-left"></i>
          </button>
          <button className="project__arry-next" aria-label="Next Slide">
            <i className="fa-regular fa-arrow-right"></i>
          </button>
        </div>

        <div className="project__image">
          {renderTabImage("tab-1", "/assets/images/project/1.jpg")}
          {renderTabImage("tab-2", "/assets/images/project/2.jpg")}
          {renderTabImage("tab-3", "/assets/images/project/3.jpg")}
          {renderTabImage("tab-4", "/assets/images/project/4.jpg")}
          {renderTabImage("tab-5", "/assets/images/project/5.jpg")}
          {renderTabImage("tab-6", "/assets/images/project/6.jpg")}
          {renderTabImage("tab-7", "/assets/images/project/7.jpg")}
          {renderTabImage("tab-8", "/assets/images/project/8.jpg")}
        </div>
      </div>
    </section>
  );
};

export default Projects;
