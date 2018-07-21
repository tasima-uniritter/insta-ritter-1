const connect = require('../utils/connect');
const photoRepository = require('../repositories/photo');

module.exports.handler = async ({ pathParameters: { id } }, context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  await connect(process.env.MONGO);

  const data = await photoRepository.findById(id);

  return {
    statusCode: photo ? 200 : 404,
    body: {
      links: {
        self: `/photos/${id}`
      },
      data,
    }
  };
};
