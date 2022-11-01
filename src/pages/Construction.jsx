import React from 'react';
import bgImage from '../assets/images/bg/bg-image-1.jpg';

const Construction = () => {
	return (
		<div
			style={{
				backgroundImage: `url(${bgImage})`,
				width: '100vw',
				height: '100vh',
			}}>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					height: '100%',
					color: 'white',
				}}>
				<div>
					<h3 style={{ color: 'white' }}>Unsere Webseite befindet sich gerade im Umbau</h3>
				</div>
				<div>Bitte haben Sie ein wenig Geduld</div>
			</div>
		</div>
	);
};

export default Construction;
