import React from 'react';
import Layout from "../layouts/MainLayout";
import PageTitle from "../components/sections/PageTitle";

export default function TermsOfService() {
    return (
        <Layout>
            <PageTitle pageName="Terms of Service" />
            <section className="faqs-section pt-120 pb-120">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">

                            <div className="sec-title mb-40">
                                <h2 className="title">Terms of Service</h2>
                                <div className="text">Effective Date: June 26, 2025</div>
                            </div>

                            <div className="about-content">

                                <h4 className="sub-title" style={{ marginTop: 30, marginBottom: 10 }}>1. Acceptance of Terms</h4>
                                <div className="text mb-20">
                                    By accessing or using the Staytop Media website (staytop.ae) or engaging our services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our website or services.
                                </div>

                                <h4 className="sub-title" style={{ marginTop: 30, marginBottom: 10 }}>2. About Staytop Media</h4>
                                <div className="text mb-20">
                                    Staytop Media is a registered digital marketing agency operating in Dubai, United Arab Emirates. We offer Google Ads management, SEO, social media marketing, content creation, campaign reporting, and related digital services.
                                </div>

                                <h4 className="sub-title" style={{ marginTop: 30, marginBottom: 10 }}>3. Services</h4>
                                <div className="text mb-20">
                                    We provide digital marketing services as described on our website and agreed in individual client proposals or contracts. All services are subject to a separate service agreement between Staytop Media and the client.
                                </div>

                                <h4 className="sub-title" style={{ marginTop: 30, marginBottom: 10 }}>4. Google Ads Services</h4>
                                <div className="text mb-20">
                                    When you engage us for Google Ads campaign management, you authorize Staytop Media to access and manage your Google Ads account(s) using the Google Ads API on your behalf. We will use your campaign data solely to manage, optimize, and report on your advertising campaigns. You retain ownership of your Google Ads account and data.
                                </div>

                                <h4 className="sub-title" style={{ marginTop: 30, marginBottom: 10 }}>5. Client Responsibilities</h4>
                                <ul className="list-style-one mb-20">
                                    <li>Provide accurate business information and campaign goals</li>
                                    <li>Ensure you have the rights to advertise the products/services in your campaigns</li>
                                    <li>Comply with Google Ads policies and applicable advertising regulations</li>
                                    <li>Promptly communicate any changes to your business or campaign requirements</li>
                                </ul>

                                <h4 className="sub-title" style={{ marginTop: 30, marginBottom: 10 }}>6. Intellectual Property</h4>
                                <div className="text mb-20">
                                    All website content, branding, and materials created by Staytop Media remain our intellectual property unless otherwise agreed in writing. Content created for clients becomes the client's property upon full payment.
                                </div>

                                <h4 className="sub-title" style={{ marginTop: 30, marginBottom: 10 }}>7. Payment Terms</h4>
                                <div className="text mb-20">
                                    Payment terms are specified in individual client agreements. Staytop Media reserves the right to suspend services for overdue payments.
                                </div>

                                <h4 className="sub-title" style={{ marginTop: 30, marginBottom: 10 }}>8. Limitation of Liability</h4>
                                <div className="text mb-20">
                                    Staytop Media is not liable for indirect, incidental, or consequential damages arising from use of our services. Our total liability shall not exceed the fees paid for the specific service giving rise to the claim.
                                </div>

                                <h4 className="sub-title" style={{ marginTop: 30, marginBottom: 10 }}>9. Confidentiality</h4>
                                <div className="text mb-20">
                                    Both parties agree to maintain the confidentiality of proprietary information shared during the course of the engagement.
                                </div>

                                <h4 className="sub-title" style={{ marginTop: 30, marginBottom: 10 }}>10. Termination</h4>
                                <div className="text mb-20">
                                    Either party may terminate the service agreement as specified in the client contract. Upon termination, Staytop Media will return access credentials and provide a final campaign report.
                                </div>

                                <h4 className="sub-title" style={{ marginTop: 30, marginBottom: 10 }}>11. Governing Law</h4>
                                <div className="text mb-20">
                                    These Terms are governed by the laws of the United Arab Emirates. Any disputes shall be resolved under the jurisdiction of Dubai courts.
                                </div>

                                <h4 className="sub-title" style={{ marginTop: 30, marginBottom: 10 }}>12. Changes to Terms</h4>
                                <div className="text mb-20">
                                    We reserve the right to update these Terms. Continued use of our services after changes constitutes acceptance of the revised Terms.
                                </div>

                                <h4 className="sub-title" style={{ marginTop: 30, marginBottom: 10 }}>13. Contact Us</h4>
                                <div className="text mb-20">
                                    Staytop Media<br />
                                    ACCICO Business Park, Office 503, Deira, Dubai, U.A.E<br />
                                    Email: <a href="mailto:info@staytop.ae">info@staytop.ae</a><br />
                                    Phone: +971 56 744 2268
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
