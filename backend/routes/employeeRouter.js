const express = require('express');
const router = express.Router();
const Post = require('../models/employeeModel');

// API routes for CRUD operations
router.post("/create", (req, res) =>{
    Post.create({
        _id: req.body._id,
        name: req.body.name,
        phone: req.body.phone,
        address: req.body.address,
        position: req.body.position,
        salary: req.body.salary
    })
    .then((doc) => console.log(doc))
    .catch((err) => console.log(err));
});

router.get("/posts", (req, res) =>{
    Post.find()
        .then((items) => res.json(items))
        .catch((err) => console.log(err));
});

router.delete("/delete/:id", (req, res) =>{
    Post.findByIdAndDelete({_id: req.body._id})
        .then((doc) => console.log(doc))
        .catch((err) => console.log(err));
});

router.put("/update/:id", (req, res) =>{
    Post.findByIdAndUpdate(
        {_id: req.body._id},
        {
            name: req.body.name,
            phone: req.body.phone,
            address: req.body.address,
            position: req.body.position,
            salary: req.body.salary,
        }
    )
    .then((doc) => console.log(doc))
    .catch((err) => console.log(err));
});

module.exports = router;