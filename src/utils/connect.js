const mongoose = require('mongoose');

const DEFAULT_OPTIONS = {
  bufferCommands: false,
  bufferMaxEntries: 0,
};

module.exports = (uri, options = DEFAULT_OPTIONS) => mongoose.connect(uri, options);
