import React, {useEffect} from 'react'
import CounterUp from '../../elements/CounterUp';

 function Funfact() {

  useEffect(() => {
    import('aos').then((AOS) => {
      AOS.init({ once: true, duration: 1000 });
      AOS.refreshHard();
    });
  }, []);
 
    return (
        <>
      <section className="fun-fact-section">
        <div className="anim-icons">
          <div className="image-1"><img src="assets/images/icons/section-bg-shape3.png" alt="Image" /></div>
        </div>
        <div className="container">
          <div className="fact-counter">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-12 counter-clomun">
                <div className="counter-block" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                  <div className="inner">
                    <div className="count-box"><span className="count-text"><CounterUp end={22} /></span>K</div>
                    <h3 className="counter-title">Projects <br />Completed</h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 counter-clomun">
                <div className="counter-block" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                  <div className="inner">
                    <div className="count-box"><span className="count-text"><CounterUp end={612} /></span></div>
                    <h3 className="counter-title">Skilled <br />professional</h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 counter-clomun">
                <div className="counter-block" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                  <div className="inner">
                    <div className="count-box"><span className="count-text"><CounterUp end={180} /></span></div>
                    <h3 className="counter-title">Visited <br />conference</h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 counter-clomun">
                <div className="counter-block" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                  <div className="inner">
                    <div className="count-box"><span className="count-text"><CounterUp end={31} /></span>K</div>
                    <h3 className="counter-title">Happy <br />Clients</h3>
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
