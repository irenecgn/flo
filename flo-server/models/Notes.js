const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  note: {
    type: String,
  },
});

module.exports = mongoose.model('Note', NoteSchema);
