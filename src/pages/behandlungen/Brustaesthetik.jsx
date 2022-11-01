import React from 'react';

//meta
import { brustaesthetik } from '../../data/metaData';

//components
import Helmet from '../../components/Helmet';
import Breadcrumb from '../../components/Breadcrumb';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Hinweis from './components/Hinweis';

//json
// import ListeBehandlungen from '../elements/ListeBehandlungen';
import {
	brustvergroesserung,
	brustverkleinerung,
	brustrekonstruktion,
	bruststraffung,
} from './data/brustaesthetik';

//bg image
import CardLeftTab from './components/CardLeftTab';
import CardRightTab from './components/CardRightTab';

const Brustaesthetik = () => {
	return (
		<>
			<Helmet pageTitle={brustaesthetik.title} pageDescription={brustaesthetik.description} />
			<Header headertransparent='header--transparent' colorblack='color--black' logoname='logo.png' />

			{/* Start Breadcrump Area */}
			<Breadcrumb title={'Brustästhetik'} bgImage='/assets/images/behandlungen/brustaesthetik.webp' />
			{/* End Breadcrump Area */}
			<div className='service-area creative-service-wrapper pt--50 pb--80 bg_color--5'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-12'>
							<CardLeftTab data={brustvergroesserung} />
							<CardRightTab data={brustverkleinerung} />
							<CardLeftTab data={bruststraffung} />
							{/* <CardRightTab data={brustrekonstruktion} /> */}
						</div>
					</div>
					<Hinweis name='Brustästhetik' />
				</div>
			</div>

			{/* Start Footer Style  */}
			<Footer />
		</>
	);
};

export default Brustaesthetik;
