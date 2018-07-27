const dynamoose = require('dynamoose');

process.env.NODE_ENV === 'local' && dynamoose.local('http://localhost:4569');

const photoRepository = require('../repositories/photo');

module.exports.handler = async ({ body }) => {
  const data = await photoRepository.store(JSON.parse(body));

  return {
    statusCode: 200,
    body: {
      links: {
        self: '/photos'
      },
      data,
    }
  };
};
