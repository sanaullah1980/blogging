import React from 'react'
import './header.css';

const Header = () => {
  return (
    <div className='header'>
        <div className="headerTitle">
            <div className="headerTitleSm">
                React & Node
            </div>
            <div className="headerTitleLg">
                Blog
            </div>
            <img className="headerImg" src="https://images.pexels.com/photos/1530342/pexels-photo-1530342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
    </div>
  )
}

export default Header
