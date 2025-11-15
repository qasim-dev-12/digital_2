import React, { useEffect, useState } from 'react';

interface Award {
  name: string;
  title: string;
  date: string;
  image: string;
  delay: number;
}

const awards: Award[] = [
  {
    name: 'Awwwards',
    title: 'BNC 2023 - 1st Winner',
    date: 'Jun 2023',
    image: 'assets/images/resource/award2-1.png',
    delay: 200,
  },
  {
    name: 'CSS Awards',
    title: 'Top 5 Best of eCommerce Websites 2022',
    date: 'May 2022',
    image: 'assets/images/resource/award2-1.png',
    delay: 400,
  },
  {
    name: 'Awwwards',
    title: 'Honor CSS November, 2021',
    date: 'April 2021',
    image: 'assets/images/resource/award2-1.png',
    delay: 600,
  },
  {
    name: 'Behance',
    title: 'Brand of the year - 2020',
    date: 'Dec 2020',
    image: 'assets/images/resource/award2-1.png',
    delay: 800,
  },
];

export default function TeamAwards() {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  useEffect(() => {
    import('aos').then((AOS) => {
      AOS.init({ once: true, duration: 1000 });
      AOS.refreshHard();
    });
  }, []);

  return (
    <section className="team-awards-section-two">
      <div className="scroll-text">
        <div className="title-stroke-text text1 fadeInUpBig">
          <span>Our</span>Awards
        </div>
      </div>
      <div className="anim-icons">
        <div className="image-1">
          <img src="assets/images/icons/shape-style60.png" alt="Decoration" />
        </div>
        <div className="image-2 circleZoom tm-gsap-img-parallax">
          <img src="assets/images/icons/shape-style20.png" alt="Decoration" />
        </div>
      </div>
      <div className="container">
        <div className="outer-box">
          <div className="sec-title mb-0">
            <span className="sub-title wow fadeInUp">
              <img
                className="icon-img"
                src="assets/images/icons/sub-title-shape.png"
                alt="Icon"
              />
              Our Awards
            </span>
            <h2 className="title wow fadeInUp">
              Company awards <br />
              <span>achievements</span>
            </h2>
          </div>

          <div className="row">
            <div className="col-lg-6 offset-lg-6">
              {awards.map((award, idx) => {
                const isHovered = hoveredIdx === idx;
                const isActive = activeIdx === idx && hoveredIdx === null;

                return (
                  <div
                    key={idx}
                    className="team-award-block-two"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay={award.delay}
                  >
                    <div
                      className={`inner-box ${isHovered || isActive ? 'active' : ''}`}
                      onMouseEnter={() => setHoveredIdx(idx)}
                      onMouseLeave={() => setHoveredIdx(null)}
                      onClick={() => setActiveIdx(idx)}
                      style={{ cursor: 'pointer' }}
                    >
                      <div className="content-box">
                        <div className="title-box">
                          <div className="award-name">{award.name}</div>
                          <h4 className="title">{award.title}</h4>
                        </div>
                        <div className="award-date">{award.date}</div>
                        <div className="award-image">
                          <img src={award.image} alt={award.title} />
                        </div>
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
