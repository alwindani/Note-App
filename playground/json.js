const fs = require('fs');

var orginalnote = {
  title: 'some title',
  body: 'some body'
};

var orginalnotestring = JSON.stringify(orginalnote);

fs.writeFileSync('notes.json', orginalnotestring);

var notestring = fs.readFileSync('notes.json');

var note = JSON.parse(notestring);
console.log(typeof note);
console.log(note);