const express = require('express');
const commentController = require('../controllers/comment.controller');

const router = express.Router();

router.post('/comments', commentController.createComment);
router.get('/comments/:videoId', commentController.getCommentsByVideoId);

module.exports = router;