import React, { useState } from "react";
import { Button } from 'react-bootstrap';
import backimage from '../assets/background.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  const [userName, setUserName] = useState('');
  const [password, setPass] = useState('');

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log(userName);
      console.log(password);
  }

  const formStyle={
    textAlign: 'center', 
    minHeight: '600px',
    borderRadius: '5px',
    boxSizing: 'border-box',
    padding: '3%',
    backgroundColor : '#014E58',
    display:'flex',
    flexDirection:'column'
  }


  return (
  
    <div className="d-flex justify-content-center align-items-center" style={{backgroundSize: 'cover', height:'100vh'}}>
        
        <img src={backimage} alt="" style={{ objectFit:'cover', height: '100%', width: '100%', opacity:' 0.55 ', position:'absolute',zIndex:'-500'}}  />
            <div className="col-12 d-flex flex-column align-items-center" >
                <h1 style={{textAlign: 'center',padding: '3%', color:'#014E58', top: '58px',fontFamily: 'Raleway',fontWeight: '700',fontSize: '48px'}}>Log In</h1>
  
                <form className="col-12 col-sm-7 col-md-5" onSubmit={handleSubmit} style={formStyle}>         
                    <input data-testid="userName" value={userName} onChange={(e) => setUserName(e.target.value)}type="userName" placeholder="User Name" id="userName" name="userName" />
                    <input data-testid="password" value={password} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Password" id="password" name="password" />              
                    <div className="link-next"><a href="/signup"  >Don't have an account? Sign up here. </a></div>         
                    <Button type="submit" size="lg" style={{marginTop: '20%',borderRadius: '60px', background:'#EDFEFF', color:'#05260A', padding: '10px 48px',fontWeight:'bold', margin: 'auto',display: 'block'}}>Log In</Button>
                
                </form>
            </div>
 </div>
  )
}

export default Login