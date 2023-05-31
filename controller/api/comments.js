const router = require('express').Router();
const { Comments } = require('../../models');
const withAuth = require("../../utils/auth");

router.get('/', async (req, res) => {
    try {
      const dbCommentsData = await Comments.findAll();
  
      // const comment = dbCommentsData.get({ plain: true });
      // res.render('comment', { comment, loggedIn: req.session.loggedIn });
      res.status(201).json(dbCommentsData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
});

// GET ONE COMMENT
router.get('/:id', async (req, res) => {
    try {
      const dbCommentsData = await Comments.findByPk(req.params.id);
  
      // const comment = dbCommentsData.get({ plain: true });
      // res.render('comment', { comment, loggedIn: req.session.loggedIn });
      res.status(201).json(dbCommentsData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
});

// POST A NEW COMMENT
router.post('/', withAuth, async (req, res) => {
    try {
      // create a new category
      const newComment = await Comments.create({
        comment: req.body.comment,
        date_created: req.body.date_created,
        user_id: req.body.user_id,
        blog_id: req.body.blog_id,
      });
      res.status(201).json(newComment);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  // UPDATE A COMMENT BASED ON ID
  router.put('/:id', async (req, res) => {
    try {
      const updatedComment = await Comments.update(
        {
          comment: req.body.comment,
          date_created: req.body.date_created,
          user_id: req.body.user_id,
          blog_id: req.body.blog_id,
        },
        {
          where: {
            id: req.session.id,
          },
        }
      );
      if (!updatedComment[0]) {
        res.status(404).json({ message: 'No comment found with this id!' });
        return;
      }
      res.json({ message: 'Comment updated successfully' });
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  // DELETE A COMMENT BASED ON ID
  router.delete('/:id', async (req, res) => {
    try {
      // delete a category by its `id` value
      const deletedComment = await Comments.destroy({
        where: {
          id: req.params.id,
        },
      });
      if (!deletedComment) {
        res.status(404).json({ message: 'Comment not found' });
        return;
      }
      res.json({ message: 'Comment was deleted successfully!' });
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;
