const express = require('express');
const path = require('path');
const fs = require('fs');
const notes = require('./Develop/db/db');
const PORT = 3004;
const app = express();

// parse incoming string or array data
app.use(express.urlencoded({ extended: true}));
// parse incoming JSON data
app.use(express.json());

console.log(notes);

// This function takes req.body from notes post api and adds input to my json file
function createNewNote(body, notesArray) {
    const newNote = body;
    notesArray.push(newNote);
    // Add this new note to our notes json file
    fs.writeFileSync(
        path.join(__dirname, './Develop/db/db'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );
    return body;
}

// api call to get notes in json format
app.get('/api/notes', (req, res) => {
    res.json(notes);
});

app.post('/api/notes', (req, res) => {
    // set id based on what the next index of the array will be
    req.body.id = notes.length.toString();
    // call function to add the new note to our notes json file
    const note = createNewNote(req.body, notes);
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