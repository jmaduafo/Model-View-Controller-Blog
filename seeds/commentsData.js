const { Comments } = require('../models');

const commentData = [
	{
		"comment": "Very inciteful!"
	},
	{
		"comment": "This taught me so much"
	},
	{
		"comment": "What the heck? I've been saying this for ages!"
	},
	{
		"comment": "Hmmm... Not the best take"
	},
	{
		"comment": "Wow, amazing!"
	},
	{
		"comment": "Awesome!"
	},
	{
		"comment": "Amazing!"
	},
	{
		"comment": "Thanks for this advice"
	},
	{
		"comment": "Very helpful"
	},
	{
		"comment": "You've helped me so much"
	},
	{
		"comment": "I know what you mean!"
	},
	{
		"comment": "I am a troll :o"
	},
	{
		"comment": "I know right??"
	},
	{
		"comment": "Your message made me elevate"
	},
	{
		"comment": "Okay cool..."
	},
	{
		"comment": "Bad take :/"
	},
	{
		"comment": "I understand but at the same time, I'm lost"
	},
	{
		"comment": "Was this necessary?"
	},
	{
		"comment": "I think you might have to rethink on this"
	},
	{
		"comment": "..."
	},
	{
		"comment": "What is this?"
	}
]

const seedComments = () => Comments.bulkCreate(commentData);

module.exports = seedComments;