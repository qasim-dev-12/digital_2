import Head from 'next/head';
import React from 'react';

interface PageHeadProps {
  headTitle?: string;
}

const PageHead: React.FC<PageHeadProps> = ({ headTitle }) => {
  return (
    <Head>
      <title>{headTitle ?? 'Stay Top Media | Advertising & Marketing'}</title>
      <link rel="shortcut icon" href="/assets/images/favicon1.png" type="image/x-icon" />
    </Head>
  );
};

export default PageHead;