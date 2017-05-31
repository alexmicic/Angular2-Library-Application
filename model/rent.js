var mongoose = require('mongoose');
var User = require('./user');
var Book = require('./book');

// define the model for the persons
var rentSchema = mongoose.Schema({
  id: mongoose.Schema.ObjectId,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  books: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Book' }],
  dateRented: { type: Date, default: Date.now },
  notes: { type: String, default: '' },
  returned: { type: Boolean, default: false }
});

module.exports = mongoose.model('Rent', rentSchema);
