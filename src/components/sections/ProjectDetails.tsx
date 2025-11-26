import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 2,
  spaceBetween: 30,
  autoplay: {
    delay: 8500,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    320: { slidesPerView: 1 },
    575: { slidesPerView: 1 },
    767: { slidesPerView: 1 },
    991: { slidesPerView: 2 },
    1199: { slidesPerView: 2 },
    1350: { slidesPerView: 2 },
  }
};
export interface IndustryInfo {
  industryFocus?: string;
  serviceCategory?: string;
  region?: string;
  objective?: string;
}

export interface Industry {
  title?: string;
  slug?: string;
  image?: string;
  img_Main?: string;
  img_1?: string;
  img_2?: string;

  industryInfo?: IndustryInfo;

  aboutTitle?: string;
  overview?: string;
  overview1?: string;
  overview2?: string;
  description_below_img?: string;
  benefitsBlock?:{ title?: string; 
    fullText?: string;
    points?: string[]
  };
  // optional gallery - URLs
  gallery?: string[];

  // optional workflow / extras
  workflow?: Array<{ step?: number; title?: string; text?: string }>;
}

export interface ProjectDetailsProps {
  // make industry optional to avoid TS errors before router is ready
  industry?: Industry | null;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({industry}) => {
  console.log("Industry in ProjectDetails:", industry);
  return (
  <>
  <section className="project-details pt-80 pb-120">
    
    <div className="container">
      {/* <h4 className='text-center text-lg mb-4'>{industry?.title}</h4> */}
      <div className="project-details__top">
        <div className="project-details__img"><img src={industry?.image} alt="Image" /></div>
        <div className="project-details__details-box">
          <ul className="list-unstyled project-details__details-list">
            <li>
              <p className="project-details__client">Industry Focus</p>
              <h6 className="project-details__name">{industry?.industryInfo?.industryFocus}</h6>
            </li>
            <li>
              <p className="project-details__client">Service Category</p>
              <h6 className="project-details__name">{industry?.industryInfo?.serviceCategory}</h6>
            </li>
            <li>
              <p className="project-details__client">Region</p>
              <h6 className="project-details__name">{industry?.industryInfo?.region}</h6>
            </li>
            <li>
              <p className="project-details__client"> Objective</p>
              <h6 className="project-details__name">{industry?.industryInfo?.objective}</h6>
            </li>
          </ul>
        </div>
      </div>
      <div className="project-details__content">
        <h3 className="title">{industry?.aboutTitle}</h3>
        <p className="text">
     {industry?.overview}
        </p>
        <p className="text">
        {industry?.overview1}
        </p>
        {industry?.workflow && industry.workflow.length > 0 && (
  <div className="workflow-section mt-40">
    <h3 className="title mb-4">Our Workflow</h3>

    <div className="workflow-list">
      {industry.workflow.map((w, idx) => (
        <div className="workflow-item mb-4" key={idx}>
          <h4 className="workflow-step-title">
            <span className="workflow-step-number">{w.step ?? idx + 1}.</span>{" "}
            {w.title}
          </h4>
          <p className="text">{w.text}</p>
        </div>
      ))}
    </div>
  </div>
)}
       
        <div className="swiper project-image-slider">
          <Swiper {...swiperOptions} className="swiper-wrapper mb-50">
            <SwiperSlide className="swiper-slide">
              <div className="image">
                <img src={industry?.img_1} alt="Image" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="image">
                <img src={industry?.img_2} alt="Image" />
              </div>
            </SwiperSlide>
            {/* <SwiperSlide className="swiper-slide">
              <div className="image">
                <img src={industry?.img_2} alt="Image" />
              </div>
            </SwiperSlide> */}
          </Swiper>
        </div>
        <p className="text mb-5">
          {industry?.description_below_img}
        </p>
        <div className="row">
          <div className="col-lg-5">
            <h2 className="project-title-big-title">{industry?.benefitsBlock?.title}</h2>
          </div>
          <div className="col-lg-7">
            <p className="text">
         {industry?.benefitsBlock?.fullText}
            </p>
            <div className="feature-list">
              <ul>
{industry?.benefitsBlock?.points?.map((point, index) => (
  index < Math.ceil((industry.benefitsBlock?.points?.length || 0) / 2) && (
    <li key={index}><i className="icon fa-solid fa-circle-check"></i> {point}</li>
  )
))}
              </ul>
              <ul>
               {industry?.benefitsBlock?.points?.map((point, index) => (
  index >= Math.ceil((industry.benefitsBlock?.points?.length || 0) / 2) && (
    <li key={index}><i className="icon fa-solid fa-circle-check"></i> {point}</li>
  )
))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </>
  );
};

export default ProjectDetails;
