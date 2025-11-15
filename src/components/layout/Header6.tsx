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

const Header6: React.FC<HeaderProps> = ({ handleOpen, handleRemove, searchToggle, handleToggle, scroll }) => {
  return (
    <>
      <header className={`main-header header-style-one header-transparent dark-style ${scroll ? "fixed-header" : ""} ${searchToggle ? "moblie-search-active" : ""}`}>
        <div className="outer-box">
          <div className="header-lower">
            <div className="inner-container">
              <div className="main-box">
                <div className="logo-box">
                  <div className="logo"><Link href="/"><img src="assets/images/logo.png" alt="Logo"/></Link></div>
                </div>
                <div className="nav-outer">
                  <nav className="nav main-menu">
                    <NavLinks/>
                  </nav>
                  <div className="action-box">
                    <Link href="/page-contact" className="theme-btn btn-style-one dark-bg hover-light">Let’s Talk <i className="icon fa fa-arrow-up-right"/></Link>
                    <div className="mobile-nav-toggler" onClick={handleOpen}><div className="shape-line"></div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
                <i className="icon fa fa-times"/>
              </div>
            </div>
            <MobileMenu />
            <ul className="contact-list-one">
              <li>
                <i className="icon fal fa-envelope"/>
                <span className="title">Send Email</span>
                <div className="text">
                  <Link href="/">alma.lawson@example.com</Link>
                </div>
              </li>
            </ul>
            <ul className="social-links">
              <li><Link href="/"><i className="icon fab fa-twitter"/></Link></li>
              <li><Link href="/"><i className="icon fab fa-facebook-f"/></Link></li>
              <li><Link href="/"><i className="icon fab fa-pinterest-p"/></Link></li>
              <li><Link href="/"><i className="icon fab fa-vimeo-v"/></Link></li>
            </ul>
          </nav>
        </div>
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
                    <i className="fa fa-search"/>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className={`sticky-header ${scroll ? "fixed-header animated slideInDown" : ""}`}>
          <div className="auto-container">
            <div className="inner-container">                
              <div className="logo">
                <Link href="/">
                  <img src="assets/images/logo-2.png" alt="Logo" />
                </Link>
              </div>
              <div className="nav-outer">
                <nav className="main-menu">
                  <div className="navbar-collapse show collapse clearfix">
                    <NavLinks />
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

export default Header6;
