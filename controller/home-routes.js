const express = require("express").Router;
const { Blogs, User, Comments } = require("../models");
const sequelize = require("../config/connections");

// GET all blogs for homepage
router.get('/', async (req, res) => {
    try {
      const dbBlogsData = await Blogs.findAll({
        attribute: ["id", "title", "content", "created_at"],
        include: [
          {
            model: User,
            attributes: ["username"]
          },
          {
            model: Comments,
            attributes: ["id", "comment", "user_id", "blog_id", "created_at"],
            include: {
              model: User,
              attributes: ["username"]
            }
          },
          {
            model: User,
            attributes: ["username"]
        }
        ],
      });
  
      const blogs = dbBlogsData.map((blog) =>
        blog.get({ plain: true })
      );
      // RENDER HOMEPAGE WITH BLOG POSTS AND IF YOU'RE LOGGED IN
      res.render('homepage', {
        blogs,
        loggedIn: req.session.loggedIn,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });



router.get('/login', (req, res) => {
if (req.session.loggedIn) {
    res.redirect('/');
    return;
}

// RENDER LOGIN PAGE WHEN "/LOGIN" IS REACHED
res.render('login');
});

router.get('/post/:id', (req, res) => {
Post.findOne({
    where: {
    id: req.params.id
    },
    attributes: [
    'id',
    'title',
    'post_text',
    'created_at'
    ],
    include: [
    {
        model: Comment,
        attributes: [
        'id',
        'comment_text',
        'post_id',
        'user_id',
        'created_at'
        ],
        include: {
        model: User,
        attributes: ['username']
        }
    },
    {
        model: User,
        attributes: ['username']
    }
    ]
})
.then(dbPostData => {
    if (!dbPostData) {
    res.status(404).json({ message: 'No Post found with this id' });
    return;
    }
    //serialize the data
    const post = dbPostData.get({ plain: true });

    //pass data to the template
    res.render('single-post', {
    post, 
    loggedIn: req.session.loggedIn
    });
})
.catch(err => {
    console.log(err);
    res.status(500).json(err);
});
});

module.exports = router;


