import React from 'react';

const VideoListItem = ({ videos, onVideoSelect }) => {
	const imageUrl = videos.snippet.thumbnails.default.url;
	const title = videos.snippet.title;

	return (
		<li onClick={() => onVideoSelect(videos)} className="list-group-item" >
			<div className="video-list media">
				<div className="media-left">
					<img className="media-object" src={imageUrl} title={title} alt={title} />
				</div>
				<div className="media-body">
					<div className="media-heading">
						<span>{title}</span>
					</div>
				</div>
			</div>
		</li>
	)
};

export default VideoListItem;