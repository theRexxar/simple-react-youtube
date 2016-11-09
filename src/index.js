/** package module */
import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

/** component */
import SearchBar from './component/search_bar';
import VideoList from './component/video_list';
import VideoDetail from './component/video_detail';

/* Contstant variable */
const YOUTUBE_API_KEY = 'AIzaSyD0R9ledr6H17NZeaiHWRmTAh5WHZ1hNw0';

/* Main App function */
class App extends Component {
	constructor(props) {
		super(props)

		this.state = { 
			videos : [],
			selectedVideo: null
		};

		this.videoSearch('react js');
	}

	videoSearch(term) {
		YTSearch({ key: YOUTUBE_API_KEY, term: term }, videos => {
			this.setState({ 
				videos : videos,
				selectedVideo: videos[0]
			})
		})
	}

	render () {
		const videSearch = _.debounce((term) => {this.videoSearch(term)}, 300)
		return  (
			<div className="container">
				<SearchBar onSearchTermChange={videSearch} />
				<VideoDetail video={this.state.selectedVideo}/>
				<VideoList 
					onVideoSelect={selectedVideo => this.setState({selectedVideo})}
					videos={this.state.videos} />
			</div>
		)
	}
}

// render the app to html
ReactDOM.render(<App />, document.getElementById('app'))