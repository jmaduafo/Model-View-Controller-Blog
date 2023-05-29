const router = require("express").Router();
const { Blogs, User, Comments } = require("../models");
const sequelize = require("../config/connection");

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

router.get('/post/:id', (req, res) => {
    Blogs.findByPk({

        where: {
            id: req.params.id
        },

        attributes: [
        'id',
        'title',
        'content',
        'created_at'
        ],
        include: [
        {
            model: Comment,
            attributes: [
            'id',
            'comment',
            'user_id',
            'blog_id',
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
    .then(dbBlogData => {
        if (!dbBlogData) {
            res.status(404).json({ message: 'No Post found with this id' });
            return;
        }
        //serialize the data
        const blog = dbBlogData.get({ plain: true });

        //pass data to the template
        res.render('post-id', {
            blog, 
            loggedIn: req.session.loggedIn
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    
    // RENDER LOGIN PAGE WHEN "/login" IS REACHED
    res.render('login');
});

router.get('/register', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    
    // RENDER SIGNUP PAGE WHEN "/register" IS REACHED
    res.render('signup');
});

module.exports = router;


