import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './Palette.css';
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
		const { colors, paletteName, emoji, id } = this.props.palette;
		const { level, format } = this.state;
		const colorboxes = colors[level].map((color) => (
			<ColorBox
				key={color.id}
				moreURL={`/palette/${id}/${color.id}`}
				background={color[format]}
				name={color.name}
				showLink={true}
			/>
		));
		return (
			<div className='Palette'>
				<Navbar
					showColorSlider={true}
					handleChange={this.changeFormat}
					level={level}
					changeLevel={this.changeLevel}
				/>
				<div className='Palette-colors'>{colorboxes}</div>
				<PaletteFooter paletteName={paletteName} emoji={emoji} />
			</div>
		);
	}
}

export default Palette;
