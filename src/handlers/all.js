const connect = require('../utils/connect');
const photoRepository = require('../repositories/photo');

module.exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  await connect(process.env.MONGO);

  const data = await photoRepository.all();

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
