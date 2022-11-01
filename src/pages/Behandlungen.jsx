import React from 'react';

//meta
import { behandlungen } from '../data/metaData';

//components
import Helmet from '../components/Helmet';
import Breadcrumb from '../components/Breadcrumb';
import Header from '../components/Header';

//json
import Footer from '../components/Footer';

//bg image
import background from '../assets/images/bg/behandlungen.webp';
import ListBehandlungen from '../elements/ListBehandlungen';

const Behandlungen = () => {
	return (
		<>
			<Helmet pageTitle={behandlungen.title} pageDescription={behandlungen.description} />
			<Header headertransparent='header--transparent' colorblack='color--black' logoname='logo.png' />

			{/* Start Breadcrump Area */}
			<Breadcrumb title={'Behandlungen'} bgImage={background} />
			{/* End Breadcrump Area */}
			<div className='service-area creative-service-wrapper pt--50 pb--120 bg_color--5'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-12'>
							<div className='mb--30'>
								<ListBehandlungen />
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Start Footer Style  */}
			<Footer />
		</>
	);
};

export default Behandlungen;
