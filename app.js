console.log('starting app');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');
const argv = yargs.argv;
var command = process.argv[2];


if (command === 'add') {
   var note = notes.addnote(argv.title, argv.body);
   if (note) {
     console.log('Note created');
     notes.lognote(note);
   } else {
     console.log('Note title taken');
   }


} else if ( command === 'list') {
  notes.getAll();


} else if ( command === 'read') {
  var note = notes.getNote(argv.title);
  if (note) {
    console.log('Note read');
    notes.lognote(note);
  } else {
    console.log('Note not found');
  }


} else if ( command === 'remove') {
  var removednote = notes.remove(argv.title);
  var message = removednote ? 'Note removed' : 'Note not found';
  console.log(message);


} else {
  console.log('command not recognizable');
}


