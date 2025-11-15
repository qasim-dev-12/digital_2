import React, { useState } from 'react';

const awards = [
  {
    serial: "01",
    title: "Awwwards Interior <br />Excellence",
    year: "2018",
  },
  {
    serial: "02",
    title: "FWA, <br />Site of the Day",
    year: "2019",
  },
  {
    serial: "03",
    title: "Creative Agencies <br />Worldwide",
    year: "2020",
  },
  {
    serial: "04",
    title: "Awesome <br />business models",
    year: "2022",
  },
];

function TeamSection() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="team-awards-section-three">
      <div className="anim-icons">
        <div className="image-1">
          <img src="assets/images/icons/shape-style22.png" alt="Image" />
        </div>
      </div>

      <div className="container">
        <div className="outer-box">
          <div className="star-icon animation__rotateX">
            <img src="assets/images/icons/theme-icon32.png" alt="Image" />
          </div>

          <div className="row">
            <div className="content-column col-lg-12 col-xl-4">
              <div className="sec-title">
                <span className="sub-title wow fadeInUp">
                  <img className="icon-img" src="assets/images/icons/sub-title-shape.png" alt="Image" /> Achievements
                </span>
                <h2 className="title wow fadeInUp">
                  Company Awards <span className="theme-color1">Achievements</span>
                </h2>
              </div>
              <div className="text-box">
                <div className="text">
                  Duis aute lorem ipsum is simply free text available in the market reprehen.
                </div>
                <figure className="image1 tm-gsap-img-parallax">
                  <img src="assets/images/resource/award2-3.png" alt="Image" />
                </figure>
              </div>
            </div>

            <div className="block-clomun col-lg-12 col-xl-8">
              {awards.map((award, index) => {
                const isHovered = hoveredIndex === index;
                const isActive = activeIndex === index && hoveredIndex === null;

                return (
                  <div
                    key={index}
                    className="team-award-block-three anim-fade-move"
                    data-delay={`0.${2 + index}`}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onClick={() => setActiveIndex(index)}
                  >
                    <div className={`inner-box ${isHovered || isActive ? "active" : ""}`}>
                      <div className="content-box">
                        <div className="title-box">
                          <div className="serial-no">{award.serial}</div>
                          <h4
                            className="title"
                            dangerouslySetInnerHTML={{ __html: award.title }}
                          />
                        </div>
                        <div className="award-date">{award.year}</div>
                        <div className="icon"><i className="fa-solid fa-plus"></i></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
