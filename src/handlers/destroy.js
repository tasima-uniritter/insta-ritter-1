const dynamoose = require('dynamoose');

true && dynamoose.local('http://localhost:4569');

const photoRepository = require('../repositories/photo');

module.exports.handler = async ({ pathParameters: { id } }) => {
  await photoRepository.destroy(id);

  return {
    statusCode: 200,
  };
};
