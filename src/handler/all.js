const PHOTOS = require("./data.json");

module.exports.handler = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: {
      links: {
        self: "/photos"
      },
      data: PHOTOS
    }
  };

  callback(null, response);
};
