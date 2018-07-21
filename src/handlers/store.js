const connect = require('../utils/connect');
const photoRepository = require('../repositories/photo');

module.exports.handler = async ({ body }, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  await connect(process.env.MONGO);

  const data = await photoRepository.store(body);

  const response = {
    statusCode: 200,
    body: {
      links: {
        self: "/photos"
      },
      data,
    }
  };

  callback(null, response);
};
