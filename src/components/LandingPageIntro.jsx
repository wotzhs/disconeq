import React from 'react';
import { Link } from 'react-router';

const styles = {
	centerAlign: {
		textAlign: 'center',
		color: '#f5f5f5'
	},
	height80vh: {
		height: '80vh',
		marginLeft: -25
	},
	backgroundImage: {
		height: '70vh',
		backgroundImage: "url('/landing.jpg')",
		position: 'fixed',
		backgroundSize: 'cover',
		zIndex: -1
	},
	paddingTop20vh: {
		paddingTop: '20vh'
	}
}

class LandingPageIntro extends React.Component{
	render(){
		return(
			<div style={ styles.height80vh }>
				<div className="u-full-width" style={ styles.backgroundImage }></div>
				<div style={ styles.paddingTop20vh } >
					<h3 style={ styles.centerAlign }>Just like Facebook for your friends, LinkedIn for your colleagues</h3>
					<h5 style={ styles.centerAlign }>Now you do not have to clutter your phonebook with work contacts</h5>
					<div style={ styles.centerAlign }>
						<Link to={'/signup'} style={ styles.bringToFront } className="button button-primary">Get Started</Link>
						<input type="hidden" value="photocredit:https://scstylecaster.files.wordpress.com/2014/01/cell-phone-use1.jpg"/>
					</div>
				</div>
			</div>
		)
	}
}

export default LandingPageIntro;