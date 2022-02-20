import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Game from "./Game";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="game" element={<Game />} />
      </Routes>
    </div>
  );
}

export default App;
