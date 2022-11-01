export const zahnimplatologie = {
	// TODO: Umschreiben
	name: 'Zahnimplantologie',
	image: '/assets/images/behandlungen/zahn/zahnimplantologie.webp',
	description:
		'Zahnimplantate sind eine Art künstlicher Zahnersatz, bei dem Titanschrauben oder -zylinder im Ober- oder Unterkiefer eingesetzt werden.',
	tabs: [
		{
			name: 'Vorteile',
			content:
				'Im Gegensatz zu herkömmlichen Brücken bieten Zahnimplantate den Vorteil, dass sie die umliegenden Zähne nicht beschädigen. Bei  herkömmlichen Brücken müssen  die Nachbarzähne poliert und befestigt werden. Dies schwächt den Zahnschmelz und macht sie anfälliger für Karies.',
		},
		{
			name: 'Kosten',
			content:
				'Da die Kosten für Zahnimplantate vom Einzelfall abhängen, ist es schwierig, vorab genaue Angaben zu machen. Informiere dich direkt bei der Klinik deiner Wahl.',
		},
		{
			name: 'Ablauf',
			content:
				'Im Gegensatz zu Sofortimplantaten werden Standard-Zahnimplantate erst eingesetzt, nachdem die Wundhöhle des Kieferknochens verheilt ist. Dies dauert 3-6 Monate. In dieser Zeit wird ein Teil des Knochens zerstört und das Zahnfleisch passt sich  an. Insbesondere der Bereich um den Vorgängerzahn war durch den Zahndruck keinen Wachstumsreizen ausgesetzt, sondern hat sich teilweise zurückgebildet. Erst wenn dieser Prozess abgeschlossen ist und der Knochen in dauerhafter und stabiler Form ist, kann mit der Implantation eines Zahnimplantats begonnen werden.',
		},
		{
			name: 'Risiken',
			content:
				'Wie jede Operation bergen Zahnimplantate Risiken. Beispielsweise können Blutungen, Knochen- oder Nervenschäden auftreten. Nervenschäden, insbesondere im Bereich des Unterkiefers, können zu Taubheitsgefühlen an Lippen, Zähnen und Mundschleimhaut führen.',
		},
	],
};

export const zahnaufhellung = {
	name: 'Zahnaufhellung / Bleaching',
	image: '/assets/images/behandlungen/zahn/zahnbleaching.webp',
	description:
		'Aufhellunngen bzw. Bleachings entfernen Verfärbungen der Zähne. Kaffee, Tee, Rotwein, Zigaretten und andere Genussmittel reduzieren das strahlende Weiß der Zähne. Der ganz natürlicher Alterungsprozess verschärft das Problem zusätzlich.',
	tabs: [
		{
			name: 'Detail',
			content:
				'Beim Bleaching wird der Zahnschmelz „gebleicht“, was ohne gesundheitliche Nebenwirkungen geschieht. Die Behandlung dauert etwa eine Stunde, sorgt dann aber bei zahnschonendem Verhalten für jahrelang glänzende Zähne.',
		},
		{
			name: 'Arten',
			content: (
				<ul>
					<li>
						<b>Home-Bleaching</b>
					</li>
					<li>
						<b>In-Office Bleaching</b>
					</li>
					<li>
						<b>Walking-Bleach-Technik</b>
					</li>
				</ul>
			),
		},
		{
			name: 'Kosten',
			content:
				'Die Kosten für ein Bleaching variieren stark in Bezug auf die jeweilige Behandlungsart. Ein professionelles Bleaching beim Zahnarzt kostet zwischen 100 und 500 Euro.',
		},
		{
			name: 'Risiken',
			content:
				'Eine Zahnaufhellung kann in gewissen Fällen zu einer erhöhten Zahnempfindlichkeit führen. In den meisten Fällen verschwindet die Zahnempfindlichkeit aber innerhalb weniger Tage von selbst.',
		},
	],
};
export const zahnkronen = {
	// TODO: Umschreiben / NEU
	name: 'Zahnkronen / Zirkonium',
	image: '/assets/images/behandlungen/zahn/zahnkronen.webp',
	description:
		'Zahnkronen sind eine gängige Methode, um fehlende oder verletzte Zähne zu ersetzen. Für das Einsetzen der Zahnkrone ist es erforderliche dass entweder ein Teil des ursprünglichen Zahns mit Zahwurzel vorhanden ist, andernfalls muss eine künstliche Zahnwurzel oder Stiftzahn implantiert werden.',
	tabs: [
		{
			name: 'Materialarten',
			content: 'Kunststoff / Vollkunststoff, Keramik / Vollkeramik, Metall, Vollgusskrone',
		},
		{
			name: 'Behandlung',
			content:
				'Die Kronenplatzierung erfolgt in mehreren Schritten. Zunächst überprüft der Zahnarzt die Funktion des Zahnnervs und die Stabilität der Wurzel. Im Rahmen der Voruntersuchung wird manchmal eine Röntgenaufnahme des betroffenen Zahnes angefertigt und ausgewertet. Um einen schiefen Zahn wiederherstellen zu können, muss der Zahn zunächst präpariert werden. Hierfür muss bis zu 60 % der teilgesunden Hartsubstanzen entsorgt werden.',
		},
	],
};

export const veneer = {
	name: 'Laminate Veneers',
	image: '/assets/images/behandlungen/zahn/veneers.webp',
	description:
		'Ein Veneer ist eine hauchdünne, durchscheinende Porzellanschale für Zähne, die mit einem Spezialkleber auf die Oberfläche der Zähne – insbesondere der Frontzähne – geklebt wird. Die Klebeabdeckung ist aus Keramik. Abgesehen von den seltenen Allergiefällen gegen das Fixativ ist die Verwendung von Veneers aus Keramik grundsätzlich gesundheitlich unbedenklich, da keramische Werkstoffe sehr gut biokompatibel sind.',
	tabs: [
		{
			name: 'Vorteile',
			content: (
				<ul>
					<li>Keramik Veneers sind sehr gut verträglich</li>
					<li>Plaque und Ablagerungen haften nicht</li>
					<li>Farbe ist dauerhaft stabil</li>
					<li>Ästtehik und Natürlichkeit</li>
					<li>Natürliches Aussehen</li>
					<li>Geringfügiger bzw. kein Abtrag der Zahnsubstanz</li>
				</ul>
			),
		},
		{
			name: 'Behandlung',
			content: (
				<ul>
					<li>Untersuchung, Beratung, Röntgenaufnahme</li>
					<li>Zahnvorbereitung / Zahnabdruck</li>
					<li>Modellkonstruktion</li>
					<li>Anpassung an Umgebungszähne</li>
					<li>Dauerhafte Befestigung des Veneers</li>
					<li>Überprüfung des Gebisses & evtl. Korrekturen</li>
				</ul>
			),
		},
	],
};
