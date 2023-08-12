// eslint-disable-next-line no-unused-vars
import axios from 'axios';
import { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login= () => {
const [email,setEmail] = useState('');
const [password,setPassword]= useState('');

const emailRef= useRef(null);
const passwordRef=useRef(null);

const navigate = useNavigate();

const handleSubmit=(e)=>{
//console.log(email,password)
e.preventDefault();
axios.post('http://localhost:3000/login',{email,password})
.then(result=>{
    console.log(result)
    if(result.data==="Success"){
        navigate('/home');
    }
    else{
        alert("Incorrect Email or Password, TRY again!")
    }
    
})
.catch(err=>console.log(err))
//.....clearing the input field after form submission

//.....using ref
emailRef.current.value='';
passwordRef.current.value='';
//.......clearing the state variables
setEmail('');
setPassword('');

}
  return (
   <>
    <h1 className='text-center'>Welcome to the login page! </h1>
   <div className="login-container">
   
    <form onSubmit={handleSubmit} >
      <div className="login-form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Enter your email" required 
        onChange={(e)=>setEmail(e.target.value)}
        ref={emailRef}
        />
      </div>
      <div className="login-form-group">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="Enter your password" required
        onChange={(e)=>setPassword(e.target.value)}
        ref={passwordRef}/>
      </div>
      <button type="submit" className="btn-register">Login</button>
    </form>
    <div className="text-center">
      <p>Are you a new user? 
        <Link to={"/register"}><button className="btn-login">Register First</button></Link>
        
        </p>
    </div>
  </div>


   </>
  );
};

export default Login;
