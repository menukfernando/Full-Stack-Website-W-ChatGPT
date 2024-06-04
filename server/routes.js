// server/routes.js

const express = require('express');
const pool = require('./db');
const router = express.Router();

// Get all videos
router.get('/videos', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM videos');
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// Add a new video
router.post('/videos', async (req, res) => {
    const { user_id, title, description, video_url } = req.body;
    try {
        const newVideo = await pool.query(
            'INSERT INTO videos (user_id, title, description, video_url) VALUES ($1, $2, $3, $4) RETURNING *',
            [user_id, title, description, video_url]
        );
        res.json(newVideo.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
