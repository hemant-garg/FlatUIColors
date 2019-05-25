import React from 'react';
import { withStyles } from '@material-ui/styles';
import { SortableElement } from 'react-sortable-hoc';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = {
	root: {
		width: '20%',
		height: '25%',
		margin: '0 auto',
		display: 'inline-block',
		position: 'relative',
		cursor: 'pointer',
		marginBottom: '-4px',
		'&:hover svg': {
			color: '#fff',
			transform: 'scale(1.3)'
		}
	},
	boxContent: {
		position: 'absolute',
		width: '100%',
		left: '0',
		bottom: '0',
		padding: '10px',
		color: '#000',
		letterSpacing: '1px',
		textTransform: 'uppercase',
		fontSize: '12px',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	deleteIcon: {
		color: 'rgba(0,0,0,.5)',
		transition: 'all .3s ease-in-out'
	}
};

const DraggableColorBox = SortableElement(({ color, classes, name, handleClick }) => {
	return (
		<div className={classes.root} style={{ backgroundColor: color }}>
			<div className={classes.boxContent}>
				<span>{name}</span>
				<span>
					<DeleteIcon onClick={handleClick} className={classes.deleteIcon} />
				</span>
			</div>
		</div>
	);
});
export default withStyles(styles)(DraggableColorBox);
