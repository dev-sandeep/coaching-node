import mongoose from 'mongoose';
import User from './User.js';

const { Schema, model } = mongoose;

const userSchema = new Schema({
    fname: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 25
    },
    address: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 50
    },
    mob: {
        type: Number,
        required: true,
        minLength: 10,
        maxLength: 10
    }
});

const blogSchema = new Schema(
    {
    // title: {
    //     type: String,
    //     required: [true, 'Title is required!'], // specify your error message,
    //     minLength: 4
    // },
    title: {
        type: String,
        required: [true, 'aray title bhool gya!']
    },
    slug: String,
    published: Boolean,
    author: String,
    content: String,
    tags: [String],
    createdAt: {
        type: Date,
        default:Date.now()
    },
    updatedAt: Date,
    comments: [{
        user: {
            type: String,
            required: true
        },
        content: String,
        votes: Number
    }]
});

blogSchema.pre('save', function(next) {
    this.updated = Date.now(); // update the date every time a blog post is saved
    next();
  });


const Blog = model('Blog', blogSchema);
export default Blog;