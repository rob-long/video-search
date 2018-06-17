import React, { Component } from 'react';
import VideoThumb from './VideoThumb';

class VideoListItem extends Component {
	constructor(props) {
		super(props);
	}	

	render() {
	const video = this.props.video;
	const src = "https://www.youtube.com/embed/" + video.id;
	const imageUrl = video.snippet.thumbnails.default.url;
	return (
	<li className="list-group-item" onClick={() => this.props.onItemClick(video)}>
		<div className="video-list media">
			<div className="media-left">
			<VideoThumb imageUrl={imageUrl} video={video} />
			</div>
			<div className="media-body">
				<div className="media-heading">{video.snippet.title}</div>
			</div>
		</div>
	</li>
		)
	}
}

export default VideoListItem;