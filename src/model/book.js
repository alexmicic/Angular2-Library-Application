var mongoose = require('mongoose');

// define the model for the persons
var bookSchema = mongoose.Schema({
  id: mongoose.Schema.ObjectId,
  title: { type: String, default: '' },
  stock: { type: Number, default: '' },
  author: { type: String, default: '' },
  year: { type: Number, default: '' },
  genre: { type: String, default: '' }
});

module.exports = mongoose.model('Book', bookSchema);
