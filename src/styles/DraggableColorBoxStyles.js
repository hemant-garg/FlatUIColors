import sizes from './mediaSizes';
import chroma from 'chroma-js';
export default {
	root: {
		width: '20%',
		height: '25%',
		margin: '0 auto',
		display: 'inline-block',
		position: 'relative',
		cursor: 'pointer',
		marginBottom: '-5px',
		[sizes.down('lg')]: {
			width: '25%',
			height: '20%'
		},
		'&:hover': {
			transform: 'scale(1.1)',
			transition: 'transform .3s ease',
			zIndex: 5,
			borderRadius: '7px',
			[sizes.down('sm')]: {
				transform: 'none'
			}
		},
		'&:hover svg': {
			opacity: 1,
			transform: 'translateX(-5px)',
			visibility: 'visible',
			[sizes.down('sm')]: {
				transform: 'none'
			}
		}
	},
	colorName: {
		[sizes.down('sm')]: {
			display: 'none'
		}
	},
	boxContent: {
		position: 'absolute',
		width: '100%',
		left: '0',
		bottom: '0',
		padding: '10px',
		fontWeight: 'bolder',
		color: (props) => (chroma(props.color).luminance() >= 0.7 ? 'rgba(0,0,0,.8)' : 'rgba(255, 255, 255, .8)'),
		letterSpacing: '1px',
		textTransform: 'uppercase',
		fontSize: '12px',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	deleteIcon: {
		color: '#fff',
		opacity: 0,
		visibility: 'hidden',
		transition: 'all .3s ease',
		'&:hover': {
			transform: 'scale(1.3)'
		},
		[sizes.down('sm')]: {
			opacity: 1,
			visibility: 'visible',
			fontSize: '1rem',
			color: 'rgba(0,0,0,.4)'
		}
	}
};
