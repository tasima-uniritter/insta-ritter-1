const AWS = require('aws-sdk');
const request = require('axios');
const uuid = require('uuid/v4');

const Photo = require('../models/photo');

const s3 = new AWS.S3({
  endpoint: process.env.NODE_ENV === 'local' ? 'http://localhost:4572' : null,
});

module.exports.all = () => Photo.scan().exec();

module.exports.findById = id => Photo.scan({ id }).exec();

module.exports.store = async ({ uri, ...data }) => {
  const type = uri.split(';')[0].split('/')[1];
  const filename = `${uuid()}.${type}`;
  const base64Data = new Buffer(uri.replace(/^data:image\/\w+;base64,/, ""), 'base64')

  await s3.putObject({
    Bucket: process.env.BUCKET,
    Key: filename,
    Body: base64Data,
    ContentEncoding: 'base64',
    ContentType: `image/${type}`
  }).promise();

  const s3Uri = await new Promise((resolve, reject ) => s3.getSignedUrl('getObject', {
    Bucket: process.env.BUCKET,
    Key: filename,
  }, (err, uri) => {
    if (err) reject(err);

    resolve(uri);
  }));

  return Photo.create({
    ...data,
    uri: s3Uri,
  });
};

module.exports.destroy = id => Photo.delete({ id });
