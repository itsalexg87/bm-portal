import React from 'react';

const Hinweis = ({ name }) => {
	return (
		<p style={{ fontSize: '1rem', marginTop: '10px', padding: '10px' }}>
			Die hier aufgeführten Informationen zum Themebereiche <b>{name}</b> sind allgemein gehalten und
			stellen keine Beratung dar. Für nähere und detaillierte Informationen sowie eine kompetente
			Beratung und Angaben zur Preisgestaltung, wende dich bitte direkt an eine{' '}
			<a href='/#suchen' style={{ color: '#F50057' }}>
				Klinik deiner Wahl
			</a>
			.
		</p>
	);
};

export default Hinweis;
