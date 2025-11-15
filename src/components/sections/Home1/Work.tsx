import React, { useEffect, useState } from "react";

const skills = [
  { title: "Skatch", icon: "wa-sketch.png", percent: "90%" },
  { title: "Photoshop", icon: "wa-photoshop.png", percent: "80%" },
  { title: "Figma", icon: "wa-figma.png", percent: "90%" },
  { title: "Invision", icon: "wa-invision.png", percent: "90%" },
  { title: "XD", icon: "wa-xd.png", percent: "85%" },
  { title: "Illustration", icon: "wa-Illustration.png", percent: "75%" },
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
            Skills <span className="color1">&amp; Working area </span>
          </div>
        </div>
        <div aria-hidden="true" className="marquee-group">
          <div className="text">
            Skills <span className="color1">&amp; Working area </span>
          </div>
        </div>
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
                        <img src={`assets/images/resource/${skill.icon}`} alt={skill.title} />
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
