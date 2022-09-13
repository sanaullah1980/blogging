import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './singlePost.css';
import axios from "axios";
import { Context } from '../../context/context';

const SinglePost = () => {
    const location = useLocation();
    const pathId = location.pathname.split("/")[2];
    const [post, setPost] = useState({});
    const imageFolder = "http://localhost:5000/images/";
    const { user } = useContext(Context).user;   
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [updateMode, setUpdateMode] = useState(false);

    useEffect(()=>{
        const getPost = async () => {
         const res = await axios.get("/posts/" + pathId);
         setPost(res.data);
         setTitle(res.data.title);
         setDescription(res.data.description);
        }
        getPost();
    },[]);

    const handleDelete = async () => {
        try {
            await axios.delete("/posts/" + pathId, { data: {username: user.username}} );
            window.location.replace("/");
        } catch (error) {
            console.log(error);
        }

    }

    const handleUpdate = async () => {
        try {
            await axios.put("/posts/" + pathId, 
                {   username: user.username, 
                        title: title, 
                        description: description 
                    }
            );
            setUpdateMode(false);
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div className='singlePost'>
        <div className="singlePostWrapper">
            {
                post.photo &&
                <img 
                    className='singlePostImg'
                    src={ imageFolder + post.photo}
                    alt="" 
                />
            }
            {
                updateMode ? <input 
                                type="text" 
                                value={title} 
                                className='singlePostTitleInput'
                                autoFocus
                                onChange={e=> setTitle(e.target.value)}
                            /> 
                        :
                        <h1 className="singlePostTitle">
                            {title}
                            {
                                post.username === user?.username && (
                                    <div className="singlePostEdit">
                                        <i className="singlePostIcon fa-regular fa-pen-to-square" onClick={e=> setUpdateMode(true)}></i>
                                        <i className="singlePostIcon fa-regular fa-trash" onClick={handleDelete}></i>
                                    </div>
                                )
                            }
                        </h1>
            }
            <div className="singlePostInfo">
                <span className="singlePostAuthor">
                    Author: <Link className='link' to={`/?user=${post.username}`}>{post.username}</Link> 
                </span>
                <span className="singlePostDate">
                    {new Date(post.createdAt).toDateString()}
                </span>
            </div>
            {
                updateMode ? <textarea 
                                className='singlePostDescInput' 
                                value={description}
                                onChange={e=> setDescription(e.target.value)}
                            />
                    :
                    <p className='singlePostDesc'>
                        {description}
                    </p>
            }
            {
                updateMode && 
                <button className="singlePostButton" onClick={handleUpdate}>Update</button>

            }
        </div>
    </div>
  )
}

export default SinglePost;