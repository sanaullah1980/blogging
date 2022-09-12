import React from 'react'
import './write.css';

const Write = () => {
  return (
    <div className='write'>
        <img
            className='writeImg' 
            src="https://images.pexels.com/photos/869258/pexels-photo-869258.jpeg" alt="" 
        />
        <form className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                    <i className="writeIcon fa-solid fa-plus"></i>
                </label>
                <input type="file" id='fileInput' style={{display: "none"}}/>
                <input type="text" id='title' className='writeInput' autoFocus={true}/>
            </div>
            <div className="writeFormGroup">
                <textarea placeholder='Tell your story' type="text" className='writeInput writeText' ></textarea>
            </div>
            <button className='writeSubmit'>Publish</button>
        </form>
    </div>
  )
}
;
export default Write ;