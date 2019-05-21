import React, { Component } from 'react';
import Pallete from './Pallete';
import seedColors from './seedColors';

class App extends Component {
	render() {
		return <Pallete {...seedColors[3]} />;
	}
}

export default App;
