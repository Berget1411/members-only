const mongoose = require('mongoose');
const moment = require('moment');

const Schema = mongoose.Schema;

const messageSchema = new Schema({
  title: {
    type: String,
    maxLength: 50,
    required: true,
  },
  description: {
    type: String,
    maxLength: 100,
    required: true,
  },
  date: {
    type: String,
    default: () => moment().format('D-MM-YYYY'),
  },

  author: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('messages', messageSchema);
