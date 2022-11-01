import React, { useState } from 'react';

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
		maxWidth: '350px',
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
		height: '100%', // TODO: Geändert?!
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

// dropdown
const names = [
	'Zahnästhetik',
	'Haarästhetik',
	'Brustästhetik',
	'Körperästhetik',
	'Gesichtsästhetik',
	'Nasenästhetik',
	'Butt Lifting',
	'Augenästhetik',
	// 'Anti Aging',
	'Magenchirurgie',
	'Intimchirurgie',
];

const ITEM_HEIGHT = 50;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 250,
		},
	},
};

// random 1
// const randomKliniken = kliniken.sort((a, b) => 0.5 - Math.random());

const Kliniken = () => {
	const classes = useStyles();
	const [isActive, setActive] = useState([]);

	// dropdown
	// const [personName, setPersonName] = React.useState([]);

	// random 2
	// const filterKliniken = randomKliniken.filter(k => {
	// 	if (isActive.length !== 0) {
	// 		return k.leistungenL.find(e => isActive.includes(e));
	// 	} else {
	// 		return randomKliniken;
	// 	}
	// });

	//normal
	const filterKliniken = kliniken.filter(k => {
		if (isActive.length !== 0) {
			return k.leistungenL.find(e => isActive.includes(e));
		} else {
			return kliniken;
		}
	});

	// dropdown
	// const handleChange = event => {
	// 	const {
	// 		target: { value },
	// 	} = event;
	// 	setPersonName(
	// 		// On autofill we get a stringified value.
	// 		typeof value === 'string' ? value.split(',') : value
	// 	);
	// };

	return (
		<>
			<div className='service-area creative-service-wrapper pt--50 pb--120 bg_color--5'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-12'>
							<div className='section-title text-center mb--30'>
								<div className={classes.root}>
									{/* {buttons.map(b => (
										<Button
											className={isActive.includes(b.title) ? classes.buttonActive : classes.button}
											variant={isActive.includes(b.title) ? 'contained' : 'outlined'}
											borderRadius='0px'
											onClick={() =>
												!isActive.includes(b.title)
													? setActive(isActive => [...isActive, b.title])
													: setActive(isActive.filter(f => f !== b.title))
											}>
											{b.title}
										</Button>
									))}
								</div> */}
									<Typography variant='body1'>
										Einfach mit dem Klick auf mindestens einen Button deine Fachkliniken suchen
									</Typography>
									{names.map(n => (
										<Button
											className={isActive.includes(n) ? classes.buttonActive : classes.button}
											variant={isActive.includes(n) ? 'contained' : 'outlined'}
											borderRadius='0'
											size='small'
											onClick={() =>
												!isActive.includes(n)
													? setActive(isActive => [...isActive, n])
													: setActive(isActive.filter(f => f !== n))
											}>
											{n}
										</Button>
									))}
								</div>
								{/* Dropdown */}
								{/* <ThemeProvider theme={theme}>
									<div className={classes.root}>
										<FormControl sx={{ m: 1, width: '80%', margin: 'auto' }}>
											<InputLabel id='demo-multiple-checkbox-label' style={{ color: '#f50057' }}>
												Behandlungen auswählen
											</InputLabel>
											<Select
												labelId='demo-multiple-checkbox-label'
												id='demo-multiple-checkbox'
												multiple
												value={personName}
												onChange={handleChange}
												input={<OutlinedInput label='Behandlungen auswählen' color='secondary' />}
												renderValue={selected => selected.join(', ')}
												// variant='standard'
												MenuProps={MenuProps}>
												{names.map(name => (
													<MenuItem key={name} value={name} style={{ color: '#f50057' }}>
														<Checkbox checked={personName.indexOf(name) > -1} style={{ color: '#f50057' }} />
														<ListItemText primary={name} />
													</MenuItem>
												))}
											</Select>
										</FormControl>
									</div>
								</ThemeProvider> */}
								{/* Dropdown */}
								{filterKliniken.length === 0 ? null : filterKliniken.length === 1 ? (
									<Typography variant='body1' style={{ margin: '10px 0' }}>
										<b>{filterKliniken.length}</b> Klinik entspricht deinen Kriterien
									</Typography>
								) : (
									<Typography variant='body1' style={{ margin: '10px 0' }}>
										<b>{filterKliniken.length}</b> Kliniken entsprechen deinen Kriterien
									</Typography>
								)}
								<Typography style={{ fontSize: '0.8rem' }}>
									Informiere dich{' '}
									<a style={{ color: '#f50057' }} href='/behandlungen'>
										hier
									</a>{' '}
									über die verschiedenen Behandlungsmethoden
								</Typography>
							</div>
						</div>
					</div>
					<div className={classes.kliniken}>
						{filterKliniken.length === 0 ? (
							<div style={{ textAlign: 'center', margin: 'auto', height: '10vh' }}>
								<p>Leider gibt es keine Ergebnisse, die deinen Suchkriterien entsprechen</p>
								<Button color='secondary' size='medium' onClick={() => setActive([])}>
									Suche zurücksetzen
								</Button>
							</div>
						) : (
							filterKliniken.map((k, index) => (
								<Card className={classes.card} key={index}>
									<CardActionArea className={classes.actionArea} href={`/klinik/${k.id}`}>
										<CardMedia
											className={classes.media}
											image={k.logo}
											title={k.logoAlt}
											aria-label={k.logoAlt}
										/>
										<CardContent>
											<Typography variant='h6' component='h2'>
												{k.title}
											</Typography>
											<Typography variant='subtitle2' component='h2' gutterBottom>
												{k.subtitle}
											</Typography>
											<Typography gutterBottom variant='body2'>
												{k.adresse}
											</Typography>
											<div className={classes.leistungen}>
												{k.leistungenL.map((k, i) => (
													<Chip
														label={k}
														style={{
															marginRight: '5px',
															marginTop: '5px',
															backgroundColor: '#F50057',
															color: 'white',
															fontWeight: 'bold',
															borderRadius: '0',
															width: '100%',
														}}
														key={i}
													/>
												))}
											</div>
										</CardContent>
									</CardActionArea>
								</Card>
							))
						)}
					</div>
				</div>
			</div>
			{/* End Service Area */}
		</>
	);
};

export default Kliniken;
