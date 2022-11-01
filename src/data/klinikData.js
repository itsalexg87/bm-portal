// kliniken
import { dentaMedica } from './kliniken/01dentaMedica';
import { medousaClinique } from './kliniken/02medousaClinique';
import { terziler } from './kliniken/03terziler';

// testkliniken
import { estetikGreen } from './kliniken/test/01estetikGreen';
import { estetikPink } from './kliniken/test/02estetikPink';
import { estetikBlue } from './kliniken/test/03estetikBlue';
import { estetikYellow } from './kliniken/test/04estetikYellow';
import { estetikPurple } from './kliniken/test/05estetikPurple';
import { estetikGrey } from './kliniken/test/06estetikGrey';
import { estetikFace } from './kliniken/test/07estetikFace';

export const kliniken = [
	dentaMedica,
	medousaClinique,
	// terziler,

	// TODO: Testkliniken
	estetikGreen,
	estetikPink,
	estetikBlue,
	estetikYellow,
	estetikPurple,
	estetikGrey,
	estetikFace,
];
