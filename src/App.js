import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Palette from './Palette';
import seedColors from './seedColors';
import { generatePalette } from './ColorHelpers';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';
import Page from './Page.js';
class App extends Component {
	constructor(props) {
		super(props);
		const savedPalettes = JSON.parse(window.localStorage.getItem('palettes'));
		this.state = {
			palettes: savedPalettes || seedColors
		};
	}

	findPalette = (id) => {
		return this.state.palettes.find((palette) => palette.id === id);
	};
	deletePalette = (id) => {
		this.setState(
			(oldState) => ({ palettes: oldState.palettes.filter((palette) => palette.id !== id) }),
			this.syncLocalStorage
		);
	};
	savePalette = (newPalette) => {
		this.setState({ palettes: [ ...this.state.palettes, newPalette ] }, this.syncLocalStorage);
	};
	syncLocalStorage = () => {
		window.localStorage.setItem('palettes', JSON.stringify(this.state.palettes));
	};

	render() {
		return (
			<Route
				render={({ location }) => (
					<TransitionGroup>
						<CSSTransition key={location.key} classNames='page' timeout={500}>
							<Switch location={location}>
								<Route
									exact
									path='/palette/new'
									render={(routeProps) => (
										<Page>
											<NewPaletteForm
												palettes={this.state.palettes}
												savePalette={this.savePalette}
												{...routeProps}
											/>
										</Page>
									)}
								/>
								<Route
									exact
									path='/'
									render={(routeProps) => (
										<Page>
											<PaletteList
												deletePalette={this.deletePalette}
												palettes={this.state.palettes}
												{...routeProps}
											/>
										</Page>
									)}
								/>
								<Route
									exact
									path='/palette/:id'
									render={(routeProps) => (
										<Page>
											<Palette
												palette={generatePalette(this.findPalette(routeProps.match.params.id))}
											/>
										</Page>
									)}
								/>
								<Route
									exact
									path='/palette/:paletteId/:colorId'
									render={(routeProps) => (
										<Page>
											<SingleColorPalette
												colorId={routeProps.match.params.colorId}
												palette={generatePalette(
													this.findPalette(routeProps.match.params.paletteId)
												)}
											/>
										</Page>
									)}
								/>
								)} />
							</Switch>
						</CSSTransition>
					</TransitionGroup>
				)}
			/>
		);

		// return <Palette palette={generatePalette(seedColors[5])} />;
	}
}

export default App;
