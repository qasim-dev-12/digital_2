import React from "react";
import Layout from "../layouts/MainLayout";
import Banner from "../components/sections/Home2/Banner";
import Service from "../components/sections/Home2/Service";
import Marquee from "../components/sections/Home2/Marquee";
import About from "../components/sections/Home2/About";
import Funfact from "../components/sections/Home2/Funfact";
import Projects from "../components/sections/Home2/Projects";
import Socials from "../components/sections/Home2/Socials";
import Team from "../components/sections/Home2/Team";
import Pricing from "../components/sections/Home2/Pricing";
import Testimonial from "../components/sections/Home2/Testimonial";
import Blog from "../components/sections/Home2/Blog";

function Home2() {

    return (
        <>
            <Layout HeaderStyle="two" FooterStyle="two">
                <Banner />
                <Service />
                <Marquee />
                <About />
                <Funfact />
                <Projects />
                <Socials />
                <Team />
                <Pricing />
                <Testimonial />
                <Blog />
            </Layout>
        </>
    );
}
export default Home2