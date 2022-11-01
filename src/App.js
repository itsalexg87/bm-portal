import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//dep
import CookieConsent from 'react-cookie-consent';
import LinearProgress from '@material-ui/core/LinearProgress';

//pages
import Homepage from './pages/Homepage';

// TODO
import Links from './pages/Links';
import Construction from './pages/Construction';
const Finanzierung = lazy(() => import('./pages/Finanzierung'));

//lazy
//pages
const Behandlungen = lazy(() => import('./pages/Behandlungen'));
const BehandlungenOld = lazy(() => import('./pages/BehandlungenOld'));
const UeberUns = lazy(() => import('./pages/UeberUns'));
const Kontakt = lazy(() => import('./pages/Kontakt'));
const Blog = lazy(() => import('./pages/Blog'));
const NotFound = lazy(() => import('./pages/NotFound'));

//elements & components
const Impressum = lazy(() => import('./elements/Impressum'));
const Datenschutz = lazy(() => import('./elements/Datenschutz'));
const KlinikDetails = lazy(() => import('./components/KlinikDetails'));
const BlogDetails = lazy(() => import('./components/BlogDetails'));

//behandlungen
const Zahnaesthetik = lazy(() => import('./pages/behandlungen/Zahnaesthetik'));
const Haaraesthetik = lazy(() => import('./pages/behandlungen/Haaraesthetik'));
const Brustaesthetik = lazy(() => import('./pages/behandlungen/Brustaesthetik'));
const Koerperaesthetik = lazy(() => import('./pages/behandlungen/Koerperaesthetik'));
const Gesichtsaesthetik = lazy(() => import('./pages/behandlungen/Gesichtsaesthetik'));
const Nasenaesthetik = lazy(() => import('./pages/behandlungen/Nasenaesthetik'));
const ButtLifting = lazy(() => import('./pages/behandlungen/ButtLifting'));
const Augenaesthetik = lazy(() => import('./pages/behandlungen/Augenaesthetik'));
// const AntiAging = lazy(() => import('./pages/behandlungen/AntiAging'));
const Magenchirurgie = lazy(() => import('./pages/behandlungen/Magenchirurgie'));
const Intimchirurgie = lazy(() => import('./pages/behandlungen/Intimchirurgie'));

const App = () => {
	return (
		<Router>
			<Suspense fallback={<LinearProgress color='secondary' />}>
				<Routes>
					<Route exact path='/' element={<Homepage />} />
					{/* <Route exact path='/' element={<Construction />} /> */}
					<Route exact path='/impressum' element={<Impressum />} />
					<Route exact path='/datenschutz' element={<Datenschutz />} />
					<Route exact path='/behandlungen' element={<Behandlungen />} />
					{/* <Route exact path='/behandlungenN' element={<BehandlungenOld />} /> */}
					{/* Behandlungen */}
					<Route exact path='/behandlungen/zahnaesthetik' element={<Zahnaesthetik />} />
					<Route exact path='/behandlungen/haaraesthetik' element={<Haaraesthetik />} />
					<Route exact path='/behandlungen/brustaesthetik' element={<Brustaesthetik />} />
					<Route exact path='/behandlungen/koerperaesthetik' element={<Koerperaesthetik />} />
					<Route exact path='/behandlungen/gesichtsaesthetik' element={<Gesichtsaesthetik />} />
					<Route exact path='/behandlungen/nasenaesthetik' element={<Nasenaesthetik />} />
					<Route exact path='/behandlungen/buttlifting' element={<ButtLifting />} />
					<Route exact path='/behandlungen/augenaesthetik' element={<Augenaesthetik />} />
					{/* <Route exact path='/behandlungen/antiaging' element={<AntiAging />} /> */}
					<Route exact path='/behandlungen/magenchirurgie' element={<Magenchirurgie />} />
					<Route exact path='/behandlungen/intimchirurgie' element={<Intimchirurgie />} />
					{/* Behandlungen End */}
					<Route exact path='/ueber-uns' element={<UeberUns />} />
					<Route exact path='/kontakt' element={<Kontakt />} />
					<Route exact path='/blog' element={<Blog />} />
					<Route exact path='/blog/:id' element={<BlogDetails />} />
					{/* <Route exact path='/finanzierung' element={<Finanzierung />} /> */}
					<Route exact path='/klinik/:id' element={<KlinikDetails />} />
					<Route exact path='/linktest' element={<Links />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</Suspense>
			<CookieConsent
				buttonStyle={{ color: '#F50057', backgroundColor: '#ffffff', fontSize: '13px' }}
				buttonText='Weiter mit empfohlenen Cookies'>
				Um diese Website zu betreiben, ist die Verwendung von Cookies notwendig. Einige Cookies sind
				erforderlich, um die Funktionalität zu gewährleisten sowie zusätzlich für statistische
				Auswertungen. Mehr erfährst du in der Datenschutzerklärung.
			</CookieConsent>
		</Router>
	);
};

export default App;
