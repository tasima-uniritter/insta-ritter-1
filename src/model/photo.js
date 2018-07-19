const dynamoose = require('dynamoose');

module.exports = dynamoose.model('Photo', dynamoose.Schema({
  id: Number,
  uri: String,
  title: String,
}));
