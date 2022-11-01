import React from 'react';
import TabsOne from './TabOne';

const CardRightTab = ({ data }) => {
	return (
		<div className='about-area ptb--40  bg_color--1' style={{ marginBottom: '20px' }}>
			<div className='about-wrapper'>
				<div className='container'>
					<div className='row row--35'>
						<div className='col-lg-7'>
							<div className='about-inner inner'>
								<div className='section-title' style={{ padding: '23px' }}>
									<h4 className='title'>{data.name}</h4>
									<p className='description'>{data.description}</p>
								</div>
								<div className='row mt--30'>
									<TabsOne tabStyle='tab-style--1' content={data} />
								</div>
							</div>
						</div>
						<div className='col-lg-5'>
							<div className='thumbnail' style={{ marginTop: '20px' }}>
								<img className='w-100' src={data.image} alt={data.name} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardRightTab;
