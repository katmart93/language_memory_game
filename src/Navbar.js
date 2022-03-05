import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__container">
        <div className="navbar__content">
          <div className="logo">
            <NavLink to="/">
              Language<span>Memory</span>Game
            </NavLink>
          </div>
          <div className="links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="scores">Scores</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
