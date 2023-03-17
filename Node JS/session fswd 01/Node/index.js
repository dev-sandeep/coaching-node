const express = require("express");
const dotenv = require("dotenv");
const router = require("./src/app/routes");
const { mongoose } = require("mongoose");
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require("cors");
dotenv.config();

//establishing mongo db connection
async function connectToMongoDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log(err);
  }
}

connectToMongoDB();
app.use(cors());

//establishing mongo db connection
// mongoose.connect("mongodb://localhost:27017/foodadda");
const uri = `mongodb+srv://${process.env.UNAME}:${process.env.PASS}@cluster0.kmear1s.mongodb.net/${process.env.DB}?retryWrites=true&w=majority`;
mongoose.connect(uri);
  const app = express();  

    // set all the routes
  router.loadRoutes(app);

    // start the server
  const port = process.env.PORT;
  app.listen(port, () => console.log('Server listening on port ' + port));
    // client.close();
// });
