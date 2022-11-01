export const dentaMedica = {
	id: 'bm-dm-1',
	//meta Klinik
	metaTitle: 'Schönheitsklinik für Zahnästhetik in Istanbul - Denta Medica',
	metaDescription: 'Zähnästhetik in Istanbul - in der Klinik von Dr. Cengiz Külekci',
	// Info Klinik
	title: 'Denta Medica',
	subtitle: 'Dr. Cengiz Külekci',
	logo: '/assets/images/klinik/denta_medica/logo_dm.webp',
	logoAlt: 'Logo Denta Medica - Dr. Cengiz Külekci',
	leistungen: ['Zähne'],
	leistungenL: ['Zahnästhetik'],
	dienstleistungen: ['Kostenlose Erstuntersuchung', 'Garantie', 'Höchste Standards'],
	zertifizierung: [],
	sprache: ['Deutsch', 'Englisch', 'Türkisch'],
	erfahrung: { jahre: 10, eingriffe: 500, drei: 50, vier: 25 },
	description: (
		<>
			<span>Wir bieten jedem Patienten die bestmögliche Behandlung!</span>
			<br />
			<span>
				Mit unserer multidisziplinären Herangehensweise ist es unser vorrangiges Ziel, für alle
				zahngesundheitlichen Probleme eine Lösung zu finden. Zum Zweck idealer Lösungen, arbeiten wir in
				Kombination der Bereiche Kieferorthopädie, Kieferchirurgie und Parodontologie. Mit koordinierten
				Behandlungsansätzen sind wir in der Lage, maximale Kundenzufriedenheit zu bieten.
			</span>
			<br />
			<br />
			<span>
				Über <b>Cengiz Külekci</b>: Universitätsabschluss als Zahnarzt im Jahr 2004 an der Fakultät fur
				Zahnmedizinder Universität Istanbul.
			</span>
		</>
	),

	// Adresse
	adresse: 'Zeytinlik Mah. Sporcu Sk. No:9, 34140 Bakırköy/İstanbul',
	gmaps: { lat: 40.978401, lng: 28.869471 },

	// Kontakt
	kontakt: {
		telefon: '+90 545 313 1586',
		email: 'info@drcengizkulekci.com',
		website: 'https://www.drcengizkulekci.com/',
		appointment: '',
		whatsapp: '905453131586',
	},

	//video
	video: '',

	// Social
	social: {
		facebook: 'istanbuldent',
		instagram: 'drcengizkulekci',
		twitter: 'istanbul_dent',
		youtube: '',
		linked: '',
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
			caption: '',
			original: 'https://www.istanbuldent.com.tr/icerik/disklinigi/dishekimi-cengiz-kulekci.jpg',
			originalAlt: 'Dr. Cengiz Kulekci - Porträt',
		},
	],
	//Behandlungen
	behandlungen: [
		{
			name: 'Zahästhetik',
			description: (
				<ul>
					<li>Zahnimplantate</li>
					<li>Vollprothesen</li>
					<li>Zahnkronen</li>
					<li>Keramininlay / -onlay</li>
					<li>Zahnlückenschließung (Diastema)</li>
					<li>Zahnfleischästhetik</li>
					<li>Bleaching / Zahnaufhellung</li>
					<li>Kieferorthopädie</li>
					<li>Kariesbehandlung</li>
				</ul>
			),
		},
	],
};
