import React from 'react';

import './index.css';

import sprayCanIcon from '../../src/Images/spray-can-icon.png';
import CrazyButton from '../../src/components/CrazyButton/CrazyButton.js';

const Home = () => {
  return (

    <div className="Index">

      <header className="Index-header">

        <img src={sprayCanIcon} className="Index-logo" alt="logo" />

        <p> Welcome to Cap N' Can </p>

        <CrazyButton buttonText="Upload" />

      </header>


    </div>
  );
};

export default Home;