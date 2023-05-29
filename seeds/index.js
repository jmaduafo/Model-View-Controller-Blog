const sequelize = require('../config/connection');
const seedUsers = require('./userData');
const seedComments = require('./commentData');
const seedBlogs = require('./blogData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();
  await seedBlogs();
  await seedComments();
  

  process.exit(0);
};

seedAll();


