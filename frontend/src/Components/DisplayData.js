import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Styles/Data.css';
import { Form, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';

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

  const deleteData = (id) => {
    axios.delete(`/api/emp/delete/${id}`)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

    window.location.reload();
  }

  return (
    <div className='content'>
      <Modal show={show} onHide={handleClose} className='modal'>
        <Modal.Header>
          <Modal.Title style={{marginLeft: "36%", marginBottom: "2%", marginTop: "3%", fontSize: "18px", fontWeight: "bold"}}>Update Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{width:"100%", height:"200%"}}>
          <Form className='updateForm'>
            <Form.Group>
              <Form.Control
                name='id'
                value={updatedData.id ? updatedData.id : "" }
                onChange={handleChange}
                style={{width: "80%",
                fontSize: "15px",
                padding: "11px 10px",
                margin: "10px 0",
                border: "1px solid #373B61",
                boxSizing: "border-box",
                display: "block",
                marginLeft: "10%"}}
              />
              <Form.Control
                name='name'
                value={updatedData.name ? updatedData.name : "" }
                onChange={handleChange}
                style={{width: "80%",
                fontSize: "15px",
                padding: "11px 10px",
                margin: "10px 0",
                border: "1px solid #373B61",
                boxSizing: "border-box",
                display: "block",
                marginLeft: "10%"}}
              />
              <Form.Control 
                name='NIC'
                value={updatedData.NIC ? updatedData.NIC : "" }
                onChange={handleChange}
                style={{width: "80%",
                fontSize: "15px",
                padding: "11px 10px",
                margin: "10px 0",
                border: "1px solid #373B61",
                boxSizing: "border-box",
                display: "block",
                marginLeft: "10%"}}
              />
              <Form.Control 
                name='address'
                value={updatedData.address ? updatedData.address : "" }
                onChange={handleChange}
                style={{width: "80%",
                fontSize: "15px",
                padding: "11px 10px",
                margin: "10px 0",
                border: "1px solid #373B61",
                boxSizing: "border-box",
                display: "block",
                marginLeft: "10%"}}
              />
              <Form.Control 
                name='position'
                value={updatedData.position ? updatedData.position : "" }
                onChange={handleChange}
                style={{width: "80%",
                fontSize: "15px",
                padding: "11px 10px",
                margin: "10px 0",
                border: "1px solid #373B61",
                boxSizing: "border-box",
                display: "block",
                marginLeft: "10%"}}
              />
              <Form.Control 
                name='salary'
                value={updatedData.salary ? updatedData.salary : "" }
                onChange={handleChange}
                style={{width: "80%",
                fontSize: "15px",
                padding: "11px 10px",
                margin: "10px 0",
                border: "1px solid #373B61",
                boxSizing: "border-box",
                display: "block",
                marginLeft: "10%"}}
              />
              <Form.Control 
                name='contact'
                value={updatedData.contact ? updatedData.contact : "" }
                onChange={handleChange}
                style={{width: "80%",
                fontSize: "15px",
                padding: "11px 10px",
                margin: "10px 0",
                border: "1px solid #373B61",
                boxSizing: "border-box",
                display: "block",
                marginLeft: "10%"}}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={saveUpdatedData} style={{width: "25%", height: "4vh", marginTop: "1.5%", marginLeft: "20%", marginRight: "7%", backgroundColor: "#DFE2E9", borderColor:"#DFE2E9", cursor:"pointer", color:"#1d2951", fontWeight:"bold"}}>Save Changes</button>
          <button onClick={handleClose} style={{width: "25%", height: "4vh", marginTop: "1.5%", marginRight: "20%", backgroundColor: "#DFE2E9", borderColor:"#DFE2E9", cursor:"pointer", color:"#1d2951", fontWeight:"bold"}}>Close</button>
        </Modal.Footer>
      </Modal>
      
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1 style={{marginLeft:"45%"}}>Employee Data</h1>
        <button style={{ borderRadius: "5px", background: "#373B61", padding: "0.5%", border: "#373B61", alignItems: "center", width: "35px",
          height: "35px", marginRight:"10%", marginTop:"5%"}}>
          <Link to="/add" style={{ color: "#EDEFFE", textDecoration: "none", display: "flex", alignItems: "center" }}>
            <FontAwesomeIcon icon={faPlus} style={{marginLeft: "4px"}} />
          </Link>
        </button>
      </div>

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
                <td><button onClick={() => updatePost(post)} style={{borderColor:"#DFE2E9", cursor:"pointer", color:"#1d2951", fontWeight:"bold"}}>Update</button></td>
                <td><button onClick={() => deleteData(post._id)} style={{borderColor:"#DFE2E9", cursor:"pointer", color:"#1d2951", fontWeight:"bold"}}>Delete</button></td>
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
