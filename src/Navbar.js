import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        Language<span>Memory</span>Game
      </div>
      <div className="links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="scores">Scores</NavLink>
      </div>
    </div>
  );
}

export default Navbar;
