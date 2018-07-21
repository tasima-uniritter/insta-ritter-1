const Photo = require('../models/photo');

module.exports.all = options => Photo.find({}, options).exec();

module.exports.findById = id => Photo.findById(id).exec();

module.exports.store = data => {
  const photo = new Photo(data);

  return photo.save();
};
