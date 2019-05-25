import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Palette from './Palette';
import seedColors from './seedColors';
import { generatePalette } from './ColorHelpers';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';
class App extends Component {
	state = {
		palettes: seedColors
	};

	findPalette = (id) => {
		return this.state.palettes.find((palette) => palette.id === id);
	};
	savePalette = (newPalette) => {
		this.setState({ palettes: [ ...this.state.palettes, newPalette ] });
	};
	render() {
		return (
			<Switch>
				<Route
					exact
					path='/palette/new'
					render={(routeProps) => (
						<NewPaletteForm palettes={this.state.palettes} savePalette={this.savePalette} {...routeProps} />
					)}
				/>
				<Route
					exact
					path='/'
					render={(routeProps) => <PaletteList palettes={this.state.palettes} {...routeProps} />}
				/>
				<Route
					exact
					path='/palette/:id'
					render={(routeProps) => (
						<Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))} />
					)}
				/>
				<Route
					exact
					path='/palette/:paletteId/:colorId'
					render={(routeProps) => (
						<SingleColorPalette
							colorId={routeProps.match.params.colorId}
							palette={generatePalette(this.findPalette(routeProps.match.params.paletteId))}
						/>
					)}
				/>
				)} />
			</Switch>
		);

		// return <Palette palette={generatePalette(seedColors[5])} />;
	}
}

export default App;
