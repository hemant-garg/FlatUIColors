export default {
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
		margin: '.1rem 1rem 0 auto',
		backgroundColor: '#162030',
		padding: '4px 10px 4px 25px',
		borderRadius: '6px',
		'& svg': {
			color: '#fff'
		}
	}
};
