const express = require('express')
const { MongoClient } = require('mongodb')

const client = new MongoClient('mongodb://127.0.0.1:27017');
client.connect();

exports.yourOrders = async (req, res) => {
    try {
        const db = client.db('foodadda');
        const mydata = await db.collection('Orders').find().toArray();
        res.json(mydata);
    }catch(err){
        console.log(err);
        res.status(500).send('Internal Server Error');

    }
}