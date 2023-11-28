const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        id: {
            type: String,
            required: true,
        },
        salary: {
            type: Number,
            required: true,
            min: 0,
        },
        position: {
            type: String,
            required: true,
        },
        NIC: {
            type: String,
            required: true,
            length: 10,
        },
        contact: {
            type: Number,
            required: true,
            length: 10,
        },
        address: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Employee", employeeSchema);