import React from 'react';
import Layout from "../layouts/MainLayout";
import Service2 from "../components/sections/Home6/Service2";
import PageTitle from "../components/sections/PageTitle";

function projectPage() {

    return (
        <>
            <Layout HeaderStyle="two">
                <PageTitle pageName="Portfolio" />
                <Service2 />
            </Layout>
        </>
    )
}
export default projectPage