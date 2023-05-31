const router = require('express').Router();
const { User, Blogs, Comments } = require('../../models');
const withAuth = require("../../utils/auth")

// GET all blogs for homepage
router.get('/', async (req, res) => {
  try {
    const dbBlogsData = await Blogs.findAll({
      attribute: ['id', "title", "body", "date_created", "user_id"],
      order: [["date_created", "DESC"]],
      include: [
        {
          model: User,
          attributes: ["username"]
        },
        {
          model: Comments,
          attributes: ['id', "comment", "date_created", "user_id", "blog_id"],
          include: {
            model: User,
            attributes: ["username"]
          }
        },
      ],
    });

    // const blogs = dbBlogsData.map((blog) =>
    //   blog.get({ plain: true })
    // );
    // res.render('homepage', {
    //   blogs,
    //   loggedIn: req.session.loggedIn,
    // });

    res.json(dbBlogsData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one blog
router.get('/:id', async (req, res) => {
  try {
    const dbBlogData = await Blogs.findByPk(req.params.id, {
      attribute: ["id", "title", "body", "date_created", "user_id"],
      include: [
        {
          model: User,
          attributes: ["id", "username"]
        },
        {
          model: Comments,
          attributes: ["id", "comment", "date_created", "user_id", "blog_id"],
          include: {
            model: User,
            attributes: ["id", "username"]
          }
        },
      ],
    });

    // const blog = dbBlogData.get({ plain: true });
    // res.render('blog', { blog, loggedIn: req.session.loggedIn });

    res.json(dbBlogData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
// POST A NEW BLOG 
router.post('/', withAuth, async (req, res) => {
  try {
    // create a new category
    const newBlog = await Blogs.create({
      title: req.body.title,
      body: req.body.body,
      date_created: req.body.date_created,
      user_id: req.body.user_id
    });
    res.status(201).json(newBlog);
  } catch (err) {
    res.status(400).json(err);
  }
});

// UPDATE A BLOG BASED ON ID
router.put('/:id', async (req, res) => {
  try {
    const updatedBlog = await Blogs.update(
      {
        title: req.body.title,
        body: req.body.body,
        date_created: req.body.date_created,
        user_id: req.body.user_id,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    if (!updatedBlog[0]) {
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }
    res.json({ message: 'Post updated successfully' });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    // delete a category by its `id` value
    const deletedBlog = await Blogs.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!deletedBlog) {
      res.status(404).json({ message: 'Post not found' });
      return;
    }
    res.json({ message: 'Post was deleted successfully!' });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
