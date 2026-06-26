import React from 'react';
import Layout from "../layouts/MainLayout";
import PageTitle from "../components/sections/PageTitle";

export default function PrivacyPolicy() {
    return (
        <Layout>
            <PageTitle pageName="Privacy Policy" />
            <section className="py-80 bg-white">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <p className="text-muted mb-4">Effective Date: June 26, 2025</p>

                            <h4>1. Who We Are</h4>
                            <p>Staytop Media is a digital marketing agency based in Dubai, United Arab Emirates. We provide services including Google Ads management, SEO, social media marketing, content creation, and campaign reporting. Contact: <a href="mailto:info@staytop.ae">info@staytop.ae</a> | +971 52 236 7120</p>

                            <h4>2. Information We Collect</h4>
                            <p>We collect information you provide directly (name, email, phone, business details via contact forms), and automatically (IP address, browser type, pages visited, and cookies via analytics tools like Google Analytics).</p>

                            <h4>3. How We Use Your Information</h4>
                            <ul>
                                <li>To respond to inquiries and deliver our services</li>
                                <li>To manage and optimize Google Ads and other ad campaigns on your behalf</li>
                                <li>To send newsletters or updates (with your consent)</li>
                                <li>To improve our website and service offerings</li>
                                <li>To comply with legal obligations</li>
                            </ul>

                            <h4>4. Google Ads API Usage</h4>
                            <p>We use the Google Ads API to manage, monitor, and report on advertising campaigns for our clients. Data accessed through the Google Ads API is used exclusively for campaign management and reporting purposes on behalf of authorized clients. We do not share this data with third parties unrelated to the campaign management workflow.</p>

                            <h4>5. Sharing of Information</h4>
                            <p>We do not sell your personal data. We may share information with trusted service providers (e.g., Google, email platforms) who assist in delivering our services, subject to confidentiality agreements. We may disclose information if required by law.</p>

                            <h4>6. Cookies</h4>
                            <p>We use cookies for website analytics and performance tracking. You may disable cookies in your browser settings; however, some features of the site may not function correctly.</p>

                            <h4>7. Data Retention</h4>
                            <p>We retain personal data only as long as necessary to deliver our services or as required by applicable law. Campaign data is retained per client agreement.</p>

                            <h4>8. Your Rights</h4>
                            <p>You have the right to access, correct, or request deletion of your personal data. To exercise these rights, email us at <a href="mailto:info@staytop.ae">info@staytop.ae</a>.</p>

                            <h4>9. Data Security</h4>
                            <p>We implement appropriate technical and organizational measures to protect your data against unauthorized access, loss, or disclosure.</p>

                            <h4>10. Third-Party Links</h4>
                            <p>Our website may contain links to third-party websites. We are not responsible for their privacy practices.</p>

                            <h4>11. Changes to This Policy</h4>
                            <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with a revised effective date.</p>

                            <h4>12. Contact Us</h4>
                            <p>Staytop Media<br />Dubai, United Arab Emirates<br />Email: <a href="mailto:info@staytop.ae">info@staytop.ae</a><br />Phone: +971 52 236 7120</p>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
