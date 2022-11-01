import React from 'react';

const CardText = ({ data }) => {
	return (
		<div className='about-area ptb--40  bg_color--1' style={{ marginBottom: '20px' }}>
			<div className='about-wrapper'>
				<div className='container'>
					<div className='row row--35'>
						<div className='col-lg-12'>
							<div className='about-inner inner'>
								<div className='section-title' style={{ padding: '23px' }}>
									<h4 className='title'>{data.name}</h4>
									<p className='description'>{data.description}</p>
									<div className='mt--30'>
										<p style={{ color: ' black' }}>
											Jetzt{' '}
											<a href='/#suchen' style={{ color: '#F50057' }}>
												Spezialisten
											</a>{' '}
											finden
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardText;
