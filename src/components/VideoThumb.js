import React, { Component } from 'react';

const VideoThumb = (props) => { 
    return (
    <img className="media-object" src={props.imageUrl}></img>
    );
}

export default VideoThumb;