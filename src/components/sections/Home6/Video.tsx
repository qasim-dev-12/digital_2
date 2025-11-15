import { useState } from 'react';
import ModalVideo from 'react-modal-video';

function Video() {
     const [isOpen, setOpen] = useState(false);

    return (
        <>
        <section className="video-section style-two alternate">
            <div className="bg bg-image" style={{backgroundImage: 'url(assets/images/background/bg-video4.jpg)'}}></div>
            <div className="container">
            <div className="video-outer">
                <h2 className="title">Most trusted  agency <br/>in your town</h2>
                <a onClick={() => setOpen(true)} className="play-now" data-fancybox="gallery" data-caption="">
                <i className="icon fa-solid fa-play"></i>
                <span className="ripple"></span>
                </a>
            </div>
            </div>
        </section>
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Fvae8nxzVz4" onClose={() => setOpen(false)} />
        </>
    )
}
export default Video;
