import React , { useState } from 'react'

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

  return (
      <div className="auth-form-container">
          <h2>Sign Up</h2><br></br>
      <form className="signup-form" onSubmit={handleSubmit}>
    
          <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Full Name" />
          <br></br><br></br>
          
          <input value={userName} name="name" onChange={(e) => setUserName(e.target.value)} id="name" placeholder="User Name" />
          <br></br><br></br>
         
          <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="Email" id="email" name="email" />
          <br></br><br></br>
         
          <input value={password} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Password" id="password" name="password" />
          <br></br><br></br>
          <div className="link-next" >
          <a href="/login">Already have an account? Login here.</a>
          </div><br></br><br></br>
          <button className="log-in-btn" type="submit">Submit</button>
      </form>
      
  </div>
  )
}

export default SignUp