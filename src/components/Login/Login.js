import React, { useState } from 'react';
import { Button} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import './Login.css';
import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import app from '../../Firebase/firebase.init';
import { ToastContainer ,toast } from 'react-toastify';

const Login = () => {

  const auth = getAuth(app);
  const [errorPass, setErrorPass] = useState(false)
  const [success,setSuccess] = useState(false);
  // set the state to reserved the email 
  const [userEmail,setUserEmail]  = useState('');

  const handleLogin =  (event) => {
    // dont refresh page 
    event.preventDefault();
    setSuccess(false);
    setErrorPass(false);

     // declare the vlau
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
   console.log(email,password)
  // call the signin method 
  signInWithEmailAndPassword(auth,email,password)
  .then((result) => {
    const user = result.user;
    console.log(user);
    setSuccess(true);
    setErrorPass(false)
    toast.success(' Successfully Login', {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
      form.reset();
  })
  .catch(error => {
    const errorMessage = error.message; 
    setErrorPass(errorMessage);
  })
   
  }
 // to get email make an handlar onBLur 
 const getEmailOnBlur = (event) => {
   const getEmail = event.target.value;
   setUserEmail(getEmail);
   console.log()
 }

  // make the handlar to reset the password 
  const resetPassword = () => {
    if(!userEmail){
      alert('Please enter your email to reset your password')
      return ;

    }
    else{
      sendPasswordResetEmail(auth,userEmail)
      alert('Please check your email to get reset password link ')

    }

  }

    return (

      <div className='login-main'>
       <div className='login'> 
       <h3 className='text-light'> Please Log in now </h3>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label className='text-light'>Email address</Form.Label>
        <Form.Control type="email" name='email' onBlur={getEmailOnBlur} placeholder="Enter email" required />
      </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label className='text-light'>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" required />

        </Form.Group>
        <Button type='submit'  > Log in </Button>
         { errorPass && <p className='text-warning'> {errorPass} </p>}
          {success && <p className='text-info'> Successfully Login </p> }
          <p className='text-white'> Forget Password ? <Link className='text-info' onClick={resetPassword} > Reset Password </Link> </p>

        <p className='text-white '> You have no account ?  <Link to= '/SignUp' className='text-info' > Sign in here </Link>  </p>
      </Form>
        </div>
        
        <ToastContainer
          position="top-center"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          />
      </div>
    );
};

export default Login ;   