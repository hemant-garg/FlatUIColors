export default {
	root: {
		backgroundColor: 'white',
		borderRadius: '6px',
		padding: '0.5rem',
		position: 'relative',
		overflow: 'hidden',
		cursor: 'pointer',
		marginBottom: '.5rem',
		'&:hover svg': {
			opacity: 1
		}
	},
	colors: {
		backgroundColor: '#dae1e4',
		height: '150px',
		width: '100%',
		borderRadius: '5px',
		overflow: 'hidden'
	},
	title: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		margin: '0',
		paddingTop: '0.5rem',
		fontSize: '.9rem',
		position: 'relative'
	},
	emoji: {
		marginLeft: '0.5rem',
		fontSize: '1.3rem'
	},
	miniColor: {
		width: '20%',
		height: '25%',
		display: 'inline-block',
		margin: '0 auto',
		position: 'relative',
		marginBottom: '-4px'
	},
	deleteIcon: {
		color: 'white',
		backgroundColor: '#eb3d30',
		width: '25px',
		height: '25px',
		position: 'absolute',
		borderRadius: '50%',
		right: 0,
		top: 0,
		padding: '12px',
		zIndex: 10,
		opacity: 0,
		transition: 'all 0.3s ease-in-out !important'
	}
};
