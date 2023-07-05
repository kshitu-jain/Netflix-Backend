const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./routes/appRoute");
const mongoose = require("mongoose");
const MONGODB_URI = "mongodb://127.0.0.1:27017/netflix";

app.use(cors());
app.use("/", routes);
app.use(express.json()); //it will enable all incoming json
app.use(express.urlencoded({ extended: false }));

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    app.listen(3001, () => {
      console.log("server started on port:", 3001);
    });
  })
  .catch((err) => {
    console.log("db error", err);
  });
