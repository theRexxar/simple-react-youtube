import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) =>{
	const videos = props.videos;

	const videoItems = props.videos.map( (videos) => {
		return (
			<VideoListItem 
				onVideoSelect={props.onVideoSelect}
				key={videos.etag} 
				videos={videos} />
		)
	});

	return (
		<ul className="list-group col-lg-4 col-md-4 col-sm-4 col-xs-12">
			{videoItems}
		</ul>
	)
}

export default VideoList;