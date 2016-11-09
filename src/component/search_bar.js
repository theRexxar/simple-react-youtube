/* component input search bar */
import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props)

		this.state = { term : '' };
	}

	render() {
		return (
			<div className="col-lg-12 col-md-12 col-xs-12 col-xs-12">
				<input 
					value={this.state.term}
					onChange={event => this.setState({ term: event.target.value })} 
					type="text" 
					name="search" 
					placeholder="Search video title" />
			</div>
		)
	}
}

export default SearchBar;