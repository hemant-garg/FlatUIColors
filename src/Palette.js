import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Palette.css';
class Palette extends Component {
	state = {
		level: 500
	};

	changeLevel = (level) => {
		this.setState({ level });
	};

	render() {
		const { colors } = this.props.palette;
		const { level } = this.state;
		const colorboxes = colors[level].map((color) => <ColorBox background={color.hex} name={color.name} />);
		return (
			<div className='Pallete'>
				<div className='slider'>
					<Slider defaultValue={level} step={100} min={100} max={900} onAfterChange={this.changeLevel} />
				</div>
				<div className='Pallete-colors'>{colorboxes}</div>
			</div>
		);
	}
}

export default Palette;
