import React, { Component } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoListItem from './VideoListItem';
import VideoDetail from './VideoDetail';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {videos: [], term: 'surfboards', selectedVideo: null };
    this.API_KEY = 'AIzaSyASJTDDz2AZhnAhJCasLm_tQB9sMMOlaF4';
    this.doYTSearch(this.state.term);
    this.onInputChange = this.onInputChange.bind(this);
    this.onItemClick = this.onItemClick.bind(this);
    this.doYTSearch = _.debounce(this.doYTSearch, 1000);
    this.timer = null;
  }

  doYTSearch(term) {
    YTSearch({key: this.API_KEY, term: term}, (videos) => {
      this.setState({videos, selectedVideo: videos[0]});
    });
  }

  onInputChange(term) {
    this.setState({term});
    this.doYTSearch(term);
  }

  onItemClick(video) {
    this.setState({selectedVideo: video});
  }

  render() {
    const videoSearch = _.debounce((term) => {this.onInputChange(term) }, 500);
    return (
      <div>
          <SearchBar term={this.state.term} onInputChange={this.onInputChange} />
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList videos={this.state.videos} onItemClick={this.onItemClick} />
      </div>
    );
  }
}
