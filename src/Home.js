import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <div className="home__content">
          <h1>Welcome to language memory card game!</h1>
          <p>
            Here you can learn and have fun at the same time. Your task is to
            find matching pairs of cards. Click on the button below to start a
            game.
          </p>
          <Link to="game" className="new-game-btn">
            New Game
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
