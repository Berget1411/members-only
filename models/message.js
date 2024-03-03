const mongoose = require('mongoose');

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
    type: Date,
    default: () => Date.now(),
  },

  author: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
  },
});

module.exports = mongoose.model('messages', messageSchema);
