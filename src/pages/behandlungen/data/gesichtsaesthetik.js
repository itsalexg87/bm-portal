export const gesichtschirurgie = {
	// TODO: Umschreiben
	name: 'Ästhetische Gesichtschirurgie',
	image: '',
	description: (
		<>
			<p>
				Die ästhetische Gesichtschirurgie beschreibt die operative Veränderung der Gesichtsstruktur,
				ohne dass eine medizinische Indikation dafür vorliegt. Die Motivation liegt in der Anpassung des
				Körpers an Schönheitsvorstellungen und –ideale:
			</p>
			<ul>
				<li>Lidkorrektur</li>
				<li>Ohren anlegen</li>
				<li>Facelifting</li>
				{/* <li>Faltenbehandlung</li> */}
				<li>Stirnlifting</li>
			</ul>
		</>
	),
};

export const lidkorrektur = {
	name: 'Lidkorrektur',
	image: '/assets/images/behandlungen/gesicht/lidkorrektur.webp',
	description:
		'Bei der Lidkorrektur unterscheidet man zwischen ästethischer und medizinischer Lidkorrektur. Im Rahmen der medizinischen Korrektur werden gesundheitliche Beeinträchtigungen behandelt, beim ästhetischen Ansatz wird auf das Erreichen eines erwünschten Schönheitsbildes abgezielt. Eingriffe im Bereich der Lidkorrektur können sowohl am Unter- als auch am Oberlid durchgeführt werden.',
	tabs: [
		{
			name: 'Ästhethische Lidkorrektur',
			content:
				'Im Bereich der ästhetischen Lidkorrektur stellt das Schlupflid (Oberlid) den beliebtesten Eingriff dar. Das Schlupflid beeinträchtigt oft den Gesichtsausdruck und kann als müde oder gelangweilt gedeutet werden. Hierbei wird ein Schnitt in der Lidfalte gesetzt und überschüssige Haut und Fettgewebe entfernt. Der Eingriff selbst dauert ca. 1 Stunde und wird in der Regel mithilfe von lokaler Betäubung durchgeführt. Das Entfernen von Tränensäcken und Krähenfüßen machen am Unterlid die beliebtesten Eingriffe aus. Dies wird durch eine Hautstraffung am Unterlids erreicht. Auch diese Eingriffe dauern ca. 1 Stunde und werden unter lokaler Betäubung durchgeführt. Selbstverständlich besteht auch die Möglichkeit verschiedene Eingriffe zu kombinieren.',
		},
		{
			name: 'Medizinische Lidkorrektur',
			content: (
				<>
					<p>
						Im Gegensatzu zur ästethischen stehen bei der medizinischen Lidkorrektur gesundheitliche
						Aspekte im Vordergrund. Die häufigsten behandelten Krankheiten sind hierbei:
					</p>
					<ul>
						<li>Einwärtsdrehung des Augenlids (Entropium)</li>
						<li>Auswärtsdrehung des Augenlids (Ektropium)</li>
					</ul>
				</>
			),
		},
		{
			name: 'Kosten',
			content:
				'Die Kosten für ein Lidkorrektur hängen vom jeweiligen Einzelfall, der Methodik und dem Aufwand ab. Für nähere Informationen, kontaktiere gerne direkt den Arzt Deiner Wahl in der Türkei.',
		},
	],
};

