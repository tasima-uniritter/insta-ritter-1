const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  uri: String,
  title: String,
});

module.exports = mongoose.model('Photo', schema);
