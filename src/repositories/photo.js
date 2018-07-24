const Photo = require('../models/photo');

module.exports.all = () => Photo.scan().exec();

module.exports.findById = id => Photo.scan({ id }).exec();

module.exports.store = Photo.create;

module.exports.destroy = id => Photo.delete({ id })
