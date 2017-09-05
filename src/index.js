import ReactDOM from 'react-dom';
import React, {Component} from 'react';
import SearchBar from './components/search_bar.js';
import VideoList from './components/video_list.js';
import VideoDetail from './components/video_detail.js';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

const API_KEY='AIzaSyCZ2aQ73ZXf-eEwqn5XGkdHfNCCiNr91cY';


//const is ES6 syntax. Declaring a variable.
//<div> - JSX. Dialect of JS.
class App  extends Component {

    constructor(props) {
        super(props);

        this.state = { videos: [], selectedVideo : null};

        this.videoSearch('surfboards');
    }

    videoSearch(term) {
        YTSearch({key:API_KEY, term}, (data) => {
            this.setState({videos:data, selectedVideo: data[0]})
        });
    }

    render() {
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
        //Passing props 'videos'
       return (
                <div>
                    <SearchBar onSearchTermChange={videoSearch}/>
                    <VideoDetail video={this.state.selectedVideo} />
                    <VideoList
                        onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
                        videos={this.state.videos} />
                </div>
            );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));