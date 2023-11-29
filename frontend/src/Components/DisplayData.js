import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Styles/Data.css';

function DisplayData() {
  const [data, setData] = useState([]);

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
                <td><button>Update</button></td>
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
