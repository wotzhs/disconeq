import React from 'react';
import { browserHistory } from 'react-router';
import { Link } from 'react-router';

const styles = {
	formContainer: {
		paddingTop: '8%'
	},
	noDecoration: {
		textDecoration: 'none'
	},
	mainContainer: {
		marginBottom: '1.5em'
	}
};


class SignUp extends React.Component{

	createAccount(event){
		event.preventDefault();
		console.log(this.email.value);
		console.log(this.password.value);
		// browserHistory.push('/home');
	}

	render(){
		return(
			<div style={ styles.mainContainer }>
				<form style={styles.formContainer} onSubmit={ (e) => this.createAccount(e) }>
					<div className="row">
						<div className="offset-by-three columns six columns">
							<input ref={ (input) => this.email = input } className="u-full-width" type="email" placeholder="Email"/>
						</div>
					</div>
					<div className="row">
						<div className="offset-by-three columns six columns">
							<input ref={ (input) => this.password = input } className="u-full-width" type="password" placeholder="Password"/>
						</div>
					</div>				
					<div className="row">
						<div className="offset-by-three columns six columns">
							<input className="button-primary" type="submit" value="Sign In!"/>
						</div>
					</div>					
				</form>
				<div className="row">
					<div className="offset-by-three columns six columns">
						<Link to="" style={ styles.noDecoration }>Forgot password?</Link>
					</div>
				</div>
				<div className="row">
					<div className="offset-by-three columns six columns">
						New to Disconeq? <Link to={'/signup'} style={ styles.noDecoration} >Create an account</Link>
					</div>
				</div>		
			</div>
		)
	}
}

export default SignUp;