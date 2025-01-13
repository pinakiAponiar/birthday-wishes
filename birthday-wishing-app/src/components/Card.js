// src/components/Card.js
import React from 'react';
import '../styles/Card.css';

const Card = ({ name, wish }) => {
  return (
    <div className="card">
      <div className="card-content">
        <h2>🎂 Happy Birthday, {name}! 🎉</h2>
        <p>{wish}</p>
      </div>
      <div className="confetti"></div>
    </div>
  );
};

export default Card;
