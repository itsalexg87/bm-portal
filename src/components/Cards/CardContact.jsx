import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { FaPhone, FaMailBulk, FaDesktop, FaCalendarCheck, FaWhatsapp } from 'react-icons/fa';
import { SocialIcon } from 'react-social-icons';

const useStyles = makeStyles(theme => ({
	root: {
		minWidth: 275,
	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)',
	},
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
	container: {
		display: 'flex',
		alignItems: 'flex-end',
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
			alignItems: 'flex-start',
		},
	},
	titleStyle: {
		color: '#f50057',
		fontWeight: 'bold',
		marginBottom: '10px',
	},
}));

const waText = 'Ich interessiere mich für Ihr Angebot';

export default function OutlinedCard({ data }) {
	const classes = useStyles();

	return (
		<>
			<Card className={classes.root} variant='outlined'>
				<CardContent>
					<Typography variant='h5' component='h2' className={classes.titleStyle}>
						Kontakt
					</Typography>
					<div className={classes.container}>
						<div style={{ flex: 1, marginBottom: '5px' }}>
							<Typography variant='body2' gutterBottom>
								<b>{data.title}</b>
								{data.subtitle === '' ? null : ` - ${data.subtitle}`}
								<br />
								{data.adresse}
							</Typography>
							<Typography variant='body2' gutterBottom>
								<FaPhone />
								&nbsp;&nbsp;<a href={`tel:${data.kontakt.telefon}`}>{data.kontakt.telefon}</a>
							</Typography>
							<Typography variant='body2' gutterBottom>
								<FaMailBulk />
								&nbsp;&nbsp;<a href={`mailto:${data.kontakt.email}`}>{data.kontakt.email}</a>
							</Typography>
							<Typography variant='body2' gutterBottom>
								<FaDesktop />
								&nbsp;&nbsp;
								<a href={data.kontakt.website} target='_blank'>
									{data.kontakt.website}
								</a>
							</Typography>
							{data.kontakt.appointment ? (
								<Typography variant='body2' gutterBottom>
									<FaCalendarCheck />
									&nbsp;&nbsp;
									<a href={data.kontakt.appointment} target='_blank'>
										Termin vereinbaren
									</a>
								</Typography>
							) : null}
							{data.kontakt.whatsapp ? (
								<>
									<Typography variant='body2'>
										<SocialIcon
											url={`https://api.whatsapp.com/send/?phone=${data.kontakt.whatsapp}`}
											target='_blank'
											style={{ width: '20px', height: '20px', marginBottom: '0px' }}
										/>
										&nbsp;&nbsp;
										<a href={`https://wa.me/${data.kontakt.whatsapp}?text=${waText}`} target='_blank'>
											Schreib uns auf WhatsApp
										</a>
									</Typography>
								</>
							) : null}
						</div>
					</div>
				</CardContent>
			</Card>
		</>
	);
}
