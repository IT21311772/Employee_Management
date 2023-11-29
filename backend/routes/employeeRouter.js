const express = require('express');
const router = express.Router();
const Employee = require('../models/employeeModel');

// API route for Create method in CRUD operations
router.post('/add', async (req, res) => {
    try {
        const employee = await Employee.create(req.body);
        res.status(201).json(employee);
        console.log(employee);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Could not add Employee'});
    }
});

// API route for Read method in CRUD operations
router.get('/get', async (req, res) => {
    try {
        const empData = await Employee.find();
        res.json(empData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Could not retieve data'});
    }
});

module.exports = router;