import React from 'react';

//mui
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

//data
import { behandlungen } from '../data/behandlungen';

const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
	},
	background: {
		// backgroundColor: '#f9f9f9',
		backgroundColor: '#F50057',
	},
	heading: {
		fontSize: theme.typography.pxToRem(15),
		color: 'white',
		fontWeight: 'bold',
		flexBasis: '33.33%',
		flexShrink: 0,
	},
	headingEx: {
		fontSize: theme.typography.pxToRem(15),
		fontWeight: 'bold',
		color: '#f50057',
		flexBasis: '33.33%',
		flexShrink: 0,
	},
	secondaryHeading: {
		fontSize: theme.typography.pxToRem(15),
		color: theme.palette.text.secondary,
	},
	description: {
		p: {
			fontSize: '8px',
		},
	},
}));

export default function EingriffListHome() {
	const classes = useStyles();
	const [expanded, setExpanded] = React.useState(false);

	const handleChange = panel => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	return (
		<div className={classes.root}>
			{behandlungen.map(val => (
				<Accordion expanded={expanded === val.panel} onChange={handleChange(val.panel)}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
						className={classes.background}
						aria-controls={`${val.panel}bh-content`}
						id={`${val.panel}bh-header`}>
						<Typography className={classes.heading}>{val.title}</Typography>
						{/* <Typography className={classes.secondaryHeading}>{val.icon}</Typography> */}
					</AccordionSummary>
					<AccordionDetails style={{ marginLeft: '15px' }}>
						<Typography className={classes.description}>{val.description}</Typography>
					</AccordionDetails>
				</Accordion>
			))}
		</div>
	);
}
