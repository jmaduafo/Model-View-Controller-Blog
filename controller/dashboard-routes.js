const router = require("express").Router();
const { Blogs, User, Comments } = require("../models");
const withAuth = require("../utils/auth");

// GET all blogs for dashboard
router.get('/', async (req, res) => {
    try {
      const dbBlogsData = await Blogs.findAll({

        where: {
            id: req.session.id
        },
        attributes: ["id", "title", "body", 'date_created', "user_id"],
        order: [["date_created", "DESC"]],
        include: [
          {
            model: User,
            attributes: ["username"]
          },
          {
            model: Comments,
            attributes: ["id", "comment", 'date_created', "user_id", "blog_id"],
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
  
// GET all blogs for dashboard
// router.get('/', withAuth, async (req, res) => {
//   try {
// 		const userData = await User.findByPk(req.session.user_id, {
// 			attributes: {
// 				exclude: ['password']
// 			},
// 			include: [{
// 				model: Blogs
// 			}],
// 		});

// 		const user = userData.get({
// 			plain: true
// 		});

// 		res.render('dashboard', {
// 			...user,
// 			logged_in: req.session.loggedIn,
// 		});
// 	} catch (err) {
// 		res.status(500).json(err);
// 	}
// })

// router.get('/:id', (req, res) => {
//     Blogs.findByPk({

//         where: {
//             id: req.params.id
//         },

//         attributes: [
//         'id',
//         'title',
//         'body',
//         'date_created',
//         'user_id'
//         ],
//         include: [
//             {
//                 model: User,
//                 attributes: ['username']
//             },
//             {
//                 model: Comments,
//                 attributes: [
//                 'id',
//                 'comment',
//                 'date_created',
//                 'user_id',
//                 'blog_id'
//                 ],
//                 include: {
//                     model: User,
//                     attributes: ['username']
//             }
//         },
        
//         ]
//     })
//     .then(dbBlogData => {
//         if (!dbBlogData) {
//             res.status(404).json({ message: 'No Post found with this id' });
//             return;
//         }
//         //serialize the data
//         const blog = dbBlogData.get({ plain: true });

//         //pass data to the template
//         res.render('modify-blog', {
//             blog, 
//             loggedIn: req.session.loggedIn
//         });
//     })
//     .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//     });
// });


// router.get('/new', (req, res) => {
//     res.render('dashboard');
// });

module.exports = router;