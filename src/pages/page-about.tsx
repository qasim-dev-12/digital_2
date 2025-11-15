import React from 'react';
import Layout from "../layouts/MainLayout";
import PageTitle from "../components/sections/PageTitle";
import About from "../components/sections/Home3/About";
import Video from "../components/sections/Home3/Video";
import Service from "../components/sections/Home3/Service";

function AboutPage() {
    return (
        <>
            <Layout HeaderStyle="two">
                <PageTitle pageName="About Us" />
                <About />
                <Video />
                <Service className="pb-120" />
            </Layout>
        </>
    );
}
export default AboutPage