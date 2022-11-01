import React from 'react';

//meta
import { haaraesthetik } from '../../data/metaData';

//components
import Helmet from '../../components/Helmet';
import Breadcrumb from '../../components/Breadcrumb';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Hinweis from './components/Hinweis';

//json
// import ListeBehandlungen from '../elements/ListeBehandlungen';
import {
	barttransplantation,
	haartransplantation,
	augenbrauentransplantation,
} from './data/haaraesthetik';

//bg image
import CardTextTab from './components/CardTextTab';
import CardText from './components/CardText';

const Haaraesthetik = () => {
	return (
		<>
			<Helmet pageTitle={haaraesthetik.title} pageDescription={haaraesthetik.description} />
			<Header headertransparent='header--transparent' colorblack='color--black' logoname='logo.png' />

			{/* Start Breadcrump Area */}
			<Breadcrumb title={'Haarästhetik'} bgImage='/assets/images/behandlungen/haaraesthetik.webp' />
			{/* End Breadcrump Area */}
			<div className='service-area creative-service-wrapper pt--50 pb--80 bg_color--5'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-12'>
							<CardTextTab data={haartransplantation} />
							<CardText data={barttransplantation} />
							<CardText data={augenbrauentransplantation} />
						</div>
					</div>
					<Hinweis name='Haarästhetik' />
				</div>
			</div>

			{/* Start Footer Style  */}
			<Footer />
		</>
	);
};

export default Haaraesthetik;
