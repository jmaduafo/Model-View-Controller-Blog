const router = require('express').Router();
const { User, Blogs, Comments } = require('../../models');

// CREATE ALL USERS
router.get('/', async (req, res) => {
  try {
    const dbUserData = await User.findAll({
      attributes: { exclude: ["password"]},
      include: [
        {
          model: Blogs,
          attributes: ['id', 'title', 'body', 'date_created', 'user_id']
        },
        {
          model: Comments,
          attributes: ['id', 'comment', 'date_created', 'user_id', 'blog_id']
        }
      ]
    });

    res.status(200).json(dbUserData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET ONE USER
router.get('/:id', async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      attributes: { exclude: ["password"]},
      where: {
        id: req.params.id
      },
      include: [
        {
          model: Blogs,
          attributes: ['id', 'title', 'body', 'date_created', 'user_id']
        },
        {
          model: Comments,
          attributes: ['id', 'comment', 'date_created', 'user_id', 'blog_id']
        }
      ]
    });

    res.status(200).json(dbUserData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// CREATE NEW USER
router.post('/', async (req, res) => {
  try {
    const dbUserData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// LOGIN 
router.post('/login', async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!dbUserData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;

      res
        .status(200)
        .json({ user: dbUserData, message: 'You are now logged in!' });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// LOGOUT
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

//update a user by id number
router.put('/:id', (req, res) => {
  User.update(req.body, {
    individualHooks: true,
    where: {
      id: req.params.id
    }
  })
  .then(dbUserData => {
    if (!dbUserData[0]) {
      res.status(404).json({ message: 'No User found with this id' });
      return;
    }
    res.json(dbUserData);
  })
  .catch(err => {
    res.status(500).json(err);
  });
});

//Delete a user by id number
router.delete('/:id', (req, res) => {
  User.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(dbUserData => {
    if (!dbUserData) {
      res.status(404).json({ message: 'No User found with this id' });
      return;
    }
    res.json(dbUserData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;