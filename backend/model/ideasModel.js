const mongoose = require('mongoose');

const ideaSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  by: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const ideas = mongoose.model('Ideas', ideaSchema);

module.exports = ideas;
