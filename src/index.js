import ReactDOM from 'react-dom';
import React, {Component} from 'react';
import SearchBar from './components/search_bar.js';
import VideoList from './components/video_list.js';
import YTSearch from 'youtube-api-search';

const API_KEY='AIzaSyCZ2aQ73ZXf-eEwqn5XGkdHfNCCiNr91cY';


//const is ES6 syntax. Declaring a variable.
//<div> - JSX. Dialect of JS.
class App  extends Component {

    constructor(props) {
        super(props);

        this.state = { videos: [] };

        YTSearch({key:API_KEY, term:'surfboards'}, (data) => {
            this.setState({videos:data})
        });

    }

    render() {
        //Passing props 'videos'
       return (
                <div>
                    <SearchBar />
                    <VideoList videos={this.state.videos} />
                </div>
            );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));