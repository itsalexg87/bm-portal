import React from 'react';

//meta
import { ueberUns } from '../data/metaData';

//dep
import { FiChevronUp } from 'react-icons/fi';
import ScrollToTop from 'react-scroll-to-top';

// components
import Helmet from '../components/Helmet';
import Breadcrumb from '../components/Breadcrumb';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServiceList from '../components/ServiceList';

//bg image
import background from '../assets/images/bg/ueberuns.webp';

const About = () => {
	let title = 'Über uns',
		description =
			'Wir haben es uns zum Ziel gesetzt, Dir einen Überblick über die besten Fachkliniken für Schönheitschirurgie in Istanbul zu geben, damit Du die für Dich passende findest.';
	return (
		<React.Fragment>
			<Helmet pageTitle={ueberUns.title} pageDescription={ueberUns.description} />

			<Header headertransparent='header--transparent' colorblack='color--black' logoname='logo.png' />
			{/* Start Breadcrump Area */}
			<Breadcrumb title={'Über uns'} bgImage={background} />
			{/* End Breadcrump Area */}

			{/* Start About Area  */}
			<div className='rn-about-area ptb--120 bg_color--1'>
				<div className='rn-about-wrapper'>
					<div className='container'>
						<div className='row row--35 align-items-center'>
							<div className='col-lg-12'>
								<div className='about-inner inner'>
									<div className='section-title'>
										<h3 className='title'>{title}</h3>
										<p className='description'>{description}</p>
									</div>
									<div className='row mt--30'>
										<div className='col-lg-6 col-md-12 col-sm-12 col-12' style={{ marginBottom: '20px' }}>
											<div className='about-us-list'>
												<h3 className='title'>Unsere Vision</h3>
												<p>
													Unsere Vision ist es den Markt für Schönheitschirurgie in der Türkei transparenter zu
													machen, damit Du die passende Fachklinik für Deine Ansprüche findest.
												</p>
											</div>
										</div>
										<div className='col-lg-6 col-md-12 col-sm-12 col-12'>
											<div className='about-us-list'>
												<h3 className='title'>Unsere Mission</h3>
												<p>
													Für uns stehen Qualität und Transparenz im Mittelpunkt! Um diesem Anspruch gerecht zu
													werden, fokussieren wir uns bei der Auswahl auf Chirurgen, Krankenhäuser und Kliniken
													die den höchsten Standards entsprechen.
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* End About Area  */}

			{/* Start Service Area  */}
			<div className='service-area creative-service-wrapper bg_color--1'>
				<div className='container'>
					<div className='row creative-service'>
						<div className='col-lg-12' style={{ marginBottom: '20px' }}>
							<ServiceList item='6' column='col-lg-4 col-md-6 col-sm-6 col-12 text-left' />
						</div>
					</div>
				</div>
			</div>
			{/* End Service Area  */}
			{/* Start Back To Top */}
			<div className='backto-top'>
				<ScrollToTop smooth component={<FiChevronUp />} />
			</div>
			{/* End Back To Top */}
			<Footer />
		</React.Fragment>
	);
};

export default About;
