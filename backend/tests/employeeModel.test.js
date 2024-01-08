const mongoose = require('mongoose');
const EmployeeModel = require('../models/employeeModel');

beforeAll(async () => {
    await mongoose.connect('mongodb+srv://rishenlithan213:emp@employeecluster.c5zakvc.mongodb.net/', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
});

afterAll(async () => {
    await mongoose.connection.close();
});

describe('Employee Model Tests', () => {
    it('should create a new employee with valid data', async () => {
        const employeeData = {
            name: 'kevin',
            id: 'id001',
            salary: 100000,
            position: 'intern',
            NIC: '200104403968',
            contact: 7069211122,
            address: 'Sri lanka',
        };

        const newEmployee = await EmployeeModel.create(employeeData);

        expect(newEmployee.name).toBe(employeeData.name);
        expect(newEmployee.id).toBe(employeeData.id);
        expect(newEmployee.salary).toBe(employeeData.salary);
        expect(newEmployee.position).toBe(employeeData.position);
        expect(newEmployee.NIC).toBe(employeeData.NIC);
        expect(newEmployee.contact).toBe(employeeData.contact);
        expect(newEmployee.address).toBe(employeeData.address);
    });

    it('should require a employee details', async () => {
        const incompleteEmployee = {};

        try {
            await EmployeeModel.create(incompleteEmployee);
            fail('Validation should have failed for missing fields');
        } catch (error) {
            expect(error.name).toBe('ValidationError')
        }
    })
})