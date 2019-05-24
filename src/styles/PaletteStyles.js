export default {
	Palette: {
		height: '100vh',
		overflow: 'hidden',
		display: 'flex',
		flexDirection: 'column'
	},
	paletteColors: {
		height: '90%'
	},
	goBack: {
		width: '20%',
		height: '50%',
		margin: '0 auto',
		display: 'inline-block',
		position: 'relative',
		cursor: 'pointer',
		marginBottom: '-4px',
		opacity: 1,
		backgroundColor: 'black',
		'& a': {
			width: '100px',
			color: '#fff',
			height: '30px',
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
			color: '#fff',
			textTransform: 'uppercase',
			textDecoration: 'none',
			border: 'none'
		}
	}
};
