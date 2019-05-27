import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'rc-slider';
import Select from '@material-ui/core/Select';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { MenuItem } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

import 'rc-slider/assets/index.css';
import styles from './styles/NavbarStyles';

class Navbar extends Component {
	state = {
		format: 'hex',
		open: false
	};

	handleFormatChange = (e) => {
		this.setState({ format: e.target.value, open: true });
		this.props.handleChange(e.target.value);
	};

	closeSnackbar = () => {
		this.setState({ open: false });
	};

	render() {
		const { level, changeLevel, showColorSlider, classes } = this.props;
		const { format } = this.state;
		return (
			<header className={classes.Navbar}>
				<div className={classes.logo}>
					<Link to='/'>Flat Colors UI</Link>
				</div>
				{showColorSlider && (
					<div>
						<span>Level: {level}</span>
						<div className={classes.slider}>
							<Slider defaultValue={level} step={100} min={100} max={900} onAfterChange={changeLevel} />
						</div>
					</div>
				)}
				<div className={classes.selectContainer}>
					<Select value={format} onChange={this.handleFormatChange}>
						<MenuItem value='hex'>HEX - #ffffff</MenuItem>
						<MenuItem value='rgb'>RGB - rgb(255, 255, 255)</MenuItem>
						<MenuItem value='rgba'>RGBA - rgba(255, 255, 255, 1.0)</MenuItem>
					</Select>
				</div>
				<Snackbar
					anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
					open={this.state.open}
					onClose={this.closeSnackbar}
					autoHideDuration={3000}
					message={<span>Format Changed to {format.toUpperCase()}</span>}
					ContentProps={{
						'aria-describedby': 'message-id'
					}}
					action={[
						<IconButton onClick={this.closeSnackbar} color='inherit' key='close' aria-label='close'>
							<CloseIcon />
						</IconButton>
					]}
				/>
			</header>
		);
	}
}
export default withStyles(styles)(Navbar);