import Link from 'next/link';
import NavLinks from '../navigation/NavLinks';
import MobileMenu from '../navigation/MobileMenu';
import { useState } from 'react';

interface HeaderProps {
  handleOpen: () => void;
  handleRemove: () => void;
  handleToggle: () => void;
  searchToggle: boolean;
  scroll: boolean;
}

const Header: React.FC<HeaderProps> = ({ handleOpen, handleRemove, searchToggle, handleToggle, scroll }) => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
  return (
    <header className={`main-header header-style-one ${scroll ? "fixed-header" : ""} ${searchToggle ? "moblie-search-active" : ""}`}>
        <div className="outer-box">
            <div className="header-lower anim-fade-move" data-delay="0.25">
                <div className="inner-container">
                    <div className="main-box">
                        <div className="logo-box">
                            <div className="logo">
                                <Link href="/">
                                <img 
  src="/assets/images/ST Logo new1.png" 
  alt="Logo"
  width="160"
  height="37"
/>
                                   
                                </Link>
                            </div>
                        </div>
                        <div className="nav-outer">
                            <nav className="nav main-menu">
                                <NavLinks />
                            </nav>
                            {/* <div className="action-box">
                                <button className="ui-btn search-btn" onClick={handleToggle}>
                                    <i className="icon fal fa-search"/>
                                </button>
                                <div className="mobile-nav-toggler" onClick={handleOpen}>
                                    <div className="shape-line-img">
                                        <img className="icon-img" src="assets/images/icons/shape-line-icon.png" alt="Icon" />
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="mobile-menu">
            <div className="menu-backdrop" onClick={handleRemove} />
            <nav className="menu-box">
                <div className="upper-box">
                    <div className="nav-logo">
                        <Link href="/">
                            <img src="assets/images/ST Logo new1.png" alt="Logo" />
                        </Link>
                    </div>
                    <div className="close-btn" onClick={handleRemove}>
                        <i className="icon fa fa-times"/>
                    </div>
                </div>
                <ul className="navigation clearfix">
                    <MobileMenu onClose={handleRemove} />
                </ul>
                <ul className="contact-list-one">
                    <li>
                        <i className="icon fal fa-envelope"/>
                        <span className="title">Send Email</span>
                        <div className="text">
                            <Link href="mailto:info@staytop.ae">info@staytop.ae</Link>
                        </div>
                    </li>
                    
                </ul>
                <ul>
                    <li>
                         <div className='text-center mb-10'>
  <Link
    href="https://api.whatsapp.com/send/?phone=971522367120"
    className="custom-btn whatsapp-btn wobble-btn"
  >
    <img src="/assets/images/new-50.png" alt="hello" className="btn-icon " />
    <span>WhatsApp Us</span>
  </Link>

  <Link
    href="tel:+971522367120"
    className="custom-btn call-btn wobble-btn"
  >
    <img src="/assets/images/phone-call.png" alt="Call Us" className="btn-icon" />
    <span>Call Us</span>
  </Link>
</div>
                    </li>
                </ul>
                
                <ul className="social-links flex items-center gap-4">
  <li>
    <Link href="https://www.facebook.com/staytopmedia" aria-label="Facebook">
      <i className="fab fa-facebook-f" />
    </Link>
  </li>

  <li>
    <Link href="https://www.instagram.com/staytop.media" aria-label="Instagram">
      <i className="fab fa-instagram" />
    </Link>
  </li>

  <li>
    <Link href="https://www.tiktok.com/@staytop.media" aria-label="TikTok">
      <i className="fab fa-tiktok" />
    </Link>
  </li>

  <li>
    <Link href="https://www.youtube.com/@StayTopMedia/shorts" aria-label="YouTube">
      <i className="fab fa-youtube" />
    </Link>
  </li>
</ul>

            </nav>
        </div>
        <div className="search-popup">
            <span className="search-back-drop" onClick={handleToggle} />
            <button className="close-search" onClick={handleToggle}>
                <span className="fa fa-times"/>
            </button>
            <div className="search-inner">
                <form method="post" action="/">
                    <div className="form-group">
                        <input type="search" name="search-field" placeholder="Search..." required />
                        <button type="submit"><i className="fa fa-search"/></button>
                    </div>
                </form>
            </div>
        </div>
        <div className={`sticky-header fixed-header animated slideInDown`}>
            <div className="auto-container">
                <div className="inner-container">
                    <div className="logo">
                        <Link href="/">
                            <img src="/assets/images/ST Logo new1.png" alt="Logo" />
                        </Link>
                    </div>
                    <div className="nav-outer">
                        <nav className="main-menu">
                            <div className="navbar-collapse show collapse clearfix">
                                <ul className="navigation clearfix">
                                    <NavLinks />
                                </ul>
                            </div>
                        </nav>
                        <div className="mobile-nav-toggler" onClick={handleOpen}>
                            <span className="icon far fa-bars"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
  );
};

export default Header;