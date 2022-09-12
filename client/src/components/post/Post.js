import React from 'react'
import './post.css';
import {Link} from "react-router-dom";

const Post = ({post}) => {
    const imageFolder = "http://localhost:5000/images/";    
  return (
    <div className='post'>
        {
            post.photo &&
            <img
                className='postImg' 
                src={imageFolder + post.photo} alt="" 
            />
        }
        <div className="postInfo">
            <div className="postCats">
                {
                    post.categories.map((c)=>(
                        <span className="postCat">{c.name}</span>
                    ))
                } 
            </div>
            <Link to={`/post/${post._id}`} className="link">
                <span className="postTitle">{post.title}</span>
            </Link>
            <hr />
            <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className="postDescription">
           {post.desc} 
        </p>
    </div>
  )
}

export default Post