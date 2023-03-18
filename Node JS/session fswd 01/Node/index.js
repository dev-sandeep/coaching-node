const express = require("express");
const dotenv = require("dotenv");
const router = require("./src/app/routes");
const { mongoose } = require("mongoose");
const { MongoClient, ServerApiVersion } = require("mongodb");
const cors = require("cors");
dotenv.config();

const app = express();
app.use(cors());

//establishing mongo db connection
const uri = `mongodb+srv://user_1:64CxHaFbqEcYSZBJ@fswdcluster.zxmklke.mongodb.net/foodadda?retryWrites=true&w=majority`;
mongoose.connect(uri);

try {
  // set all the routes
  router.loadRoutes(app);
} catch (e) {
  console.log(e);
}

// start the server
const port = process.env.PORT;
app.listen(port, () => console.log("Server listening on port " + port));
