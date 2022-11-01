export const medousaClinique = {
	id: 'bm-mc-1',
	// meta Klinik
	metaTitle: 'Haarästhetik und Zahnästhetik in der Türkei - Medousa Clinique in Istanbul',
	metaDescription: 'Mehr Haar und schöne Zähne direkt in Istanbul - Unverbindlich anfragen',
	// Info Klinik
	title: 'Medousa Clinique',
	subtitle: '',
	logo: '/assets/images/klinik/medousa_clinique/mc-icon.webp',
	logoAlt: 'Logo Medousa Clinique',
	leistungen: ['Haare', 'Zähne'],
	leistungenL: ['Haarästhetik', 'Zahnästhetik'],
	dienstleistungen: ['WLAN', 'Transfer', 'Dolmetscherdienste'],
	zertifizierung: ['JCI zertifiziert'],
	sprache: ['Englisch', 'Deutsch', 'Türkisch'],
	erfahrung: { jahre: 10, eingriffe: 500, drei: 50, vier: 25 },
	description: (
		<>
			<span>
				Die <b>Medousa Clinique</b> wurde 2013 in Istanbul gegründet und ist eine Klinik für Haar- und
				Zahnästhethik.
			</span>
			<br />
			<br />
			<span>
				Wir haben es uns, gemeinsam mit unseren 75 Mitarbeitern, zur Aufgabe gemacht, unsere Gäste gemäß
				den höchsten Servicequalitätstandards zu beherbergen. In 8 Jahren haben wir mehr als 13.000
				Eingriffe durchgeführt. Seit 2019 arbeiten wir aktiv auf dem Gebiet der FUE (Follicular Unit
				Extraction). Diese Methode zählt zu den zurzeit modernsten Möglichkeiten der
				Haartransplantation.
			</span>
		</>
	),

	// Adresse
	adresse: 'Merkez, Bağcılar Cd. Köşem Apt, D:No:15 D:4, 34200 Bağcılar/İstanbul',
	gmaps: { lat: 41.0329306, lng: 28.8566762 },

	// Kontakt
	kontakt: {
		telefon: '+905421035912',
		email: 'info@medousaclinique.com',
		website: 'https://www.medousaclinique.com',
		whatsapp: '+905421035912',
	},

	//video
	video: 'VNAiNLXtTIQ',

	// Social
	social: {
		facebook: 'medousaclinique',
		instagram: 'medousa.clinique',
		twitter: 'medousaclinique',
		youtube: 'UCE2OGlAAqoTIfJL1GUuL-Vw',
	},

	// Ansprechpartner
	asp: {
		name: '',
		email: '',
		url: '',
	},

	//Bilder
	images: [
		{
			caption: 'Bild 1',
			url: 'https://www.alanyaestetik.com/uploads/alanya-estetik-mehmet-celik-klinik-4.jpg',
			original: '/assets/images/klinik/estetik_pink/1.png',
			originalAlt: 'Dr. Cengiz Kulekci - Porträt',
		},
		{
			caption: 'Bild 2',
			url: 'https://www.estetikinternational.com/de/dokumanlar/istanbul-quasar-2018-07-31-20-20-47-0.jpg',
			original: '/assets/images/klinik/estetik_pink/2.png',
			originalAlt: 'Dr. Cengiz Kulekci - Porträt',
		},
		{
			caption: 'Bild 3',
			url: 'https://www.alanyaestetik.com/uploads/alanya-estetik-mehmet-celik-klinik-5.jpg',
			original: '/assets/images/klinik/estetik_pink/3.png',
			originalAlt: 'Dr. Cengiz Kulekci - Porträt',
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
		{
			name: 'Zahnästhetik',
			description: (
				<ul>
					<li>Zahnimplantate</li>
					<li>Zahnaufhellung / Bleaching</li>
					<li>Zahnkronen</li>
					<li>Laminate Veneer</li>
				</ul>
			),
		},
	],
};
