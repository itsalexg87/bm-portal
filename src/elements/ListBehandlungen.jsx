import React from 'react';

//MUI
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

//MUI Dropdown
import { createTheme } from '@mui/material/styles';

//json
import { kliniken } from '../data/klinikData';
import { Button, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const theme = createTheme({
	palette: {
		secondary: {
			light: '#ff7961',
			main: '#F50057',
			dark: '#ba000d',
			contrastText: '#000',
		},
	},
});

const useStyles = makeStyles(theme => ({
	root: {
		'& > *': {
			margin: theme.spacing(2),
			marginBottom: '20px',
		},
	},
	palette: {
		primary: {
			light: '#757ce8',
			main: '#F50057',
			dark: '#002884',
			contrastText: '#fff',
		},
	},
	kliniken: {
		width: '100%',
		display: 'flex',
		flexWrap: 'wrap',
		flexDirection: 'row',
		justifyContent: 'center',
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
			flexWrap: 'wrap',
		},
	},
	leistungen: {
		marginTop: '10px',
		[theme.breakpoints.up('md')]: {
			display: 'flex',
			flexWrap: 'wrap',
			justifyContent: 'center',
		},
	},
	card: {
		margin: theme.spacing(1),
		[theme.breakpoints.up('md')]: {
			maxWidth: '230px',
		},
	},
	media: {
		width: 230,
		height: 230,
		objectFit: 'cover',
		[theme.breakpoints.down('sm')]: {
			maxWidth: '75px',
			maxHeight: '75px',
		},
		[theme.breakpoints.up('md')]: {
			alignSelf: 'center',
		},
	},
	actionArea: {
		display: 'flex',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		[theme.breakpoints.up('md')]: {
			flexDirection: 'column',
		},
	},
	button: {
		color: '#f50057',
		margin: theme.spacing(0.5),
		borderRadius: '0',
		textTransform: 'none', //text
		'&:active': {
			backgroundColor: '#f50057',
			color: '#ffffff',
		},
		[theme.breakpoints.down('sm')]: {
			width: '45%',
			margin: theme.spacing(0.3),
		},
	},
	buttonActive: {
		color: '#ffffff',
		backgroundColor: '#F50057',
		margin: theme.spacing(0.5),
		borderRadius: '0',
		textTransform: 'none', //text
		'&:active': {
			backgroundColor: '#ffffff',
			color: '#f50057',
		},
		[theme.breakpoints.down('sm')]: {
			width: '45%',
			margin: theme.spacing(0.3),
		},
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
}));

const behandlungen = [
	{
		name: 'Zahnästhetik',
		image: '/assets/images/behandlungen/zahnaesthetik.webp',
		link: 'zahnaesthetik',
	},
	{
		name: 'Haarästhetik',
		image: '/assets/images/behandlungen/haaraesthetik.webp',
		link: 'haaraesthetik',
	},
	{
		name: 'Brustästhetik',
		image: '/assets/images/behandlungen/brustaesthetik.webp',
		link: 'brustaesthetik',
	},
	{
		name: 'Körperästhetik',
		image: '/assets/images/behandlungen/koerperaesthetik.webp',
		link: 'koerperaesthetik',
	},
	{
		name: 'Gesichtsästhetik',
		image: '/assets/images/behandlungen/gesichtsaesthetik.webp',
		link: 'gesichtsaesthetik',
	},
	{
		name: 'Nasenästhetik',
		image: '/assets/images/behandlungen/nasenaesthetik.webp',
		link: 'nasenaesthetik',
	},
	{
		name: 'Butt Lifting',
		image: '/assets/images/behandlungen/buttlifting.webp',
		link: 'buttlifting',
	},
	{
		name: 'Augenästhetik',
		image: '/assets/images/behandlungen/augenaesthetik.webp',
		link: 'augenaesthetik',
	},
	// {
	// 	name: 'Anti Aging',
	// 	image:
	// 		'https://images.pexels.com/photos/2050994/pexels-photo-2050994.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
	// 	link: 'antiaging',
	// },
	{
		name: 'Magenchirurgie',
		image: '/assets/images/behandlungen/magenchirurgie.webp',
		link: 'magenchirurgie',
	},
	{
		name: 'Intimchirurgie',
		image: '/assets/images/behandlungen/intimchirurgie.webp',
		link: 'intimchirurgie',
	},
];

const ListBehandlungen = () => {
	const classes = useStyles();
	return (
		<div className={classes.kliniken}>
			{behandlungen.map(b => (
				<Link to={`/behandlungen/${b.link}`}>
					<Card className={classes.card}>
						<CardActionArea className={classes.actionArea}>
							<CardMedia className={classes.media} image={b.image} title={b.name} />
							<CardContent>
								<Typography variant='h6' component='h2' style={{ color: '#f50057', fontWeight: 'bold' }}>
									{b.name}
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
				</Link>
			))}
		</div>
	);
};

export default ListBehandlungen;
