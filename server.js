const express = require('express');
const path = require('path');
const notes = require('./Develop/db/db');
const PORT = 3004;
const app = express();

// parse incoming string or array data
// app.use(express.urlencoded({ extended: true}));
// parse incoming JSON data
// app.use(express.json());

console.log(notes);

// api call to get notes in json format
app.get('/api/notes', (req, res) => {
    res.json(notes);
});


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