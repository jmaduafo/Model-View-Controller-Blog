const { User } = require('../models');

const commentData = [
    {
        comment: "Very inciteful!",
        user_id: 1,
        blog_id: 1,
    },
    {
        comment: "This taught me so much",
        user_id: 1,
        blog_id: 1,
    },
    {
        comment: "What the heck? I've been saying this for ages!",
        user_id: 1,
        blog_id: 1,
    },
    {
        comment: "Hmmm... Not the best take",
        user_id: 1,
        blog_id: 1,
    },
    {
        comment: "Wow, amazing!",
        user_id: 1,
        blog_id: "",
    },
    {
        comment: "",
        user_id: 2,
        blog_id: "",
    },
    {
        comment: "",
        user_id: 2,
        blog_id: "",
    },
    {
        comment: "",
        user_id: 2,
        blog_id: "",
    },
    {
        comment: "",
        user_id: 2,
        blog_id: "",
    },
    {
        comment: "",
        user_id: 2,
        blog_id: "",
    },
    {
        comment: "",
        user_id: 3,
        blog_id: "",
    },
    {
        comment: "",
        user_id: 3,
        blog_id: 3,
    },
    {
        comment: "",
        user_id: 3,
        blog_id: 3,
    },
    {
        comment: "",
        user_id: 3,
        blog_id: 3,
    },
    {
        comment: "",
        user_id: 3,
        blog_id: 3,
    },
    {
        comment: "",
        user_id: 4,
        blog_id: 4,
    },
    {
        comment: "",
        user_id: 4,
        blog_id: 4,
    },
    {
        comment: "",
        user_id: 4,
        blog_id: 4,
    },
    {
        comment: "",
        user_id: 4,
        blog_id: 4,
    },
    {
        comment: "",
        user_id: 4,
        blog_id: 4,
    },
    {
        comment: "",
        user_id: 5,
        blog_id: 5,
    },

    
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;