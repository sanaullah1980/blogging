import React from 'react'
import Post from '../post/Post';
import './posts.css';

const Posts = ({posts}) => {
  return (
    <div className='posts'>
        {
          posts.map(p=>(
            <Post id={p.id}post={p}/>
            )
          )
        }
    </div>
  )
}

export default Posts;