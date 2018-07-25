const dynamoose = require('dynamoose');
const uuid = require('uuid/v1');

const schema = new dynamoose.Schema({
  id: {
    type : String,
    hashKey : true,
    default : uuid,
    required: true,
  },
  uri: {
    type: String,
    required: false,
  },
  title: {
    type: String,
    required: false,
  },
}, {
  timestamps: true,
});

module.exports = dynamoose.model('Photo', schema);
