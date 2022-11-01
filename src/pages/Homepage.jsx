import React, { useEffect } from 'react';

//dep
import ScrollToTop from 'react-scroll-to-top';
import { FiChevronUp } from 'react-icons/fi';

//meta
import { homepage } from '../data/metaData';

//components
import Helmet from '../components/Helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';

//elements
import Kliniken from '../elements/Kliniken';
import BreadcrumbHome from '../components/BreadcrumbHome';

// Dialog
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { makeStyles } from '@material-ui/core';

const mscBild = '/assets/images/msc-bild.png';

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
	button: {
		color: '#f50057',
		borderRadius: '0',
		'&:active': {
			backgroundColor: '#f50057',
			color: '#ffffff',
		},
		[theme.breakpoints.down('sm')]: {
			width: '45%',
			margin: theme.spacing(0.3),
		},
	},
}));

export default function Homepage(kliniken) {
	const [open, setOpen] = React.useState(false);
	const classes = useStyles();

	// useEffect(() => {
	// 	const timer = setTimeout(() => {
	// 		setOpen(true);
	// 		console.log('Open');
	// 	}, 10000);
	// 	return () => clearTimeout(timer);
	// }, []);

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<>
			<Helmet pageTitle={homepage.title} pageDescription={homepage.description} />
			{/* TODO: Geändert */}
			{/* <ParallaxProvider>
				<Header logo='light' /> */}
			{/* Header Home */}
			{/* <div className='slider-activation slider-creative-agency'>
					<SliderHome />
				</div>
			</ParallaxProvider> */}
			<Header />

			<BreadcrumbHome />

			{/* Dialog */}
			<div>
				{/* <Button variant='outlined' onClick={handleClickOpen}>
					Open responsive dialog
				</Button> */}
				<Dialog
					// fullScreen={fullScreen}
					open={open}
					onClose={handleClose}
					aria-labelledby='responsive-dialog-title'>
					<DialogTitle id='responsive-dialog-title'>{'MSC Klinik - Ihr Partner in BW'}</DialogTitle>
					<DialogContent>
						<DialogContentText>Jetzt Kontakt mit der MSC Klinik aufnehmen</DialogContentText>
						<a href='https://www.meine-schoenheitschirurgie.de/' target='_blank'>
							<img src={mscBild} alt='MSC Kliniken - Meine Schönheitschirurgie' />
						</a>
					</DialogContent>
					<DialogActions>
						<Button className={classes.button} onClick={handleClose}>
							Schließen
						</Button>
					</DialogActions>
				</Dialog>
			</div>
			{/* Dialog End */}

			{/* Klinikübersicht */}
			<div id='suchen'>
				<Kliniken kliniken={kliniken} />
			</div>

			<Footer />

			{/* Back to Top */}
			<div className='backto-top'>
				<ScrollToTop smooth component={<FiChevronUp />}></ScrollToTop>
			</div>
		</>
	);
}
