var mongoose = require('mongoose');

// define the model for the persons
var userSchema = mongoose.Schema({
  id: mongoose.Schema.ObjectId,
  firstName: { type: String, default: '' },
  lastName: { type: String, default: '' },
  dateCreated: { type: Date, default: Date.now },
  phone: { type: String, default: '' },
  email: { type: String, default: '' },
  password: { type: String, default: '' },
  admin: { type: Boolean, default: false }
});

module.exports = mongoose.model('User', userSchema);
