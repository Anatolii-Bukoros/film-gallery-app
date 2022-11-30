import React, { useEffect, useState } from "react";

export const Register = ({ onFormSwitch }) => {
  const user = JSON.parse(localStorage.getItem('user')) || '';
  const [name, setName] = useState(user.name || '');
  const [email, setEmail] = useState(user.email || '');
  const [pass, setPass] = useState(user.pass || '');

  useEffect(() => {
    window.localStorage.setItem('user', JSON.stringify({
      name,
      email,
      pass,
    }));
  })

  const handleSubmit = (event) => {
    event.preventDefault();
    setName('');
    setEmail('');
    setPass('')

  }

  return (
    <div className="auth-form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Full name</label>
        <input
          type="text"
          onChange={(event) => setName(event.target.value)}
          value={name}
          name='name'
          id="name"
          placeholder="Full name"
        />
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
          type="submit"
          className="btn"
        >
          Log In
        </button>

        <button
          onClick={() => onFormSwitch('login')}
          className='link-btn'
        >
          Already have an account? Login here.
        </button>
      </form>
    </div>
  )
}