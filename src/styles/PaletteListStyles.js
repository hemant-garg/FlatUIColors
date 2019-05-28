import sizes from './mediaSizes';
import bg from './bg.svg';
export default {
	'@global': {
		'.fade-exit': {
			opacity: 1
		},
		'.fade-exit-active': {
			opacity: 0,
			transition: 'opacity 500ms ease-out'
		}
	},
	root: {
		minHeight: '100vh',
		paddingBottom: '4rem',
		display: 'flex',
		alignItems: 'flex-start',
		justifyContent: 'center',
		// overflow: 'scroll',
		backgroundColor: '#4177a8',
		backgroundImage: `url(${bg})`
		/* background by SVGBackgrounds.com */
	},
	container: {
		width: '65%',
		display: 'flex',
		alignItems: 'flex-start',
		flexDirection: 'column',
		flexWrap: 'wrap',
		[sizes.down('md')]: {
			width: '70%'
		},

		[sizes.down('xs')]: {
			width: '65%'
		}
	},
	nav: {
		display: 'flex',
		width: '100%',
		fontSize: '1.2rem',
		justifyContent: 'space-between',
		color: 'white',
		margin: '1rem 0 2rem 0',
		alignItems: 'center',
		'& a': {
			color: 'white',
			textDecoration: 'none'
		}
	},
	palettes: {
		boxSizing: 'border-box',
		width: '100%',
		display: 'grid',
		gridTemplateColumns: 'repeat(3, 31%)',
		gridGap: '1.5rem',
		[sizes.down('sm')]: {
			gridTemplateColumns: 'repeat(2, 50%)'
		},
		[sizes.down('xs')]: {
			gridGap: '1.3rem',
			gridTemplateColumns: 'repeat(1, 100%)'
		}
	}
};
