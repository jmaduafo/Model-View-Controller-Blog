const router = require("express").Router();
const { Blogs, User, Comments } = require("../models");
const withAuth = require("../utils/auth");

// GET all blogs for homepage
router.get('/', async (req, res) => {
    try {
      const dbBlogsData = await Blogs.findAll({

        where: {
            id: req.session.id
        },
        attributes: ["id", "title", "body", "user_id"],
        // order: [["created_at", "DESC"]],
        include: [
          {
            model: User,
            attributes: ["username"]
          },
          {
            model: Comments,
            attributes: ["id", "comment", "user_id", "blog_id"],
            include: {
              model: User,
              attributes: ["username"]
            }
          },
        ],
      });
  
      const blogs = dbBlogsData.map((blog) =>
        blog.get({ plain: true })
      );
      // RENDER HOMEPAGE WITH BLOG POSTS AND IF YOU'RE LOGGED IN
      res.render('dashboard', {
        blogs,
        loggedIn: req.session.loggedIn,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

router.get('/modify/:id', (req, res) => {
    Blogs.findByPk({

        where: {
            id: req.params.id
        },

        attributes: [
        'id',
        'title',
        'body',
        'user_id'
        ],
        include: [
            {
                model: User,
                attributes: ['username']
            },
            {
                model: Comments,
                attributes: [
                'id',
                'comment',
                'user_id',
                'blog_id'
                ],
                include: {
                    model: User,
                    attributes: ['username']
            }
        },
        
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
        res.render('modify-blog', {
            blog, 
            loggedIn: req.session.loggedIn
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


router.get('/new', (req, res) => {
    res.render('new-blog');
});

module.exports = router;