const router = require('express').Router();
const commentsRoutes = require('./comments');
const blogRoutes = require('./blogs');
const userRoutes = require('./user');

router.use('/comments', commentsRoutes);
router.use('/posts', blogRoutes);
router.use('/users', userRoutes);

module.exports = router;