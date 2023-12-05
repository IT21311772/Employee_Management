import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Styles/Data.css';
import { Form, Modal } from 'react-bootstrap';

function DisplayData() {
  const [data, setData] = useState([]);
  const [updatedData, setUpdatedData] = useState({});
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const updatePost = (data) => {
    setUpdatedData(data);
    handleShow();
  }

  const saveUpdatedData = () => {
    axios.put(`/api/emp/update/${updatedData._id}`, updatedData)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

    handleClose();
    window.location.reload();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUpdatedData((prev) => {
      return {
        ...prev,
        [name] : value,
      };
    });
  };

  useEffect(() => {
    axios.get("/api/emp/get")
    .then((res) => {
      console.log(res);
      setData(res.data);
    })
    .catch((err) => console.log(err));
  }, []);

  return (
    <div className='content'>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{width:"100%", height:"200%"}}>
          <Form>
            <Form.Group>
              <Form.Control
                name='id'
                value={updatedData.id ? updatedData.id : "" }
                onChange={handleChange}
              />
              <Form.Control
                name='name'
                value={updatedData.name ? updatedData.name : "" }
                onChange={handleChange}
              />
              <Form.Control 
                name='NIC'
                value={updatedData.NIC ? updatedData.NIC : "" }
                onChange={handleChange}
              />
              <Form.Control 
                name='address'
                value={updatedData.address ? updatedData.address : "" }
                onChange={handleChange}
              />
              <Form.Control 
                name='position'
                value={updatedData.position ? updatedData.position : "" }
                onChange={handleChange}
              />
              <Form.Control 
                name='salary'
                value={updatedData.salary ? updatedData.salary : "" }
                onChange={handleChange}
              />
              <Form.Control 
                name='contact'
                value={updatedData.contact ? updatedData.contact : "" }
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={saveUpdatedData}>Save Changes</button>
          <button onClick={handleClose}>Close</button>
        </Modal.Footer>
      </Modal>
      <h1>Employee Data</h1>
      {data ? (
        <table className='table'>
          <thead>
            <tr className='head'>
              <th>EID</th>
              <th>NAME</th>
              <th>NIC</th>
              <th>ADDRESS</th>
              <th>POSITON</th>
              <th>SALARY</th>
              <th>CONTACT</th>
              <th>UPDATE</th>
              <th>DELETE</th>
            </tr>
          </thead>
        {data.map((post) => {
          return (
            <tbody className='row'>
              <tr>
                <td>{post.id}</td>
                <td>{post.name}</td>
                <td>{post.NIC}</td>
                <td>{post.address}</td>
                <td>{post.position}</td>
                <td>{post.salary}.00</td>
                <td>{post.contact}</td>
                <td><button onClick={() => updatePost(post)}>Update</button></td>
                <td><button>Delete</button></td>
              </tr>
            </tbody>
          )
        })}
        </table>
      ) : (
        ""
      )}
    </div>
  )
}

export default DisplayData
