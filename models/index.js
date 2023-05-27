const User = require('./User');
const Blogs = require('./Blogs');
const Comments = require('./Comments');

Blogs.hasMany(Comments, {
  foreignKey: 'blog_id',
});

Comments.belongsTo(Blogs, {
  foreignKey: 'blog_id',
});

module.exports = { User, Blogs, Comments };