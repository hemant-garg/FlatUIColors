import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './Palette.css';
import Navbar from './Navbar';
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
		const { colors, paletteName, emoji } = this.props.palette;
		const { level, format } = this.state;
		const colorboxes = colors[level].map((color) => (
			<ColorBox key={color.id} background={color[format]} name={color.name} />
		));
		return (
			<div className='Pallete'>
				<Navbar handleChange={this.changeFormat} level={level} changeLevel={this.changeLevel} />
				<div className='Pallete-colors'>{colorboxes}</div>
				<footer className='Palette-footer'>
					{paletteName}
					<span className='emoji'>{emoji}</span>
				</footer>
			</div>
		);
	}
}

export default Palette;