export const ohrenkorrektur = {
	name: 'Ohrenkorrektur / Ohren anlegen',
	image: '/assets/images/behandlungen/gesicht/ohrenkorrektur.webp',
	description:
		'Bei einer Ohrenkorrektur werden abstehende Ohren an den Kopf angelegt. In Abhängigkeit der Ausprägung bzw. wie weit die Ohren abstehen können vreschiedene Methoden gewählt werden.',
	tabs: [
		{
			name: 'Methoden',
			content: (
				<ul>
					<li>
						<b>Klassische Methode</b>
						<p>
							Die klassiche Methode zeichnet sich dadurch aus, dass hierbei der Ohrknorpel modelliert wird
							und im Anschluss an gewünschter Position am Kopf angenäht wird. Über einen Schnitt an der
							Ohrmuschel wird er zur Bearbeitung freigelegt und kann somit genau im optimalen Winkel
							angebracht werden.
						</p>
					</li>
					<li>
						<b>EarFold Methode</b>
						<p>
							Im Gegensatz zur klassischen Methode werden beim Earfold Implantate in der Ohrmuschel
							angebracht, was ein präzises Ergebnis bereits vor der Operation im Rahmen einer Simulation
							veranschaulichen lässt. Zusätzlich können mit dieser Methode auch Asymmetrien behandelt
							werden. Durch einen minimalen Einschnitt am Ohr entstehen keine sichtbaren Narben und
							zusätzlich können die Implantate relativ einfach neu positiniert oder ausgetauscht werden.
						</p>
					</li>
				</ul>
			),
		},
		{
			name: 'Kosten',
			content:
				'Die Kosten für ein Ohrenkorrektur hängen vom jeweiligen Einzelfall, der Methodik und dem Aufwand ab. Für nähere Informationen, kontaktiere gerne direkt den Arzt Deiner Wahl in Istanbul.',
		},
		{
			name: 'Risiken',
			content:
				'Jeder Operation trägt ein gewisses Risiko in sich, auch wenn die Ohrenkorrektur einen häufig durchgeführten und einfachen Eingriff darstellt. Gerade bei Kindern ist es unerlässlich abzuwarten, inwieweit sich die Form und Lage der Ohren über den Wachstumsprozess entwickelt.',
		},
	],
};

export const facelifting = {
	name: 'Facelifting',
	image: '/assets/images/behandlungen/gesicht/facelifting.webp',
	description:
		'Bei einem Facelifting oder Gesichtsstraffung wird, wie der Name verrät, die Gesichtshaut gestrafft um eine glatte und straffe Haut zu erhalten.',
	tabs: [
		{
			name: 'Methoden',
			content: (
				<ul>
					<li>
						<b>SMAS (Superficial Muscular Aponeurosis System)</b>
						<p>
							Bei dieser Methode wird das SMAS, welches eine Verbindungsschicht zwischen der Gesichtshaut
							und den Gesichtsmuskeln darstellt, gestrafft. Dies führt zu langanhaltenden Ergebnissesn,
							indem die Schicht mithilfe verschiedener Techniken reduziert, erweitert, neu positiniert und
							strafft.
						</p>
					</li>
					<li>
						<b>Liquid-Lifting</b>
						<p>
							Das Liquid-Lifting zeichnet sich dadurch aus, dass eine Flüssigkeit (bspw. Hyaluronsäure,
							Eigenfett, Botox oder Kolagen) in die Haut gespritzt wird, um Falten bzw. verlorenes Volumen
							aufzufüllen. Das Ergebnis hierbei ist im Gegensatz zu anderen Methoden nicht dauerhaft, da
							sich die injizierten Stoffe wieder zurückbilden.
						</p>
					</li>
					<li>
						<b>Faden-Lifting</b>
						<p>
							Beim Fadenlifting werden bestimmte Fäden (Polydioxanon-Fäden) unter der Haut eingesetzt,
							welche dafür sorgen, dass Falten geglättet werden. Hierbei kommt es zu keinen Schnitten. Die
							Fäden selbst werden mithilfe von Microneedeling platziert. Zwar lösen sich die Fäden mit der
							Zeit auf, sollen aber wiederum die Zellregeneration des eigenen Körpers fördern. Dieses
							Verfahren liefert Ergebnisse, die bis zu 1,5 Jahren anhalten.
						</p>
					</li>
				</ul>
			),
		},
		{
			name: 'Kosten',
			content:
				'Die Kosten für ein Facelifting hängen vom jeweiligen Einzelfall, der gewählten Methodik und dem Aufwand ab. Für nähere Informationen, kontaktiere gerne direkt den Arzt Deiner Wahl in der Türkei.',
		},
		{
			name: 'Risiken',
			content:
				'Genrell können bei einem Facelifting Komplikationen in Form von Asymmetrien im Gesicht, Schwellungen, Blutungen oder Infektionen auftreten. Aus diesem Grund ist es essenziell im Vorfeld mit dem Arzt genau zu besprechen, welche Risiken der Eingriff in sich birgt, um die nachfolgenden Komplikationen so gut wie möglich ausschließen zu können.',
		},
	],
};

