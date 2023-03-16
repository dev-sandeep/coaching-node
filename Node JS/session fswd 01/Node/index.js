const express = require("express");
const dotenv = require("dotenv");
const router = require("./src/app/routes");
const { mongoose } = require("mongoose");
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

const app = express();
app.use(cors());

// set all the routes
router.loadRoutes(app);

// start the server
const port = process.env.PORT;
app.listen(port, () => console.log("Server listening on port " + port));
