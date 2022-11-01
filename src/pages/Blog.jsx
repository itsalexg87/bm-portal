import React from 'react';

//dep
import { FiChevronUp } from 'react-icons/fi';
import ScrollToTop from 'react-scroll-to-top';

// components
import Helmet from '../components/Helmet';
import Breadcrumb from '../components/Breadcrumb';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BLogList from '../components/Bloglist';

//bg image
import background from '../assets/images/bg/blog.webp';

const About = () => {
	const helmet = {
		title: 'Blog',
		description: 'Wir sind Beautify Myself.',
	};

	return (
		<>
			<Helmet pageTitle={helmet.title} pageDescription={helmet.description} />

			<Header headertransparent='header--transparent' colorblack='color--black' logoname='logo.png' />
			{/* Start Breadcrump Area */}
			<Breadcrumb title={'Blog'} bgImage={background} />
			{/* End Breadcrump Area */}

			{/* Start Blog Area */}
			<div className='rn-blog-area ptb--120 bg_color--1'>
				<div className='container'>
					<BLogList />
				</div>
			</div>
			{/* End Blog Area */}
			{/* Start Back To Top */}
			<div className='backto-top'>
				<ScrollToTop smooth component={<FiChevronUp />} />
			</div>
			{/* End Back To Top */}
			<Footer />
		</>
	);
};

export default About;
