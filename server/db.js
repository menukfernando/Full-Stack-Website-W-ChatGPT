// server/db.js

const { Pool } = require('pg');

const pool = new Pool({
    user: 'menuk',
    host: 'localhost',
    database: 'video_database',
    password: 'qst123.@est',
    port: 5432,
});

module.exports = pool;
