import React, { Component } from 'react';

//dep
import { Link } from 'react-router-dom';
import { FiX, FiMenu } from 'react-icons/fi';

//logo
import logoBM from '../assets/images/logobm.webp';

class Header extends Component {
	constructor(props) {
		super(props);
		this.menuTrigger = this.menuTrigger.bind(this);
		this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
		//  this.subMetuTrigger = this.subMetuTrigger.bind(this);
		window.addEventListener('load', function () {
			console.log('All assets are loaded');
		});
	}

	menuTrigger() {
		document.querySelector('.header-wrapper').classList.toggle('menu-open');
	}

	CLoseMenuTrigger() {
		document.querySelector('.header-wrapper').classList.remove('menu-open');
	}

	render() {
		var elements = document.querySelectorAll('.has-dropdown > a');
		for (var i in elements) {
			if (elements.hasOwnProperty(i)) {
				elements[i].onclick = function () {
					this.parentElement.querySelector('.submenu').classList.toggle('active');
					this.classList.toggle('open');
				};
			}
		}
		const { color = 'default-color' } = this.props;

		return (
			<header className={`header-area formobile-menu header--transparent ${color}`}>
				<div className='header-wrapper' id='header-wrapper'>
					<div className='header-left'>
						<div className='logo'>
							<a href='/'>
								<img src={logoBM} alt='Logo BeautifyMyself' />
							</a>
						</div>
					</div>
					<div className='header-right'>
						<nav className='mainmenunav d-lg-block'>
							<ul className='mainmenu'>
								<li>
									<Link to='/'>Home</Link>
								</li>
								{/* <li className='has-dropdown'> */}
								<li className='active'>
									<a href='/behandlungen'>Behandlungen</a>
									<ul className='submenu'>
										<li>
											<Link to='/behandlungen/zahnaesthetik'>Zahnästhetik</Link>
										</li>
										<li>
											<Link to='/behandlungen/haaraesthetik'>Haarästhetik</Link>
										</li>
										<li>
											<Link to='/behandlungen/brustaesthetik'>Brustästhetik</Link>
										</li>
										<li>
											<Link to='/behandlungen/koerperaesthetik'>Körperästhetik</Link>
										</li>
										<li>
											<Link to='/behandlungen/gesichtsaesthetik'>Gesichtsthetik</Link>
										</li>
										<li>
											<Link to='/behandlungen/nasenaesthetik'>Nasenästhetik</Link>
										</li>
										<li>
											<Link to='/behandlungen/buttlifting'>Butt Lifting</Link>
										</li>
										<li>
											<Link to='/behandlungen/magenchirurgie'>Magenchirurgie</Link>
										</li>
										<li>
											<Link to='/behandlungen/intimchirurgie'>Intimchirurgie</Link>
										</li>
									</ul>
								</li>
								<li>
									<Link to='/ueber-uns'>Über uns</Link>
								</li>
								{/* <li>
									<Link to='/blog'>Blog</Link>
								</li> */}
								<li>
									<Link to='/kontakt'>Kontakt</Link>
								</li>
								{/* <li>
									<Link to='/finanzierung'>Finanzierung</Link>
								</li> */}
							</ul>
						</nav>

						{/* Start Humberger Menu  */}
						<div className='humberger-menu d-block d-lg-none pl--20'>
							<span onClick={this.menuTrigger} className='menutrigger'>
								<FiMenu style={{ color: ' white' }} />
							</span>
						</div>
						{/* End Humberger Menu  */}
						<div className='close-menu d-block d-lg-none'>
							<span onClick={this.CLoseMenuTrigger} className='closeTrigger'>
								<FiX />
							</span>
						</div>
					</div>
				</div>
			</header>
		);
	}
}
export default Header;
