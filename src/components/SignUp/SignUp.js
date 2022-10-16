import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import app from '../../Firebase/firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';


function Register() {
    const auth = getAuth(app);
    // make a state to show the error massage conditionally 
    const [errorPassword,setErrorPassword] = useState('');
    //set success ,when find respons from firebase by then.
    const [success,setSuccess] = useState(false);

// make an eventhandlar to apply form to get value 
 const handleRegister = event => {
    event.preventDefault();
    setSuccess(false);
    // target the form 
    const form = event.target ;
    const email = form.email.value;
    const password = form.password.value; 
    console.log(email,password);
    

   // if not find the Two Upper case Letter show the error and return
   // using !exlamation ,it means  if not found two upper case 
   if(!/(?=.*[A-Z])/.test(password)){
    setErrorPassword('Please provide at least one Uppercase Letter')
    return ;
   }
   
   // if not found an one special character 
   else if ( ! /(?=.*[!@#$&*])/.test(password)) {
    setErrorPassword('Please provide  at least one special character')
    return ;
   }
 
   // if not found a Digit or number 
   else if(!/(?=.*[0-9])/.test(password)){
    setErrorPassword('Please provide atleast one digit')
    return ;
   }
   else if( password.length < 6){
    setErrorPassword('Please provide password atleast 6 characters')
    return ;    
   }
   else{
    setErrorPassword('');
   }

    // call the function to create an user account of firebase 
    createUserWithEmailAndPassword(auth,email,password) 
    .then((userResult) => {
        const userId = userResult.user;
        console.log(userId)
       //toast apply when account create successfully 
        toast.success('Successfully created account,Please Check your email inbox or spam folder to verify email ', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        setSuccess(true);
        verifyEmail()
        // reset form when the account created successfully 
        form.reset();
    })
    .catch(error => {
        console.error('error occur ',error)
        const errorMessage = error.message;
        setErrorPassword(errorMessage);
      
    })
}
    
// make the function to send the verify email 
const verifyEmail = () =>{
  sendEmailVerification(auth.currentUser)
  .then(() => {
    
  })
}
  return (
    <div className='w-50 mx-auto bg-secondary px-5 ' >
        <h2 className='text-center'> Sign Up Now </h2>
        <Form  onSubmit={handleRegister} >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email" required />
     
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
      <p className=' text-light'> Password type: Uppercase,Special-Character,Digit must give atleast 6 character   </p>
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" title='If you given 6 characters,you will not see the successfully created account remove password and write again ' placeholder="Password" name='password' required />
      </Form.Group>
      <p className='text-danger' > {errorPassword} </p>
       {success && <p className='text-light' >Successfully created account </p> }
      <Button variant="primary" type="submit"   >
        Submit
      </Button>
     
      <Button variant='danger' type='reset' style={{marginLeft:'20px'}} > Reset </Button>
     <p className='text-white pb-5'> You have already an account ? <Link to= '/Login' className='text-info' >Log in here </Link> </p>
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
    </Form>
    
    </div>

  );
}

export default Register;