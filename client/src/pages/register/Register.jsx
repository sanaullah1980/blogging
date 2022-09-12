import React from 'react'
import './register.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) =>{
    e.preventDefault();
    setError(false)
    try {
      const res = await axios.post("/auth/register", {
        username, email, password
      });
      setUsername("");
      setEmail("");
      setPassword("");  
    } catch (error) {
      setError(true);
      console.log(error);
    }
  }

  return (
    <div className='register'>
        <span className="registerTitle">Register</span>
        <form className="registerFrom" onSubmit={handleSubmit}>
            <label>Username</label>
            <input 
                type="text" 
                className='registerInput' 
                placeholder='Enter your username...'
                value={username} 
                onChange={e=> setUsername(e.target.value)}
            />
            <label>Email</label>
            <input 
              type="text" 
              className='registerInput' 
              placeholder='Enter your email...' 
              value={email}
              onChange={e=> setEmail(e.target.value)}
            />
            <label>Password</label>
            <input 
              type="password" 
              className='registerInput' 
              value={password}
              placeholder='Enter your password...' 
              onChange={e=> setPassword(e.target.value)}
            />
            <button className="registerBtn">Register</button>
        </form>
        <button className='registerloginBtn' type='submit'><Link className='link' to="/login">Login</Link></button>
        {error && <span style={{marginTop: '10px'}}>Something went wrong</span>}
    </div>
  )
}

export default Register;