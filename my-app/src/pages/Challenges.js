import React from "react";

import './Challenges.css';
import GalleryContainer from '../../src/components/GalleryContainer/GalleryContainer.js'; 
import CrazyButton from '../../src/components/CrazyButton/CrazyButton.js';

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
    return (

        <div className="Challenges">

        <header className="Challenges-header">

            <p> Welcome to Cap N' Can Weekly Challenges ! </p>

            <p> Current Challenge: The colour blue </p>
            <CrazyButton buttonText="Upload" />

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