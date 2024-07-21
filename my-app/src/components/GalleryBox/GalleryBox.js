import React from 'react';
import './GalleryBox.css';

import logo from '../../logo.svg';


const GalleryBox = ({ title, tags, artist }) => {

  return (

    <div className="gallery-box">

        <img src={logo} className="gallery-image" alt="logo" />

        <div className="gallery-details">

        <h2 className="gallery-title">{title}</h2>
        <p className="gallery-artist">By: {artist}</p>
        <ul className="tag-list">
          {tags.map((tag, index) => (
            <li key={index} className="tag-item">{tag}</li>))}
        </ul>
    </div>

    </div>

  );
}

export default GalleryBox;