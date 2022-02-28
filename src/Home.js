import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Welcome to language memory card game!</h1>
      <p>
        Here you can learn and have fun at the same time. Just click on the
        button below.
      </p>
      <Link to="game">New Game</Link>
    </div>
  );
}

export default Home;
