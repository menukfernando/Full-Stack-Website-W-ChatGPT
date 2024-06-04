// src/components/Tutorials.js

import React, { useState, useEffect } from 'react';
import VideoCard from '../VideoCard/VideoCard';

const Tutorials = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetchVideos();
    }, []);

    const fetchVideos = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/videos'); // Adjust URL accordingly
            const data = await response.json();
            setVideos(data);
        } catch (error) {
            console.error('Error fetching videos:', error);
        }
    };

    return (
        <div className="videos-container">  
            <h1>Tutorials</h1>
            <div className="video-cards">
                {videos.map(video => (
                    <VideoCard key={video.id} video={video} />
                ))}
            </div>
        </div>
    );
};

export default Tutorials;
