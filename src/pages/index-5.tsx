import React from "react";
import Layout from "../layouts/MainLayout";
import Banner from "../components/sections/Home5/Banner";
import Clients from "../components/sections/Home5/Clients";
import About from "../components/sections/Home5/About";
import Service from "../components/sections/Home5/Service";
import Marquee2 from "../components/sections/Home5/Marquee2";
import Projects from "../components/sections/Home5/Projects";
import Testimonials from "../components/sections/Home5/Testimonials";
import TeamAwards from "../components/sections/Home5/TeamAwards";
import Video from "../components/sections/Home1/Video";
import Clients2 from "../components/sections/Home5/Clients2";
import Teams from "../components/sections/Home5/Teams";
import Cta from "../components/sections/Home5/Cta";
import Blog from "../components/sections/Home3/Blog";


function Home5() {

    return (
        <>
            <Layout HeaderStyle="four" FooterStyle="two">
                <Banner />
                <Clients />
                <About />
                <Service />
                <Marquee2 />
                <Projects />
                <Testimonials />
                <TeamAwards />
                <Video />
                <Clients2 />
                <Teams />
                <Cta />
                <Blog /> 
            </Layout>
        </>
    );
}
export default Home5