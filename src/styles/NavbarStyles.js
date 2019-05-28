import sizes from './mediaSizes';

export default {
	'@global': {},
	Navbar: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-start',
		height: '7vh'
	},
	logo: {
		padding: '4px 20px 0 20px',
		fontSize: '.9rem',
		textTransform: 'uppercase',
		letterSpacing: '1px',
		fontFamily: '"Roboto", sans-serif',
		height: '100%',
		display: 'flex',
		alignItems: 'center',
		'& a': {
			textDecoration: 'none',
			color: 'black'
		}
	},

	selectContainer: {
		marginLeft: 'auto',
		marginRight: '1rem',
		backgroundColor: '#162030',
		padding: '4px 10px 4px 25px',
		borderRadius: '6px',
		'& svg': {
			color: '#fff'
		}
	}
};
