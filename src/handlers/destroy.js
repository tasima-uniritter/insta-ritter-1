const dynamoose = require('dynamoose');

process.env.NODE_ENV === 'local' && dynamoose.local('http://localhost:4569');

const photoRepository = require('../repositories/photo');

module.exports.handler = async ({ pathParameters: { id } }) => {
  await photoRepository.destroy(id);

  return {
    statusCode: 200,
  };
};
