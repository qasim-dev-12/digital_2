import React, { useState } from "react";
import Link from "next/link";

interface MenuState {
  status: boolean;
  key: string;
}

interface MobileMenuProps {
  onClose?: () => void; // parent should pass a function that hides the sidebar
}

const MobileMenu: React.FC<MobileMenuProps> = ({ onClose }) => {
  const [isSubActive, setSubIsActive] = useState<MenuState>({ status: false, key: "" });
  const [isActive, setIsActive] = useState<MenuState>({ status: false, key: "" });
const handleLinkClick = () => {
  console.log("MobileMenu: handleLinkClick");
  setIsActive({ status: false, key: "" });
  setSubIsActive({ status: false, key: "" });
  if (onClose) {
    console.log("MobileMenu: calling onClose()");
    onClose();
  }
};
  const handleClick = (key: string) => {
    setIsActive(prev =>
      prev.key === key ? { status: false, key: "" } : { status: true, key }
    );
  };

  const handleSubClick = (key: string) => {
    setSubIsActive(prev =>
      prev.key === key ? { status: false, key: "" } : { status: true, key }
    );
  };

  // called when any menu link is clicked
 

  return (
    <ul className="navigation">
      <li className="current dropdown"><Link href="/" onClick={handleLinkClick}>Home</Link></li>

      <li className="dropdown">
        <Link href="/about" onClick={handleLinkClick}>About</Link>
        <ul>
          <li><Link href="/page-testimonial" onClick={handleLinkClick}>Testimonial</Link></li>
        </ul>
      </li>

      <li>
        <Link href="/pricing" onClick={handleLinkClick}>Pricing</Link>
      </li>

      <li className="dropdown">
        <Link href="/services" onClick={handleLinkClick}>Services</Link>

        {/* submenu visibility controlled by isActive */}
        <ul className={isActive.key === "services" ? "sub-menu d-block" : "sub-menu d-none"}>
          <li><Link href="/services/digital-marketing" onClick={handleLinkClick}>Digital Marketing</Link></li>
          <li><Link href="/services/social-media-marketing" onClick={handleLinkClick}>Social Media Marketing</Link></li>
          <li><Link href="/services/google-ads" onClick={handleLinkClick}>Google Ads</Link></li>
          <li><Link href="/services/seo-services" onClick={handleLinkClick}>SEO</Link></li>
          <li><Link href="/services/email-marketing" onClick={handleLinkClick}>Email Marketing</Link></li>
          <li><Link href="/services/web-development" onClick={handleLinkClick}>Web Development</Link></li>
          <li><Link href="/services/mobile-app-development" onClick={handleLinkClick}>Mobile App Development</Link></li>
        </ul>

        <div
          className={`dropdown-btn ${isActive.key === "services" ? "active" : ""}`}
          onClick={() => handleClick("services")}
          role="button"
          tabIndex={0}
          aria-expanded={isActive.key === "services"}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleClick("services"); }}
        >
          <i className="fa fa-angle-down" />
        </div>
      </li>

      <li className="dropdown">
        <Link href="/industries" onClick={handleLinkClick}>Industries</Link>

        <ul className={isActive.key === "industries" ? "sub-menu d-block" : "sub-menu d-none"}>
          <li><Link href="/industries/real-estate" onClick={handleLinkClick}>Real Estate</Link></li>
          <li><Link href="/industries/automotive-car-care" onClick={handleLinkClick}>Automotive</Link></li>
          <li><Link href="/industries/healthcare-clinics" onClick={handleLinkClick}>Healthcare</Link></li>
          <li><Link href="/industries/restaurants-cafes-fb-brands" onClick={handleLinkClick}>Restaurants</Link></li>
          <li><Link href="/industries/e-commerce-online-stores" onClick={handleLinkClick}>E-Commerce</Link></li>
          <li><Link href="/industries/hospitality-tourism" onClick={handleLinkClick}>Hospitality</Link></li>
          <li><Link href="/industries/education-training-institutes" onClick={handleLinkClick}>Education</Link></li>
          <li><Link href="/industries/beauty-salon-personal-care" onClick={handleLinkClick}>Beauty Care</Link></li>
          <li><Link href="/industries/construction-contracting" onClick={handleLinkClick}>Construction</Link></li>
          <li><Link href="/industries/logistics-transport" onClick={handleLinkClick}>Logistics</Link></li>
          <li><Link href="/industries/cleaning-home-services" onClick={handleLinkClick}>Home Services</Link></li>
          <li><Link href="/industries/technology-it-services" onClick={handleLinkClick}>Technology</Link></li>
        </ul>

        <div
          className={`dropdown-btn ${isActive.key === "industries" ? "active" : ""}`}
          onClick={() => handleClick("industries")}
          aria-expanded={isActive.key === "industries"}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleClick("industries"); }}
        >
          <i className="fa fa-angle-down" />
        </div>
      </li>

      <li>
        <Link href="/contact" onClick={handleLinkClick}>Contact</Link>
      </li>
    </ul>
  );
};

export default MobileMenu;
