import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Select from '@material-ui/core/Select';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { MenuItem } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
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
		const { classes, showingFullPalette } = this.props;
		const { format } = this.state;
		const link = showingFullPalette ? '/' : `/palette/${this.props.match.params.paletteId}`;
		return (
			<header className={classes.Navbar}>
				<div className={classes.logo}>
					<Link to={link}>{'<-  Back'}</Link>
				</div>

				<div className={classes.selectContainer}>
					<Select
						style={{
							color: '#fff',
							fontWeight: 'bold',
							fontSize: '13px',
							letterSpacing: '1.5px'
						}}
						value={format}
						onChange={this.handleFormatChange}
					>
						<MenuItem value='hex'>HEX (#DA56F7)</MenuItem>
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
export default withStyles(styles)(withRouter(Navbar));
