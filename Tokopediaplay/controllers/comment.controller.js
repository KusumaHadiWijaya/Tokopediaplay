const commentService = require('../services/comment.service');

const createComment = async (req, res) => {
  const { videoId, name, text } = req.body;
  try {
    const comment = await commentService.createComment(videoId, name, text);
    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create comment' });
  }
};

const getCommentsByVideoId = async (req, res) => {
  const { videoId } = req.params;
  try {
    const comments = await commentService.getCommentsByVideoId(videoId);
    res.json(comments);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get comments' });
  }
};

module.exports = {
  createComment,
  getCommentsByVideoId,
};