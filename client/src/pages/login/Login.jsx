import React from 'react'
import './login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='login'>
        <span className="loginTitle">Login</span>
        <form className="loginFrom">
            <label>Email</label>
            <input type="text" className='loginInput' placeholder='Enter your email' />
            <label>Password</label>
            <input type="text" className='loginInput' placeholder='Enter your password' />
            <button className="loginBtn"><Link className='link' to="/register">Login</Link></button>
        </form>
        <button className='loginRegisterBtn'><Link className='link' to="/register">Register</Link></button>
    </div>
  )
}

export default Login;