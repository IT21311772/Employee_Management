import React, {useState} from 'react';
import '../Styles/Signup.css';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { Form } from 'react-bootstrap';

function SignUp() {

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [formError, setFormError] = useState({
    username: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const validateField = (name, value) => {
    const errors = { ...formError };

    switch(name) {
      case 'username':
        errors.username = value.length < 3 ? 'Username is too short' : '';
        break;
      case 'email':
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        errors.email = !emailPattern.test(value) ? 'Invalid email address' : '';
        break;
      case 'password':
        errors.password = value.length < 6 ? 'Password is too short' : '';
        break;
      default:
        break;
    }

    setFormError(errors);
  };

  const handleChange = (e) => {
    const {name, value} = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    validateField(name, value);
  };

  const isFormValid = () => {
    return !Object.values(formError).some((error) => error.length > 0);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (isFormValid()) {
      try {
        const response = await axios.post('/api/user/signup', formData);

        if (response.status === 200) {
          const responseData = response.data;
          console.log('User signed up successfully:', responseData);
          navigate('login');
        } else {
          const errorData = response.data;
          console.log('Signup error:', errorData);
        }
      } catch (error) {
        console.error('Request error:', error);
      }
    }
  }

  return (
    <div className='container'>
      <div className="signup">
        <h1>Administrator Signup</h1>
        <Form onSubmit={handleSignup} className='form'>
          <Form.Group>
            <Form.Label style={{marginRight: "61%"}}>Username :</Form.Label>
            <Form.Control 
              name='username'
              id='username'
              placeholder='Enter Username'
              onChange={handleChange}
              type='text'
              value={formData.username}
              required
            />
            <div className="error">{formError.username}</div>

            <Form.Label style={{marginRight: "70%"}}>Email :</Form.Label>
            <Form.Control
              name='email'
              id='email'
              placeholder='Enter Email'
              onChange={handleChange}
              value={formData.email}
              type='email'
              required
            />
            <div className="error">{formError.email}</div>

            <Form.Label style={{marginRight: "62%"}}>Password :</Form.Label>
            <Form.Control
              name='password'
              id='password'
              type='password'
              onChange={handleChange}
              value={formData.password}
              placeholder='Enter Password'
              required
            />
            <div className="error">{formError.password}</div>
          </Form.Group>
          <button className='signupBtn'>Sign up</button>
          <p className='para'>Already have an account?<Link to='/login' className='link'>  Login</Link></p>
        </Form>
      </div>
    </div>
  )
}

export default SignUp;
