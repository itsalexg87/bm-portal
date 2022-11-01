import React from 'react';

const Breadcrumb = ({ title, bgImage }) => {
	return (
		<div
			className='breadcrumb-area rn-bg-color ptb--120 bg_image'
			data-black-overlay='3'
			style={{ backgroundImage: `url(${bgImage})` }}>
			{/* <div className='container'>
				<div className='row'> */}
			<div className='col-lg-12'>
				<div className='breadcrumb-inner pt--50'>
					<h1 className='description' style={{ color: 'white' }}>
						{title}
					</h1>
				</div>
			</div>
			{/* </div>
			</div> */}
		</div>
	);
};

export default Breadcrumb;
