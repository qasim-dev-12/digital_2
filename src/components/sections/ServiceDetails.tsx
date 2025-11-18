import Link from 'next/link';
import React from 'react';
import Accordion from '../elements/Accordion';
import { useRouter } from 'next/router'
import services from '../../data/sevicesData';
interface FaqItem {
  q: string;
  a: string;
}

interface Keypoint {
  label: string;
  text?: string;
}

interface Service {
  slug?: string;
  title?: string;
  overview?: string;
  serviceCenter?: string;
  description1?: string;
  description2?: string;
  image1Description?: string;
  image2Description?: string;
  img_1?: string;
  img_2?: string;
  img_Main?: string;
  keypoints?: Keypoint[];
  faqs?: FaqItem[];
}

interface ServiceDetailsProps {
  service?: Service | null;
}

const serviceListData = [
	{
		title: "High-Tech Manufacturing",
		linkurl: "page-service-details"
	},
	{
		title: "Financial Consulting",
		linkurl: "page-service-details"
	},
	{
		title: "Capital Markets",
		linkurl: "page-service-details"
	},
	{
		title: "Digital Media",
		linkurl: "page-service-details"
	},
	{
		title: "Insurance Markets",
		linkurl: "page-service-details"
	},
	{
		title: "Social Sector",
		linkurl: "page-service-details"
	},
    
];

const ServiceDetails: React.FC<ServiceDetailsProps>  = ({service}) => {
	

	

    return (
		<section className="services-details pt-120 pb-90">
			<div className="container">
				<div className="row">
					<div className="col-xl-4 col-lg-4">
						<div className="service-sidebar">
							<div className="sidebar-widget service-sidebar-single">
								<div className="sidebar-service-list">										
									<ul>
										{service?.keypoints?.map((eachitem, servicelist) => (
											// <li key={servicelist}><Link className={(servicelist === 0) ? 'current': ''} href={eachitem.linkurl}><i className="fas fa-angle-right" /><span>{eachitem.title}</span></Link></li>
																						<li key={servicelist}><Link className={(servicelist === 0) ? 'current': ''} href={eachitem.label}><i className="fas fa-angle-right" /><span>{eachitem.label}</span></Link></li>

										))}
									</ul>
								</div>
								<div className="service-details-help">
									<div className="help-shape-1" />
									<div className="help-shape-2" />
									<h2 className="help-title">Contact with <br /> us for any <br /> advice</h2>
									<div className="help-icon">
										<span className="fa-regular fa-headset" />
									</div>
									<div className="help-contact">
										<p>Need help? Talk to an expert</p>
										<a href="tel:12463330079">+892 ( 123 ) 112 - 9999</a>
									</div>
								</div>
								<div className="sidebar-widget service-sidebar-single mt-4">
									<div className="service-sidebar-single-btn wow fadeInUp" data-wow-delay="0.5s" data-wow-duration="1200m">
										<Link href="#" className="theme-btn btn-style-one d-grid"><span className="btn-title"><span className="fas fa-file-pdf"></span> download pdf file</span></Link>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-xl-8 col-lg-8">
						<div className="services-details__content position-relative overflow-hidden px-3">
							
							<img className="w-100" src={service?.img_Main || 'Service image 1'} alt="" />
							<h3 className="mt-4">Service Overview</h3>
							<p className="text">{service?.overview} </p>
							
							<div className="content mt-40">
								<div className="text">
									<h3>{service?.serviceCenter}</h3>
									<p className="text">{service?.description1}</p>
									<blockquote className="blockquote-one">{service?.description2}</blockquote>
								</div>
								<div className="feature-list mt-4">
									<div className="row clearfix">
										<div className="col-lg-6 col-md-6 col-sm-12 column">
											<img
  className="mb-3 w-100"
  src={service?.img_1 || 'Service image 1'}
  alt={service?.title || 'Service image 2'}
/>
											<p className="text">{service?.image1Description}</p>
										</div>
										<div className="col-lg-6 col-md-6 col-sm-12 column">
											<img
  className="mb-3 w-100"
  src={service?.img_2 || '/assets/images/resource/digital-side2.png'}
  alt={service?.title || 'Service image 1'}
/>
											<p className="text">{service?.image2Description}</p>
										</div>
									</div>
								</div>
							</div>
							<div className="innerpage mt-25">
								<h3>Frequently Asked Question</h3>
								<p className="text">Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
								<Accordion service={service} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
    );
};

export default ServiceDetails;