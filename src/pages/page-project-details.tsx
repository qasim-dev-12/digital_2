import React from 'react';
import Layout from "../layouts/MainLayout";
import PageTitle from "../components/sections/PageTitle";
import ProjectDetails from "../components/sections/ProjectDetails";

function ProjectDetailsPage() {

    return (
        <>
            <Layout HeaderStyle="two">
                <PageTitle pageName="Portfolio Details" />
                <ProjectDetails />
            </Layout>
        </>
    )
}
export default ProjectDetailsPage