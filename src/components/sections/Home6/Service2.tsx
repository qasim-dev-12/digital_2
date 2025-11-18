import React, { useState } from 'react';
import Link from 'next/link';
import services from '../../../data/sevicesData';
import { useRouter } from 'next/router'

function Service2() {
   const router = useRouter()
  const [activeIndex, setActiveIndex] = useState(1); 

  const services = [
    {
       slug: "digital-marketing",
      number: "01",
      title: "Digital Marketing",
      image: "assets/images/resource/01 Digital.png",
      shortDesc: "Full-funnel digital strategy to grow conversions and scale.",
      // grouped into pairs to map to the exact .list-item <span>LABEL</span> TEXT format
      listItems: [
        { label: "Full-funnel digital strategy", text: "Campaign planning & execution" },
        { label: "Performance tracking", text: "Optimization & reporting" },
        { label: "Conversion-focused creatives", text: "Market & competitor analysis" },
        { label: "Multi-platform reach", text: "Continuous growth management" },
      ],
    },
    {
      slug: "social-media-marketing", 
      number: "02",
      title: "Social Media Marketing",
      image: "assets/images/resource/02 Social Media.png",
      shortDesc: "Build and engage your audience across platforms.",
      listItems: [
        { label: "Content creation", text: "Content planning" },
        { label: "Multi-platform presence", text: "Audience engagement strategies" },
        { label: "Trend-based reels & video", text: "Social media analytics" },
        { label: "Community management", text: "Influencer collaboration setup" },
      ],
    },
    {
       slug: "ppc-services", 
      number: "03",
      title: "PPC Services",
      image: "assets/images/resource/03 PPC.png",
      shortDesc: "ROI-first paid search & performance campaigns.",
      listItems: [
        { label: "Google Ads setup", text: "ROI-driven bidding strategy" },
        { label: "Conversion tracking", text: "Ad copywriting & design" },
        { label: "Audience targeting", text: "Landing page optimization" },
        { label: "Retargeting ads", text: "Performance monitoring & reporting" },
      ],
    },
    {
        slug: "seo-services", 
      number: "04",
      title: "SEO Services",
      image: "assets/images/resource/04 SEO.png",
      shortDesc: "Improve visibility, speed and search performance.",
      listItems: [
        { label: "On-page optimization", text: "Technical SEO audit" },
        { label: "Keyword research", text: "Backlink building" },
        { label: "Local SEO", text: "Speed & performance improvement" },
        { label: "Content optimization", text: "Monthly ranking reports" },
      ],
    },
    {
        slug: "email-marketing", 
      number: "05",
      title: "Email Marketing",
      image: "assets/images/resource/05 Email.png",
      shortDesc: "Automated, segmented and high-deliverability campaigns.",
      listItems: [
        { label: "Automated email sequences", text: "Newsletter creation" },
        { label: "Audience segmentation", text: "Personalized messaging" },
        { label: "A/B testing", text: "High-deliverability setup" },
        { label: "Performance tracking", text: "Lead nurturing workflows" },
      ],
    },
    {
        slug: "web-development", 
      number: "06",
      title: "Web Development",
      image: "assets/images/resource/06 Web.png",
      shortDesc: "Fast, responsive and SEO-friendly websites.",
      listItems: [
        { label: "Responsive website design", text: "Custom CMS integration" },
        { label: "UI/UX-focused layouts", text: "Speed optimization" },
        { label: "SEO-friendly structure", text: "Secure coding practices" },
        { label: "API & 3rd-party integration", text: "Website maintenance & updates" },
      ],
    },
    {
        slug: "mobile-app-development",
      number: "07",
      title: "Mobile App Development",
      image: "assets/images/resource/07 Mobile.png",
      shortDesc: "High-performance apps for iOS & Android.",
      listItems: [
        { label: "iOS & Android development", text: "User-first design approach" },
        { label: "App wireframing & prototyping", text: "API integration" },
        { label: "High-performance coding", text: "App store optimization" },
        { label: "Security & bug-free architecture", text: "Ongoing updates & support" },
      ],
    },
  ];

  return (
    <section className="services-section-seven">
      <div className="inner-section">
        <div className="anim-icons tm-gsap-img-parallax">
          <img className="images-shape1" src="assets/images/icons/shape-style45.png" alt="Shape" />
        </div>
        <div className="container">
          <div className="sec-title">
            <div className="row">
              <div className="col-lg-7">
                <span className="sub-title wow fadeInUp">
                  <img className="icon-img" src="assets/images/icons/sub-title-shape.png" alt="Icon" /> Services
                </span>
                <h2 className="title mb-lg-0 wow fadeInUp">
                  We Provide Digital <br /> Services <span>for You</span>
                </h2>
              </div>
              <div className="col-lg-5">
                <div className="text">
We provide end-to-end digital solutions designed to help businesses grow, scale, and stay ahead of the competition. From strategy and design to marketing and development, our team delivers impactful results across every digital touchpoint                </div>
                <Link href="/page-contact" className="theme-btn btn-style-four">
                  <span className="btn-title">All Services</span>
                  <span className="dot-box"><span className="dot-item"></span></span>
                </Link>
              </div>
            </div>
          </div>

          <div className="outer-box">
            {services.map((service, index) => (
              <div className="service-block-seven" key={index}>
                <div
                  className={`inner-box ${activeIndex === index ? 'active' : ''}`}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className="title-box">
                    <div className="number"><span>{service.number}</span></div>
                    <div className="title">{service.title}</div>
                  </div>
                  <div className="content-box">
                    <div className="image-column">
                      <div className="inner-column">
                        <figure className="image">
                          <img src={service.image} alt={service.title} />
                          {/* <img src="assets/images/resource/service5-1.jpg" alt="Service" /> */}
                        </figure>
                        <div className="icon-box">
                          <div className="inner">
                            {/* <Link href="/page-service-details">
                              <i className="icon flaticon-right-down"></i>
                            </Link> */}
                            {/* <Link href={`/page-service-details/${service.slug}`}>
  <i className="icon flaticon-right-down"></i>
</Link> */}
<Link href={`/page-services/${service.slug}`}>
  <i aria-label={`Open ${service.title} details`}><i className="icon flaticon-right-down" /></i>
</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-column">
  <div className="inner-column">
    <div className="info-list">
      {service.listItems.map((item, i) => (
        <div className="list-item" key={i}>
          <span>{item.label}</span> {item.text}
        </div>
      ))}
    </div>
  </div>
</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Service2;
