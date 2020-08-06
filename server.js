const express = require('express');
const path = require('path');
const { notes } = require('./Develop/db/db.json');
const PORT = 3004;
const app = express();

// serves index.html page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './Develop/public/index.html'));
});

// serves notes.html page
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './Develop/public/notes.html'));
});


app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});