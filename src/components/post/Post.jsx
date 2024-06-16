import React from 'react'
import './post.css'
import CloseIcon from '@mui/icons-material/Close';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ReplyIcon from '@mui/icons-material/Reply';


export default function Post() {
  return (
    <div className='post-container'>
      <div className="post-top">
        <img src="images/01.jpg" alt="" />
        <div className="post-details">
            <span className="post-username">Angela Yu</span>
            <span className="post-timeupload">20 mins ago</span>
        </div>
        <CloseIcon className='closeicon'/>
      </div>
      <div className="post-center">
        <span className="post-caption">Hello World</span>
        <img src="images/01.jpg" alt="" />
      </div>
      
      <div className="post-bottom">
        
        <div className="post-like-comment">
          <div className="post-like">
            <ThumbUpIcon className='react-icon like'/>
            <FavoriteIcon className='react-icon heart'/>
            <span className="like-count">32</span>
          </div>
          <div className="post-commnet">
            <span className="comment-count">6</span>
            <ChatBubbleIcon/>
          </div>
        </div>

        <hr />

        <div className="add-reaction-area">
          <div className="like-comment-share">
            <ThumbUpIcon/>
            <span className="like-post-function">Like</span>
          </div>
          <div className="like-comment-share">
            <ChatBubbleIcon/>
            <span className="like-post-function">Comment</span>
          </div>
          <div className="like-comment-share">
            <ReplyIcon/>
            <span className="like-post-function">Share</span>
          </div>
        </div>

        <hr />

      </div>
    </div>
  )
}
