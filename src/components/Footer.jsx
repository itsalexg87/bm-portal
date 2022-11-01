import React from 'react';

//dep
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';

//logo
import logoBM from '../assets/images/logobm.webp';

//icons
const SocialShare = [
	{ Social: <FaFacebookF />, link: 'https://www.facebook.com/' },
	{ Social: <FaInstagram />, link: 'https://www.instagram.com/deineschoenheitsklinik' },
];

const linkStyle = {
	color: 'white',
};

const Footer = () => {
	const currentYear = new Date();
	return (
		<div className='footer-style-2 ptb--30 bg_image bg_image--1' data-black-overlay='3'>
			<div className='wrapper plr--50 plr_sm--20'>
				<div className='row align-items-center justify-content-between'>
					<div className='col-lg-4 col-md-12 col-sm-12 col-12'>
						{/* TODO: Wenn Social Icons aktiv <div className='col-lg-4 col-md-6 col-sm-6 col-12'> */}
						<div className='inner'>
							<div className='logo text-center text-sm-left mb_sm--20'>
								<a href='/'>
									<img src={logoBM} alt='Logo BeautifyMyself' />
								</a>
							</div>
						</div>
					</div>
					<div className='col-lg-4 col-md-6 col-sm-6 col-12'>
						<div className='inner text-center'>
							{/* <ul className='social-share rn-lg-size d-flex justify-content-center liststyle'>
								{SocialShare.map((val, i) => (
									<li key={i}>
										<a href={`${val.link}`} target='_blank'>
											{val.Social}
										</a>
									</li>
								))}
							</ul> */}
						</div>
					</div>
					<div className='col-lg-4 col-md-12 col-sm-12 col-12'>
						<div className='inner text-lg-right text-center mt_md--20 mt_sm--20'>
							<div className='text'>
								<p style={{ marginBottom: '5px' }}>
									Copyright © {currentYear.getFullYear()} BeautifyMyself.
								</p>
								<p>
									<Link
										style={linkStyle}
										to='/impressum'
										onClick={() => {
											window.scroll(0, 0);
										}}>
										Impressum
									</Link>{' '}
									|{' '}
									<Link
										style={linkStyle}
										to='/datenschutz'
										onClick={() => {
											window.scroll(0, 0);
										}}>
										Datenschutz
									</Link>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Footer;
