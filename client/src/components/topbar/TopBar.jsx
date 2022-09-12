import React from 'react'
import { Link } from 'react-router-dom';
import './topbar.css';


const TopBar = () => {
    const user = false;
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
                <li className="topListItem"><Link className='link' to="/about">ABOUT</Link></li>
                <li className="topListItem"><Link className='link' to="/contact">CONTACT</Link></li>
                <li className="topListItem"><Link className='link' to="/write">WRITE</Link></li>
                {
                    user && <li className="topListItem">LOGOUT</li>
                }
            </ul>
        </div>
        <div className="topRight">
            {
               user 
                ?
                    <>
                        <img className='topImage'
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShEx9e-hIeBMU1JixptLo_kLa2PEnh1cAKNg&usqp=CAU" alt="" />
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