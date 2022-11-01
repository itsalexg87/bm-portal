import React from 'react';
import { HashLink } from 'react-router-hash-link';

//bg image
import background from '../assets/images/bg/home.webp';

const BreadcrumbHome = () => {
	return (
		<div
			className='breadcrumb-area rn-bg-color ptb--120 bg_image'
			data-black-overlay='4'
			style={{
				backgroundImage: `url('${background}')`,
			}}>
			{/* <div className='container'> */}
			{/* <div className='row'> */}
			<div className='col-lg-12'>
				<div className='breadcrumb-inner pt--50'>
					<h1 className='description' style={{ color: '#ffffff' }}>
						Die TOP Fachkliniken in Istanbul!
					</h1>
					<br />
					<div className='slide-btn'>
						<HashLink className='rn-button-style--2 btn-primary-color' to='#suchen'>
							Deine Fachklinik suchen
						</HashLink>
					</div>
				</div>
				{/* </div> */}
				{/* </div> */}
			</div>
		</div>
	);
};

export default BreadcrumbHome;
