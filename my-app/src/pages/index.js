import React from 'react';

import './index.css';

import sprayCanIcon from '../../src/Images/spray-can-icon.png';
import CrazyButton from '../../src/components/CrazyButton/CrazyButton.js';
import UploadModal from '../../src/components/CrazyButton/UploadModal';

const Home = () => {

  const [open, setOpen] = React.useState(false);
 
  const handleClose = () => {
      setOpen(false);
  };

  const handleOpen = () => {
      setOpen(true);
  };

  return (

    <div className="Index">

      <header className="Index-header">

        <img src={sprayCanIcon} className="Index-logo" alt="logo" />

        <p> Welcome to Cap N' Can </p>

        <CrazyButton buttonText="Upload" onClick={handleOpen}/>

        <button type="button" onClick={handleOpen}>
        Click Me to Open Upload Window
            </button>

        <UploadModal isOpen={open} onClose={handleClose}>
          <>
          <button className="close-btn" onClick={handleClose}>x</button>
          <h1>Upload an Image</h1>
          <h3>Click here to upload your image.</h3>
          <label htmlFor="name">Name of Artwork:</label>
          <input type="text" id="name" name="name" />
          <label htmlFor="tags">Tags:</label>
          <input type="text" id="tags" name="tags" />
          <button className="up-btn" onClick={handleClose}>Upload</button>
          </>
        </UploadModal>

      </header>


    </div>
  );
};

export default Home;