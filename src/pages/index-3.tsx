import React from "react";
import Layout from "../layouts/MainLayout";
import Banner from "../components/sections/Home3/Banner";
import Marquee from "../components/sections/Home3/Marquee";
import About from "../components/sections/Home3/About";
import Video from "../components/sections/Home3/Video";
import Service from "../components/sections/Home3/Service";
import Service2 from "../components/sections/Home3/Service2";
import Projects from "../components/sections/Home3/Projects";
import Testimonials from "../components/sections/Home3/Testimonials";
import Teams from "../components/sections/Home3/Teams";
import Pricing from "../components/sections/Home3/Pricing";
import Clients from "../components/sections/Home3/Clients";
import Contact from "../components/sections/Home3/Contact";
import Blog from "../components/sections/Home3/Blog";

function Home3() {

    return (
        <>
            <Layout HeaderStyle="three" FooterStyle="three">
                <Banner />
                <Marquee />
                <About />
                <Video />
                <Service />
                <Projects />
                <Service2 />
                <Testimonials />
                <Teams />
                <Pricing />
                <Clients />
                <Contact />
                <Blog />
            </Layout>
        </>
    );
}
export default Home3