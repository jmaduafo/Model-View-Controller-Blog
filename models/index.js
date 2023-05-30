const User = require('./User');
const Blogs = require('./Blogs');
const Comments = require('./Comments');

//Associations
User.hasMany(Blogs);

Blogs.belongsTo(User);

Comments.belongsTo(User);

Comments.belongsTo(Blogs);

User.hasMany(Comments);

Blogs.hasMany(Comments);

module.exports = { User, Blogs, Comments };