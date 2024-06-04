// src/components/VideoCard.js

import React from 'react';
import placeholderThumbnail from '../../../assets/code.jpg'; 
import './VideoCard.css'; 

const VideoCard = ({ video }) => {
    return (
        <div className="video-cards">
        <div className="video-card">
            <img src={video.thumbnail_url || placeholderThumbnail} alt={video.title} />
            <div className="video-info">
                <h2>{video.title}</h2>
                <p>{video.description}</p>
                <a href={video.video_url} target="_blank" rel="noopener noreferrer">Watch Video</a>
            </div>
        </div>
        </div>

    );
};

export default VideoCard;
