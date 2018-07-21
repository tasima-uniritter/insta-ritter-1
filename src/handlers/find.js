const connect = require('../utils/connect');
const photoRepository = require('../repositories/photo');

module.exports.handler = async ({ pathParameters: { id } }, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  await connect(process.env.MONGO);

  const data = await photoRepository.findById(id);

  const response = {
    statusCode: photo ? 200 : 404,
    body: {
      links: {
        self: `/photos/${id}`
      },
      data,
    }
  };

  callback(null, response);
};
