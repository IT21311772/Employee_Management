// Import required modules
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');

const app = express();

app.use(cors());
app.use(bodyParser.json()); // It allows the server to easily work with JSON data sent in the request body.
app.use(express.urlencoded({ extended: false })); // the data will be parsed with the querystring library instead of a third-party library.
// querystring library: A built-in Node.js library for parsing and formatting URL query strings.

const userRoutes = require('./routes/userRoutes');
const employeeRoutes = require('./routes/employeeRouter');

app.use("/api/user", userRoutes);
app.use("/api/emp", employeeRoutes);

mongoose
    .connect("mongodb+srv://rishenlithan213:emp@employeecluster.c5zakvc.mongodb.net/")
    .catch((err) => console.log(err));

app.listen(3001, function() {
    console.log("Server is running");
});