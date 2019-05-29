import { DRAWER_WIDTH as drawerWidth } from '../constants';
const styles = (theme) => ({
	root: {
		display: 'flex',
		overflow: 'hidden',
		minHeight: '100vh'
	},
	hide: {
		display: 'none'
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0
	},
	drawerPaper: {
		width: drawerWidth,
		display: 'flex',
		alignItems: 'center'
	},
	drawerHeader: {
		display: 'flex',
		width: '100%',
		alignItems: 'center',
		padding: '0 8px',
		...theme.mixins.toolbar,
		justifyContent: 'flex-end'
	},
	content: {
		flexGrow: 1,
		padding: 0,
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		}),
		marginLeft: -drawerWidth,
		height: 'calc(100vh - 64px)'
	},
	contentShift: {
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen
		}),
		marginLeft: 0
	},

	container: {
		width: '90%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		paddingTop: '2rem',
		height: '100%'
	},
	buttons: {
		width: '100%'
	},
	button: {
		fontSize: '.8rem',
		width: '50%'
	}
});
export default styles;
