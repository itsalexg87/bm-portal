import React from 'react';

//meta
import { impressum } from '../data/metaData';

//dep
import ScrollToTop from 'react-scroll-to-top';
import { FiChevronUp } from 'react-icons/fi';

//components
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHelmet from '../components/Helmet';
import Breadcrumb from '../components/Breadcrumb';

//bg image
import background from '../assets/images/bg/home.webp';

const Impressum = () => {
	return (
		<>
			<PageHelmet pageTitle={impressum.title} />
			<Header headertransparent='header--transparent' colorblack='color--black' logoname='logo.png' />

			{/* Start Breadcrump Area */}
			<Breadcrumb title={'Impressum'} bgImage={background} />
			{/* End Breadcrump Area */}

			{/* Impressum Start */}
			<main className='page-wrapper'>
				{/* Start Columns Area  */}
				<div className='rn-columns-area ptb--120 bg_color--5'>
					<div className='container'>
						<div className='row'>
							<div className='col-lg-12'>
								<div className='single-column'>
									<h5>Angaben gemäß § 5 TMG</h5>
									<p>
										Alexander Gauß <br />
										Tulpenweg 16 <br />
										71106 Stuttgart (Magstadt)
									</p>
									<br />
									<h5>Vertreten durch: </h5>
									<p>
										Alexander Gauß <br />
										E-Mail: info@beautifymyself.de
									</p>
									<p>
										Umsatzsteuer-ID: folgt <br />
									</p>
									<p>
										Aufsichtsbehörde: folgt <br />
									</p>
									<br />
									<h5>Haftungsausschluss </h5>
									<p>
										Haftung für Links <br />
										Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen
										Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
										Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
										Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf
										mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
										Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten
										ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
										Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
									</p>
									<p>
										Datenschutz <br />
										Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich.
										Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder
										eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger
										Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte
										weitergegeben. Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der
										Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der
										Daten vor dem Zugriff durch Dritte ist nicht möglich. Der Nutzung von im Rahmen der
										Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur Übersendung von nicht
										ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit ausdrücklich
										widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im
										Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
			{/* End Page Wrapper  */}
			{/* Impressum End */}

			{/* Start Back To Top */}
			<div className='backto-top'>
				<ScrollToTop smooth component={<FiChevronUp />} />
			</div>
			{/* End Back To Top */}

			<Footer />
		</>
	);
};

export default Impressum;
