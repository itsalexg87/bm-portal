import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { behandlungen } from '../../data/behandlungen';

const useStyles = makeStyles({
	root: {
		minWidth: 275,
		paddingBottom: '0px!important',
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
});

export default function OutlinedCard({ data }) {
	const classes = useStyles();
	// console.log(data.behandlungen.length - 1);

	return (
		<Card className={classes.root} variant='outlined'>
			<CardContent>
				<Typography variant='h5' component='h2' className={classes.titleStyle}>
					Behandlungen
				</Typography>
				{data.behandlungen.map((b, index) => (
					<div className={classes.behandlung}>
						<Typography variant='h6'>{b.name}</Typography>
						<Typography
							variant='body2'
							style={
								index === data.behandlungen.length - 1 ? { marginBottom: '0px' } : { marginBottom: '15px' }
							}>
							{b.description}
						</Typography>
					</div>
				))}
			</CardContent>
		</Card>
	);
}
