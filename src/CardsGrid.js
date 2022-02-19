import React, { useState } from "react";

function CardsGrid({ memoCards }) {
  return (
    <div className="cards-grid">
      {memoCards.map((card, idx) => (
        <div className="single-card" key={idx}>
          <img className="card-front" src={card.src} />
          <img className="card-reverse" src="/img/nebula_reverse_card.jpg" />
        </div>
      ))}
    </div>
  );
}

export default CardsGrid;
