import React from 'react';

//meta
import { gesichtsaesthetik } from '../../data/metaData';

//components
import Helmet from '../../components/Helmet';
import Breadcrumb from '../../components/Breadcrumb';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Hinweis from './components/Hinweis';

//json
// import ListeBehandlungen from '../elements/ListeBehandlungen';
import {
	gesichtschirurgie,
	facelifting,
	ohrenkorrektur,
	lidkorrektur,
	faltenbehandlung,
	stirnlifting,
} from './data/gesichtsaesthetik';

//cards
import CardText from './components/CardText';
import CardLeftTab from './components/CardLeftTab';
import CardRightTab from './components/CardRightTab';

const Gesichtsaesthetik = () => {
	return (
		<>
			<Helmet pageTitle={gesichtsaesthetik.title} pageDescription={gesichtsaesthetik.description} />
			<Header headertransparent='header--transparent' colorblack='color--black' logoname='logo.png' />

			{/* Start Breadcrump Area */}
			<Breadcrumb
				title={'Gesichtsästhetik'}
				bgImage='/assets/images/behandlungen/gesichtsaesthetik.webp'
			/>
			{/* End Breadcrump Area */}
			<div className='service-area creative-service-wrapper pt--50 pb--80 bg_color--5'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-12'>
							{/* <CardText data={gesichtschirurgie} /> */}
							<CardLeftTab data={lidkorrektur} />
							<CardRightTab data={ohrenkorrektur} />
							<CardLeftTab data={facelifting} />
							<CardRightTab data={stirnlifting} />
							{/* <CardLeftTab data={faltenbehandlung} /> */}
						</div>
					</div>
					<Hinweis name='Gesichtsästhetik' />
				</div>
			</div>

			{/* Start Footer Style  */}
			<Footer />
		</>
	);
};

export default Gesichtsaesthetik;
