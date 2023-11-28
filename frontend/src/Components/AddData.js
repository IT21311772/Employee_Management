import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import '../Styles/AddData.css';

function AddData() {
    const [data, setData] = useState({
        name: '',
        id: '',
        salary: '',
        position: '',
        NIC: '',
        contact: '',
        address: '',
    });

    const navigate = useNavigate();

    const [nameError, setNameError] = useState('');
    const [idError, setIdError] = useState('');
    const [salaryError, setSalaryError] = useState('');
    const [positionError, setPositionError] = useState('');
    const [nicError, setNicError] = useState('');
    const [contactError, setContactError] = useState('');
    const [addressError, setAddressError] = useState('');

    const validateForm = () => {
        let valid = true;

        const name = document.getElementById('name');
        if (data.name === '') {
            name.setCustomValidity('Please Enter the Name');
            setNameError('Please Enter the Name')
            valid = false;
        } else {
            name.setCustomValidity('');
            setNameError("");
        }

        const id = document.getElementById('id');
        if (data.id === '') {
            id.setCustomValidity('Please Enter the ID');
            setIdError('Please Enter the ID');
            valid = false;
        } else {
            id.setCustomValidity('');
            setIdError('');
        }

        const salary = document.getElementById('salary');
        if (data.salary === '') {
            salary.setCustomValidity('Please Enter the Salary');
            setSalaryError('Please Enter the Salary')
            valid = false;
        } else if (isNaN(data.salary)) {
            salary.setCustomValidity('Please Enter valid details');
            setSalaryError('Please Enter valid details');
            valid = false;
        } else {
            salary.setCustomValidity('');
            setSalaryError("");
        }

        const position = document.getElementById('position');
        if (data.position === '') {
            position.setCustomValidity('Please Enter the Position');
            setPositionError('Please Enter the Position');
            valid = false;
        } else {
            position.setCustomValidity('');
            setPositionError('');
        }

        const nic = document.getElementById('NIC');
        if (data.NIC === '') {
            nic.setCustomValidity('Please Enter the NIC');
            setNicError('Please Enter the NIC');
            valid = false;
        } else if (data.NIC.length !== 12) {
            nic.setCustomValidity('Please Enter a valid NIC');
            setNicError('Please Enter a valid NIC');
            valid = false;
        } else {
            nic.setCustomValidity('');
            setNicError('');
        }

        const contact = document.getElementById('contact');
        if (data.contact === '') {
            contact.setCustomValidity('Please Enter a Contact Number');
            setContactError('Please Enter a Contact Number');
            valid = false;
        } else if (data.contact.length !== 10) {
            contact.setCustomValidity('Please Enter a valid Contact Number');
            setContactError('Please Enter a valid Contact Number');
            valid = false;
        } else {
            contact.setCustomValidity('');
            setContactError('');
        }

        const address = document.getElementById('address');
        if (data.address === '') {
            address.setCustomValidity('Please Enter the Address');
            setAddressError('Please Enter the Address');
            valid = false;
        } else {
            address.setCustomValidity('');
            setAddressError('');
        }

        return valid;
    }

    const handleSubmit = async(e) => {
        e.preventDefault();

        if (validateForm()) {
            axios.post('/api/emp/add', data)
            .then((res) => console.log(res))
            .catch((err) => console.log(err));

            navigate('employees')
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;

        setData((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
    };


  return (
    <div className='container'>
        <div className="add">
        <Form className='form'>
            <h1>Add Employee</h1>
            <Form.Group>
                <Form.Control 
                    name='name'
                    id='name'
                    value={data.name}
                    placeholder='Enter Employee Name'
                    type='text'
                    required
                    onChange={handleChange}
                />
                {nameError && <div className='error'>{nameError}</div>}

                <Form.Control 
                    name='id'
                    id='id'
                    type='text'
                    placeholder='Enter Employee ID'
                    value={data.id}
                    required
                    onChange={handleChange}
                />
                {idError && <div className='error'>{idError}</div>}

                <Form.Control 
                    name='salary'
                    id='salary'
                    type='text'
                    placeholder='Enter Employee Salary'
                    value={data.salary}
                    required
                    onChange={handleChange}
                />
                {salaryError && <div className='error'>{salaryError}</div>}

                <Form.Control 
                    name='position'
                    id='position'
                    placeholder='Enter Employee Position'
                    type='text'
                    value={data.position}
                    required
                    onChange={handleChange}
                />
                {positionError && <div className='error'>{positionError}</div>}

                <Form.Control 
                    name='NIC'
                    id='NIC'
                    type='text'
                    placeholder='Enter Employee NIC'
                    value={data.NIC}
                    required
                    onChange={handleChange}
                />
                {nicError && <div className='error'>{nicError}</div>}

                <Form.Control 
                    name='contact'
                    id='contact'
                    type='text'
                    placeholder='Enter Employee Contact No'
                    value={data.contact}
                    required
                    onChange={handleChange}
                />
                {contactError && <div className='error'>{contactError}</div>}

                <Form.Control 
                    name='address'
                    id='address'
                    type='text'
                    placeholder='Enter Employee Address'
                    value={data.address}
                    required
                    onChange={handleChange}
                />
                {addressError && <div className='error'>{addressError}</div>}
            </Form.Group>
            <button onClick={handleSubmit} className='addButton'>Add Employee</button>
        </Form>
      </div>
    </div>
  )
}

export default AddData;
