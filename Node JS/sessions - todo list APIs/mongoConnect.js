const { MongoClient } = require("mongodb");

exports.dbConnect = (connectionString) => {
    const client = new MongoClient(connectionString);
    // Connect the client to the server (optional starting in v4.7)
    client.connect();
    // Establish and verify connection
    return client.db('admin').collection("user");
}