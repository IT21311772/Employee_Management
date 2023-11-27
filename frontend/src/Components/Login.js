import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import '../Styles/Signup.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    const loginData = { email, password };

    try {
      const response = await axios.post('api/user/login', loginData);

      if (response.status === 200) {
        const responseData = response.data;
        console.log('User logged in successfully', responseData);
        navigate('employees');
      } else {
        const errorData = response.data;
        console.error('User login failed', errorData);
        setError('Invalid Credentials, Please try again');
      }
    } catch (error) {
      console.error('Request Error', error);
      setError('An Error occured during the login');
    }
  };

  return (
    <div className='container'>
      <div className="login">
        <h1>Administrator Login</h1>
        <Form onSubmit={handleLogin} className='form'>
          <Form.Group>
            <Form.Control
              name='email'
              placeholder='Enter Your Email'
              required
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{width: "80%", height: "3vh"}}
            />

            <Form.Control
              name='password'
              placeholder='Enter Your Password'
              required
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{width: "80%", height: "3vh"}}
            />
            {error && <p className='error'>{error}</p>}
          </Form.Group>
          <button className='loginBtn'>Login</button>
        </Form>
        <p>Don't have an account ? <Link to = '/signup' className="link">SignUp</Link></p>
      </div>
    </div>
  )
}

export default Login;
