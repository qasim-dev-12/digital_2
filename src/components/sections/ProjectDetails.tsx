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
interface ProjectDetailsProps {
    industry: {
        title?: string;
        image?: string;
        industryInfo?: {
            industryFocus?: string;
            serviceCategory?: string;
            region?: string;
            objective?: string;
        };
        aboutTitle?: string;
        overview?: string;
        overview1?: string;
        overview2?: string;
    };
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({industry}) => {
  console.log("Industry in ProjectDetails:", industry);
  return (
  <>
  <section className="project-details pt-120 pb-120">
    <div className="container">
      <div className="project-details__top">
        <div className="project-details__img"><img src="assets/images/resource/project-details.jpg" alt="Image" /></div>
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
        <p className="text mb-5">
        {industry?.overview1}
        </p>
        <p className="text mb-5">
        {industry?.overview2}
        </p>
        <div className="swiper project-image-slider">
          <Swiper {...swiperOptions} className="swiper-wrapper mb-50">
            <SwiperSlide className="swiper-slide">
              <div className="image">
                <img src="assets/images/resource/project2-1.jpg" alt="Image" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="image">
                <img src="assets/images/resource/project2-2.jpg" alt="Image" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="image">
                <img src="assets/images/resource/project2-3.jpg" alt="Image" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <p className="text mb-5">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi archi beatae vitae dicta sunt explicabo. Nemo enim
          ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
          adipisci velit, sed quia non numqua
        </p>
        <div className="row">
          <div className="col-lg-5">
            <h2 className="project-title-big-title">Interesting Facts In Development</h2>
          </div>
          <div className="col-lg-7">
            <p className="text">
              Must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the
              truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter
            </p>
            <div className="feature-list">
              <ul>
                <li><i className="icon fa-solid fa-circle-check"></i> Efficient Sprint Planning</li>
                <li><i className="icon fa-solid fa-circle-check"></i> Efficient Sprint Planning</li>
              </ul>
              <ul>
                <li><i className="icon fa-solid fa-circle-check"></i> Iterative Delivery Approach</li>
                <li><i className="icon fa-solid fa-circle-check"></i> Problem-solving</li>
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
