import React from "react";

function SingleCard({ card }) {
  const handleClick = () => {
    console.log("card clicked", card.src);
  };
  return (
    <div className="single-card">
      <img className="card-front" src={card.src} onClick={handleClick} />
      <img className="card-reverse" src="/img/nebula_reverse_card.jpg" />
    </div>
  );
}

export default SingleCard;
