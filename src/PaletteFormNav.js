import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import PaletteMetaForm from './PaletteMetaForm';

const drawerWidth = 300;

const styles = (theme) => ({
	root: {
		display: 'flex'
	},
	appBar: {
		transition: theme.transitions.create([ 'margin', 'width' ], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		}),
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		height: '64px'
	},

	appBarShift: {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: drawerWidth,
		transition: theme.transitions.create([ 'margin', 'width' ], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen
		})
	},
	menuButton: {
		marginRight: theme.spacing.unit * 3
	},
	navButtons: {
		marginRight: '1rem',
		'& a': {
			textDecoration: 'none'
		}
	},
	button: {
		margin: '0 0.5rem'
	}
});

class PaletteFormNav extends Component {
	state = {
		newPaletteName: '',
		isFormShowing: false
	};

	showForm = () => {
		this.setState({
			isFormShowing: true
		});
	};

	hideForm = () => {
		this.setState({
			isFormShowing: false
		});
	};

	render() {
		const { open, classes, handleSubmit, handleDrawerOpen, palettes } = this.props;
		return (
			<div className={classes.root}>
				<CssBaseline />
				<AppBar
					position='fixed'
					color='default'
					className={classNames(classes.appBar, {
						[classes.appBarShift]: open
					})}
				>
					<Toolbar>
						<IconButton
							color='inherit'
							aria-label='Open drawer'
							onClick={handleDrawerOpen}
							edge='start'
							className={classNames(classes.menuButton, open && classes.hide)}
						>
							<MenuIcon />
						</IconButton>
						<Typography variant='h6' noWrap>
							Create a Palette
						</Typography>
					</Toolbar>
					<div className={classes.navButtons}>
						<Link to='/'>
							<Button variant='contained' color='secondary' className={classes.button}>
								Go Back
							</Button>
						</Link>
						<Button variant='contained' color='primary' onClick={this.showForm} className={classes.button}>
							Save Palette
						</Button>
					</div>
				</AppBar>
				{this.state.isFormShowing && (
					<PaletteMetaForm hideForm={this.hideForm} palettes={palettes} handleSubmit={handleSubmit} />
				)}
			</div>
		);
	}
}
export default withStyles(styles, { withTheme: true })(PaletteFormNav);
