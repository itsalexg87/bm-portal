import React from 'react';
import { Link } from 'react-router-dom';

//meta
import { koerperaesthetik } from '../../data/metaData';

//components
import Helmet from '../../components/Helmet';
import Breadcrumb from '../../components/Breadcrumb';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

//json
// import ListeBehandlungen from '../elements/ListeBehandlungen';
import { fettabsaugung, bauchdeckenstraffung } from './data/koerperaesthetik';

//bg image
import CardLeftTab from './components/CardLeftTab';
import CardRightTab from './components/CardRightTab';
import Hinweis from './components/Hinweis';

const Koerperaesthetik = () => {
	return (
		<>
			<Helmet pageTitle={koerperaesthetik.title} pageDescription={koerperaesthetik.description} />
			<Header headertransparent='header--transparent' colorblack='color--black' logoname='logo.png' />

			{/* Start Breadcrump Area */}
			<Breadcrumb
				title={'Körperästhetik'}
				bgImage='/assets/images/behandlungen/koerperaesthetik.webp'
			/>
			{/* End Breadcrump Area */}
			<div className='service-area creative-service-wrapper pt--50 pb--80 bg_color--5'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-12'>
							<CardLeftTab data={fettabsaugung} />
							<CardRightTab data={bauchdeckenstraffung} />
						</div>
					</div>
					<Hinweis name='Körperästhetik' />
				</div>
			</div>

			{/* Start Footer Style  */}
			<Footer />
		</>
	);
};

export default Koerperaesthetik;
