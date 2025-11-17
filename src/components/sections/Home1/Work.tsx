import React, { useEffect, useState } from "react";

const skills = [
  { title: "Google", icon: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", percent: "Smart search strategies that boost visibility." },
  { title: "YouTube", icon: "https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png", percent: "High-impact video content that drives reach." },
  { title: "LinkedIn", icon: "https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg", percent: "Professional branding and targeted lead generation." },
  { title: "Facebook", icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png", percent: "Data-driven campaigns that convert audiences." },
  { title: "Instagram", icon: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg", percent: "Creative visuals that build strong engagement" },
  { title: "Tiktok", icon: "https://upload.wikimedia.org/wikipedia/en/6/69/TikTok_logo.svg", percent: "Short-form content that captures attention fast." },
];


function WorkSection() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [activeSkill, setActiveSkill] = useState<string>("Figma");

  useEffect(() => {
    import("aos").then((AOS) => {
      AOS.init({ once: true, duration: 1000 });
      AOS.refreshHard();
    });
  }, []);

  return (
    <section className="work-section">
      <div className="anim-icons">
        <div className="image-1">
          <img src="assets/images/icons/dotted-map-4.png" alt="" />
        </div>
      </div>

      <div className="marquee anim-fade-move">
        <div className="marquee-group">
          <div className="text">
             
            CHANNELS <span className="color1">&amp; WE SPECIALIZE IN</span>
          </div>
        </div>
        {/* <div aria-hidden="true" className="marquee-group">
          <div className="text">
            Skills <span className="color1">&amp; Working area </span>
          </div>
        </div> */}
      </div>

      <div className="large-container">
        <div className="outer-box">
          <div className="row gx-50">
            {skills.map((skill, index) => {
              const isHovered = hoveredSkill === skill.title;
              const isActive = activeSkill === skill.title && !hoveredSkill;

              return (
                <div key={skill.title} className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                  <div className="work-block" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={200 + index * 100} onMouseEnter={() => setHoveredSkill(skill.title)} onMouseLeave={() => setHoveredSkill(null)} onClick={() => setActiveSkill(skill.title)}>
                    <div className={`inner-box ${isHovered || isActive ? "active" : ""}`}>
                      <span className="icon">
                        <img
  src={skill.icon}
  alt={skill.title}
  style={{
    width: "40px",
    height: "40px",
    objectFit: "contain",
    margin: "0 auto",
    display: "block"
  }}
/>
                      </span>
                      <span className="count">{skill.percent}</span>
                      <h4 className="title">{skill.title}</h4>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkSection;
