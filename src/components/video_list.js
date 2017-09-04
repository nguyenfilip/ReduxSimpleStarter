import ReactDOM from 'react-dom';
import React from 'react';
import VideoListItem from './video_list_item.js';


const VideoList = (props) => {
    const videos = props.videos;
    return (
        <ul className="col-md-4 list-group">
            {
                videos.map((video) => {
                    return <VideoListItem key={video.etag} video={video} />
                })
            }
        </ul>
    );
};

export default VideoList;