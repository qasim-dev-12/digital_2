import React from 'react';


function Marquee2() {

    return (
        <>
        <section className="marquee-section style-three">
          <div className="marquee gray-bg">
            <div className="marquee-group">
              <h2 className="text" data-text="Web design">Web design</h2>
              <h2 className="text" data-text="Project & Product Consulting">Project & Product Consulting </h2>
              <h2 className="text" data-text="Mobile App Development">Mobile App Development</h2>
              <h2 className="text" data-text="Development">Development</h2>
            </div>
            <div aria-hidden="true" className="marquee-group">
              <h2 className="text" data-text="Web design">Web design</h2>
              <h2 className="text" data-text="Project & Product Consulting">Project & Product Consulting </h2>
              <h2 className="text" data-text="Mobile App Development">Mobile App Development</h2>
              <h2 className="text" data-text="Development">Development</h2>
            </div>
          </div>
          <div className="marquee slide-right">
            <div className="marquee-group">
              <h2 className="text" data-text="Web design">Web design</h2>
              <h2 className="text" data-text="Project & Product Consulting">Project & Product Consulting </h2>
              <h2 className="text" data-text="Mobile App Development">Mobile App Development</h2>
              <h2 className="text" data-text="Development">Development</h2>
            </div>
            <div aria-hidden="true" className="marquee-group">
              <h2 className="text" data-text="Web design">Web design</h2>
              <h2 className="text" data-text="Project & Product Consulting">Project & Product Consulting </h2>
              <h2 className="text" data-text="Mobile App Development">Mobile App Development</h2>
              <h2 className="text" data-text="Development">Development</h2>
            </div>
          </div>
        </section>
        </>
    )
}
export default Marquee2;
