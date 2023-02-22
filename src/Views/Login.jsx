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
          <h2>Login</h2><br></br>
          <form className="login-form" onSubmit={handleSubmit}>
              <label htmlFor="email"> Email:  </label> 
              <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
              <br></br><br></br>
              <label htmlFor="password"> Password: </label>
              <input value={password} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
              <br></br><br></br>
              <button type="submit">Log In</button><br></br>
          </form>
          <a href="/signup">Don't have an account? Sign up here.</a>
      </div>
  )
}

export default Login