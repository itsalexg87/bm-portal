import React from 'react';

//components
import Helmet from '../components/Helmet';
import Breadcrumb from '../components/Breadcrumb';
import Header from '../components/Header';

//json
import ListeBehandlungen from '../elements/ListeBehandlungen';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

//bg image
import background from '../assets/images/bg/behandlungen.webp';

const helmet = {
	title: 'Behandlungen',
	description: 'Informieren Sie sich über Behandlungen.',
};

const BehandlungenOld = () => {
	return (
		<>
			<Helmet pageTitle={helmet.title} pageDescription={helmet.description} />
			<Header headertransparent='header--transparent' colorblack='color--black' logoname='logo.png' />

			{/* Start Breadcrump Area */}
			<Breadcrumb title={'Behandlungen'} bgImage={background} />
			{/* End Breadcrump Area */}
			<div className='service-area creative-service-wrapper pt--90 pb--120 bg_color--5'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-12'>
							<h3>
								Allgemeine Informationen<span>*</span>
							</h3>
							<div className='mb--30'>
								<ListeBehandlungen />
							</div>
						</div>
					</div>
					<p style={{ fontSize: '1rem' }}>
						* Hierbei handelt es sich rein um allgemeine Informationen. Diese stellen keine Beratung dar.
						Für nähere Informationen und eine kompetente Beratung, wende dich bitte direkt an eine{' '}
						<Link to='/' style={{ color: '#F50057' }}>
							Klinik deiner Wahl
						</Link>
						.
					</p>
				</div>
			</div>

			{/* Start Footer Style  */}
			<Footer />
		</>
	);
};

export default BehandlungenOld;
