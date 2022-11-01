import React from 'react';

//meta
import { datenschutz } from '../data/metaData';

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

const Datenschutz = () => {
	return (
		<>
			<PageHelmet pageTitle={datenschutz.title} />
			<Header headertransparent='header--transparent' colorblack='color--black' logoname='logo.png' />

			{/* Start Breadcrump Area */}
			<Breadcrumb title={'Datenschutzerklärung'} bgImage={background} />
			{/* End Breadcrump Area */}

			{/* Impressum Start */}
			<main className='page-wrapper'>
				{/* Start Columns Area  */}
				<div className='rn-columns-area ptb--120 bg_color--5'>
					<div className='container'>
						<div className='row'>
							<div className='col-lg-12'>
								<div className='single-column'>
									<h3>1. Datenschutz auf einen Blick</h3>
									<h4>Allgemeine Hinweise</h4>{' '}
									<p>
										Die folgenden Hinweise geben einen einfachen &Uuml;berblick dar&uuml;ber, was mit Ihren
										personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten
										sind alle Daten, mit denen Sie pers&ouml;nlich identifiziert werden k&ouml;nnen.
										Ausf&uuml;hrliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem
										Text aufgef&uuml;hrten Datenschutzerkl&auml;rung.
									</p>
									<h4>Datenerfassung auf dieser Website</h4>{' '}
									<h5>Wer ist verantwortlich f&uuml;r die Datenerfassung auf dieser Website?</h5>{' '}
									<p>
										Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen
										Kontaktdaten k&ouml;nnen Sie dem Abschnitt &bdquo;Hinweis zur Verantwortlichen
										Stelle&ldquo; in dieser Datenschutzerkl&auml;rung entnehmen.
									</p>{' '}
									<h5>Wie erfassen wir Ihre Daten?</h5>{' '}
									<p>
										Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es
										sich z.&nbsp;B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
									</p>{' '}
									<p>
										Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch
										unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.&nbsp;B.
										Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser
										Daten erfolgt automatisch, sobald Sie diese Website betreten.
									</p>{' '}
									<h5>Wof&uuml;r nutzen wir Ihre Daten?</h5>{' '}
									<p>
										Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu
										gew&auml;hrleisten. Andere Daten k&ouml;nnen zur Analyse Ihres Nutzerverhaltens verwendet
										werden.
									</p>{' '}
									<h5>Welche Rechte haben Sie bez&uuml;glich Ihrer Daten?</h5>{' '}
									<p>
										Sie haben jederzeit das Recht, unentgeltlich Auskunft &uuml;ber Herkunft, Empf&auml;nger
										und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben
										au&szlig;erdem ein Recht, die Berichtigung oder L&ouml;schung dieser Daten zu verlangen.
										Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, k&ouml;nnen Sie diese
										Einwilligung jederzeit f&uuml;r die Zukunft widerrufen. Au&szlig;erdem haben Sie das
										Recht, unter bestimmten Umst&auml;nden die Einschr&auml;nkung der Verarbeitung Ihrer
										personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der
										zust&auml;ndigen Aufsichtsbeh&ouml;rde zu.
									</p>{' '}
									<p>
										Hierzu sowie zu weiteren Fragen zum Thema Datenschutz k&ouml;nnen Sie sich jederzeit an
										uns wenden.
									</p>
									<h4>Analyse-Tools und Tools von Dritt&shy;anbietern</h4>{' '}
									<p>
										Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das
										geschieht vor allem mit sogenannten Analyseprogrammen.
									</p>{' '}
									<p>
										Detaillierte Informationen zu diesen Analyseprogrammen finden Sie in der folgenden
										Datenschutzerkl&auml;rung.
									</p>
									<h3>2. Hosting</h3>
									<h4>Externes Hosting</h4>{' '}
									<p>
										Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die
										personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des
										Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und
										Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige
										Daten, die &uuml;ber eine Website generiert werden, handeln.
									</p>{' '}
									<p>
										Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserf&uuml;llung gegen&uuml;ber
										unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse
										einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch
										einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO). Sofern eine entsprechende
										Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschlie&szlig;lich auf Grundlage
										von Art. 6 Abs. 1 lit. a DSGVO und &sect; 25 Abs. 1 TTDSG, soweit die Einwilligung die
										Speicherung von Cookies oder den Zugriff auf Informationen im Endger&auml;t des Nutzers
										(z.&nbsp;B. Device-Fingerprinting) im Sinne des TTDSG umfasst. Die Einwilligung ist
										jederzeit widerrufbar.
									</p>{' '}
									<p>
										Unser Hoster wird Ihre Daten nur insoweit verarbeiten, wie dies zur Erf&uuml;llung seiner
										Leistungspflichten erforderlich ist und unsere Weisungen in Bezug auf diese Daten
										befolgen.
									</p>{' '}
									<p>Wir setzen folgenden Hoster ein:</p>
									<p>
										Google Ireland Limited
										<br />
										Gordon House, Barrow Street
										<br />
										Dublin 4<br />
										Irland
									</p>
									<h5>Auftragsverarbeitung</h5>{' '}
									<p>
										Wir haben einen Vertrag &uuml;ber Auftragsverarbeitung (AVV) mit dem oben genannten
										Anbieter geschlossen. Hierbei handelt es sich um einen datenschutzrechtlich
										vorgeschriebenen Vertrag, der gew&auml;hrleistet, dass dieser die personenbezogenen Daten
										unserer Websitebesucher nur nach unseren Weisungen und unter Einhaltung der DSGVO
										verarbeitet.
									</p>
									<h3>3. Allgemeine Hinweise und Pflicht&shy;informationen</h3>
									<h4>Datenschutz</h4>{' '}
									<p>
										Die Betreiber dieser Seiten nehmen den Schutz Ihrer pers&ouml;nlichen Daten sehr ernst.
										Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen
										Datenschutzvorschriften sowie dieser Datenschutzerkl&auml;rung.
									</p>{' '}
									<p>
										Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben.
										Personenbezogene Daten sind Daten, mit denen Sie pers&ouml;nlich identifiziert werden
										k&ouml;nnen. Die vorliegende Datenschutzerkl&auml;rung erl&auml;utert, welche Daten wir
										erheben und wof&uuml;r wir sie nutzen. Sie erl&auml;utert auch, wie und zu welchem Zweck
										das geschieht.
									</p>{' '}
									<p>
										Wir weisen darauf hin, dass die Daten&uuml;bertragung im Internet (z.&nbsp;B. bei der
										Kommunikation per E-Mail) Sicherheitsl&uuml;cken aufweisen kann. Ein l&uuml;ckenloser
										Schutz der Daten vor dem Zugriff durch Dritte ist nicht m&ouml;glich.
									</p>
									<h4>Hinweis zur verantwortlichen Stelle</h4>{' '}
									<p>Die verantwortliche Stelle f&uuml;r die Datenverarbeitung auf dieser Website ist:</p>{' '}
									<p>
										Alexander Gau&szlig;
										<br />
										Tulpenweg 16
										<br />
										71106 Magstadt
									</p>
									<p>
										Telefon: +49 (0) 1744772902
										<br />
										E-Mail: info@beautifymyself.de
									</p>
									<p>
										Verantwortliche Stelle ist die nat&uuml;rliche oder juristische Person, die allein oder
										gemeinsam mit anderen &uuml;ber die Zwecke und Mittel der Verarbeitung von
										personenbezogenen Daten (z.&nbsp;B. Namen, E-Mail-Adressen o. &Auml;.) entscheidet.
									</p>
									<h4>Speicherdauer</h4>{' '}
									<p>
										Soweit innerhalb dieser Datenschutzerkl&auml;rung keine speziellere Speicherdauer genannt
										wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck f&uuml;r die
										Datenverarbeitung entf&auml;llt. Wenn Sie ein berechtigtes L&ouml;schersuchen geltend
										machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten
										gel&ouml;scht, sofern wir keine anderen rechtlich zul&auml;ssigen Gr&uuml;nde f&uuml;r die
										Speicherung Ihrer personenbezogenen Daten haben (z.&nbsp;B. steuer- oder handelsrechtliche
										Aufbewahrungsfristen); im letztgenannten Fall erfolgt die L&ouml;schung nach Fortfall
										dieser Gr&uuml;nde.
									</p>
									<h4>
										Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser Website
									</h4>{' '}
									<p>
										Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre
										personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2
										lit. a DSGVO, sofern besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO verarbeitet
										werden. Sofern Sie in die Speicherung von Cookies oder in den Zugriff auf Informationen in
										Ihr Endger&auml;t (z.&nbsp;B. via Device-Fingerprinting) eingewilligt haben, erfolgt die
										Datenverarbeitung zus&auml;tzlich auf Grundlage von &sect; 25 Abs. 1 TTDSG. Die
										Einwilligung ist jederzeit widerrufbar. Sind Ihre Daten zur Vertragserf&uuml;llung oder
										zur Durchf&uuml;hrung vorvertraglicher Ma&szlig;nahmen erforderlich, verarbeiten wir Ihre
										Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten wir Ihre
										Daten, sofern diese zur Erf&uuml;llung einer rechtlichen Verpflichtung erforderlich sind
										auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO. Die Datenverarbeitung kann ferner auf
										Grundlage unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO erfolgen.
										&Uuml;ber die jeweils im Einzelfall einschl&auml;gigen Rechtsgrundlagen wird in den
										folgenden Abs&auml;tzen dieser Datenschutzerkl&auml;rung informiert.
									</p>
									<h4>Hinweis zur Datenweitergabe in die USA und sonstige Drittstaaten</h4>{' '}
									<p>
										Wir verwenden unter anderem Tools von Unternehmen mit Sitz in den USA oder sonstigen
										datenschutzrechtlich nicht sicheren Drittstaaten. Wenn diese Tools aktiv sind, k&ouml;nnen
										Ihre personenbezogene Daten in diese Drittstaaten &uuml;bertragen und dort verarbeitet
										werden. Wir weisen darauf hin, dass in diesen L&auml;ndern kein mit der EU vergleichbares
										Datenschutzniveau garantiert werden kann. Beispielsweise sind US-Unternehmen dazu
										verpflichtet, personenbezogene Daten an Sicherheitsbeh&ouml;rden herauszugeben, ohne dass
										Sie als Betroffener hiergegen gerichtlich vorgehen k&ouml;nnten. Es kann daher nicht
										ausgeschlossen werden, dass US-Beh&ouml;rden (z.&nbsp;B. Geheimdienste) Ihre auf
										US-Servern befindlichen Daten zu &Uuml;berwachungszwecken verarbeiten, auswerten und
										dauerhaft speichern. Wir haben auf diese Verarbeitungst&auml;tigkeiten keinen Einfluss.
									</p>
									<h4>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h4>{' '}
									<p>
										Viele Datenverarbeitungsvorg&auml;nge sind nur mit Ihrer ausdr&uuml;cklichen Einwilligung
										m&ouml;glich. Sie k&ouml;nnen eine bereits erteilte Einwilligung jederzeit widerrufen. Die
										Rechtm&auml;&szlig;igkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom
										Widerruf unber&uuml;hrt.
									</p>
									<h4>
										Widerspruchsrecht gegen die Datenerhebung in besonderen F&auml;llen sowie gegen
										Direktwerbung (Art. 21 DSGVO)
									</h4>{' '}
									<p>
										WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO ERFOLGT,
										HABEN SIE JEDERZEIT DAS RECHT, AUS GR&Uuml;NDEN, DIE SICH AUS IHRER BESONDEREN SITUATION
										ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN; DIES
										GILT AUCH F&Uuml;R EIN AUF DIESE BESTIMMUNGEN GEST&Uuml;TZTES PROFILING. DIE JEWEILIGE
										RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER
										DATENSCHUTZERKL&Auml;RUNG. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR IHRE BETROFFENEN
										PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES SEI DENN, WIR K&Ouml;NNEN ZWINGENDE
										SCHUTZW&Uuml;RDIGE GR&Uuml;NDE F&Uuml;R DIE VERARBEITUNG NACHWEISEN, DIE IHRE INTERESSEN,
										RECHTE UND FREIHEITEN &Uuml;BERWIEGEN ODER DIE VERARBEITUNG DIENT DER GELTENDMACHUNG,
										AUS&Uuml;BUNG ODER VERTEIDIGUNG VON RECHTSANSPR&Uuml;CHEN (WIDERSPRUCH NACH ART. 21 ABS. 1
										DSGVO).
									</p>{' '}
									<p>
										WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN, SO HABEN
										SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER
										PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH F&Uuml;R
										DAS PROFILING, SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE
										WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER
										DIREKTWERBUNG VERWENDET (WIDERSPRUCH NACH ART. 21 ABS. 2 DSGVO).
									</p>
									<h4>Beschwerde&shy;recht bei der zust&auml;ndigen Aufsichts&shy;beh&ouml;rde</h4>{' '}
									<p>
										Im Falle von Verst&ouml;&szlig;en gegen die DSGVO steht den Betroffenen ein
										Beschwerderecht bei einer Aufsichtsbeh&ouml;rde, insbesondere in dem Mitgliedstaat ihres
										gew&ouml;hnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutma&szlig;lichen
										Versto&szlig;es zu. Das Beschwerderecht besteht unbeschadet anderweitiger
										verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
									</p>
									<h4>Recht auf Daten&shy;&uuml;bertrag&shy;barkeit</h4>{' '}
									<p>
										Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in
										Erf&uuml;llung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in
										einem g&auml;ngigen, maschinenlesbaren Format aush&auml;ndigen zu lassen. Sofern Sie die
										direkte &Uuml;bertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt
										dies nur, soweit es technisch machbar ist.
									</p>
									<h4>SSL- bzw. TLS-Verschl&uuml;sselung</h4>{' '}
									<p>
										Diese Seite nutzt aus Sicherheitsgr&uuml;nden und zum Schutz der &Uuml;bertragung
										vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als
										Seitenbetreiber senden, eine SSL- bzw. TLS-Verschl&uuml;sselung. Eine verschl&uuml;sselte
										Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von &bdquo;http://&ldquo;
										auf &bdquo;https://&ldquo; wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
									</p>{' '}
									<p>
										Wenn die SSL- bzw. TLS-Verschl&uuml;sselung aktiviert ist, k&ouml;nnen die Daten, die Sie
										an uns &uuml;bermitteln, nicht von Dritten mitgelesen werden.
									</p>
									<h4>Auskunft, L&ouml;schung und Berichtigung</h4>{' '}
									<p>
										Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf
										unentgeltliche Auskunft &uuml;ber Ihre gespeicherten personenbezogenen Daten, deren
										Herkunft und Empf&auml;nger und den Zweck der Datenverarbeitung und ggf. ein Recht auf
										Berichtigung oder L&ouml;schung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema
										personenbezogene Daten k&ouml;nnen Sie sich jederzeit an uns wenden.
									</p>
									<h4>Recht auf Einschr&auml;nkung der Verarbeitung</h4>{' '}
									<p>
										Sie haben das Recht, die Einschr&auml;nkung der Verarbeitung Ihrer personenbezogenen Daten
										zu verlangen. Hierzu k&ouml;nnen Sie sich jederzeit an uns wenden. Das Recht auf
										Einschr&auml;nkung der Verarbeitung besteht in folgenden F&auml;llen:
									</p>{' '}
									<ul>
										{' '}
										<li>
											Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten,
											ben&ouml;tigen wir in der Regel Zeit, um dies zu &uuml;berpr&uuml;fen. F&uuml;r die Dauer
											der Pr&uuml;fung haben Sie das Recht, die Einschr&auml;nkung der Verarbeitung Ihrer
											personenbezogenen Daten zu verlangen.
										</li>{' '}
										<li>
											Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtm&auml;&szlig;ig
											geschah/geschieht, k&ouml;nnen Sie statt der L&ouml;schung die Einschr&auml;nkung der
											Datenverarbeitung verlangen.
										</li>{' '}
										<li>
											Wenn wir Ihre personenbezogenen Daten nicht mehr ben&ouml;tigen, Sie sie jedoch zur
											Aus&uuml;bung, Verteidigung oder Geltendmachung von Rechtsanspr&uuml;chen ben&ouml;tigen,
											haben Sie das Recht, statt der L&ouml;schung die Einschr&auml;nkung der Verarbeitung
											Ihrer personenbezogenen Daten zu verlangen.
										</li>{' '}
										<li>
											Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine
											Abw&auml;gung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch
											nicht feststeht, wessen Interessen &uuml;berwiegen, haben Sie das Recht, die
											Einschr&auml;nkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
										</li>{' '}
									</ul>{' '}
									<p>
										Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschr&auml;nkt haben,
										d&uuml;rfen diese Daten &ndash; von ihrer Speicherung abgesehen &ndash; nur mit Ihrer
										Einwilligung oder zur Geltendmachung, Aus&uuml;bung oder Verteidigung von
										Rechtsanspr&uuml;chen oder zum Schutz der Rechte einer anderen nat&uuml;rlichen oder
										juristischen Person oder aus Gr&uuml;nden eines wichtigen &ouml;ffentlichen Interesses der
										Europ&auml;ischen Union oder eines Mitgliedstaats verarbeitet werden.
									</p>
									<h3>4. Datenerfassung auf dieser Website</h3>
									<h4>Cookies</h4>{' '}
									<p>
										Unsere Internetseiten verwenden so genannte &bdquo;Cookies&ldquo;. Cookies sind kleine
										Textdateien und richten auf Ihrem Endger&auml;t keinen Schaden an. Sie werden entweder
										vor&uuml;bergehend f&uuml;r die Dauer einer Sitzung (Session-Cookies) oder dauerhaft
										(permanente Cookies) auf Ihrem Endger&auml;t gespeichert. Session-Cookies werden nach Ende
										Ihres Besuchs automatisch gel&ouml;scht. Permanente Cookies bleiben auf Ihrem
										Endger&auml;t gespeichert, bis Sie diese selbst l&ouml;schen&nbsp;oder eine automatische
										L&ouml;schung durch Ihren Webbrowser erfolgt.
									</p>{' '}
									<p>
										Teilweise k&ouml;nnen auch Cookies von Drittunternehmen auf Ihrem Endger&auml;t
										gespeichert werden, wenn Sie unsere Seite betreten (Third-Party-Cookies). Diese
										erm&ouml;glichen uns oder Ihnen die Nutzung bestimmter Dienstleistungen des
										Drittunternehmens (z.&nbsp;B. Cookies zur Abwicklung von Zahlungsdienstleistungen).
									</p>{' '}
									<p>
										Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind technisch notwendig, da
										bestimmte Websitefunktionen ohne diese nicht funktionieren w&uuml;rden (z.&nbsp;B. die
										Warenkorbfunktion oder die Anzeige von Videos). Andere Cookies dienen dazu, das
										Nutzerverhalten auszuwerten&nbsp;oder Werbung anzuzeigen.
									</p>{' '}
									<p>
										Cookies, die zur Durchf&uuml;hrung des elektronischen Kommunikationsvorgangs, zur
										Bereitstellung bestimmter, von Ihnen erw&uuml;nschter Funktionen (z.&nbsp;B. f&uuml;r die
										Warenkorbfunktion) oder zur Optimierung der Website (z.&nbsp;B. Cookies zur Messung des
										Webpublikums) erforderlich sind (notwendige Cookies), werden auf Grundlage von Art. 6 Abs.
										1 lit. f DSGVO gespeichert, sofern keine andere Rechtsgrundlage angegeben wird. Der
										Websitebetreiber hat ein berechtigtes Interesse an der Speicherung von notwendigen Cookies
										zur technisch fehlerfreien und optimierten Bereitstellung seiner Dienste. Sofern eine
										Einwilligung zur Speicherung von Cookies und vergleichbaren Wiedererkennungstechnologien
										abgefragt wurde, erfolgt die Verarbeitung ausschlie&szlig;lich auf Grundlage dieser
										Einwilligung (Art. 6 Abs. 1 lit. a DSGVO und &sect; 25 Abs. 1 TTDSG); die Einwilligung ist
										jederzeit widerrufbar.
									</p>{' '}
									<p>
										Sie k&ouml;nnen Ihren Browser so einstellen, dass Sie &uuml;ber das Setzen von Cookies
										informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies f&uuml;r
										bestimmte F&auml;lle oder generell ausschlie&szlig;en sowie das automatische L&ouml;schen
										der Cookies beim Schlie&szlig;en des Browsers aktivieren. Bei der Deaktivierung von
										Cookies kann die Funktionalit&auml;t dieser Website eingeschr&auml;nkt sein.
									</p>{' '}
									<p>
										Soweit Cookies von Drittunternehmen oder zu Analysezwecken eingesetzt werden, werden wir
										Sie hier&uuml;ber im Rahmen dieser Datenschutzerkl&auml;rung gesondert informieren und
										ggf. eine Einwilligung abfragen.
									</p>
									<h4>Kontaktformular</h4>{' '}
									<p>
										Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
										Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung
										der Anfrage und f&uuml;r den Fall von Anschlussfragen bei uns gespeichert. Diese Daten
										geben wir nicht ohne Ihre Einwilligung weiter.
									</p>{' '}
									<p>
										Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern
										Ihre Anfrage mit der Erf&uuml;llung eines Vertrags zusammenh&auml;ngt oder zur
										Durchf&uuml;hrung vorvertraglicher Ma&szlig;nahmen erforderlich ist. In allen &uuml;brigen
										F&auml;llen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven
										Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer
										Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.
									</p>{' '}
									<p>
										Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur
										L&ouml;schung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck
										f&uuml;r die Datenspeicherung entf&auml;llt (z.&nbsp;B. nach abgeschlossener Bearbeitung
										Ihrer Anfrage). Zwingende gesetzliche Bestimmungen &ndash; insbesondere
										Aufbewahrungsfristen &ndash; bleiben unber&uuml;hrt.
									</p>
									<h4>Anfrage per E-Mail, Telefon oder Telefax</h4>{' '}
									<p>
										Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive
										aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der
										Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir
										nicht ohne Ihre Einwilligung weiter.
									</p>{' '}
									<p>
										Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern
										Ihre Anfrage mit der Erf&uuml;llung eines Vertrags zusammenh&auml;ngt oder zur
										Durchf&uuml;hrung vorvertraglicher Ma&szlig;nahmen erforderlich ist. In allen &uuml;brigen
										F&auml;llen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven
										Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer
										Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.
									</p>{' '}
									<p>
										Die von Ihnen an uns per Kontaktanfragen &uuml;bersandten Daten verbleiben bei uns, bis
										Sie uns zur L&ouml;schung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder
										der Zweck f&uuml;r die Datenspeicherung entf&auml;llt (z.&nbsp;B. nach abgeschlossener
										Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen &ndash; insbesondere
										gesetzliche Aufbewahrungsfristen &ndash; bleiben unber&uuml;hrt.
									</p>
									<h3>5. Plugins und Tools</h3>
									<h4>Google Web Fonts</h4>{' '}
									<p>
										Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Web Fonts,
										die von Google bereitgestellt werden. Beim Aufruf einer Seite l&auml;dt Ihr Browser die
										ben&ouml;tigten Web Fonts in ihren Browsercache, um Texte und Schriftarten korrekt
										anzuzeigen.
									</p>{' '}
									<p>
										Zu diesem Zweck muss der von Ihnen verwendete Browser Verbindung zu den Servern von Google
										aufnehmen. Hierdurch erlangt Google Kenntnis dar&uuml;ber, dass &uuml;ber Ihre IP-Adresse
										diese Website aufgerufen wurde. Die Nutzung von Google WebFonts erfolgt auf Grundlage von
										Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der
										einheitlichen Darstellung des Schriftbildes auf seiner Website. Sofern eine entsprechende
										Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschlie&szlig;lich auf Grundlage
										von Art. 6 Abs. 1 lit. a DSGVO und &sect; 25 Abs. 1 TTDSG, soweit die Einwilligung die
										Speicherung von Cookies oder den Zugriff auf Informationen im Endger&auml;t des Nutzers
										(z.&nbsp;B. Device-Fingerprinting) im Sinne des TTDSG umfasst. Die Einwilligung ist
										jederzeit widerrufbar.
									</p>{' '}
									<p>
										Wenn Ihr Browser Web Fonts nicht unterst&uuml;tzt, wird eine Standardschrift von Ihrem
										Computer genutzt.
									</p>{' '}
									<p>
										Weitere Informationen zu Google Web Fonts finden Sie unter{' '}
										<a
											href='https://developers.google.com/fonts/faq'
											target='_blank'
											rel='noopener noreferrer'>
											https://developers.google.com/fonts/faq
										</a>{' '}
										und in der Datenschutzerkl&auml;rung von Google:{' '}
										<a
											href='https://policies.google.com/privacy?hl=de'
											target='_blank'
											rel='noopener noreferrer'>
											https://policies.google.com/privacy?hl=de
										</a>
										.
									</p>
									<h4>Google Analytics</h4>{' '}
									<p>
										Diese Website nutzt den Dienst „Google Analytics“, welcher von der Google Inc. (1600
										Amphitheatre Parkway Mountain View, CA 94043, USA) angeboten wird, zur Analyse der
										Websitebenutzung durch Nutzer.
									</p>
									<p>
										Der Dienst verwendet „Cookies“ – Textdateien, welche auf Ihrem Endgerät gespeichert
										werden. Die durch die Cookies gesammelten Informationen werden im Regelfall an einen
										Google-Server in den USA gesandt und dort gespeichert. Auf dieser Website greift die
										IP-Anonymisierung. Die IP-Adresse der Nutzer wird innerhalb der Mitgliedsstaaten der EU
										und des Europäischen Wirtschaftsraum gekürzt. Durch diese Kürzung entfällt der
										Personenbezug Ihrer IP-Adresse. Im Rahmen der Vereinbarung zur Auftragsdatenvereinbarung,
										welche die Websitebetreiber mit der Google Inc. geschlossen haben, erstellt diese mithilfe
										der gesammelten Informationen eine Auswertung der Websitenutzung und der Websiteaktivität
										und erbringt mit der Internetnutzung verbundene Dienstleistungen. Sie haben die
										Möglichkeit, die Speicherung des Cookies auf Ihrem Gerät zu verhindern, indem Sie in Ihrem
										Browser entsprechende Einstellungen vornehmen. Es ist nicht gewährleistet, dass Sie auf
										alle Funktionen dieser Website ohne Einschränkungen zugreifen können, wenn Ihr Browser
										keine Cookies zulässt.
									</p>
									<p>
										Weiterhin können Sie durch ein Browser-Plugin verhindern, dass die durch Cookies
										gesammelten Informationen (inklusive Ihrer IP-Adresse) an die Google Inc. gesendet und von
										der Google Inc. genutzt werden. Folgender Link führt Sie zu dem entsprechenden Plugin:
									</p>
									<p>
										<a href='https://tools.google.com/dlpage/gaoptout?hl=de'>
											https://tools.google.com/dlpage/gaoptout?hl=de
										</a>{' '}
									</p>
									<p>Hier finden Sie weitere Informationen zur Datennutzung durch die Google Inc.:</p>
									<p>
										<a href='https://support.google.com/analytics/answer/6004245?hl=de'>
											https://support.google.com/analytics/answer/6004245?hl=de
										</a>
									</p>
									<h4>Google Maps</h4>{' '}
									<p>
										Diese Seite nutzt den Kartendienst Google Maps. Anbieter ist die Google Ireland Limited
										(&bdquo;Google&ldquo;), Gordon House, Barrow Street, Dublin 4, Irland.
									</p>{' '}
									<p>
										Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre IP-Adresse zu speichern.
										Diese Informationen werden in der Regel an einen Server von Google in den USA
										&uuml;bertragen und dort gespeichert. Der Anbieter dieser Seite hat keinen Einfluss auf
										diese Daten&uuml;bertragung. Wenn Google Maps aktiviert ist, kann Google zum Zwecke der
										einheitlichen Darstellung der Schriftarten Google Web Fonts verwenden. Beim Aufruf von
										Google Maps l&auml;dt Ihr Browser die ben&ouml;tigten Web Fonts in ihren Browsercache, um
										Texte und Schriftarten korrekt anzuzeigen.
									</p>{' '}
									<p>
										Die Nutzung von Google Maps erfolgt im Interesse einer ansprechenden Darstellung unserer
										Online-Angebote und an einer leichten Auffindbarkeit der von uns auf der Website
										angegebenen Orte. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f
										DSGVO dar. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die
										Verarbeitung ausschlie&szlig;lich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und &sect;
										25 Abs. 1 TTDSG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf
										Informationen im Endger&auml;t des Nutzers (z.&nbsp;B. Device-Fingerprinting) im Sinne des
										TTDSG umfasst. Die Einwilligung ist jederzeit widerrufbar.
									</p>{' '}
									<p>
										Die Daten&uuml;bertragung in die USA wird auf die Standardvertragsklauseln der
										EU-Kommission gest&uuml;tzt. Details finden Sie hier:{' '}
										<a
											href='https://privacy.google.com/businesses/gdprcontrollerterms/'
											target='_blank'
											rel='noopener noreferrer'>
											https://privacy.google.com/businesses/gdprcontrollerterms/
										</a>{' '}
										und{' '}
										<a
											href='https://privacy.google.com/businesses/gdprcontrollerterms/sccs/'
											target='_blank'
											rel='noopener noreferrer'>
											https://privacy.google.com/businesses/gdprcontrollerterms/sccs/
										</a>
										.
									</p>{' '}
									<p>
										Mehr Informationen zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerkl&auml;rung
										von Google:{' '}
										<a
											href='https://policies.google.com/privacy?hl=de'
											target='_blank'
											rel='noopener noreferrer'>
											https://policies.google.com/privacy?hl=de
										</a>
										.
									</p>
									<p>
										Quelle: <a href='https://www.e-recht24.de'>https://www.e-recht24.de</a>
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

export default Datenschutz;
