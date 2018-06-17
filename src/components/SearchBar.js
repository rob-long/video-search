import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props) {
		super();
	}

	render() {
		return (<div className="form-group search-bar col-md-12"> <label htmlFor="searchBar">Video search</label>
	<input className="form-control search-bar" id="searchBar" value={this.props.term} 
		onChange={event => this.onInputChange(event.target.value)} />
		</div>); 
	}

	onInputChange(term) {
		this.props.onInputChange(term);
	}

}

export default SearchBar;