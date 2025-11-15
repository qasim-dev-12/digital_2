import React from "react";
import Layout from "../layouts/MainLayout";
import Banner from "../components/sections/Home6/Banner";
import Service from "../components/sections/Home6/Service";
import Projects from "../components/sections/Home6/Projects";
import Marquee from "../components/sections/Home2/Marquee";
import About from "../components/sections/Home6/About";
import Service2 from "../components/sections/Home6/Service2";
import Process from "../components/sections/Home6/Process";
import Testimonials from "../components/sections/Home6/Testimonials";
import Pricing from "../components/sections/Home6/Pricing";
import Video from "../components/sections/Home1/Video";
import Faqs from "../components/sections/Home6/Faqs";
import Cta from "../components/sections/Home5/Cta";
import Blog from "../components/sections/Home3/Blog";


function Home6() {

    return (
        <>
            <Layout HeaderStyle="five" FooterStyle="five">
                <Banner />
                <Service />
                <Projects />
                <Marquee />
                <About />
                <Service2 />
                <Process />
                <Testimonials />
                <Pricing />
                <Video />
                <Faqs />
                <Cta />
                <Blog /> 
            </Layout>
        </>
    );
}
export default Home6