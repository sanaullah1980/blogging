import React from 'react'
import './register.css';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className='register'>
        <span className="registerTitle">Register</span>
        <form className="registerFrom">
            <label>Username</label>
            <input type="text" className='registerInput' placeholder='Enter your username...' />
            <label>Email</label>
            <input type="text" className='registerInput' placeholder='Enter your email...' />
            <label>Password</label>
            <input type="text" className='registerInput' placeholder='Enter your password...' />
            <button className="registerBtn"><Link className='link' to="/register">Register</Link></button>
        </form>
        <button className='registerloginBtn'><Link className='link' to="/login">Login</Link></button>
    </div>
  )
}

export default Register;