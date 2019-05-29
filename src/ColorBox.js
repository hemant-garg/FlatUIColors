import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import styles from './styles/ColorBoxStyles';

class ColorBox extends Component {
	state = {
		copied: false
	};
	changeCopyState = () => {
		if (this.props.showingFullPalette) {
			this.goToSingleColorPalette();
		} else {
			this.setState(
				{
					copied: true
				},
				() => {
					setTimeout(() => this.setState({ copied: false }), 1500);
				}
			);
		}
	};

	goToSingleColorPalette = () => {
		this.props.history.push(this.props.moreURL);
	};
	render() {
		const { name, background, showingFullPalette, classes } = this.props;
		const { copied } = this.state;
		return (
			<CopyToClipboard onCopy={this.changeCopyState} text={background}>
				<div className={classes.colorBox} style={{ background }}>
					<div style={{ background }} className={`${classes.copyOverlay} ${copied && classes.showOverlay}`} />
					<div className={`${classes.copyMsg} ${copied && classes.showCopyMessage}`}>
						<h1>COPIED!</h1>
						<p className={classes.copyText}>{background}</p>
					</div>
					<div>
						<div className={classes.boxContent}>
							<span className={classes.colorName}>{name}</span>
						</div>
						{!showingFullPalette && <button className={classes.copyButton}>Copy</button>}
						{showingFullPalette && (
							<button className={classes.copyButton} onClick={this.goToSingleColorPalette}>
								Copy
							</button>
						)}
					</div>
				</div>
			</CopyToClipboard>
		);
	}
}
export default withStyles(styles)(withRouter(ColorBox));
