import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
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
    axios.post('http://localhost:3000/login', {
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
    <div className=" h-screen w-screen bg-black text-white flex justify-center items-center ">
      <form onSubmit={handleSubmit} className="h-52 w-32">
        <label>Email/username</label>
        <input 
        className="text-green-500" type="email" value={email} onChange={handleEmailChange} />
        <label>Password</label>
        <input
        className="text-green-500"
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
