import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Game from "./Game";
import Scores from "./Scores";
import Footer from "./Footer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="game" element={<Game />} />
        <Route path="scores" element={<Scores />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
