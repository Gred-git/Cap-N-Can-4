import React from "react";

import './Challenges.css';
import GalleryContainer from '../../src/components/GalleryContainer/GalleryContainer.js'; 
import CrazyButton from '../../src/components/CrazyButton/CrazyButton.js';
import UploadModal from '../../src/components/CrazyButton/UploadModal';



const galleryItems = [
    {
      title: 'Artwork 1',
      imageUrl: 'artwork1.jpg',
      tags: ['Abstract', 'Oil Painting', 'Modern'],
      artist: 'John Doe'
    },
    {
      title: 'Artwork 1',
      imageUrl: 'artwork1.jpg',
      tags: ['Abstract', 'Oil Painting', 'Modern'],
      artist: 'John Doe'
    },{
      title: 'Artwork 1',
      imageUrl: 'artwork1.jpg',
      tags: ['Abstract', 'Oil Painting', 'Modern'],
      artist: 'John Doe'
    }];
 
const Challenges = () => {

  const [open, setOpen] = React.useState(false);
 
  const handleClose = () => {
      setOpen(false);
  };

  const handleOpen = () => {
      setOpen(true);
  };

    return (

        <div className="Challenges">

        <header className="Challenges-header">

            <p> Welcome to Cap N' Can Weekly Challenges ! </p>

            <p> Current Challenge: The colour blue </p>
            <CrazyButton buttonText="Upload" />

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
          </>
        </UploadModal>

        </header>

        <header className='Gallery-header'>
            <p> Week 1 Challenge</p>
            <GalleryContainer galleryItems={galleryItems} />

            <p> Week 2 Challenge</p>
            <GalleryContainer galleryItems={galleryItems} />

            <p> Week 3 Challenge</p>
            <GalleryContainer galleryItems={galleryItems} />
            </header>


        </div>
    );
};
 
export default Challenges;