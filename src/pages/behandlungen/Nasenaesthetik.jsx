import React from 'react';

//meta
import { nasenaesthetik } from '../../data/metaData';

//components
import Helmet from '../../components/Helmet';
import Breadcrumb from '../../components/Breadcrumb';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Hinweis from './components/Hinweis';

//json
// import ListeBehandlungen from '../elements/ListeBehandlungen';
import { nasenkorrektur } from './data/nasenaesthetik';

//bg image
import CardLeftTab from './components/CardLeftTab';

const Nasenaesthetik = () => {
	return (
		<>
			<Helmet pageTitle={nasenaesthetik.title} pageDescription={nasenaesthetik.description} />
			<Header headertransparent='header--transparent' colorblack='color--black' logoname='logo.png' />

			{/* Start Breadcrump Area */}
			<Breadcrumb title={'Nasenästhetik'} bgImage='/assets/images/behandlungen/nasenaesthetik.webp' />
			{/* End Breadcrump Area */}
			<div className='service-area creative-service-wrapper pt--50 pb--80 bg_color--5'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-12'>
							<CardLeftTab data={nasenkorrektur} />
						</div>
					</div>
					<Hinweis name='Nasenästhetik' />
				</div>
			</div>

			{/* Start Footer Style  */}
			<Footer />
		</>
	);
};

export default Nasenaesthetik;
