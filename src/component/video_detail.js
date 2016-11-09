import React from 'react';

const VideoDetail = ({ video }) => {
	if (!video) {
		return <div>Loading...</div>
	}

	const videoId = video.id.videoId;
	const videoUrl = `https://www.youtube.com/embed/${videoId}`;
	
	console.log(video)

	return (
		<div className="video-detail col-lg8 col-md-8 col-sm-8">
			<div className="embed-responsive embed-responsive-16by9">
				<iframe src={videoUrl} className="embed-responsive-item"></iframe>
			</div>
			<div className="details wrapper">
				<div>{video.snippet.title}</div>
				<hr />
				<div>{video.snippet.description}</div>
			</div>
		</div>
	)
}

export default VideoDetail;