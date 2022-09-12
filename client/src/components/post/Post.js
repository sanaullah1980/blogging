import React from 'react'
import './post.css';
import {Link} from "react-router-dom";

const Post = ({post}) => {
  return (
    <div className='post'>
        {
            post.photo &&
            <img
                className='postImg' 
                src="https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" 
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