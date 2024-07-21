import React from 'react';
import './ForumSwitch.css';

const ForumSwitch = ({ activeState, onStateChange }) => {
  const handleClick = (state) => {
    onStateChange(state);
  };

  return (
    <div className="forum-switch">
      <button
        className={`switch-button ${activeState === 'Forums' ? 'active' : ''}`}
        onClick={() => handleClick('Forums')}
      >
        Forums
      </button>
      <button
        className={`switch-button ${activeState === 'QAs' ? 'active' : ''}`}
        onClick={() => handleClick('QAs')}
      >
        Q/As
      </button>
    </div>
  );
};

export default ForumSwitch;