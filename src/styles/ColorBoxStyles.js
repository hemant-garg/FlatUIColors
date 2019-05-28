import chroma from 'chroma-js';
import sizes from './mediaSizes';

export default {
	colorBox: {
		width: '20%',
		height: (props) => (props.showingFullPalette ? '25%' : '50%'),
		margin: '0 auto',
		display: 'inline-block',
		position: 'relative',
		cursor: 'pointer',
		marginBottom: '-4px',
		'&:hover button': {
			opacity: 1
		},
		[sizes.down('lg')]: {
			width: '25%',
			height: (props) => (props.showingFullPalette ? '20%' : '33.3333%')
		}
	},
	boxContent: {
		position: 'absolute',
		width: '100%',
		left: '0',
		bottom: '0',
		padding: '10px',
		letterSpacing: '1px',
		textTransform: 'uppercase',
		fontSize: '13px'
	},
	copyText: {
		color: (props) => (chroma(props.background).luminance() >= 0.7 ? 'black' : 'white')
	},
	colorName: {
		fontWeight: 'bolder',
		color: (props) => (chroma(props.background).luminance() >= 0.7 ? 'rgba(0,0,0,.8)' : 'rgba(255, 255, 255, .8)'),
		[sizes.down('sm')]: {
			display: 'none'
		}
	},
	seeMore: {
		color: (props) => (chroma(props.background).luminance() >= 0.7 ? 'rgba(0,0,0,.8)' : 'rgba(255, 255, 255, .8)'),
		// background: 'rgba(255, 255, 255, .3)',
		opacity: 0,
		position: 'absolute',
		textDecoration: 'underline',
		letterSpacing: '1px',
		border: 'none',
		right: '8px',
		// visibility: 'hidden',
		borderRadius: '3px',
		bottom: '5px',
		width: '60px',
		height: '30px',
		textAlign: 'center',
		lineHeight: '30px',
		textTransform: 'uppercase',
		fontSize: '12px'
	},
	copyButton: {
		color: (props) => (chroma(props.background).luminance() >= 0.7 ? 'black' : 'white'),
		width: '100px',
		height: '40px',
		borderRadius: '5px',
		transition: 'all .3s ease',
		position: 'absolute',
		display: 'inline-block',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		textAlign: 'center',
		outline: 'none',
		background: 'rgba(255, 255, 255, .3)',
		fontSize: '1rem',
		lineHeight: '30px',
		opacity: 0,
		textTransform: 'uppercase',
		textDecoration: 'none',
		border: 'none'
	},
	copyOverlay: {
		opacity: '0',
		zIndex: '0',
		width: '50px',
		height: '50px',
		borderRadius: '50%',
		transition: 'transform .6s ease-in-out'
	},
	showOverlay: {
		opacity: '1',
		zIndex: '50',
		position: 'absolute',
		transform: 'scale(70)'
	},
	copyMsg: {
		position: 'fixed',
		left: '0',
		right: '0',
		top: '0',
		bottom: '0',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		fontSize: '2.5rem',
		transform: 'scale(0.3)',
		opacity: '0',
		visibility: 'hidden',
		flexDirection: 'column',
		color: '#fff',
		'& h1': {
			fontWeight: '400',
			textShadow: '1px 2px black',
			background: 'rgba(255, 255, 255, .3)',
			width: '100%',
			textAlign: 'center',
			marginBottom: '0',
			padding: '1rem',
			[sizes.down('xs')]: {
				fontSize: '5rem'
			}
		},
		'& p': {
			fontSize: '2rem'
		}
	},
	showCopyMessage: {
		opacity: '1',
		visibility: 'visible',
		transform: 'scale(1)',
		zIndex: '100',
		transition: 'all 0.4s ease-in-out .4s'
	}
};
