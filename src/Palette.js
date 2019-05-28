import React, { Component } from 'react';
import ColorBox from './ColorBox';
import { withStyles } from '@material-ui/styles';
import styles from './styles/PaletteStyles';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';

class Palette extends Component {
	state = {
		format: 'hex'
	};

	changeFormat = (format) => {
		this.setState({ format });
	};

	render() {
		const { classes } = this.props;
		const { colors, paletteName, emoji, id } = this.props.palette;
		const { format } = this.state;
		const colorboxes = colors[500].map((color) => (
			<ColorBox
				key={color.id}
				moreURL={`/palette/${id}/${color.id}`}
				background={color[format]}
				name={color.name}
				showingFullPalette={true}
			/>
		));
		return (
			<div className={classes.Palette}>
				<Navbar showingFullPalette={true} handleChange={this.changeFormat} />
				<div className={classes.paletteColors}>{colorboxes}</div>
				<PaletteFooter paletteName={paletteName} emoji={emoji} />
			</div>
		);
	}
}

export default withStyles(styles)(Palette);
