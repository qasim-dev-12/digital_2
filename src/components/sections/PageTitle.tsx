import Link from 'next/link';
import React from 'react';

interface PageTitleProps {
  pageName: string;
  service?: {
    img_Main?: string;
    title?: string;
  };
   industry?: Industry;
  
}
export interface IndustryInfo {
  industryFocus?: string;
  serviceCategory?: string;
  region?: string;
  objective?: string;
}

export interface Industry {
  title?: string;
  slug?: string;
  image?: string;
  img_Main?: string;
  img_1?: string;
  img_2?: string;

  industryInfo?: IndustryInfo;

  aboutTitle?: string;
  overview?: string;
  overview1?: string;
  overview2?: string;
  description_below_img?: string;
  benefitsBlock?:{ title?: string; 
    fullText?: string;
    points?: string[]
  };
  // optional gallery - URLs
  gallery?: string[];

  // optional workflow / extras
  workflow?: Array<{ step?: number; title?: string; text?: string }>;
}

export interface ProjectDetailsProps {
  // make industry optional to avoid TS errors before router is ready
  industry?: Industry | null;
}


const PageTitle: React.FC<PageTitleProps> = ({ service,pageName,industry }) => {
  return (
   <section
  className="page-title page-title-with-overlay"
  style={{
    backgroundImage: `url(${service?.img_Main ?? "/assets/images/background/about-banner.png"})`,
  }}
>
  <div className="overlay-content">
    <h1 className="page-heading">
      {industry?.title ?? service?.title}
    </h1>
  </div>
</section>
  );
};

export default PageTitle;
