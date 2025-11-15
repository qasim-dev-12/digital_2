import React from "react";
import Layout from "../layouts/MainLayout";
import Banner from "../components/sections/Home4/Banner";
import Clients from "../components/sections/Home4/Clients";
import About from "../components/sections/Home4/About";
import Service from "../components/sections/Home4/Service";
import Marquee from "../components/sections/Home4/Marquee";
import Projects from "../components/sections/Home4/Projects";
import Service2 from "../components/sections/Home4/Service2";
import Process from "../components/sections/Home4/Process";
import TeamAwards from "../components/sections/Home4/TeamAwards";
import Teams from "../components/sections/Home4/Teams";
import Testimonials from "../components/sections/Home4/Testimonials";
import Contact from "../components/sections/Home3/Contact";
import Blog from "../components/sections/Home3/Blog";

function Home4() {
    
    return (
        <>
            <Layout FooterStyle="four">
                <Banner />
                <Clients />
                <About />
                <Service />
                <Marquee />
                <Projects />
                <Service2 />
                <Process />
                <TeamAwards />
                <Teams />
                <Testimonials />
                <Contact />
                <Blog />
            </Layout>
        </>
    );
}
export default Home4