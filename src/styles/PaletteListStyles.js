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
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'flex-start',
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
		marginBottom: '3rem',

		[sizes.down('md')]: {
			width: '80%'
		},
		[sizes.down('sm')]: {
			width: '75%'
		},
		[sizes.down('xs')]: {
			width: '80%'
		}
	},
	nav: {
		display: 'flex',
		width: '100%',
		fontSize: '1.2rem',
		justifyContent: 'space-between',
		color: 'white',
		margin: '1rem 0 2rem 0',
		boxSizing: 'border-box',
		alignItems: 'center',
		'& a': {
			color: 'white',
			backgroundColor: '#e01b5c',
			marginRight: '.5rem',
			outline: 'none',
			fontSize: '1.1rem',
			boxShadow: '1px 3px 5px rgba(0,0,0,.2)',
			padding: '.7rem 1.3rem',
			borderRadius: '5px',
			textDecoration: 'none',
			[sizes.down('md')]: {
				marginRight: '0rem'
			},
			[sizes.down('sm')]: {
				marginRight: '-1rem'
			},
			[sizes.down('xs')]: {
				marginRight: '0rem'
			}
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
	},
	footer: {
		width: '100%',
		position: 'fixed',
		bottom: 0,
		backgroundColor: '#fff',
		// padding: '.5rem 1rem',
		padding: '.1rem 1rem',
		fontSize: '.9rem',
		fontWeight: 'bold',
		boxSizing: 'border-box',
		textAlign: 'right',
		'& span': {
			color: 'red',
			fontSize: '1.3rem'
			// backgroundColor: 'red'
		},
		'& a': {
			textDecoration: 'none',
			color: '#004d52'
		}
	}
};
