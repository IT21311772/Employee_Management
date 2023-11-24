// Import required modules
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

const userRoutes = require('./routes/userRoutes');

app.use("/api/user", userRoutes);

mongoose
    .connect("mongodb+srv://rishenlithan213:emp@employeecluster.c5zakvc.mongodb.net/")
    .catch((err) => console.log(err));

app.listen(3001, function() {
    console.log("Server is running");
});