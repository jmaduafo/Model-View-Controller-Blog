const router = require("express").Router();
const { User, Blogs, Comments } = require("../models");

// GET all blogs for homepage
router.get('/', async (req, res) => {
    try {
      const dbBlogsData = await Blogs.findAll({
        attributes: ["id", "title", "body"],
        include: [
          {
            model: Comments,
            attributes: ["id", "comment"],
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
        blogs
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
        'body',
        ],
        include: [
        {
            model: Comments,
            attributes: [
            'id',
            'comment',
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
    res.render('login');
});

module.exports = router;


