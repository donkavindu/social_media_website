import React from 'react'
import './addpost.css'
import FilterIcon from '@mui/icons-material/Filter';
import VideocamIcon from '@mui/icons-material/Videocam';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';

export default function Addpost() {
  return (
    <div className='addpost'>
      
      <div className="add-post-container">
        <div className="add-post-top">
            <img src="/images/01.jpg" alt="" className="add-prost-profilepic" />
            <input placeholder='Whats your mind?' className="add-post-text" />
        </div>
        <br /><hr /><br />
        <div className="add-post-bottom">
            <div className="add-post-opts">
                <div className="add-option">
                    <FilterIcon className='addphoto-icon'/>
                    <span>Photo/Video</span>
                </div>
                <div className="add-option">
                    <VideocamIcon className='live-icon'/>
                    <span>Live Video</span>
                </div>
                <div className="add-option">
                    <InsertEmoticonIcon className='feeling-icon'/>
                    <span>Feeling/Activity</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
