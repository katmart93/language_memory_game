import React from "react";
import { Routes, Route } from "react-router-dom";
import Game from "./Game";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="game" element={<Game />} />
      </Routes>
    </div>
  );
}

export default App;
