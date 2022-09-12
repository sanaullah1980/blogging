import React, { useContext } from 'react'
import './login.css';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { Context } from '../../context/context';
import axios from "axios";

const Login = () => {

  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({type:"LOGIN_START"});
    try {
        const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value
      });
      dispatch({type: "LOGIN_SUCCESS", payload: res.data});
      userRef.current.value="";
      passwordRef.current.value="";
    } catch (error) {
      dispatch({type: "LOGIN_FAILURE"});
    }
  }

  return (
    <div className='login'>
        <span className="loginTitle">Login</span>
        <form className="loginFrom" onSubmit={handleSubmit}>
            <label>Username</label>
            <input type="text" ref={userRef} className='loginInput' placeholder='Enter your username' />
            <label>Password</label>
            <input type="password" ref={passwordRef} className='loginInput' placeholder='Enter your password' />
            <button className="loginBtn" type='submit' disabled={isFetching}>Login</button>
        </form>
        <button className='loginRegisterBtn'><Link className='link' to="/register">Register</Link></button>
    </div>
  )
}

export default Login;