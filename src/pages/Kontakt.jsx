import React from 'react';

//meta
import { kontakt } from '../data/metaData';

//dep
import ScrollToTop from 'react-scroll-to-top';
import { FiChevronUp } from 'react-icons/fi';

//components
import Helmet from '../components/Helmet';
import ContactForm from '../components/ContactForm';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';

//bg image
import background from '../assets/images/bg/kontakt.webp';

const Kontakt = () => {
	return (
		<>
			<Helmet pageTitle={kontakt.title} pageDescription={kontakt.description} />

			<Header headertransparent='header--transparent' colorblack='color--black' logoname='logo.png' />
			{/* Start Breadcrump Area */}
			<Breadcrumb title={'Kontakt'} bgImage={background} />
			{/* End Breadcrump Area */}

			{/* Start Contact Page Area  */}
			<div className='rn-contact-page ptb--120 bg_color--1'>
				<ContactForm />
			</div>
			{/* End Contact Page Area  */}

			{/* Start Back To Top */}
			<div className='backto-top'>
				<ScrollToTop smooth component={<FiChevronUp />} />
			</div>
			{/* End Back To Top */}

			<Footer />
		</>
	);
};

export default Kontakt;
