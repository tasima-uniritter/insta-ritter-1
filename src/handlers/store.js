const dynamoose = require('dynamoose');

process.env.NODE_ENV === 'local' && dynamoose.local('http://localhost:4569');

const photoRepository = require('../repositories/photo');

const AWS = require('aws-sdk');
const s3 = new AWS.S3();

module.exports.handler = async ({ body }) => {
  const data = await photoRepository.store(JSON.parse(body));
  var request = require('request').defaults({ encoding: null });

  request.get(data.uri, function (error, response, bodyImage) {
    if (!error && response.statusCode == 200) {
      var fileContent = "data:" + response.headers["content-type"] + ";base64," + new Buffer(bodyImage).toString('base64');
      s3.putObject({
        Bucket: 'local-bucket',
        Key: data.uri,
        Body: fileContent,
      }, function (err) {
        if (err) { console.log(err); }
      });
    }
  });

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
