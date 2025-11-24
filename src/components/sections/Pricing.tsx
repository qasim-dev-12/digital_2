import Link from 'next/link';
import React from 'react';


const pricingData = [
  {
    title: 'Social Lite',
    price: 999,
  icon: '/assets/images/icons/theme-icon36.png',
    features: [
      '2 platforms (Facebook & Instagram)',
      '4 posts + 4 reels per month',
      'Basic profile optimization',
      'Caption writing for all posts',
      'Standard hashtag set',
      'Monthly scheduling & publishing',
      'Basic page monitoring',
      'Brand-aligned content design',
      'Performance overview (monthly report)',
      'Email support',
    ],
    delay: '0.15',
  },
  {
    title: 'Social Pro',
    price: 1999,
   icon: '/assets/images/icons/theme-icon37.png',
    features: [
      '3 platforms (Facebook, Instagram, TikTok)',
      '8 posts + 8 reels per month',
      'Keyword + hashtag research',
      'Enhanced profile optimization',
      'Strategic content planning',
      'Posting schedule management',
      'Community monitoring (basic responses)',
      'Creative graphics & video edits',
      'Monthly strategy review',
      'Email + WhatsApp support',
    ],
    delay: '0.25',
    active: true,
  },
  {
    title: 'Social Elite',
    price: 3999,
   icon: '/assets/images/icons/theme-icon38.png',// fallback if filename slight mismatch
    // If your build expects exact path, replace above with:
    // icon: '/mnt/data/A_flat,_graphic_digital_graphic_displays_th.png',
    features: [
      '4 platforms (Facebook, Instagram, TikTok, LinkedIn)',
      '12 posts + 12 reels per month',
      'Advanced profile optimization',
      'High-quality video editing for reels',
      'Keyword + competitor hashtag strategy',
      'Custom graphic templates',
      'Community engagement (comments + DMs – basic)',
      'Priority scheduling & delivery',
      'Detailed monthly performance report',
      'Priority support (Email + WhatsApp)',
    ],
    delay: '0.35',
  },
];
const googleAdsPricing = [
  {
    title: 'Ad Starter',
    price: 699,
    icon: '/assets/images/icons/theme-icon36.png',
    features: [
      'Google Search Ads (up to 2 campaigns)',
      'Basic keyword research',
      'Up to 50 targeted keywords',
      'Ad copywriting (2–3 variations)',
      'Negative keyword setup (basic)',
      'Conversion tracking setup (Pixel / GTAG / GA4)',
      'Landing page audit',
      'Weekly light monitoring',
      'Monthly performance report',
      'Email support',
    ],
    delay: '0.15',
  },

  {
    title: 'Ad Performance Pro',
    price: 1299,
    icon: '/assets/images/icons/theme-icon37.png',
    features: [
      'Google Search + Display + Remarketing Ads',
      'Advanced keyword research',
      'Up to 150 targeted keywords',
      'A/B testing for ads (copies + extensions)',
      'Competitor analysis (Search visibility & CPC gaps)',
      'Conversion tracking & event setup',
      'Landing page optimization recommendations',
      'Weekly optimization (bids, keywords & placements)',
      'Bi-weekly insights report',
      'Email + WhatsApp support',
    ],
    delay: '0.25',
    active: true,
  },

  {
    title: 'Ad Dominator',
    price: 2499,
    icon: '/assets/images/icons/theme-icon38.png',
    features: [
      'Google Search + Display + YouTube + Discovery + Remarketing',
      'Deep keyword + audience research (buyer intent focused)',
      'Unlimited keyword targeting',
      'Full A/B testing (ads, extensions, landing pages)',
      'Competitor gap analysis + strategy mapping',
      'Conversion-based bid optimization (Maximize Conversions / CPA / ROAS)',
      'Funnel creation (Awareness → Remarketing → Conversion)',
      'Weekly insights + manual optimization',
      'Dedicated account manager',
      'Priority support (WhatsApp, email, quick response)',
    ],
    delay: '0.35',
  },
];
const seoPricing = [
  {
    title: 'SEO Essentials',
    price: 799,
    icon: '/assets/images/icons/theme-icon36.png',
    features: [
      'Basic website SEO audit',
      'Keyword research (10–15 target keywords)',
      'On-page optimization (titles, meta tags, headers)',
      'Image optimization (ALT tags, compression)',
      'Fixing technical issues (basic)',
      'Setup of Google Search Console + Google Analytics',
      'Monthly performance tracking',
      '2 blog topics suggestions (no writing)',
      'Basic backlinks (5 foundational links)',
      'Monthly SEO report',
    ],
    delay: '0.15',
  },

  {
    title: 'SEO Growth Pro',
    price: 1499,
    icon: '/assets/images/icons/theme-icon37.png',
    features: [
      'Full website audit + competitor analysis',
      'Keyword targeting for 25–40 keywords',
      'On-page SEO (full website optimization)',
      'Technical SEO (speed, indexing, schema, mobile fixes)',
      '2 optimized blog posts/month (500–700 words each)',
      'High-authority backlinks (10–15 links)',
      'Local SEO optimization (Google Business Profile)',
      'Content strategy + click-through optimization',
      'Weekly tracking + bi-weekly improvements',
      'Monthly insights report',
    ],
    delay: '0.25',
    active: true,
  },

  {
    title: 'SEO Elite Dominator',
    price: 2999,
    icon: '/assets/images/icons/theme-icon38.png',
    features: [
      'Advanced SEO audit + full competitor gap mapping',
      'Keyword strategy for 50–100+ high-intent keywords',
      'Complete on-page + technical SEO optimization',
      'Schema markup + advanced technical fixes',
      '4 premium blog posts/month (800–1200 words each)',
      'High-quality backlink campaign (20–30 links/month)',
      'Local SEO + citation building',
      'Conversion-focused SEO (UX + content improvement)',
      'Weekly insights + manual optimization',
      'Dedicated SEO specialist + priority support',
    ],
    delay: '0.35',
  },
];
const webDevPricing = [
  {
    title: 'Web Starter',
    price: 1999,
    icon: '/assets/images/icons/theme-icon36.png',
    features: [
      '5-page responsive website (Home, About, Services, Contact, Blog/Extra)',
      'Mobile-friendly + fast-loading design',
      'Basic UI/UX layout',
      'Contact form integration',
      'WhatsApp + social media integrations',
      '1 round of revisions',
      'SEO-friendly structure (basic on-page setup)',
      'Standard security setup (SSL, basic protection)',
      'Free stock images included',
      'Delivery in 7–10 days',
    ],
    delay: '0.15',
  },

  {
    title: 'Web Pro',
    price: 3999,
    icon: '/assets/images/icons/theme-icon37.png',
    features: [
      'Up to 10 custom-designed pages',
      'Premium UI/UX with branded visuals',
      'Advanced mobile optimization',
      'Blog setup + dynamic content',
      'Lead forms, WhatsApp API, CTAs',
      '2 rounds of revisions',
      'On-page SEO optimization (titles, meta, alt tags)',
      'Speed optimization (caching, image optimization)',
      'Basic animations + transitions',
      'Delivery in 10–14 days',
    ],
    delay: '0.25',
    active: true,
  },

  {
    title: 'Web Elite',
    price: 7999,
    icon: '/assets/images/icons/theme-icon38.png',
    features: [
      'Unlimited pages (as per sitemap)',
      'Fully custom UI/UX + advanced animations',
      'Conversion-optimized structure (CRO-focused design)',
      'CMS development (WordPress / Webflow / Custom)',
      'CRM integrations (HubSpot, Zoho, Salesmate, etc.)',
      'Advanced on-page SEO setup',
      'High-speed optimization (90+ score)',
      'Multi-language support (optional)',
      '3 rounds of revisions',
      'Delivery in 15–25 days',
    ],
    delay: '0.35',
  },
];
const digitalMarketingPricing = [
  {
    title: 'Digital Start',
    price: 1499,
    icon: '/assets/images/icons/theme-icon36.png',
    features: [
      'Minimum Ad Spend Required: AED 5,000 / month',
      'Meta Ads (Facebook + Instagram) campaign setup',
      'Google Search Ads (basic) setup',
      'Audience research & basic targeting',
      '4 ad creatives (static + simple captions)',
      'Conversion tracking setup (Pixel / GA4 basic)',
      'Weekly budget & performance monitoring',
      'A/B testing for 2 creatives',
      'Monthly performance report',
      'Basic retargeting campaign',
      'Email & WhatsApp support',
    ],
    delay: '0.15',
  },

  {
    title: 'Digital Growth',
    price: 2999,
    icon: '/assets/images/icons/theme-icon37.png',
    features: [
      'Minimum Ad Spend Required: AED 7,500 / month',
      'Meta Ads management (FB + IG)',
      'Google Search + Display Ads (advanced setup)',
      'Advanced UAE audience targeting',
      '8 high-quality creatives (static + motion graphics)',
      'A/B testing for ads, audiences & landing pages',
      'Weekly optimization for bids, budgets & targeting',
      'Conversion tracking setup (Pixel + GA4 + Events)',
      'Bi-weekly performance reports',
      'Landing page audit & conversion recommendations',
      'Monthly strategy review call',
    ],
    delay: '0.25',
    active: true,
  },

  {
    title: 'Digital Performance Pro',
    price: 4999,
    icon: '/assets/images/icons/theme-icon38.png',
    features: [
      'Minimum Ad Spend Required: AED 10,000 / month',
      'Full Meta Ads + Google Ads management (Search, Display, YouTube)',
      'Advanced audience research + competitor analysis',
      'LinkedIn Ads support (optional for B2B)',
      '12 premium creatives (video + motion graphics + reels ads)',
      'Advanced A/B testing (ads, creatives, landing pages, funnels)',
      'Weekly optimization + scaling strategy',
      'Conversion tracking setup (GA4, GTM, CAPI, iOS14-ready)',
      'Full analytics dashboard + weekly reporting',
      'Monthly strategy call + growth roadmap',
      'Priority dedicated support (24–48 hr response)',
    ],
    delay: '0.35',
  },
];



