import React from 'react';
import GalleryBox from '../../components/GalleryBox/GalleryBox.js';

import './GalleryContainer.css';

const GalleryContainer = ({ galleryItems }) => {
  return (
    <div className="gallery-container">
      {galleryItems.map((item, index) => (
        <GalleryBox
          key={index}
          title={item.title}
          tags={item.tags}
          artist={item.artist}
        />
      ))}
    </div>
  );
}

export default GalleryContainer;