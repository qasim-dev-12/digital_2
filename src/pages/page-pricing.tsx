import React from 'react';
import Layout from "../layouts/MainLayout";
import PageTitle from "../components/sections/PageTitle";
import Pricing from "../components/sections/Pricing";

function PricingPage() {

    return (
        <>
            <Layout HeaderStyle="two">
                <PageTitle pageName="Pricing" />
                <Pricing />
            </Layout>
        </>
    )
}
export default PricingPage