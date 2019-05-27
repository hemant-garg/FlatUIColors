import React, { Component } from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Button from '@material-ui/core/Button';

import DraggableColorList from './DraggableColorList';
import { arrayMove } from 'react-sortable-hoc';
import PaletteFormNav from './PaletteFormNav';
import ColorPickerForm from './ColorPickerForm';

const drawerWidth = 300;
const styles = (theme) => ({
	root: {
		display: 'flex'
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
		alignItems: 'center',
		padding: '0 8px',
		...theme.mixins.toolbar,
		justifyContent: 'flex-end'
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing.unit * 3,
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
		justifyContent: 'center',
		height: '100%'
	},
	buttons: {
		width: '100%'
	},
	button: {
		width: '50%'
	}
});

class NewPaletteForm extends Component {
	static defaultProps = {
		maxColors: 20
	};
	state = {
		open: true,
		colors: this.props.palettes[0].colors
	};

	handleDrawerOpen = () => {
		this.setState({ open: true });
	};

	handleDrawerClose = () => {
		this.setState({ open: false });
	};
	updateColor = (newColor) => {
		this.setState({ currentColor: newColor.hex });
	};
	addNewColor = (newColor) => {
		this.setState({ colors: [ ...this.state.colors, newColor ] });
	};
	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};
	handleSubmit = (newPalette) => {
		newPalette.id = newPalette.paletteName.toLowerCase().replace(/ /g, '-');
		newPalette.colors = this.state.colors;
		this.props.savePalette(newPalette);
		this.props.history.push('/');
	};

	clearColors = () => {
		this.setState({ colors: [] });
	};

	addRandomColor = () => {
		const allColors = this.props.palettes.map((palette) => palette.colors).flat();
		let random = Math.floor(Math.random() * allColors.length);
		this.setState({
			colors: [ ...this.state.colors, allColors[random] ]
		});
	};

	removeColor = (colorName) => {
		this.setState({
			colors: this.state.colors.filter((color) => color.name !== colorName)
		});
	};
	onSortEnd = ({ oldIndex, newIndex }) => {
		this.setState(({ colors }) => ({
			colors: arrayMove(colors, oldIndex, newIndex)
		}));
	};

	render() {
		const { classes, maxColors, palettes } = this.props;
		const { open, colors } = this.state;
		const isPaletteFull = colors.length >= maxColors;
		return (
			<div className={classes.root}>
				<PaletteFormNav
					handleSubmit={this.handleSubmit}
					handleDrawerOpen={this.handleDrawerOpen}
					open={open}
					palettes={palettes}
				/>
				<Drawer
					className={classes.drawer}
					variant='persistent'
					anchor='left'
					open={open}
					classes={{
						paper: classes.drawerPaper
					}}
				>
					<div className={classes.drawerHeader}>
						<IconButton onClick={this.handleDrawerClose}>
							<ChevronLeftIcon />
						</IconButton>
					</div>
					<Divider />
					<div className={classes.container}>
						<Typography variant='h4' gutterBottom>
							Design your Palette
						</Typography>
						<div className={classes.buttons}>
							<Button
								className={classes.button}
								variant='contained'
								color='secondary'
								onClick={this.clearColors}
							>
								Clear Palette
							</Button>
							<Button
								className={classes.button}
								disabled={isPaletteFull}
								variant='contained'
								color='primary'
								onClick={this.addRandomColor}
							>
								Random Color
							</Button>
						</div>
						<ColorPickerForm colors={colors} isPaletteFull={isPaletteFull} addNewColor={this.addNewColor} />
					</div>
				</Drawer>
				<main
					className={classNames(classes.content, {
						[classes.contentShift]: open
					})}
				>
					<div className={classes.drawerHeader} />

					<DraggableColorList
						onSortEnd={this.onSortEnd}
						axis='xy'
						colors={colors}
						removeColor={this.removeColor}
					/>
				</main>
			</div>
		);
	}
}

export default withStyles(styles, { withTheme: true })(NewPaletteForm);
