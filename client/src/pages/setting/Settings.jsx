import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar';
import './settings.css';

const Settings = () => {
  return (
    <div className='settings'>
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingUpdateTitle">Update Your account</span>
                <span className="settingsDeleteTitle">Delete your account</span>
            </div>
            <form className="settingsForm">
                <label>Profile Picture</label>
                <div className="settingsPP">
                    <img
                        className='' 
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShEx9e-hIeBMU1JixptLo_kLa2PEnh1cAKNg&usqp=CAU" 
                        alt="" 
                    />
                    <label htmlFor="fileInput">
                        <i class="settingsPPIcon fa-regular fa-user"></i>
                    </label>
                    <input type="file" name="" id="fileInput" style={{display: "none"}} />
                </div>
                <label>Username</label>
                <input type="text" placeholder='safak' />
                <label>Email</label>
                <input type="email" placeholder='safak@gimal.com' />
                <label>Password</label>
                <input type="password"/>
                <button className='settingsSubmit'>Update</button>
            </form>
        </div>
        <Sidebar />
    </div>
  )
}

export default Settings;