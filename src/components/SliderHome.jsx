import React from 'react';

//dep
import { Parallax } from 'react-parallax';
import { HashLink } from 'react-router-hash-link';

const image1 = '/assets/images/bg/bg-image-home.jpg';

const SliderHome = () => {
	return (
		<Parallax bgImage={image1} strength={500}>
			<div className='slide slide-style-2 slider-paralax d-flex align-items-center justify-content-center'>
				{/* <div style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
                  <img
                      style={{ width: '100px' }}
                      src='http://www.saglikturizmi.org.tr/theme/images/logo.png'
                  />
              </div> */}
				<div className='container'>
					<div className='row'>
						<div className='col-lg-12'>
							<div className='inner text-center'>
								<h1 className='title' style={{ color: '#e6176f' }}>
									Beautify Myself
								</h1>
								<p className='description' style={{ fontSize: '2.5rem', color: '#5a5a5a' }}>
									Die <b style={{ color: '#F50057' }}>TOP Kliniken</b> in Istanbul!
								</p>
								<div className='slide-btn'>
									<HashLink className='rn-button-style--2 btn-primary-color' to='#finden'>
										Deine Klinik finden
									</HashLink>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Parallax>
	);
};

export default SliderHome;
