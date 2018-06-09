console.log('Starting notes');

const fs = require('fs');

var fetchnotes = () => {
  try {
    var notestring = fs.readFileSync('notes-data.json');
    return JSON.parse(notestring);
  } catch (e) {
      return [];
  }
  
};

var savenotes = (notes) => {
  fs.writeFileSync('notes-data.json',JSON.stringify(notes));
};

var addnote = (title, body) => {
  notes = fetchnotes();
  note = {
    title,
    body
  };

  var duplicatestring = notes.filter((note)  =>  note.title  ===  title);

  if (duplicatestring.length === 0) {
    notes.push(note);
    savenotes(notes);
    return note;
  }
  
};

var getAll = () => {
  console.log('Getting notes');
};



var getNote = (title) => {
  var notes = fetchnotes();
  var filteredNotes = notes.filter((note) => note.title === title);
  return filteredNotes[0];
};

var remove = (title) => {
  var notes = fetchnotes();
  var removenote = notes.filter((note)  =>  note.title  !==  title);
  savenotes(removenote);
  return notes.length !== removenote.length;
};


var lognote = (note) => {
  console.log('--');
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
};


module.exports = {
  addnote,
  getAll,
  getNote,
  remove,
  lognote
};