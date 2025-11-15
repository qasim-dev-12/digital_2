import React from 'react';

function Marquee() {

    return (
        <>
            <section className="marquee-section-two">
                <div className="marquee-two">
                <div className="marquee-group">
                    <h2 className="text" data-text="Application">Application</h2>
                    <h2 className="text color1" data-text="Web design">Web design</h2>
                    <h2 className="text" data-text="Development">Development</h2>
                    <h2 className="text color1" data-text="Application">Application</h2>
                </div>
                <div aria-hidden="true" className="marquee-group">
                    <h2 className="text" data-text="Application">Application</h2>
                    <h2 className="text color1" data-text="Web design">Web design</h2>
                    <h2 className="text" data-text="Development">Development</h2>
                    <h2 className="text color1" data-text="Application">Application</h2>
                </div>
                </div>
            </section>
        </>
    )
}
export default Marquee;
