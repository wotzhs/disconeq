import React from 'react';
import { Icon } from 'react-fa';

const styles = {
	padding15px: {
		padding: '15px 15px 0px 15px',
		fontFamily: 'fontAwesome'
	},
	show: {
		paddingRight: 10,
		marginTop: -42,
		position: 'relative',
		cursor: 'pointer',
		color: '#33C3F0'
	},
	hide: {
		display: 'none'
	}
}

class ContactSearch extends React.Component{

	constructor(){
		super();
		this.state = {
			showClearButton: false
		}
	}
	search(){
		this.searchInput.value.length ? this.setState({showClearButton: true}) : this.setState({showClearButton: false})
		this.props.setFilter(this.searchInput.value);
	}
	clearInput(){
		this.searchInput.value = null;
		this.props.setFilter(this.searchInput.value);
		this.setState({showClearButton:false});
	}
	displayAddContact(){
		this.props.setContactAddDisplay(true);
		this.props.clearContactDetails();
		if (this.props.isMobile) {
			this.props.setContactBrowserDisplay(false);
		}

	}

	render(){
		return(
			<div style={ styles.padding15px }>
				<input 
					type="text"
					placeholder="&#xf002;  Search..."
					className="u-full-width"
					onChange={ (e) => this.search(e) }
					ref={ (input) => this.searchInput = input }
				/>
				<Icon
					name="times" 
					className="u-pull-right" 
					style={ this.state.showClearButton ? styles.show : styles.hide  }
					onClick={ (e) => this.clearInput(e)}
				/>
				<button className="button button-primary u-full-width" onClick={ (e) => this.displayAddContact(e) }>
					<Icon name="user-plus" />&ensp;
					Add New Contact
				</button>
			</div>
		)
	}
}

export default ContactSearch;