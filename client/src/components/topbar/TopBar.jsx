import React from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/context';
import './topbar.css';


const TopBar = () => {

    const {user, dispatch} = useContext(Context);
    const imageFolder = "http://localhost:5000/images/"; 

    const handleLogout = () => {
        dispatch({type: "LOGOUT"})
    }
  return (
    <div className='top'>
        <div className="topLeft">
            <i className=" topIcon fa-brands fa-square-facebook"></i>
            <i className=" topIcon fa-brands fa-square-twitter"></i>
            <i className=" topIcon fa-brands fa-square-pinterest"></i>
            <i className="topIcon fa-brands fa-square-instagram"></i>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem">
                    <Link className='link' to="/">HOME</Link>
                </li>
                {/* <li className="topListItem"><Link className='link' to="/about">ABOUT</Link></li> */}
                {/* <li className="topListItem"><Link className='link' to="/contact">CONTACT</Link></li> */}
                <li className="topListItem"><Link className='link' to="/write">WRITE</Link></li>
                {
                    user && <li className="topListItem" onClick={handleLogout}>LOGOUT</li>
                }
            </ul>
        </div>
        <div className="topRight">
            {
               user 
                ?
                    <>
                        <Link to="/settings">
                            <img className='topImage'
                                src={user.user.profilePic ? imageFolder + user.user.profilePic : imageFolder + "user.jpg"} 
                                alt="" 
                            />
                        </Link>
                        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
                    </>            
                :
                    <ul className='topList'>
                        <li className='topListItem'><Link className='link' to="/login">LOGIN</Link></li>
                        <li className='topListItem'><Link className='link' to="/register">REGISTER</Link></li>
                    </ul>
            }
        </div>
    </div>
  )
}

export default TopBar