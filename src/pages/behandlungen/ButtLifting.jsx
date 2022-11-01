import React from 'react';

//meta
import { buttlifting } from '../../data/metaData';

//components
import Helmet from '../../components/Helmet';
import Breadcrumb from '../../components/Breadcrumb';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Hinweis from './components/Hinweis';

//json
// import ListeBehandlungen from '../elements/ListeBehandlungen';
import { brazilianbuttlift } from './data/buttlifting';

//bg image
import CardLeftTab from './components/CardLeftTab';

const ButtLifting = () => {
	return (
		<>
			<Helmet pageTitle={buttlifting.title} pageDescription={buttlifting.description} />
			<Header headertransparent='header--transparent' colorblack='color--black' logoname='logo.png' />

			{/* Start Breadcrump Area */}
			<Breadcrumb title={'Butt Lifting'} bgImage='/assets/images/behandlungen/buttlifting.webp' />
			{/* End Breadcrump Area */}
			<div className='service-area creative-service-wrapper pt--50 pb--80 bg_color--5'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-12'>
							<CardLeftTab data={brazilianbuttlift} />
						</div>
					</div>
					<Hinweis name='Brazilian Butt Lifting' />
				</div>
			</div>

			{/* Start Footer Style  */}
			<Footer />
		</>
	);
};

export default ButtLifting;
