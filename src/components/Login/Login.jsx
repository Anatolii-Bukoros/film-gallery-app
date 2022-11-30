import React, { useState } from "react";

export const Login = ({ onFormSwitch }) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(email);
  }

  return (
    <div className="auth-form-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          type="email"
          placeholder="yourmail@gmail.com"
          id="email"
          name="email" />
        <label htmlFor="password">Password</label>
        <input
          value={pass}
          onChange={(event) => setPass(event.target.value)}
          type="password"
          placeholder="********"
          id="password"
          name="password" />
        <button
          className="btn"
          type="submit"
        >
          Log In
        </button>

        <button
          onClick={() => onFormSwitch('register')}
          className='link-btn'
        >
          Don't have an account? Register here.
        </button>
      </form>
    </div>
  )
}
