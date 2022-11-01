import React from 'react';

//dep
import ScrollToTop from 'react-scroll-to-top';
import { FiChevronUp } from 'react-icons/fi';

//components
import Helmet from '../components/Helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import { Typography } from '@material-ui/core';

//bg image
import background from '../assets/images/bg/finanzierung.webp';

const Finanzierung = () => {
	const helmet = {
		title: 'Finanzierung',
		description: 'Direkt Informationen zur Finanzierung einholen.',
	};
	return (
		<>
			<Helmet pageTitle={helmet.title} pageDescription={helmet.description} />

			<Header headertransparent='header--transparent' colorblack='color--black' logoname='logo.png' />
			{/* Start Breadcrump Area */}
			<Breadcrumb title={'Finanzierung'} bgImage={background} />
			{/* End Breadcrump Area */}

			{/* Start Contact Page Area  */}
			<div className='rn-about-area ptb--120 bg_color--1'>
				<div className='rn-about-wrapper'>
					<div className='container'>
						<div className='row row--35 align-items-center'>
							<div className='col-lg-12'>
								<div className='about-inner inner'>
									<div className='section-title'>
										<h4 className='title'>Finanzierung für Ihren Veränderungswunsch</h4>
										{/* TODO: https://www.meine-schoenheitschirurgie.de/finanzierung/ */}
										<p>
											Gerne unterstützen wir dich bei deinem Finanzierungswunsch. Wenn du anstehenden plastisch
											ästhetischen Eingriff in günstigen, monatlich gleich bleibenden Raten finanzieren lassen
											möchtest, helfen dir unsere Finanzierungspartner gerne dabei. Weitere Informationen
											findest du unter:
										</p>
										<a href='https://credit4beauty.de'>creditbeauty.de</a>
										&nbsp; & &nbsp;
										<a href='https://medkred.de'>medkred.de</a>
										<br />
										<br />
										<p>
											Die Finanzierungen steht allen volljährigen Personen ohne negativen Schufaeintrag mit
											Hauptwohnsitz, Arbeitsplatz und Bankverbindung in Deutschland oder Österreich offen und
											sind ab einem Nettoeinkommen von 1.000€ möglich. Bis 7.500€ ist nur die Vorlage von
											EC-Karte (Bankkarte) und Personalausweis notwendig. Günstigster Zinssatz für
											Schönheitsbehandlungen und die Kreditbewilligung in der Regel innerhalb von 24 Stunden
											erleichtern dir die Umsetzung deines Verschönerungswunsch. Auch für Studenten, Rentner
											und Selbständige sind beide Anbieter unkomplizierte Finanzierungspartner. Auf deinen
											ausdrücklichen Wunsch betreue sie dich gern bei der Realisierung einer für dich
											passendenden Finanzierung und sind dir bei allen Formalitäten behilflich.
										</p>
									</div>
									<br />
									<h4 className='title' style={{ marginBottom: '2px' }}>
										Beispieltabelle Ratenfinanzierung
									</h4>
									<Typography variant='body2' style={{ marginBottom: '8px' }}>
										Laufzeit in Monaten / Monatsrate in €
									</Typography>
									<table>
										<tr>
											<td>Summe</td>
											<td>18 Mo.</td>
											<td>24 Mo.</td>
											<td>30 Mo.</td>
											<td>36 Mo.</td>
											<td>42 Mo.</td>
										</tr>
										<tr>
											<td>1.000 €</td>
											<td>59,-</td>
											<td>45,-</td>
											<td>37,-</td>
											<td>31,-</td>
											<td>27,-</td>
										</tr>
										<tr>
											<td>1.500 €</td>
											<td>88,-</td>
											<td>67,-</td>
											<td>55,-</td>
											<td>46,-</td>
											<td>40,-</td>
										</tr>
										<tr>
											<td>2.000 €</td>
											<td>118,-</td>
											<td>90,-</td>
											<td>73,-</td>
											<td>62,-</td>
											<td>54,-</td>
										</tr>
										<tr>
											<td>2.500 €</td>
											<td>147,-</td>
											<td>112,-</td>
											<td>91,-</td>
											<td>77,-</td>
											<td>68,-</td>
										</tr>
										<tr>
											<td>...</td>
											<td>...</td>
											<td>...</td>
											<td>...</td>
											<td>...</td>
											<td>...</td>
										</tr>
										<tr>
											<td>5.000 €</td>
											<td>294,-</td>
											<td>224,-</td>
											<td>183,-</td>
											<td>155,-</td>
											<td>135,-</td>
										</tr>
									</table>
									<p>Bemerkung:</p>
									<p>* Die vorliegenden Beträge sind gerundet</p>
									<p>
										* Weitere Informationen erhältst du unter{' '}
										<a href='https://credit4beauty.de'>credit4beauty</a>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<Footer />

			{/* Back to Top */}
			<div className='backto-top'>
				<ScrollToTop smooth component={<FiChevronUp />}></ScrollToTop>
			</div>
		</>
	);
};

export default Finanzierung;
