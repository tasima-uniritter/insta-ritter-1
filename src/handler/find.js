const PHOTOS = require("./data.json");

module.exports.handler = ({ pathParameters: { id } }, context, callback) => {
  const photo = PHOTOS.find(photo => photo.id == id);

  const response = {
    statusCode: photo ? 200 : 404,
    body: {
      links: {
        self: `/photos/${id}`
      },
      data: photo
    }
  };

  callback(null, response);
};
