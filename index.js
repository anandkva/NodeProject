const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();
const port = process.env.PORT;
const mongo = process.env.MONGODB;
const customerSchema = new mongoose.Schema({ name: String, age: Number, email: String });
const Customer = mongoose.model('Customer', customerSchema);

app.get("/", async (req, res) => {
  const data = await Customer.find();
  console.log(data)
  res.json({data});
});

app.listen(port, () => {
  console.log("Connect Port: ", port);
});

mongoose.connect(
  `${mongo}`,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (!err) {
      console.log("Database Connected");
    } else {
      console.log("Database Not Connected", err);
    }
  }
);


module.exports = mongoose;