const Pricing = () => {
  return (
    <section className="pricing-section-three pt-120 pb-60">
        <div className="container">
        <div className="row">
           <div className="section-header text-center mb-5">
      <h3 className="section-title">⭐ DIGITAL MARKETING PACKAGES</h3>
    </div>
          {digitalMarketingPricing.map((item, index) => (
            <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
              <div className={`pricing-block-three anim-fade-move ${item.active ? 'active' : ''}`} data-fade-from={index === 2 ? 'right' : 'left'} data-delay={item.delay}>
                <div className="inner-box">
                  <div className="shape-image1"><img src={item.icon} alt={`${item.title} Icon`} /></div>
                  <h4 className="title">{item.title}</h4>
                  <div className="price-box">
                    <h4 className="price">
                      <sup>د.إ</sup>
                      {item.price}
                    </h4>
                    <span className="validaty">/month</span>
                  </div>
                  <div className="text">Highly recommended for small teams who seek to upgrade their time</div>
                  <div className="list-title">What you will get:</div>
                  <ul className="features">
                    {item.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                  <div className="btn-box">
                <Link
  className="theme-btn btn-style-one dark-bg hover-dark"
  href="https://wa.me/919876543210"
  aria-label="WhatsApp"
>
  <span className="btn-title">Choose Plan</span>
</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="section-header text-center mb-5">
      <h3 className="section-title">⭐ SOCIAL MEDIA MARKETING PACKAGES</h3>
    </div>
      <div className="container mb-50">
        <div className="row">
          {pricingData.map((item, index) => (
            <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
              <div className={`pricing-block-three anim-fade-move ${item.active ? 'active' : ''}`} data-fade-from={index === 2 ? 'right' : 'left'} data-delay={item.delay}>
                <div className="inner-box">
                  <div className="shape-image1"><img src={item.icon} alt={`${item.title} Icon`} /></div>
                  <h4 className="title mx-auto">{item.title}</h4>
                  <div className="price-box">
                    <h4 className="price">
                      <sup>د.إ</sup>
                      {item.price}
                    </h4>
                    <span className="validaty">/month</span>
                  </div>
                  <div className="text">Highly recommended for small teams who seek to upgrade their time</div>
                  <div className="list-title">What you will get:</div>
                  <ul className="features">
                    {item.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                  <div className="btn-box">
                   <Link
  className="theme-btn btn-style-one dark-bg hover-dark"
  href="https://wa.me/919876543210"
  aria-label="WhatsApp"
>
  <span className="btn-title">Choose Plan</span>
</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
       <div className="container">
        <div className="row">
           <div className="section-header text-center mb-5">
      <h3 className="section-title">⭐ GOOGLE ADS PACKAGES</h3>
    </div>
          {googleAdsPricing.map((item, index) => (
            <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
              <div className={`pricing-block-three anim-fade-move ${item.active ? 'active' : ''}`} data-fade-from={index === 2 ? 'right' : 'left'} data-delay={item.delay}>
                <div className="inner-box">
                  <div className="shape-image1"><img src={item.icon} alt={`${item.title} Icon`} /></div>
                  <h4 className="title">{item.title}</h4>
                  <div className="price-box">
                    <h4 className="price">
                      <sup>د.إ</sup>
                      {item.price}
                    </h4>
                    <span className="validaty">/month</span>
                  </div>
                  <div className="text">Highly recommended for small teams who seek to upgrade their time</div>
                  <div className="list-title">What you will get:</div>
                  <ul className="features">
                    {item.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                  <div className="btn-box">
                  <Link
  className="theme-btn btn-style-one dark-bg hover-dark"
  href="https://wa.me/919876543210"
  aria-label="WhatsApp"
>
  <span className="btn-title">Choose Plan</span>
</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
       <div className="container">
        <div className="row">
           <div className="section-header text-center mb-5">
      <h3 className="section-title">⭐ SEO ADS PACKAGES</h3>
    </div>
          {seoPricing.map((item, index) => (
            <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
              <div className={`pricing-block-three anim-fade-move ${item.active ? 'active' : ''}`} data-fade-from={index === 2 ? 'right' : 'left'} data-delay={item.delay}>
                <div className="inner-box">
                  <div className="shape-image1"><img src={item.icon} alt={`${item.title} Icon`} /></div>
                  <h4 className="title">{item.title}</h4>
                  <div className="price-box">
                    <h4 className="price">
                      <sup>د.إ</sup>
                      {item.price}
                    </h4>
                    <span className="validaty">/month</span>
                  </div>
                  <div className="text">Highly recommended for small teams who seek to upgrade their time</div>
                  <div className="list-title">What you will get:</div>
                  <ul className="features">
                    {item.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                  <div className="btn-box">
                   <Link
  className="theme-btn btn-style-one dark-bg hover-dark"
  href="https://wa.me/919876543210"
  aria-label="WhatsApp"
>
  <span className="btn-title">Choose Plan</span>
</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container">
        <div className="row">
           <div className="section-header text-center mb-5">
      <h3 className="section-title">⭐ WEBSITE DEVELOPMENT PACKAGES</h3>
    </div>
          {webDevPricing.map((item, index) => (
            <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
              <div className={`pricing-block-three anim-fade-move ${item.active ? 'active' : ''}`} data-fade-from={index === 2 ? 'right' : 'left'} data-delay={item.delay}>
                <div className="inner-box">
                  <div className="shape-image1"><img src={item.icon} alt={`${item.title} Icon`} /></div>
                  <h4 className="title">{item.title}</h4>
                  <div className="price-box">
                    <h4 className="price">
                      <sup
>د.إ


                      </sup>
                      {item.price}
                    </h4>
                    <span className="validaty">/month</span>
                  </div>
                  <div className="text">Highly recommended for small teams who seek to upgrade their time</div>
                  <div className="list-title">What you will get:</div>
                  <ul className="features">
                    {item.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                  <div className="btn-box">
                  <Link
  className="theme-btn btn-style-one dark-bg hover-dark"
  href="https://wa.me/919876543210"
  aria-label="WhatsApp"
>
  <span className="btn-title">Choose Plan</span>
</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    
    </section>
  );
};

export default Pricing;
