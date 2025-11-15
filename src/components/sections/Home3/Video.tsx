import React,{useState} from 'react'
import ModalVideo from 'react-modal-video';

function Video() {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
            <section className="video-section-two">
                <div className="container">
                    <div className="video-outer">
                        <div className="bg bg-image" style={{ backgroundImage: "url(assets/images/background/bg-video2.jpg)" }}></div>
                        <div className="content">
                            <div className="stylish-text"><img src="assets/images/resource/stylish-title.svg" alt="Image"/></div>
                            <a onClick={() => setOpen(true)} className="play-now">
                                <i className="icon fa-solid fa-play"></i>
                                <span className="ripple"></span>
                            </a>
                        </div>        
                    </div>
                </div>      
            </section>
            <ModalVideo channel='youtube' isOpen={isOpen} videoId='Fvae8nxzVz4' onClose={() => setOpen(false)} />
        </>
    )
}
export default Video;