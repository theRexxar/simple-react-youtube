/** package module */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

/** component */
import SearchBar from './component/search_bar';
import VideoList from './component/video_list';

/* Contstant variable */
const YOUTUBE_API_KEY = 'AIzaSyD0R9ledr6H17NZeaiHWRmTAh5WHZ1hNw0';

/* Main App function */
class App extends Component {
	constructor(props) {
		super(props)

		this.state = { videos : [] };

		YTSearch({ key: YOUTUBE_API_KEY, term: 'react'}, videos => {
			this.setState({ videos : videos })
		})
	}

	render () {
		return  (
			<div className="container">
				<SearchBar />
				<VideoList videos={this.state.videos} />
			</div>
		)
	}
}

// render the app to html
ReactDOM.render(<App />, document.getElementById('container'))