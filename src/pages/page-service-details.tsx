import React from 'react';
import Layout from "../layouts/MainLayout";
import PageTitle from "../components/sections/PageTitle";
import ServiceDetails from "../components/sections/ServiceDetails";

function ServiceDetailsPage() {

    return (
        <>
            <Layout HeaderStyle="two">
                <PageTitle pageName="Service Details" />
                <ServiceDetails />
            </Layout>
        </>
    )
}
export default ServiceDetailsPage