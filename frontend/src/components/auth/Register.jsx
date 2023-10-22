import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    axios.post('http://localhost:3000/register', {
      email: email,
      password: password,
    })
    .then((response) => {
      // Handle the response as needed
    })
    .catch((error) => {
      // Handle errors
    });
  };

  return (
    <div className="h-52 w-32">
      <form onSubmit={handleSubmit}>
        <label>Email/username</label>
        <input type="email" value={email} onChange={handleEmailChange} />
        <label>Password</label>
        <input type="password" value={password} onChange={handlePasswordChange} />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
