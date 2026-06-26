import React from 'react';
import Layout from "../layouts/MainLayout";
import PageTitle from "../components/sections/PageTitle";

export default function TermsOfService() {
    return (
        <Layout>
            <PageTitle pageName="Terms of Service" />
            <section className="py-80 bg-white">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <p className="text-muted mb-4">Effective Date: June 26, 2025</p>

                            <h4>1. Acceptance of Terms</h4>
                            <p>By accessing or using the Staytop Media website (staytop.ae) or engaging our services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our website or services.</p>

                            <h4>2. About Staytop Media</h4>
                            <p>Staytop Media is a registered digital marketing agency operating in Dubai, United Arab Emirates. We offer Google Ads management, SEO, social media marketing, content creation, campaign reporting, and related digital services.</p>

                            <h4>3. Services</h4>
                            <p>We provide digital marketing services as described on our website and agreed in individual client proposals or contracts. All services are subject to a separate service agreement between Staytop Media and the client.</p>

                            <h4>4. Google Ads Services</h4>
                            <p>When you engage us for Google Ads campaign management, you authorize Staytop Media to access and manage your Google Ads account(s) using the Google Ads API on your behalf. We will use your campaign data solely to manage, optimize, and report on your advertising campaigns. You retain ownership of your Google Ads account and data.</p>

                            <h4>5. Client Responsibilities</h4>
                            <ul>
                                <li>Provide accurate business information and campaign goals</li>
                                <li>Ensure you have the rights to advertise the products/services in your campaigns</li>
                                <li>Comply with Google Ads policies and applicable advertising regulations</li>
                                <li>Promptly communicate any changes to your business or campaign requirements</li>
                            </ul>

                            <h4>6. Intellectual Property</h4>
                            <p>All website content, branding, and materials created by Staytop Media remain our intellectual property unless otherwise agreed in writing. Content created for clients becomes the client's property upon full payment.</p>

                            <h4>7. Payment Terms</h4>
                            <p>Payment terms are specified in individual client agreements. Staytop Media reserves the right to suspend services for overdue payments.</p>

                            <h4>8. Limitation of Liability</h4>
                            <p>Staytop Media is not liable for indirect, incidental, or consequential damages arising from use of our services. Our total liability shall not exceed the fees paid for the specific service giving rise to the claim.</p>

                            <h4>9. Confidentiality</h4>
                            <p>Both parties agree to maintain the confidentiality of proprietary information shared during the course of the engagement.</p>

                            <h4>10. Termination</h4>
                            <p>Either party may terminate the service agreement as specified in the client contract. Upon termination, Staytop Media will return access credentials and provide a final campaign report.</p>

                            <h4>11. Governing Law</h4>
                            <p>These Terms are governed by the laws of the United Arab Emirates. Any disputes shall be resolved under the jurisdiction of Dubai courts.</p>

                            <h4>12. Changes to Terms</h4>
                            <p>We reserve the right to update these Terms. Continued use of our services after changes constitutes acceptance of the revised Terms.</p>

                            <h4>13. Contact Us</h4>
                            <p>Staytop Media<br />Dubai, United Arab Emirates<br />Email: <a href="mailto:info@staytop.ae">info@staytop.ae</a><br />Phone: +971 52 236 7120</p>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
