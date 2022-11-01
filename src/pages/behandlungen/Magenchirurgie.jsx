import React from 'react';

//meta
import { magenchirurgie } from '../../data/metaData';

//components
import Helmet from '../../components/Helmet';
import Breadcrumb from '../../components/Breadcrumb';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Hinweis from './components/Hinweis';

//json
// import ListeBehandlungen from '../elements/ListeBehandlungen';
import {
	magenballon,
	magenband,
	magenbypass,
	magenverkleinerung,
	schlauchmagen,
} from './data/magenchirurgie';

import CardTextTab from './components/CardTextTab';

const Magenchirurgie = () => {
	return (
		<>
			<Helmet pageTitle={magenchirurgie.title} pageDescription={magenchirurgie.description} />
			<Header headertransparent='header--transparent' colorblack='color--black' logoname='logo.png' />

			{/* Start Breadcrump Area */}
			<Breadcrumb title={'Magenchirurgie'} bgImage='/assets/images/behandlungen/magenchirurgie.webp' />
			{/* End Breadcrump Area */}
			<div className='service-area creative-service-wrapper pt--50 pb--80 bg_color--5'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-12'>
							<CardTextTab data={magenverkleinerung} />
							<CardTextTab data={magenband} />
							<CardTextTab data={schlauchmagen} />
							<CardTextTab data={magenbypass} />
							<CardTextTab data={magenballon} />
						</div>
					</div>
					<Hinweis name='Magenchirurgie' />
				</div>
			</div>

			{/* Start Footer Style  */}
			<Footer />
		</>
	);
};

export default Magenchirurgie;
