const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

app.use(express.json());

// for CORS
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, x-auth-token'
  );
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
});

// retrieving environment variables

dotenv.config({path: "./config.env"});

// establishing server

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Listening to port ${port}...`);
})

// establishing connection with database

// retrieveing database environment variable

const dbURi = process.env.DATABASE;
mongoose
  .connect(dbURi)
  .then(() => {
    console.log(`Connection estabilished with database...`)
  })

// import Schemas

const FormModal = require("./formModal");

// making api routes

app.get("/formInput", (req, res) => {
  res.send("<h1>Form Input Works!</h1>")
})

app.post("/formInput", (req, res) => {
  const data = new FormModal(req.body);
  res.json(data);
  data.save()
    .then(() => console.log(`Successfully entered records`))
    .catch(err => console.log(err))
})


