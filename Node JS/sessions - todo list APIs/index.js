const express = require("express");
const ObjectId = require('mongodb').ObjectId;
const dotEnv = require("dotenv");
const mongo = require("./mongoConnect");
const app = express();

dotEnv.config();

// middleware to parse raw body in post call
app.use(express.json());
const todoList = mongo.dbConnect(process.env.MONGO_URL);

/**
 * sample API
 */
app.get('/sample', async (req, res) => {
    const result = await todoList.findOne({});
    res.send(result.name);
});

/**
 * save the todo item
 */
app.post('/save', async (req, res) => {
    if(!req.body.name){
        // throw new Error("Name is a mandatory field.");
        res.status(400).send("{msg: Bad request - missing name}");
    }
    let payLoad = {
        name: req.body.name,
        status: false
    };

    const resp = await todoList.insertOne(payLoad);
    res.send(resp);
});

/**
 * get the list of items
 */
app.get('/list', async (req, res) => {
    const resp = await todoList.find().toArray();
    res.send(resp);
});

/**
 * get a specific item
 */
app.get('/list/:id', async (req, res) => {
    // We have to convert the normal ID to object ID
    const id = new ObjectId(req.params.id);
    const resp = await todoList.findOne({ _id: id });
    res.send(resp);
})

/**
 * update a specific item
 */
app.put('/list/:id', async (req, res) => {
    // We have to convert the normal ID to object ID
    const id = new ObjectId(req.params.id);
    console.log(req.body.name);
    const resp = await todoList.findOneAndUpdate({
        _id: id
    }, {
        $set: {
            name: req.body.name,
        }
    });
    console.log(resp);
    res.send("Updated");
})

/**
 * deleting a specific item
 */
app.delete('/list/:id', async (req, res) => {
    const id = new ObjectId(req.params.id);
    const resp = await todoList.deleteOne({
        _id: id
    });
    res.send(resp);
})

/**
 * updating status
 */
app.patch('/list/:id', async (req, res) => {
    const id = new ObjectId(req.params.id);
    const resp = await todoList.findOneAndUpdate({
        _id: id
    }, {
        $set: {
            status: req.body.status,
        }
    });
    res.send(resp);
})

/**
 * creating the server
 */
app.listen(process.env.PORT, () => console.log('Server listening on port ' + process.env.PORT))