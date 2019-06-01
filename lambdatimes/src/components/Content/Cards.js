import React from 'react';
import Card from './Card';

const generateKey = () => Math.floor(Math.random() * 1000000000) + Date.now();

const Cards = ({ cards }) => {
  return (
    <div className="cards-container">
      {/* Using the cards prop, map over the list creating a
          new Card component for each passing the card as the only prop*/}
      {cards.map(card => (
        <Card key={generateKey()} card={card} />
      ))}
    </div>
  );
};

// Make sure you include prop types for all of your incoming props

export default Cards;
