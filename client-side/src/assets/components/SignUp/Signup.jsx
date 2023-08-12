// eslint-disable-next-line no-unused-vars
import axios from 'axios';
import { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';

 const Signup = () => {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState(''); 
  const navigate = useNavigate();
   
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  
//setting up the cors policy 
axios.defaults.withCredentials =true;
const handleSubmit =(e)=>{
 
e.preventDefault();
  //.......fetching data from the server side using axios.......
  axios.post('http://localhost:3000/register', {name,email,password})
 .then(result =>(
  console.log(result),
  navigate('/login')
 ))
  .catch((err)=>console.log(err))
 
  // Clear the input fields using refs
  nameRef.current.value = '';
  emailRef.current.value = '';
  passwordRef.current.value = '';
  
  // Clear the state variables
  setName('');
  setEmail('');
  setPassword('');
  
  }
  return (
   <>
      <h1 className='text-center'> Sign Up first to Visit our Website. </h1>

   <div className="register-container">
    <form onSubmit={handleSubmit}>
      
      <div className="register-form-group">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" placeholder="Enter your name" required 
        ref={nameRef}
        onChange={(e)=>setName(e.target.value)}/>
      </div>

      <div className="register-form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Enter your email" required
        ref={emailRef}
        onChange={(e)=> setEmail(e.target.value)}/>
      </div>

      <div className="register-form-group">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="Enter your password" required
        ref={passwordRef}
        onChange={(e)=>setPassword(e.target.value)}/>
      </div>
      <button type="submit" className="btn-register">Register</button>
    </form>
    <div className="text-center">
      <p>Already have an account? 
        <Link to={"/login"}><button className="btn-login">Login</button></Link>
        
        </p>
    </div>
  </div>
   </>
  );
};

export default Signup;