export const stirnlifting = {
	name: 'Stirnlifting',
	image: '/assets/images/behandlungen/gesicht/stirnlifting.webp',
	description:
		'Beim Stirnlifting werden mithilfe von minimalen Einschnitten die Augenbrauen geliftet und die Stirn gestrafft. Hintergrund hierbei ist eine Verjüngung des Gesichts zu erreichen ohne den Gesichtsausdruck selbst maßgeblich zu beeinträchtigen.',
	tabs: [
		{
			name: 'Ablauf',
			content:
				'Das Stirnlifting erfolgt über kleine Einschnitte im Bereich des Haaransatzes. Hierbei werden in erster Linie die Faltenursachen behandelt, um für ein langanhaltendes Ergebnis zu sorgen. Die Haut und Augenbrauenpartie werden gestrafft und Gesichtsmuskeln, die für die Faltenbildung ausschlaggebend sind werden entfernt bzw. abgeschwächt. Es besteht selbstverständlich auch die Möglichkeit diesen Eingriff mit anderen, wie beispielsweise einem Facelifting zu kombinieren. Sprich am besten direkt mit einem Arzt deiner Wahl in der Türkei über dein Anliegen sowie deine Vorstellungen und lasse dich kompetent beraten.',
		},
		{
			name: 'Kosten',
			content:
				'Die Kosten für ein Facelifting hängen vom jeweiligen Einzelfall, dem Aufwand und möglichen Komibinationen mit anderen Eingriffen ab. Für nähere Informationen, kontaktiere gerne direkt den Arzt Deiner Wahl in Istanbul.',
		},
	],
};

