import React, { useState, useEffect } from "react";
import { Button, Modal } from 'react-bootstrap';
import backimage from '../assets/background.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios"
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');
  const [code, setCode] = useState('');
  const [afterCode, setAfterCode] = useState(false);

  const navigate = useNavigate()


  useEffect(() => {
      if(localStorage.getItem("token")){
          navigate("/feed")
      }
  }, [localStorage.getItem("token") ])

  //handles form submit button
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
    .post('https://api.serenitystream.tv/api/v2/auth/signup', {
      name: name,
      username: userName,
      email: email,
      password: password
     }) 
     .then((res) => {
      console.log(res.data)
      if (res.data.ResponseMetadata.HTTPStatusCode == "200") {
        
        setAfterCode(true) 
      }
    })
     .catch((err) => { 
       setAfterCode(false) 
       alert("Verify your sign in information."+"\n"+"Remember: "+"\n"+" * User Name and Email should be unique"+"\n"+" * Password should have at least one number", err);
          
    });

    
};
//handles module button
const handleCodeSubmit = () => {

  console.log(code)
  axios
  .post('https://api.serenitystream.tv/api/v2/auth/account/verification', {
    confirmation_code: code,
    username: userName
   })
   .then((res) => {
    if (res.data.ResponseMetadata.HTTPStatusCode == "200") {
      alert("Congratulation! You are signed up", res)
      navigate('/feed')
    }
  })
   .catch((err) => { 
    alert("Wrong code", err);
  });

  
};
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
      <Modal show={afterCode} onHide={() => setAfterCode(false)} >
        <Modal.Header closeButton style={{backgroundColor:"#014E58"}}>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{backgroundColor:"#014E58"}}>Enter the one-time code we sent to your email
        <input value={code} name="code" onChange={(e) => setCode(e.target.value)} id="code" placeholder="Code" />
        </Modal.Body>
        <Modal.Footer style={{backgroundColor:"#014E58"}}>
          <Button variant="secondary" onClick={() => setAfterCode(false)}>
            Close
          </Button>
          <Button onClick={handleCodeSubmit} size="md" style={{marginTop: '20%',borderRadius: '60px', background:'#EDFEFF', color:'#05260A', padding: '10px 48px',fontWeight:'bold', margin: 'auto',display: 'block'}}>Confirm</Button>
        </Modal.Footer>
      </Modal>



    <img src={backimage} alt="" style={{ objectFit:'cover', height: '100%', width: '100%', opacity:' 0.55 ', position:'absolute',zIndex:'-500'}}  />
        <div className="col-12 d-flex flex-column align-items-center" >
          <h1 style={{textAlign: 'center',padding: '3%', color:'#014E58', top: '58px',fontFamily: 'Raleway',fontWeight: '700',fontSize: '48px'}}>Sign Up</h1>
  
          <form className="col-12 col-sm-7 col-md-5" onSubmit={handleSubmit} style={formStyle}> 
    
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Full Name" />         
            <input value={userName} name="userName" onChange={(e) => setUserName(e.target.value)} id="userName" placeholder="User Name" />        
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="Email" id="email" name="email" />
            <input value={password} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Password" id="password" name="password" />       
            <div className="link-next" ><a href="/login">Already have an account? Login here.</a></div>
            {
             
              <Button  type="submit" size="lg" style={{marginTop: '20%',borderRadius: '60px', background:'#EDFEFF', color:'#05260A', padding: '10px 48px',fontWeight:'bold', margin: 'auto',display: 'block'}}>Submit</Button>
              
            }
          </form>
      </div>
  </div>
  )
}

export default SignUp