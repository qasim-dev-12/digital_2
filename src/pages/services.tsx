import React from 'react';
import Layout from "../layouts/MainLayout";
import PageTitle from "../components/sections/PageTitle";
import Service2 from "../components/sections/Home6/Service2";

function ServicesGridPage() {

    return (
        <>
            <Layout>
                <PageTitle pageName="Service Grid" />
                <Service2 />
            </Layout>
        </>
    )
}
export default ServicesGridPage