export const faltenbehandlung = {
	name: 'Faltenbehandlung',
	image: '/assets/images/behandlungen/gesicht/stirnlifting.webp',
	description:
		'Eine ganze Reihe unterschiedlicher Verfahren steht bei der Behandlung der Falten zur Verfügung. Das Spektrum reicht von Anti-Aging Cremes über die Unterspritzung von Falten bis hin zur Gesichtsstraffung. Spezialisiert auf Faltenbehandlungen sind Dermatologen und Plastische und Ästhethische Chirurgen.',
	tabs: [
		{
			name: 'Methoden',
			content: (
				<>
					<ul>
						<li>
							<b>Faltenbehandlung mit Botox (Botulinumtoxin)</b>
							<p>
								Botox ist das bekannteste Mittel zur Glättung der Falten. Das Botulinumtoxin ist ein von
								Botulinumbakterien produziertes Nervengift. Dieses findet in einer stark verdünnten und
								gereinigten Form eine breite Anwendung in der Medizin. Die Wirkungsweise vom Botox beruht
								auf der festen Verbindung der Gesichtsmuskulatur mit der Haut. Das Mittel wird gezielt in
								die mimische Muskulatur gespritzt und bewirkt eine Hemmung der Signalübergabe vom Nerv zum
								Muskel . Der Muskel wird gelähmt. Dadurch entspannt sich die darüber liegende Gesichtshaut ,
								was zur Glättung der Falten führt. Auch die Ausbildung der neuen Falten wird auf diese Weise
								verhindert. Andere Funktionen der Haut, wie z. B. der Tastsinn, bleiben von der Botoxwirkung
								unbeeinträchtigt. Die Behandlung mit Botox zählt zu den häufigsten und risikoärmsten
								Faltenbehandlungen in der ästhetischen Medizin . Die Komplikationen treten in sehr seltenen
								Fällen auf. Die Wirkung hält in der Regel vier bis sechs Monate an.
							</p>
						</li>
						<li>
							<b>Auffüllung der Falten mit Füllstoffen (Filler)</b>
							<p>
								Nicht mimische Falten, also Falten, die nicht durch die Aktivität der mimischen Muskulatur
								entstanden sind, werden mit Hilfe unterschiedlicher Filler (Füllstoffe) behandelt. Dabei
								werden die Falten, also die eingesunkenen Hautpartien aufgefüllt und die Haut dadurch
								geglättet. Man unterscheidet zwischen körpereigenen und körperfremden Füllstoffen.
							</p>
						</li>
						<li>
							<b>Faltenbehandlung mit Hyaluronsäure</b>
							<p>
								Die Hyaluronsäure ist eine natürlich im Körper vorkommende Substanz . Sie ist der wichtigste
								Feuchtigkeitsspeicher der Haut. Auch an der Kollagenbildung ist die Hyaluronsäure beteiligt.
								Sie sorgt für die Elastizität der Haut und verleiht der Haut ihr Volumen . Mit dem Alter
								nimmt der Hyaluronsäuregehalt der Haut jedoch stark ab. Dieser Prozess begünstigt die
								Ausbildung der Falten. Somit eignet sich die Hyaluronsäure besonderes gut zur Behandlung der
								Falten. In der ästhetischen Medizin wendet man die Hyaluronsäure in Form von Gels an. Diese
								gibt es in verschiedenen Dichten, die bei unterschiedlich ausgeprägten Falten angewendet
								werden. Die Hyaluronsäure wird mit einer sehr dünnen Nadel unter die Falte gespritzt und
								füllt diese von unten auf. Die Falte wird angehoben, ihre Tiefe verringert sich. Die Haut
								wird auf diese Weise geglättet. Das gesamte Hautbild wirkt frischer und junger. Im Laufe der
								Zeit wird die Hyaluronsäure, wie jede körpereigene Substanz, von unserem Körper abgebaut. Um
								einen langfristigen Effekt zu erreichen, kann die Behandlung in regelmäßigen Zeitabständen
								wiederholt werden , diese sind je nach verwendetem Präparat für jeden Patient individuell.
							</p>
						</li>
						<li>
							<b>Faltenbehandlung mit Kollagen</b>
							<p>
								Kollagen ist ein natürlich im Körper vorkommendes Protein, das neben der Hyaluronsäure am
								häufigsten zur Faltenunterspritzung genutzt wird. Das verwendete Kollagen wird meistens aus
								der Rinderhaut hergestellt und wird ähnlich wie die Hyaluronsäure in verschiedenen Dichten
								angeboten. Das Kollagen wird unter die Falte gespritzt, wodurch die Falte angehoben und die
								Haut geglättet wird. Je nach Beschaffung des Kollagenfillers wird es in der Regel nach vier
								bis neun Monaten abgebaut. Da es sich um ein tierisches Protein handelt, das meist aus
								Häuten und Sehnen von Rindern hergestellt wird, wird Kollagen seit dem BSE-Skandal in Europa
								kaum noch verwendet. Darüber hinaus kann es bei manchen Patienten zu einer allergischen
								Reaktion führen. Aus diesem Grunde ist vor der Behandlung mit Kollagen ein
								Verträglichkeitstest erforderlich.
							</p>
						</li>
						<li>
							<b>Faltenbehandlung mit Eigenfett</b>
							<p>
								Ein weiteres Verfahren zur Faltenminimierung stellt die Unterspritzung mit Eigenfett dar.
								Dabei wird das Fett aus den Regionen mit Fettüberschuss, wie Bauch oder Hüften, entnommen
								und zur Behandlung im Gesicht verwendet. Das Fett wird aus der Spenderregion mit einer
								Spezialkanüle entnommen und anschließend gereinigt und aufbereitet. Danach wird es ähnlich
								wie andere Filler in die Problembereiche injiziert. Die Unterspritzung mit Eigenfett eignet
								sich zur Behandlung von eingesunkenen Wangen, Nasolabial- (Falten zwischen der Nase und
								Mundwinkel) und Stirnfalten. Da das Fett vom unseren Körper resorbiert wird, ist eine
								weitere Behandlung nach einigen Monaten zu empfehlen.
							</p>
						</li>
						<li>
							<b>Calcium-Hydroxylapatit (Radiesse)</b>
							<p>
								Diese Substanz zur Faltenbehandlung ist im Unterschied zu den übrigen Stoffen körperfremd.
								Das heißt, sie wird in dieser Form vom menschlichen Organismus nicht gebildet.
								Calcium-Hydroxylapatit (Handelsname Radiesse) ist eine naturidentische, biologisch abbaubare
								Substanz. Sie stellt eine neue Art der Faltenfiller dar. Der Stoff besitzt eine
								zahnpastaähnliche Konsistenz und eine weiße Farbe. Radiesse unterscheidet sich von den
								übrigen Füllmaterialien durch eine deutlich längere Haltbarkeit. Diese liegt zwischen acht
								und zwölf Monaten. Außerdem zeigt dieser Filler einen sehr guten Füllungseffekt. Aufgrund
								der Farbe muss Calcium-Hydroxylapatit tiefer als andere Füllstoffe implantiert werden und
								eignet sich somit besonderes gut für tiefe Falten. Aufgrund seiner Beschaffenheit ist das
								Material unmittelbar nach der Behandlung unter der Haut spürbar. Dieser Effekt vergeht
								jedoch nach wenigen Tagen wieder.
							</p>
						</li>
					</ul>
				</>
			),
		},
	],
};
