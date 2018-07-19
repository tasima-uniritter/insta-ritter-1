const PHOTOS = require('./data.json');
const dynamoose = require('dynamoose');

const photoRepository = require('../repository/photo');

dynamoose.local('http://localhost:4569');

module.exports.handler = (event, context, callback) => photoRepository.all(data => {
  const response = {
    statusCode: 200,
    body: {
      links: {
        self: '/photos',
      },
      data,
    },
  };

  callback(null, response);
});
