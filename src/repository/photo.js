const Photo = require('../model/photo');

module.exports.all = () => Photo.scan().exec();

module.exports.find = query => Photo.get(query).then(({ item }) => item);
