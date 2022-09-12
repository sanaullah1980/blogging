import React, { useContext, useState } from 'react'
import Sidebar from '../../components/sidebar/Sidebar';
import './settings.css';
import {Context} from "../../context/context";
import axios from "axios";

const Settings = () => {
    const { user } = useContext(Context).user;
    const [file, setFile] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [success, setSuccess] = useState("");
    const imageFolder = "http://localhost:5000/images/";    

    const handleUpdate = async (e) => {
        e.preventDefault();
        const updatedUser = {
            userId: user._id,
            username,
            email,
            password
        }
        if(file){
            const data = new FormData();
            const fileName = Date.now() + file.name;
            data.append("name", fileName);
            data.append("file", file);
            updatedUser.profilePic = fileName;
            
            try {
                await axios.post("/upload", data);
            } catch (error) {
                
            }
        }
        try {
            await axios.put("/users/" + user._id, updatedUser);
            setSuccess(true);
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div className='settings'>
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingUpdateTitle">Update Your account</span>
                <span className="settingsDeleteTitle">Delete your account</span>
            </div>
            <form className="settingsForm" onSubmit={handleUpdate}>
                <label>Profile Picture</label>
                <div className="settingsPP">
                    <img
                        className='' 
                        src={file ? URL.createObjectURL(file) : imageFolder+user.profilePic} 
                        alt="" 
                    />
                    <label htmlFor="fileInput">
                        <i class="settingsPPIcon fa-regular fa-user"></i>
                    </label>
                    <input type="file" name="" id="fileInput" style={{display: "none"}} onChange={e => setFile(e.target.files[0])}/>
                </div>
                <label>Username</label>
                <input type="text" placeholder={user.username} onChange={e => setUsername(e.target.value)}/>
                <label>Email</label>
                <input type="email" placeholder={user.email} onChange={e => setEmail(e.target.value)} />
                <label>Password</label>
                <input type="password" onChange={e => setPassword(e.target.value)} />
                <button className='settingsSubmit' type='submit'>Update</button>
                {
                    success && 
                    <span style={{color: 'green', marginTop: '10px', textAlign: 'center'}}> Profile updated successfuly ...</span>
                }

            </form>
        </div>
        <Sidebar />
    </div>
  )
}

export default Settings;