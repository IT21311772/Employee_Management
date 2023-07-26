import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AddEmployee.css';

function AddEmployee() {

    const navigate = useNavigate();
    const [employee, setEmployee] = useState({
        name: "",
        phone: "",
        address: "",
        position: "",
        salary: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setEmployee((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
    };

    const [nameError, setNameError] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [addressError, setAddressError] = useState("");
    const [positionError, setPositionError] = useState("");
    const [salaryError, setSalaryError] = useState("");

    const validateForm = () => {
        let valid = true;

        if (employee.name === '') {
            setNameError('Please Enter the name');
            valid = false;
        } else {
            setNameError('');
        }

        if (employee.phone === '') {
            setPhoneError('Please Enter the Phone Number');
            valid = false;
        } else if (employee.phone.length !== 10) { // Removed the parentheses from .length()
            setPhoneError('Please Enter a valid Phone Number');
            valid = false;
        } else {
            setPhoneError('');
        }

        if (employee.address === '') { // Corrected the typo in the ID
            setAddressError('Please Enter the Address');
            valid = false;
        } else {
            setAddressError('');
        }

        if (employee.position === '') {
            setPositionError('Please Select the position');
            valid = false;
        } else {
            setPositionError('');
        }

        if (employee.salary === '') {
            setSalaryError('Please Enter the Salary');
            valid = false;
        } else if (isNaN(employee.salary)) {
            setSalaryError('Please Enter a valid Salary');
            valid = false;
        } else {
            setSalaryError('');
        }

        return valid;
    };

    const handleClick = (event) => {
        if (validateForm()) {
            axios.post("/api/emp/create", employee)
                .then((res) => console.log(res))
                .catch((err) => console.log(err));

            navigate("/employees"); // Corrected the route
        }
    };

    return (
        <div className="add">
            <Form className="form">
                <h1>Add Employee</h1>
                <Form.Group className="form-group">
                    <Form.Control
                        className="form-control"
                        name="name"
                        id="name"
                        placeholder="Enter Employee Name"
                        onChange={handleChange}
                        value={employee.name}
                    />
                    {nameError && <div className="error">{nameError}</div>}
                    <br /><br />

                    <Form.Control
                        className="form-control"
                        name="phone"
                        id="phone"
                        placeholder="Enter Employee Contact-No"
                        onChange={handleChange}
                        value={employee.phone}
                    />
                    {phoneError && <div className="error">{phoneError}</div>}
                    <br /><br />

                    <Form.Control
                        className="form-control"
                        name="address"
                        id="address" // Corrected the typo
                        placeholder="Enter Employee Address"
                        onChange={handleChange}
                        value={employee.address}
                    />
                    {addressError && <div className="error">{addressError}</div>}
                    <br /><br />

                    <Form.Select
                        className="form-control"
                        name="position"
                        id="position"
                        onChange={handleChange}
                        value={employee.position}
                        style={{ color: "white", paddingLeft: "0.5%", width: "52%" }}
                    >
                        <option>Select Job Role</option>
                        <option>Manager</option>
                        <option>Employee</option>
                        <option>Intern</option>
                    </Form.Select>
                    {positionError && <div className="error">{positionError}</div>}
                    <br /><br />

                    <Form.Control
                        className="form-control"
                        name="salary"
                        id="salary"
                        placeholder="Enter Employee Salary"
                        onChange={handleChange}
                        value={employee.salary}
                    />
                    {salaryError && <div className="error">{salaryError}</div>}
                    <br /><br />
                </Form.Group>
                <Button onClick={handleClick}>Add Employee</Button>
            </Form>
        </div>
    )
}

export default AddEmployee;
