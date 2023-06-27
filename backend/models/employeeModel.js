const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const empSchema = mongoose.Schema(
    {
        _id: {
            type: String,
            default: uuidv4, // Generate a unique ID using uuidv4()
        },
        name: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        position: {
            type: String,
            required: true,
        },
        salary: {
            type: Number,
            required: true,
        },
    },

    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Employees", empSchema);

