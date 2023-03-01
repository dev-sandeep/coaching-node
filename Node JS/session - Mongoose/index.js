import mongoose from 'mongoose';
import Blog from './model/Blog.js';

mongoose.connect("mongodb://localhost:27017/admin");

// Create a new blog post object
const save = async ()=>{
    if(1==1 || !checkIfExists()){
        const article = await Blog.create({
            title: 'valid title 1',
            slug: 'awesome-post fox13',
            published: true,
            content: 'This is the best post ever',
            tags: ['featured', 'announcement'],
          });
          console.log(article);
    }else{
        console.log("title already exists");
    }
}

const findById = async (_id = '63ff4eb56f4518312440d038')=>{
    const article = await Blog.findById(_id).exec();
    console.log("article find =>", article);
}

// UPDATE <table> WHERE title='aav' SET title='nbre'
const update = async (id)=>{
    const article = await Blog.findById(id);
    article.title = "Updated Title1";
    await article.save();
    console.log(article);
}

const checkIfExists = async()=>{
    const isExists = await Blog.exists({title: 'fox12'});
    console.log(isExists);
}
//SELECT title FROM <table> WHERE title='fox1'
const whereClause = async ()=>{
    const resp = await Blog.where('title').equals('fox1').select('title').exec();
    console.log(resp);
}

const deleteQuery = async ()=>{
    const resp = await Blog.deleteMany({title: 'fox1'});
    console.log(resp);
}


save();
// findById("63ff7692aa9c14ebe564abcd");
// checkIfExists();
// whereClause();
// deleteQuery();
// update("63ff799682b85a0b511fdff0");



// const article = new Blog({
//   title: 'Awesome Post!',
//   slug: 'awesome-post',
//   published: true,
//   content: 'This is the best post ever',
//   tags: ['featured', 'announcement'],
// });

// // Insert the article in our MongoDB database
// await article.save();