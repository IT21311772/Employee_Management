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

// API route for Update method in CRUD operations
router.put('/update/:id', async(req, res) => {
    try {
        const updateEmployee = await Employee.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if (!updateEmployee) {
            return res.status(404).json({error: 'Could not find Employee'});
        }
        res.json(updateEmployee);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Could not update data'});
    }
});

// API route for delete method in CRUD operations
router.delete('/delete/:id', async(req, res) => {
    try {
        const deleteEmployee = await Employee.findByIdAndDelete(req.params.id);
        if (!deleteEmployee) {
            return res.status(404).json({ error: 'Could not find Employee' });
        }
        res.json(deleteEmployee);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Could not delete data' });
    }
});

module.exports = router;