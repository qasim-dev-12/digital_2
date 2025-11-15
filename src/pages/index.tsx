import React from "react";
import Layout from "../layouts/MainLayout";
import Banner from "../components/sections/Home1/Banner";
import About from "../components/sections/Home1/About";
import Service from "../components/sections/Home1/Service";
import Work from "../components/sections/Home1/Work";
import Project from "../components/sections/Home1/Project";
import Video from "../components/sections/Home1/Video";
import Team from "../components/sections/Home1/Team1";
import Testimonial from "../components/sections/Home1/Testimonial";
import Process from "../components/sections/Home1/Process";
import Blog from "../components/sections/Home1/Blog";
import Cta from "../components/sections/Home1/Cta";
import Clients from "../components/sections/Home1/Clients";

function Home1() {

    return (
        <>
        <Layout>
            <Banner />
            <About />
            <Service />
            <Work />
            <Project />
            <Video />
            <Team />
            <Testimonial />
            <Process />
            <Blog />
            <Cta />
            <Clients />
        </Layout>
        </>
    );
}
export default Home1