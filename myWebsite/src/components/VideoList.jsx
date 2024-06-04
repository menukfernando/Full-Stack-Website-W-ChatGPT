// src/components/VideoList.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const VideoList = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/videos');
                setVideos(response.data);
            } catch (error) {
                console.error('Error fetching videos:', error);
            }
        };

        fetchVideos();
    }, []);

    return (
        <div>
            <h1>Video List</h1>
            <ul>
                {videos.map(video => (
                    <li key={video.id}>{video.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default VideoList;
