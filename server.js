// server/server.js
const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the 'client' folder
app.use(express.static(path.join(__dirname, '../client')));

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});
// API route to get notes
app.get('/api/notes', (req, res) => {
  // Replace this with actual logic to fetch notes from a database or other source
  const notes = [];
  res.json(notes);
});

// API route to save a new note
app.post('/api/notes', (req, res) => {
  // Replace this with actual logic to save a new note
  const newNote = req.body;
  // Save the note and respond with appropriate data
  res.json(newNote);
});

// API route to delete a note
app.delete('/api/notes/:id', (req, res) => {
  // Replace this with actual logic to delete a note
  const noteId = req.params.id;
  // Delete the note and respond with appropriate data
  res.json({ message: 'Note deleted successfully' });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
