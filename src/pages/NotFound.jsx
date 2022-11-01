import React from 'react';

//dep
import ScrollToTop from 'react-scroll-to-top';
import { FiChevronUp } from 'react-icons/fi';

//components
import Header from '../components/Header';
import Footer from '../components/Footer';

const NotFound = () => {
	return (
		<>
			<Header headerPosition='header--transparent' color='color-white' logo='logo-light' />
			{/* Start Page Error  */}
			<div className='error-page-inner bg_color--4'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-12'>
							<div className='inner'>
								<h1 className='title theme-gradient'>404!</h1>
								<h3 className='sub-title'>Seite nicht gefunden</h3>
								<span>Die Seite, die du suchst existiert nicht.</span>
								<div className='error-button'>
									<a className='rn-button-style--2 btn-solid' href='/'>
										Zurück zur Homepage
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* End Page Error  */}

			{/* Start Back To Top */}
			<div className='backto-top'>
				<ScrollToTop smooth component={<FiChevronUp />}></ScrollToTop>
			</div>
			{/* End Back To Top */}

			<Footer />
		</>
	);
};

export default NotFound;
