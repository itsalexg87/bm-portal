import React from 'react';

//meta
import { augenaesthetik } from '../../data/metaData';

//components
import Helmet from '../../components/Helmet';
import Breadcrumb from '../../components/Breadcrumb';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Hinweis from './components/Hinweis';

//json
// import ListeBehandlungen from '../elements/ListeBehandlungen';
import { augenlaserbehandlung } from './data/augenaesthetik';

//bg image
import CardLeftTab from './components/CardLeftTab';

const Augenästhetik = () => {
	return (
		<>
			<Helmet pageTitle={augenaesthetik.title} pageDescription={augenaesthetik.description} />
			<Header headertransparent='header--transparent' colorblack='color--black' logoname='logo.png' />

			{/* Start Breadcrump Area */}
			<Breadcrumb title={'Augenästhetik'} bgImage='/assets/images/behandlungen/augenaesthetik.webp' />
			{/* End Breadcrump Area */}
			<div className='service-area creative-service-wrapper pt--50 pb--80 bg_color--5'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-12'>
							<CardLeftTab data={augenlaserbehandlung} />
						</div>
					</div>
					<Hinweis name='Augenästhetik' />
				</div>
			</div>

			{/* Start Footer Style  */}
			<Footer />
		</>
	);
};

export default Augenästhetik;
