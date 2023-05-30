const { Comments } = require('../models');

const commentData = [
	{
		"comment": "Very inciteful!",
		"user_id": 1,
		"blog_id": 1
	},
	{
		"comment": "This taught me so much",
		"user_id": 1,
		"blog_id": 1
	},
	{
		"comment": "What the heck? I've been saying this for ages!",
		"user_id": 1,
		"blog_id": 1
	},
	{
		"comment": "Hmmm... Not the best take",
		"user_id": 1,
		"blog_id": 1
	},
	{
		"comment": "Wow, amazing!",
		"user_id": 1,
		"blog_id": 1
	},
	{
		"comment": "Awesome!",
		"user_id": 2,
		"blog_id": 2
	},
	{
		"comment": "Amazing!",
		"user_id": 2,
		"blog_id": 2
	},
	{
		"comment": "Thanks for this advice",
		"user_id": 2,
		"blog_id": 2
	},
	{
		"comment": "Very helpful",
		"user_id": 2,
		"blog_id": 2
	},
	{
		"comment": "You've helped me so much",
		"user_id": 2,
		"blog_id": 2
	},
	{
		"comment": "I know what you mean!",
		"user_id": 3,
		"blog_id": 3
	},
	{
		"comment": "I am a troll :o",
		"user_id": 3,
		"blog_id": 3
	},
	{
		"comment": "I know right??",
		"user_id": 3,
		"blog_id": 3
	},
	{
		"comment": "Your message made me elevate",
		"user_id": 3,
		"blog_id": 3
	},
	{
		"comment": "Okay cool...",
		"user_id": 3,
		"blog_id": 3
	},
	{
		"comment": "Bad take :/",
		"user_id": 4,
		"blog_id": 4
	},
	{
		"comment": "I understand but at the same time, I'm lost",
		"user_id": 4,
		"blog_id": 4
	},
	{
		"comment": "Was this necessary?",
		"user_id": 4,
		"blog_id": 4
	},
	{
		"comment": "I think you might have to rethink on this",
		"user_id": 4,
		"blog_id": 4
	},
	{
		"comment": "...",
		"user_id": 4,
		"blog_id": 4
	},
	{
		"comment": "What is this?",
		"user_id": 5,
		"blog_id": 5
	}
]

const seedComments = () => Comments.bulkCreate(commentData);

module.exports = seedComments;