import React, { useState } from "react";


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log(email);
      console.log(password);
  }

  return (
    
      <div className="auth-form-container">
          <h2>Login</h2>
          
          <form className="login-form" onSubmit={handleSubmit}>
          <br></br><br></br>
              <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="User Name" id="email" name="email" />
              <br></br><br></br>
             
              <input value={password} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Password" id="password" name="password" />
              
              <br></br><br></br>
              <div className="link-next"><a href="/signup"  >Don't have an account? Sign up here. </a></div>
          
          <br></br><br></br>
              <button className="log-in-btn" type="submit">Log In</button>
          </form>
      </div>
  )
}

export default Login