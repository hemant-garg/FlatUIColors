import React, { Component } from 'react';
import ColorBox from './ColorBox';
import { withStyles } from '@material-ui/styles';
import styles from './styles/PaletteStyles';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';

class Palette extends Component {
	state = {
		level: 500,
		format: 'hex'
	};

	changeLevel = (level) => {
		this.setState({ level });
	};

	changeFormat = (format) => {
		this.setState({ format });
	};

	render() {
		const { classes } = this.props;
		const { colors, paletteName, emoji, id } = this.props.palette;
		const { level, format } = this.state;
		const colorboxes = colors[level].map((color) => (
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
				<Navbar
					showColorSlider={true}
					handleChange={this.changeFormat}
					level={level}
					changeLevel={this.changeLevel}
				/>
				<div className={classes.paletteColors}>{colorboxes}</div>
				<PaletteFooter paletteName={paletteName} emoji={emoji} />
			</div>
		);
	}
}

export default withStyles(styles)(Palette);
