import React, { useState } from "react";
import { Button } from 'react-bootstrap';
import backimage from '../assets/background.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log(email);
      console.log(name);
  }
  const formStyle={
    textAlign: 'center', 
    width: '500px',
    minHeight: '600px',
    borderRadius: '5px',
    boxSizing: 'border-box',
    padding: '5%',
    backgroundColor : '#014E58',
    position: 'absolute'
  }

  return (
    <div className="d-flex justify-content-center align-items-center" style={{backgroundSize: 'cover' ,position:'absolute'}}>
        
    <img src={backimage} alt="" style={{ width: '100%', opacity:' 0.55 ' }}  />
     <h1 style={{textAlign: 'center',padding: '10%', color:'#014E58', position: 'absolute', top: '58px',fontFamily: 'Raleway',fontWeight: '700',fontSize: '64px'}}>Sign Up</h1>
  
      <form onSubmit={handleSubmit} style={formStyle}>
    
          <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Full Name" />
          
          
          <input value={userName} name="name" onChange={(e) => setUserName(e.target.value)} id="name" placeholder="User Name" />
          
         
          <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="Email" id="email" name="email" />
          
         
          <input value={password} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Password" id="password" name="password" />
          
          <div className="link-next" >
          <a href="/login">Already have an account? Login here.</a>
          </div>
          <Button size="lg" style={{marginTop: '10%',borderRadius: '60px', background:'#EDFEFF', color:'#05260A', padding: '10px 48px',fontWeight:'bold', margin: 'auto',display: 'block'}}>Submit</Button>
         
      </form>
      
  </div>
  )
}

export default SignUp