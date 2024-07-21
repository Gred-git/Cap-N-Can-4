import React from 'react';
import './ForumButtons.css';


const ForumButtons = () => {
  const handlePostClick = () => {
    // Handle logic for 'Post' button click
    console.log('Post clicked');
  };

  const handleQAClick = () => {
    // Handle logic for 'Host a Q/A' button click
    console.log('Host a Q/A clicked');
  };

  return (
    <div className="forum-buttons">
      <button className="post-button" onClick={handlePostClick}>
        Post
      </button>
      <button className="qa-button" onClick={handleQAClick} disabled>
        Host a Q/A
      </button>
    </div>
  );
};

export default ForumButtons;