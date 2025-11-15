import React, { useEffect, useState } from 'react';
import BackToTop from '../components/elements/BackToTop';
import Footer from '../components/layout/Footer';
import Footer2 from '../components/layout/Footer2';
import Footer3 from '../components/layout/Footer3';
import Footer4 from '../components/layout/Footer4';
import Footer5 from '../components/layout/Footer5';
import Header from '../components/layout/Header';
import Header2 from '../components/layout/Header2';
import Header3 from '../components/layout/Header3';
import Header4 from '../components/layout/Header4';
import Header5 from '../components/layout/Header5';
import Header6 from '../components/layout/Header6';
import PageHead from '../components/layout/PageHead';

interface LayoutProps {
  children: React.ReactNode;
  HeaderStyle?: string;
  FooterStyle?: string;
  styleMode?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, HeaderStyle, FooterStyle, styleMode }) => {
  const isServer = typeof window === 'undefined';
  const [searchToggle, setSearchToggled] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handleToggle = () => setSearchToggled(!searchToggle);

  useEffect(() => {
    if (styleMode === "Dark") {
      document.body.classList.add("dark-mode");
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.body.classList.remove("dark-mode");
      document.documentElement.removeAttribute('data-theme');
    }
  }, [styleMode]);

  useEffect(() => {
    const onScroll = () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) setScroll(scrollCheck);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scroll]);

  const handleOpen = () => document.body.classList.add("mobile-menu-visible");
  const handleRemove = () => document.body.classList.remove("mobile-menu-visible");

  return (
    <>

    <PageHead/>
    <div className="page-wrapper" id="top">
        {!HeaderStyle && <Header handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />}
        {HeaderStyle === "two" && <Header2 handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />}
        {HeaderStyle === "three" && <Header3 handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />}
        {HeaderStyle === "four" && <Header4 handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />}
        {HeaderStyle === "five" && <Header5 handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />}
        {HeaderStyle === "six" && <Header6 handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />}
        {children}
        {!FooterStyle && <Footer />}
        {FooterStyle === "two" && <Footer2 />}
        {FooterStyle === "three" && <Footer3 />}
        {FooterStyle === "four" && <Footer4 />}
        {FooterStyle === "five" && <Footer5 />}
    </div>
    <BackToTop />

    </>
  );
};

export default Layout;