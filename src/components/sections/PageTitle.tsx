import Link from 'next/link';
import React from 'react';

interface PageTitleProps {
  pageName: string;
  service?: {
    img_Main?: string;
    title?: string;
  };
}

const PageTitle: React.FC<PageTitleProps> = ({ service,pageName }) => {
  return (
    <section
      className="page-title"
    style={{
    backgroundImage: `url(${service?.img_Main ?? "/assets/images/background/default-fallback.jpg"})`,
  }}
      // style={{ backgroundImage: 'url(assets/images/background/about-banner.png)' }}
    >
      <div>
        <div className="title-outer text-center">
          <h1 className="title">{service?.title}</h1>
          {/* <ul className="page-breadcrumb">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>{pageName}</li>
          </ul> */}
        </div>
      </div>
    </section>
  );
};

export default PageTitle;
