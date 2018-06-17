import React, { Component } from 'react';
import VideoListItem from './VideoListItem';

const VideoList = (props) => {
	const list = props.videos.map( (video) => {
		return (
			<ul key={video.etag} className="col-md-4 list-group">
			<VideoListItem key={video.etag} video={video} onItemClick={props.onItemClick} />
			</ul>)
	});
	return (list)
}

export default VideoList;