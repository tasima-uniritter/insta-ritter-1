const dynamoose = require('dynamoose');
const uuid = require('uuid/v1');

const schema = new dynamoose.Schema({
  id: {
    type : String,
    hashKey : true,
    default : uuid,
  },
  uri: {
    type: String,
  },
  title: {
    type: String,
  },
}, {
  timestamps: true,
});

module.exports = dynamoose.model('Photo', schema);
