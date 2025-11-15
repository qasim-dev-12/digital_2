import React from 'react';
import Link from 'next/link';
import NavLinks from '../navigation/NavLinks';
import MobileMenu from '../navigation/MobileMenu';

interface HeaderProps {
  handleOpen: () => void;
  handleRemove: () => void;
  handleToggle: () => void;
  searchToggle: boolean;
  scroll: boolean;
}

const Header3: React.FC<HeaderProps> = ({ handleOpen, handleRemove, searchToggle, handleToggle, scroll }) => {
  return (
    <>
      <header className={`main-header header-style-one header-transparent-two ${scroll ? "fixed-header" : ""} ${searchToggle ? "moblie-search-active" : ""}`}>
        
        <div className="outer-box">
          <div className="header-lower">
            <div className="inner-container">
              <div className="main-box">
                
                <div className="logo-box">
                  <div className="logo">
                    <Link href="/">
                      <img src="assets/images/logo-2.png" alt="Logo" />
                    </Link>
                  </div>
                </div>

                <div className="nav-outer">
                  <nav className="nav main-menu">
                    <NavLinks />
                  </nav>

                  <div className="action-box">
                    
                    <div className="info-call">
                      <i className="icon fa-solid fa-phone"></i>
                      <div className="inner">
                        <span>Have Any Questions</span> 0123 4567 890
                      </div>
                    </div>

                    <Link href="/page-contact" className="theme-btn btn-style-four">
                      <span className="btn-title">Let’s Talk</span>
                      <span className="dot-box"><span className="dot-item"></span></span>
                    </Link>

                    <div className="mobile-nav-toggler" onClick={handleOpen}>
                      <div className="shape-line"></div>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="mobile-menu">
          <div className="menu-backdrop" onClick={handleRemove}></div>

          <nav className="menu-box">
            <div className="upper-box">
              <div className="nav-logo">
                <Link href="/">
                  <img src="assets/images/logo-2.png" alt="Logo" />
                </Link>
              </div>
              <div className="close-btn" onClick={handleRemove}>
                <i className="icon fa fa-times"></i>
              </div>
            </div>

            <ul className="navigation clearfix">
              <MobileMenu />
            </ul>

            <ul className="contact-list-one">
              <li>
                <i className="icon fal fa-envelope"></i>
                <span className="title">Send Email</span>
                <div className="text">
                  <Link href="mailto:alma.lawson@example.com">alma.lawson@example.com</Link>
                </div>
              </li>
            </ul>

            <ul className="social-links">
              <li><Link href="/"><i className="icon fab fa-twitter"></i></Link></li>
              <li><Link href="/"><i className="icon fab fa-facebook-f"></i></Link></li>
              <li><Link href="/"><i className="icon fab fa-pinterest-p"></i></Link></li>
              <li><Link href="/"><i className="icon fab fa-vimeo-v"></i></Link></li>
            </ul>
          </nav>
        </div>

        {/* Search Popup */}
        <div className="search-popup">
          <span className="search-back-drop" onClick={handleToggle}></span>
          <button className="close-search" onClick={handleToggle}>
            <span className="fa fa-times"></span>
          </button>

          <div className="search-inner">
            <form method="post" action="/">
              <div className="form-group">
                <input type="search" name="search-field" placeholder="Search..." required />
                <button type="submit">
                  <i className="fa fa-search"></i>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Sticky Header */}
        <div className={`sticky-header ${scroll ? "fixed-header animated slideInDown" : ""}`}>
          <div className="auto-container">
            <div className="inner-container">
              
              <div className="logo">
                <Link href="/">
                  <img src="assets/images/logo-3.png" alt="Logo" />
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
                  <span className="icon far fa-bars"></span>
                </div>
              </div>

            </div>
          </div>
        </div>

      </header>
    </>
  );
};

export default Header3;
