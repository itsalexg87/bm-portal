import React from 'react';

//meta
import { intimaesthetik } from '../../data/metaData';

//components
import Helmet from '../../components/Helmet';
import Breadcrumb from '../../components/Breadcrumb';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Hinweis from './components/Hinweis';

//json
// import ListeBehandlungen from '../elements/ListeBehandlungen';
import { intimchirurgie } from './data/intimchirurgie';

//bg image
import CardText from './components/CardText';

const Intimchirurgie = () => {
	return (
		<>
			<Helmet pageTitle={intimaesthetik.title} pageDescription={intimaesthetik.description} />
			<Header headertransparent='header--transparent' colorblack='color--black' logoname='logo.png' />

			{/* Start Breadcrump Area */}
			<Breadcrumb title={'Intimchirurgie'} bgImage='/assets/images/behandlungen/intimchirurgie.webp' />
			{/* End Breadcrump Area */}
			<div className='service-area creative-service-wrapper pt--50 pb--80 bg_color--5'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-12'>
							<CardText data={intimchirurgie} />
						</div>
					</div>
					<Hinweis name='Intimchirurgie' />
				</div>
			</div>

			{/* Start Footer Style  */}
			<Footer />
		</>
	);
};

export default Intimchirurgie;
