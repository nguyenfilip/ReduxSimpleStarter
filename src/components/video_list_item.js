import ReactDOM from 'react-dom';
import React from 'react';


//{video} grabs the key from the hash directly
const VideoListItem = ({video}) => {
    const imageUrl = video.snippet.thumbnails.default.url;

    return (
        <li className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl}/>
                </div>
                <div className="media-body">
                    <div className="media-heading">
                        {video.snippet.title}
                    </div>
                </div>
            </div>

        </li>
    );
};



export default VideoListItem;