const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  f_name: {
    type: String,
    maxLength: 50,
    required: true,
  },
  l_name: {
    type: String,
    maxLength: 50,
    required: true,
  },
  username: {
    type: String,
    maxLength: 50,
    required: true,
  },
  password: {
    type: String,
    maxLength: 50,
    required: true,
  },
});

module.exports = mongoose.model('users', userSchema);
