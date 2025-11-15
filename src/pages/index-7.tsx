import React from "react";
import Layout from "../layouts/MainLayout";
import Banner from "../components/sections/Home7/Banner";
import Service from "../components/sections/Home7/Service";
import Projects from "../components/sections/Home7/Projects";
import About from "../components/sections/Home7/About";
import Funfact from "../components/sections/Home2/Funfact";
import Process from "../components/sections/Home7/Process";
import Faqs from "../components/sections/Home6/Faqs";
import Teams from "../components/sections/Home7/Teams";
import Blog from "../components/sections/Home7/Blog";


export default function Home7() {

    return (
        <>
            <Layout HeaderStyle="six">
                <Banner />
                <Service />
                <Projects />
                <About />
                <Funfact />
                <Process />
                <Faqs />
                <Teams />
                <Blog /> 
            </Layout>
        </>
    );
}