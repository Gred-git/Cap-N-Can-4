import React from 'react';
import './CrazyButton.css';


const CrazyButton = ({ buttonText }) => {
  return (
    <button className="crazy-button">
      {buttonText}
    </button>
  );
}

export default CrazyButton;