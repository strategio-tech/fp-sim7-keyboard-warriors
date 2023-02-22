import React , { useState } from 'react'

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log(email);
      console.log(name);
  }

  return (
      <div className="auth-form-container">
          <h2>Sign Up</h2><br></br>
      <form className="register-form" onSubmit={handleSubmit}>
          <label htmlFor="name"> Full name: </label>
          <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Full Name" />
          <br></br><br></br>
          <label htmlFor="email"> Email: </label>
          <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
          <br></br><br></br>
          <label htmlFor="password"> Password: </label>
          <input value={password} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
          <br></br><br></br>
          <button type="submit">Submit</button>
      </form>
      <a href="/login">Already have an account? Login here.</a>
  </div>
  )
}

export default SignUp