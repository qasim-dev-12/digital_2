import Link from 'next/link';
import React from 'react';

const NavLinks = () => {
    return (

    <ul className="navigation">
        <li className="current dropdown"><Link href="/">Home</Link>
            {/* <ul>
            <li><Link href="/">Home page 01</Link></li>
            <li><Link href="/index-2">Home page 02</Link></li>
            <li><Link href="/index-3">Home page 03</Link></li>
            <li><Link href="/index-4">Home page 04</Link></li>
            <li><Link href="/index-5">Home page 05</Link></li>
            <li><Link href="/index-6">Home page 06</Link></li>
            <li><Link href="/index-7">Home page 07</Link></li>                      
            </ul> */}
        </li>

         <li className="dropdown"><Link href="#">About</Link>
            <ul>
            <li><Link href="/page-testimonial">Testimonial</Link></li>
            <li className="dropdown"><Link href="#">Blog</Link>
                <ul>
                <li><Link href="/news-grid">News Grid</Link></li>
                <li><Link href="/news-details">News Details</Link></li>
                </ul>
            </li> 
            </ul>
        </li>
         {/* <li><Link href="/page-about">About</Link></li> */}
          <li><Link href="/page-pricing">Pricing</Link></li>
         
        {/* <li className="dropdown"><Link href="#">Pages</Link>
            <ul>
            <li><Link href="/page-about">About</Link></li>
            <li><Link href="/page-pricing">Pricing</Link></li>
            <li><Link href="/page-testimonial">Testimonial</Link></li>
            <li><Link href="/page-faq">FAQ</Link></li>
            <li className="dropdown"><Link href="#">Team</Link>
                <ul>
                <li><Link href="/page-team">Team List</Link></li>
                <li><Link href="/page-team-details">Team Details</Link></li>
                </ul>
            </li>
            <li className="dropdown"><Link href="#">Shop</Link>
                <ul>
                <li><Link href="/shop-products">Products</Link></li>
                <li><Link href="/shop-products-sidebar">Products with Sidebar</Link></li>
                <li><Link href="/shop-product-details">Product Details</Link></li>
                <li><Link href="/shop-cart">Cart</Link></li>
                <li><Link href="/shop-checkout">Checkout</Link></li>
                </ul>
            </li>
            <li className="dropdown"><Link href="#">Blog</Link>
                <ul>
                <li><Link href="/news-grid">News Grid</Link></li>
                <li><Link href="/news-details">News Details</Link></li>
                </ul>
            </li> 
            <li><Link href="/page-404">Page 404</Link></li>
            </ul>
        </li>                   */}
        <li className="dropdown"><Link href="/page-services">Services</Link>
            <ul>
            <li><Link href="/page-services/digital-marketing">Digital Marketing</Link></li>
            <li><Link href="/page-services/social-media-marketing">Social Media Marketing</Link></li>
            <li><Link href="/page-services/ppc-services">PPC</Link></li>
             <li><Link href="/page-services/seo-services">SEO</Link></li>
            {/* <li><Link href="/page-service-details">Service Details</Link></li> */}
            </ul>
        </li>
        {/* <li className="dropdown"><Link href="#">Projects</Link>
            <ul>
            <li><Link href="/page-project">Projects</Link></li>
            <li><Link href="page-project-details">Project Details</Link></li>
            </ul>
        </li> */}
         <li className="dropdown"><Link href="#">Industries</Link>
            <ul>
            <li><Link href="/page-project">Real Estate & Property Developers</Link></li>
<li><Link href="/page-project">Automotive & Car Care</Link></li>
<li><Link href="/page-project">Healthcare & Clinics</Link></li>
<li><Link href="/page-project">Restaurants, Cafés & F&B Brands</Link></li>
<li><Link href="/page-project">E-Commerce & Online Stores</Link></li>
<li><Link href="/page-project">Hospitality & Tourism</Link></li>
<li><Link href="/page-project">Education & Training Institutes</Link></li>
<li><Link href="/page-project">Beauty, Salon & Personal Care</Link></li>
<li><Link href="/page-project">Construction & Contracting</Link></li>
<li><Link href="/page-project">Logistics & Transport</Link></li>
<li><Link href="/page-project">Cleaning & Home Services</Link></li>
<li><Link href="/page-project">Technology & IT Services</Link></li>

            </ul>
        </li>                                    
        {/* <li><Link href="/page-contact">Contact</Link></li> */}
    </ul>

    );
};

export default NavLinks;