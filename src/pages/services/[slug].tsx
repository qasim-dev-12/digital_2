import React from 'react';
import Layout from '../../layouts/MainLayout';
import PageTitle from "../../components/sections/PageTitle";
import ServiceDetails from "../../components/sections/ServiceDetails";
import { useRouter } from 'next/router';
import services from '../../data/sevicesData';

function ServiceDetailsPage() {
    const router = useRouter();
  const { slug } = router.query;
  console.log("Current slug:", slug);
    const service = services.find(s => s.slug === slug);
	console.log("Matched service:", service);
      

    return (
        <>
            <Layout>
                <PageTitle service={service} pageName="Service Details" />
                <ServiceDetails service={service} />
            </Layout>
        </>
    )
}
export default ServiceDetailsPage