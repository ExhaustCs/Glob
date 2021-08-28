console.clear();
const express = require("express");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
require("dotenv").config();

const app = express();
const PORT = 8080;
mongoose
  .connect(process.env.MONGODB_URL)
  .then(console.log("database connected"))
  .catch((error) => console.log(error));

// middleware
app.use(express.json()); // -> Allows to parse json data
app.use("/api/auth", authRoute);

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
