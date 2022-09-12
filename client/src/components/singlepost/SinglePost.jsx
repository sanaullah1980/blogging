import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './singlePost.css';
import axios from "axios";

const SinglePost = () => {
    const location = useLocation();
    const pathId = location.pathname.split("/")[2];
    const [post, setPost] = useState({})

    useEffect(()=>{
        const getPost = async () => {
         const res = await axios.get("/posts/" + pathId);
         setPost(res.data);
        }
        getPost();
    },[])

  return (
    <div className='singlePost'>
        <div className="singlePostWrapper">
            {
                post.photo &&
                <img 
                    className='singlePostImg'
                    src={post.photo}
                    alt="" 
                />
            }
            <h1 className="singlePostTitle">
                {post.title}
                <div className="singlePostEdit">
                    <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                    <i className="singlePostIcon fa-regular fa-trash"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">
                    Author: <b>{post.username}</b>
                </span>
                <span className="singlePostDate">
                    {new Date(post.createdAt).toDateString()}
                </span>
            </div>
            <p className='singlePostDesc'>
                {post.description}
            </p>
        </div>

    </div>
  )
}

export default SinglePost;