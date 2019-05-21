import React, { Component } from 'react';
import Pallete from './Pallete';
import seedColors from './seedColors';

class App extends Component {
	render() {
		return <Pallete {...seedColors[5]} />;
	}
}

export default App;
