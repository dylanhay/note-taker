const fs = require("fs");
const path = require("path");

//note functions

function filterByQuery(query, notesArray) {
  let filteredResults = notesArray;
  if (query.title) {
    filteredResults = filteredResults.filter(
      (note) => note.title === query.title
    );
  }
  if (query.text) {
    filteredResults = filteredResults.filter(
      (note) => note.text === query.text
    );
  }
  return filteredResults;
}

function findById(id, notesArray) {
  const result = notesArray.filter((note) => note.id === id)[0];
  return result;
}

function createNewNote(body, notesArray) {
  const note = body;
  notesArray.push(note);
  fs.writeFileSync(
    path.join(__dirname, "../data/notes.json"),
    JSON.stringify({ notes: notesArray }, null, 2)
  );
  return note;
}

function deleteNote(id, notesArray) {
  notesArray.splice(id, 1);
  fs.writeFileSync(
    path.join(__dirname, "../data/notes.json"),
    JSON.stringify({ notes: notesArray }, null, 2)
  );
  return id;
}

function validateNote(note) {
  if (!note.title || typeof note.title !== "string") {
    return false;
  }
  if (!note.text || typeof note.text !== "string") {
    return false;
  }
  return true;
}

module.exports = {
    filterByQuery,
    findById,
    createNewNote,
    deleteNote,
    validateNote
  };