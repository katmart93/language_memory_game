import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        Language<span>Memory</span>Game
      </div>
      <Link to="/">Home</Link>
    </div>
  );
}

export default Navbar;
