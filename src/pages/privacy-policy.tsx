import React from 'react';
import Layout from "../layouts/MainLayout";
import PageTitle from "../components/sections/PageTitle";

export default function PrivacyPolicy() {
    return (
        <Layout>
            <PageTitle pageName="Privacy Policy" />
            <section className="faqs-section pt-120 pb-120">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">

                            <div className="sec-title mb-40">
                                <h2 className="title">Privacy Policy</h2>
                                <div className="text">Effective Date: June 26, 2025</div>
                            </div>

                            <div className="about-content">

                                <h4 className="sub-title" style={{ marginTop: 30, marginBottom: 10 }}>1. Who We Are</h4>
                                <div className="text mb-20">
                                    Staytop Media is a digital marketing agency based in Dubai, United Arab Emirates. We provide services including Google Ads management, SEO, social media marketing, content creation, and campaign reporting. Contact: <a href="mailto:info@staytop.ae">info@staytop.ae</a> | +971 52 236 7120
                                </div>

                                <h4 className="sub-title" style={{ marginTop: 30, marginBottom: 10 }}>2. Information We Collect</h4>
                                <div className="text mb-20">
                                    We collect information you provide directly (name, email, phone, business details via contact forms), and automatically (IP address, browser type, pages visited, and cookies via analytics tools like Google Analytics).
                                </div>

                                <h4 className="sub-title" style={{ marginTop: 30, marginBottom: 10 }}>3. How We Use Your Information</h4>
                                <ul className="list-style-one mb-20">
                                    <li>To respond to inquiries and deliver our services</li>
                                    <li>To manage and optimize Google Ads and other ad campaigns on your behalf</li>
                                    <li>To send newsletters or updates (with your consent)</li>
                                    <li>To improve our website and service offerings</li>
                                    <li>To comply with legal obligations</li>
                                </ul>

                                <h4 className="sub-title" style={{ marginTop: 30, marginBottom: 10 }}>4. Google Ads API Usage</h4>
                                <div className="text mb-20">
                                    We use the Google Ads API to manage, monitor, and report on advertising campaigns for our clients. Data accessed through the Google Ads API is used exclusively for campaign management and reporting purposes on behalf of authorized clients. We do not share this data with third parties unrelated to the campaign management workflow.
                                </div>

                                <h4 className="sub-title" style={{ marginTop: 30, marginBottom: 10 }}>5. Sharing of Information</h4>
                                <div className="text mb-20">
                                    We do not sell your personal data. We may share information with trusted service providers (e.g., Google, email platforms) who assist in delivering our services, subject to confidentiality agreements. We may disclose information if required by law.
                                </div>

                                <h4 className="sub-title" style={{ marginTop: 30, marginBottom: 10 }}>6. Cookies</h4>
                                <div className="text mb-20">
                                    We use cookies for website analytics and performance tracking. You may disable cookies in your browser settings; however, some features of the site may not function correctly.
                                </div>

                                <h4 className="sub-title" style={{ marginTop: 30, marginBottom: 10 }}>7. Data Retention</h4>
                                <div className="text mb-20">
                                    We retain personal data only as long as necessary to deliver our services or as required by applicable law. Campaign data is retained per client agreement.
                                </div>

                                <h4 className="sub-title" style={{ marginTop: 30, marginBottom: 10 }}>8. Your Rights</h4>
                                <div className="text mb-20">
                                    You have the right to access, correct, or request deletion of your personal data. To exercise these rights, email us at <a href="mailto:info@staytop.ae">info@staytop.ae</a>.
                                </div>

                                <h4 className="sub-title" style={{ marginTop: 30, marginBottom: 10 }}>9. Data Security</h4>
                                <div className="text mb-20">
                                    We implement appropriate technical and organizational measures to protect your data against unauthorized access, loss, or disclosure.
                                </div>

                                <h4 className="sub-title" style={{ marginTop: 30, marginBottom: 10 }}>10. Third-Party Links</h4>
                                <div className="text mb-20">
                                    Our website may contain links to third-party websites. We are not responsible for their privacy practices.
                                </div>

                                <h4 className="sub-title" style={{ marginTop: 30, marginBottom: 10 }}>11. Changes to This Policy</h4>
                                <div className="text mb-20">
                                    We may update this Privacy Policy from time to time. Changes will be posted on this page with a revised effective date.
                                </div>

                                <h4 className="sub-title" style={{ marginTop: 30, marginBottom: 10 }}>12. Contact Us</h4>
                                <div className="text mb-20">
                                    Staytop Media<br />
                                    Dubai, United Arab Emirates<br />
                                    Email: <a href="mailto:info@staytop.ae">info@staytop.ae</a><br />
                                    Phone: +971 52 236 7120
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
