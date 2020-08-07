const express = require('express');
const path = require('path');
const notes = require('./Develop/db/db');
const PORT = 3004;
const app = express();

// parse incoming string or array data
app.use(express.urlencoded({ extended: true}));
// parse incoming JSON data
app.use(express.json());

console.log(notes);

// api call to get notes in json format
app.get('/api/notes', (req, res) => {
    res.json(notes);
});

app.post('/api/notes', (req, res) => {
    // set id based on what the next index of the array will be
    req.body.id = notes.length.toString();
    res.json(req.body);
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