import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import ImageGallery from 'react-image-gallery';

const useStyles = makeStyles(theme => ({
	root: {
		minWidth: 275,
		paddingBottom: '0px!important',
	},
	titleStyle: {
		color: '#f50057',
		fontWeight: 'bold',
		marginBottom: '10px',
	},
}));

const CardsImageList = ({ data }) => {
	const classes = useStyles();
	const [state, setState] = React.useState({
		playButton: false,
		fullScreenButton: false,
		fullScreen: false,
		lazy: true,
	});

	return (
		<Card className={classes.root} variant='outlined'>
			<CardContent>
				{/* <Typography variant='h5' component='h2' className={classes.titleStyle}>
					Bilder
				</Typography> */}
				<div>
					<ImageGallery
						showPlayButton={state.playButton}
						items={data.images}
						lazyLoad={state.lazy}
						useBrowserFullscreen={state.fullScreen}
						showFullscreenButton={state.fullScreenButton}
					/>
				</div>
			</CardContent>
		</Card>
	);
};

export default CardsImageList;
