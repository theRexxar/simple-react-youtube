import React, { Component } from 'react';

const VideoList = (props) =>{
	const videos = props.videos;
	
	return (
		<ul className="col-md-4 col-sm-4 list-group">
			{videos.length}
		</ul>
	)
}

export default VideoList;