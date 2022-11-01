import React from 'react';

//meta
import { zahnaesthetik } from '../../data/metaData';

//components
import Helmet from '../../components/Helmet';
import Breadcrumb from '../../components/Breadcrumb';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Hinweis from './components/Hinweis';

//json
// import ListeBehandlungen from '../elements/ListeBehandlungen';
import { zahnimplatologie, zahnaufhellung, zahnkronen, veneer } from './data/zahnaesthetik';

//bg image
import CardLeftTab from './components/CardLeftTab';
import CardRightTab from './components/CardRightTab';

const Zahnaesthetik = () => {
	return (
		<>
			<Helmet pageTitle={zahnaesthetik.title} pageDescription={zahnaesthetik.description} />
			<Header headertransparent='header--transparent' colorblack='color--black' logoname='logo.png' />

			{/* Start Breadcrump Area */}
			<Breadcrumb title={'Zahnästhetik'} bgImage='/assets/images/behandlungen/zahnaesthetik.webp' />
			{/* End Breadcrump Area */}
			<div className='service-area creative-service-wrapper pt--50 pb--80 bg_color--5'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-12'>
							<CardLeftTab data={zahnimplatologie} />
							<CardRightTab data={zahnaufhellung} />
							<CardLeftTab data={zahnkronen} />
							<CardRightTab data={veneer} />
						</div>
					</div>
					<Hinweis name='Zahnästhetik' />
				</div>
			</div>

			{/* Start Footer Style  */}
			<Footer />
		</>
	);
};

export default Zahnaesthetik;
