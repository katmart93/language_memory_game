import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="logo">
        Languag<span>Memory</span>Game
      </div>
      <Link to="/">Home</Link>
    </div>
  );
}

export default Navbar;
