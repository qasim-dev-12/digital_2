import React from 'react'


function Funfact() {

    return (
        <>
	<section className="fun-fact-section">
		<div className="container">
			<div className="fact-counter">
				<div className="row">
					<div className="col-lg-3 col-md-6 col-sm-12 counter-clomun">
						<div className="counter-block wow zoomIn">
							<div className="inner">
								<div className="count-box"><span className="count-text" data-speed="3000" data-stop="22">0</span>K</div>
								<h3 className="counter-title">Projects <br/>Completed</h3>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-12 counter-clomun">
						<div className="counter-block wow zoomIn" data-wow-delay="300ms">
							<div className="inner">
								<div className="count-box"><span className="count-text" data-speed="3000" data-stop="180">0</span></div>
								<h3 className="counter-title">Skilled <br/>professional</h3>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-12 counter-clomun">
						<div className="counter-block wow zoomIn" data-wow-delay="600ms">
							<div className="inner">
								<div className="count-box"><span className="count-text" data-speed="3000" data-stop="612">0</span></div>
								<h3 className="counter-title">Visited <br/>conference</h3>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-12 counter-clomun">
						<div className="counter-block wow zoomIn" data-wow-delay="900ms">
							<div className="inner">
								<div className="count-box"><span className="count-text" data-speed="3000" data-stop="31">0</span>K</div>
								<h3 className="counter-title">Happy <br/>Clients</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
        </>
    )
}
export default Funfact;
