/* component input search bar */
import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props)

		this.state = { term : '' };
	}

	render() {
		return (
			<div id="searchBar">
				<div className="form-group col-lg-12 col-md-12 col-sm-12">
					<input 
						value={this.state.term}
						onChange={event => this.onInputChange(event.target.value)} 
						className="form-control"
						type="text" 
						name="search" 
						placeholder="Search video title" />
				</div>
			</div>
		)
	}

	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange({term})
	}
}

export default SearchBar;