import React, {useState} from 'react';
import axios from '../../../Axios/Axios'
import './Login.css'
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput
}
from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate()

  const initialValue = {
    username: "",
    password: "",
  };

  const [formValues, setFormValues] = useState(initialValue);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/login", {
        username: formValues.username,
        password: formValues.password
      })
      .then(function (response) {
        if (response.data.success) {
          const jwtToken = response.data.token
          console.log(jwtToken);
          localStorage.setItem("userToken",jwtToken)
          navigate('/home')
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  return (
    <MDBContainer fluid>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>
<form onSubmit={handleSubmit}>
          <MDBCard className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px',paddingBottom:'0px'}}>
            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100' style={{backgroundColor:'black'}}>

              <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
              <p className="text-white-50 mb-5">Please enter your login and password!</p>

              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Username' id='formControlLg' type='name' name='username'  value={formValues.username} onChange={handleChange} size="lg"/>
              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Password' id='formControlLg' type='password' name='password'  value={formValues.password} onChange={handleChange} size="lg"/>

              <p className="small mb-3 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>
              <MDBBtn outline className='mx-2 px-5' color='white' size='lg'>
                Login
              </MDBBtn>

              <div>
                <p className="mb-0 mt-3">Don't have an account? <Link to="/signup" class="text-white-50 fw-bold">Sign Up</Link></p>

              </div>
            </MDBCardBody>
          </MDBCard>
          </form>
        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}

export default Login;