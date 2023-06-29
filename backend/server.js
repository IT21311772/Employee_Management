// Import libraries
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Use the middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false}));

const empRoutes = require('../backend/routes/employeeRouter');
app.use("/api/emp", empRoutes);


// Create database connection
mongoose.connect("mongodb+srv://rishenlithan213:rishenEmp@employees.kechuvg.mongodb.net/").catch((err) => console.log(err));


// Checks the server
app.listen(3001, function () {
    console.log("Server is running");
});