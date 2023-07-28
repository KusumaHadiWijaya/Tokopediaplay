const Comment = require('../models/comment.model');

const createComment = async (videoId, name, text) => {
  const comment = new Comment({ videoId, name, text });
  return comment.save();
};

const getCommentsByVideoId = async (videoId) => {
  return Comment.find({ videoId }).exec();
};

module.exports = {
  createComment,
  getCommentsByVideoId,
};