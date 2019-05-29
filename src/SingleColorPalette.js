import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import { Link, withRouter } from 'react-router-dom';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import styles from './styles/PaletteStyles';

class SingleColorPalette extends Component {
	constructor(props) {
		super(props);
		this._shades = this.gatherShades(this.props.palette, this.props.colorId);
		this.state = {
			format: 'hex'
		};
	}
	gatherShades = (palette, colorToFilterBy) => {
		let shades = [];
		// return all shades of given color
		let allColors = palette.colors;
		for (let key in allColors) {
			shades = shades.concat(allColors[key].filter((color) => color.id === colorToFilterBy));
		}
		return shades.slice(1);
	};

	changeFormat = (format) => {
		this.setState({ format });
	};

	render() {
		const { classes } = this.props;
		const { paletteName, emoji, id } = this.props.palette;
		const { format } = this.state;
		const colorBoxes = this._shades.map((color) => (
			<ColorBox key={color.name} name={color.name} background={color[format]} showingFullPalette={false} />
		));
		return (
			<div className={classes.Palette}>
				<Navbar handleChange={this.changeFormat} showColorSlider={false} />
				<div className={classes.paletteColors}>
					{colorBoxes}
					<div onClick={() => this.props.history.push(`/palette/${id}`)} className={classes.goBack}>
						<Link to={`/palette/${id}`} className='back-button'>
							Go Back
						</Link>
					</div>
				</div>
				<PaletteFooter paletteName={paletteName} emoji={emoji} />
			</div>
		);
	}
}
export default withStyles(styles)(withRouter(SingleColorPalette));
