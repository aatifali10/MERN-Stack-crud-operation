const mongoose = require("mongoose");
const express = require("express");
const app = express();

app.use(express.json()); //middlewear  ( between req and response : )
// request : middlewear : response
// middlewear is nothing just a function can used for : authentication authorization and other stuff

// 2. connect database
try {
  const connectionString =
    "mongodb+srv://aatifwarraich10:admin@cluster0.nonbwzw.mongodb.net/";

  mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = mongoose.connection;

  db.once("open", () => {
    console.log("Connected to MongoDB Atlas");
  });
} catch (error) {
  db.on("error", console.error.bind(console, "MongoDB connection error:"));
  console.log(error.message);
}

try {
  // route /home : get method se  : single page
  app.get("/home", (req, res) => {
    res.send("<h1> this is big cow </h1>");
  });
  // controller : muiltipage
  // Router.get
  // Router.post
} catch (error) {
  console.log(error.message);
}

//express server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
