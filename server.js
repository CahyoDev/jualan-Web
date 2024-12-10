
const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

const servicesFile = './data/services.json';

// Serve static files
app.use(express.static(path.join(__dirname)));

// API to get services
app.get('/api/services', (req, res) => {
    fs.readFile(servicesFile, (err, data) => {
        if (err) return res.status(500).send('Error reading services data.');
        res.json(JSON.parse(data));
    });
});

// Fallback for SPA
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Export the app for Vercel
module.exports = app;
