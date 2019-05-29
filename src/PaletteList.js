import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import Dialog from '@material-ui/core/Dialog';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Avatar from '@material-ui/core/Avatar';
import CheckIcon from '@material-ui/icons/Check';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import CloseIcon from '@material-ui/icons/Close';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import MiniPalette from './MiniPalette';
import styles from './styles/PaletteListStyles';

class PaletteList extends Component {
	state = {
		isDialogOpen: false,
		deletingId: ''
	};
	goToPalette = (id) => {
		this.props.history.push(`/palette/${id}`);
	};
	openDialog = (id) => {
		this.setState({ isDialogOpen: true, deletingId: id });
	};
	closeDialog = () => {
		this.setState({ isDialogOpen: false, deletePalette: '' });
	};
	handleDelete = () => {
		this.props.deletePalette(this.state.deletingId);
		this.closeDialog();
	};
	render() {
		const { palettes, classes } = this.props;
		const { isDialogOpen } = this.state;
		return (
			<div className={classes.root}>
				<div className={classes.container}>
					<nav className={classes.nav}>
						<h1>Palette List</h1>
						<Link to='/palette/new'>Create Palette</Link>
					</nav>
					<TransitionGroup className={classes.palettes}>
						{palettes.map((palette) => (
							<CSSTransition key={palette.id} classNames='fade' timeout={500}>
								<MiniPalette
									openDialog={this.openDialog}
									key={palette.id}
									paletteId={palette.id}
									handleClick={this.goToPalette}
									{...palette}
								/>
							</CSSTransition>
						))}
					</TransitionGroup>
				</div>
				<footer className={classes.footer}>
					{' '}
					Build with <span>&#10084;</span> by{' '}
					<a href='https://hemantgarg.me/' target='_blank'>
						HEMANT GARG
					</a>
				</footer>
				<Dialog onClose={this.closeDialog} open={isDialogOpen} aria-labelledby='delete-dialog-title'>
					<DialogTitle id='delete-dialog-title'>
						Are you sure, you want to delete this beautiful palette?
					</DialogTitle>
					<List>
						<ListItem button onClick={this.handleDelete}>
							<ListItemAvatar>
								<Avatar
									style={{
										backgroundColor: blue[100],
										color: blue[600]
									}}
								>
									<CheckIcon />
								</Avatar>
							</ListItemAvatar>
							<ListItemText primary='Delete' />
						</ListItem>
						<ListItem button onClick={this.closeDialog}>
							<ListItemAvatar>
								<Avatar
									style={{
										backgroundColor: red[100],
										color: red[600]
									}}
								>
									<CloseIcon />
								</Avatar>
							</ListItemAvatar>
							<ListItemText primary='Close' />
						</ListItem>
					</List>
				</Dialog>
			</div>
		);
	}
}
export default withStyles(styles)(PaletteList);
