import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './Pallete.css';
class Pallete extends Component {
	render() {
		const colorboxes = this.props.colors.map((color) => <ColorBox background={color.color} name={color.name} />);
		return (
			<div className='Pallete'>
				<div className='Pallete-colors'>{colorboxes}</div>
			</div>
		);
	}
}

export default Pallete;
