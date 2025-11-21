// import React from 'react';
// import Layout from '../../layouts/MainLayout';
// // import Layout from "../layouts/MainLayout";
// import PageTitle from '../../components/sections/PageTitle';
// // import PageTitle from "../components/sections/PageTitle";
// import TeamDetails from '../../components/sections/TeamDetails';
// // import TeamDetails from "../components/sections/TeamDetails";
// import industries from '../../data/industryData';
// import { useRouter } from 'next/router';
// interface Industry {
//     title: string;
//     slug: string;
//     image: string;
// }

// function TeamDetailsPage() {
  


//     return (
//         <>
//             <Layout HeaderStyle="three">
//                 <PageTitle industry={industry} pageName="Team Details" />
//                 <TeamDetails industry={industry} />
//             </Layout>
//         </>
//     )
// }
// export default TeamDetailsPage

import React from 'react';
// import Layout from "../layouts/MainLayout";
// import PageTitle from "../components/sections/PageTitle";
// import ProjectDetails from "../components/sections/ProjectDetails";
import Layout from '../../layouts/MainLayout';
import PageTitle from "../../components/sections/PageTitle";
import ProjectDetails from "../../components/sections/ProjectDetails";
import { useRouter } from 'next/router';
import industries from '../../data/industryData';

function ProjectDetailsPage() {
        const router = useRouter();
    const { slug } = router.query;
    console.log("Current slug:", slug);
    const industry = industries.find(i => i.slug === slug);
    
    console.log("Matched industry:", industry);   

    return (
        <>
            <Layout>
                <PageTitle pageName="Portfolio Details" />
                <ProjectDetails industry={industry} />
            </Layout>
        </>
    )
}
export default ProjectDetailsPage