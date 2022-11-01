export const klinikName =
	// TODO:  2 - Vorzeigeklinik https://www.besteklinik.com/klinik/acibadem-taksim/
	{
		id: 'bm-ek-g',

		// Info Klinik
		title: '',
		subtitle: '',
		logo: '/assets/images/klinik/terziler_servet/st-icon.webp',

		// Leistungen
		leistungen: ['Haare', 'Zähne', 'Brust', 'Fettabsaugung', 'Körper', 'Nase'],
		leistungenL: ['Haarästhetik', 'Zahnästhetik', 'Brustästhetik', 'Körperästhetik', 'Nasenästhetik'],
		dienstleistungen: ['WLAN', 'Transfer', 'Dolmetscherdienste'],

		//Zertifizierung / Sprachen
		zertifizierung: ['JCI zertifiziert'],
		sprache: ['Deutsch', 'Englisch', 'Türkisch'],

		// Beschreibung
		description: (
			<>
				<span>
					Die <b>Medousa Clinique</b> wurde 2013 in Istanbul gegründet und ist ein Klinik für Haar- und
					Zahnästhethik, welche ihre Dienstleistungen für Gäste aus der ganzen Welt anbietet.
				</span>
				<br />
			</>
		),

		// Adresse
		adresse: 'Merkez, Bağcılar Cd. Köşem Apt, D:No:15 D:4, 34200 Bağcılar/İstanbul',
		gmaps: { lat: 41.0329306, lng: 28.8566762 },

		// Kontakt
		kontakt: {
			telefon: '+905421035912',
			email: 'info@medousaclinique.com',
			website: 'https://www.medousaclinique.com/',
			whatsapp: '',
		},

		// Video

		// Social
		social: {
			facebook: '',
			instagram: '',
			twitter: '',
			youtube: '',
			linkedin: '',
		},

		//Bilder
		images: [
			{
				caption: 'Bild 1',
				url: '/assets/images/klinik/terziler_servet/st-icon.webp',
			},
		],
		//Behandlungen
		behandlungen: [
			{
				name: 'Haarästhetik',
				description: (
					<ul>
						<li>FUE</li>
						<li>Sapphire FUE</li>
						<li>DHI</li>
						<li>Barttransplantation​</li>
						<li>Augenbrauentransplantation</li>
						<li>Haar-Mesotherapie</li>
					</ul>
				),
			},
		],

		// nicht notwendig
		erfahrung: { jahre: 10, eingriffe: 500, drei: 50, vier: 25 },
		// Ansprechpartner
		asp: {
			name: '',
			email: '',
			url: '',
		},
	};
