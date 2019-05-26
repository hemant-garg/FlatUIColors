import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import { ChromePicker } from 'react-color';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

const styles = {
	picker: {
		width: '100% !important',
		marginTop: '2rem'
	},
	addColor: {
		width: '100%',
		padding: '1rem',
		marginTop: '1rem',
		fontSize: '2rem'
	},
	colorInput: {
		width: '100%',
		height: '70%'
	}
};

class ColorPickerForm extends Component {
	state = {
		currentColor: 'teal',
		newColorName: ''
	};
	componentDidMount() {
		ValidatorForm.addValidationRule('isColorNameUnique', (value) =>
			this.props.colors.every((color) => color.name.toLowerCase() !== value.toLowerCase())
		);
		ValidatorForm.addValidationRule('isColorUnique', () =>
			this.props.colors.every((color) => color.color !== this.state.currentColor)
		);
	}

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};
	updateColor = (newColor) => {
		this.setState({ currentColor: newColor.hex });
	};
	addNewColor = () => {
		const newColor = {
			color: this.state.currentColor,
			name: this.state.newColorName
		};
		this.props.addNewColor(newColor);
		this.setState({ newColorName: '' });
	};
	render() {
		const { isPaletteFull, classes } = this.props;
		const { currentColor, newColorName } = this.state;
		return (
			<div>
				<ChromePicker className={classes.picker} color={currentColor} onChangeComplete={this.updateColor} />
				<ValidatorForm onSubmit={this.addNewColor}>
					<TextValidator
						value={newColorName}
						variant='filled'
						margin='normal'
						placeholder='Color Name'
						className={classes.colorInput}
						onChange={this.handleChange}
						name='newColorName'
						validators={[ 'required', 'isColorNameUnique', 'isColorUnique' ]}
						errorMessages={[
							'Color Name is required',
							'Color Name must be Unique',
							'This Color already used'
						]}
					/>

					<Button
						variant='contained'
						style={{ backgroundColor: isPaletteFull ? 'grey' : currentColor }}
						disabled={isPaletteFull}
						color='primary'
						className={classes.addColor}
						type='submit'
					>
						{isPaletteFull ? 'Palette Full' : 'Add Color'}
					</Button>
				</ValidatorForm>
			</div>
		);
	}
}
export default withStyles(styles)(ColorPickerForm);
