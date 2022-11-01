import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
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
	titleStyle: {
		color: '#f50057',
		fontWeight: 'bold',
		marginBottom: '10px',
	},
	subtitleStyle: {
		color: '#f50057',
		fontWeight: 'bold',
	},
});

export default function OutlinedCard({ data }) {
	const classes = useStyles();

	return (
		<Card className={classes.root} variant='outlined'>
			<CardContent>
				<Typography
					variant='h5'
					component='h2'
					className={data.subtitle ? classes.subtitleStyle : classes.titleStyle}>
					{data.title}
				</Typography>
				{data.subtitle ? (
					<Typography variant='body1' style={{ fontWeight: 'bold' }} gutterBottom>
						{' '}
						{data.subtitle}{' '}
					</Typography>
				) : null}
				<Typography variant='body2' component='p'>
					{data.description}
				</Typography>
			</CardContent>
		</Card>
	);
}
