import React from "react";
import SingleCard from "./SingleCard";

function CardsGrid({ memoCards }) {
  return (
    <div className="cards-grid">
      {memoCards.map((card, idx) => (
        <SingleCard card={card} key={idx} />
      ))}
    </div>
  );
}

export default CardsGrid;
