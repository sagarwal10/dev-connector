const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    text: {
        type: String,
        required: true
    },
    // Identity of who posted - we store this (instead of the 
    // posters user id in case the poster deletes their account
    name: {
        type: String,
    },
    avatar: {
        type: String
    },
    likes: [
        {
            user: {
                type: Schema.Types.ObjectId,
                ref: 'users'
	    }
        }
    ],
    comments: [
        {
            user: {
                type: Schema.Types.ObjectId,
                ref: 'users'
	    },
	    text: {
		type: String,
		rrequired: true
	    },
	    name: {
		type: String
	    },
	    avatar: {
		type: String
	    },
	    date: {
		type: Date,
		default: Date.now
	    },
        }
     ],
     date: {
	type: Date,
	default: Date.now
     }
});

module.exports = Post = mongoose.model('post', PostSchema);


