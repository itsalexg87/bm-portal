import React from 'react';

//dep
import { SocialIcon } from 'react-social-icons';

//MUI
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

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

export default function OutlinedCard({ data }) {
	const classes = useStyles();

	return (
		<>
			<Card className={classes.root} variant='outlined'>
				<CardContent>
					<Typography variant='h5' component='h2' className={classes.titleStyle}>
						Social
					</Typography>
					{data.social.facebook ? (
						<SocialIcon
							url={`https://facebook.com/${data.social.facebook}`}
							target='_blank'
							style={{ width: '30px', height: '30px', marginRight: '5px' }}
						/>
					) : null}
					{data.social.instagram ? (
						<SocialIcon
							url={`https://instagram.com/${data.social.instagram}`}
							target='_blank'
							style={{ width: '30px', height: '30px', marginRight: '5px' }}
						/>
					) : null}
					{data.social.twitter ? (
						<SocialIcon
							url={`https://twitter.com/${data.social.twitter}`}
							target='_blank'
							style={{ width: '30px', height: '30px', marginRight: '5px' }}
						/>
					) : null}
					{data.social.youtube ? (
						<SocialIcon
							url={`https://youtube.com/channel/${data.social.youtube}`}
							target='_blank'
							style={{ width: '30px', height: '30px', marginRight: '5px' }}
						/>
					) : null}
					{data.social.linked ? (
						<SocialIcon
							url={`https://linkedin.com/in/${data.social.linked}`}
							target='_blank'
							style={{ width: '30px', height: '30px', marginRight: '5px' }}
						/>
					) : null}
				</CardContent>
			</Card>
		</>
	);
}
