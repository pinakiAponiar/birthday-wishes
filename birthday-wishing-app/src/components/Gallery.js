// src/components/Gallery.js
import React from 'react';
// import '../styles/Gallery.css';

const Gallery = ({ wishes }) => {
  return (
    <div className="gallery">
      <h2>Birthday Wishes Gallery</h2>
      {wishes.map((wish, index) => (
        <div key={index} className="gallery-item">
          <h3>🎂 Happy Birthday, {wish.name}! 🎉</h3>
          <p>{wish.wish}</p>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
