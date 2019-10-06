import React from "react";
import Navbar from "./Navbar.js";
import "./App.css";
import Cards from "./Cards.js";
import FadeLine from "./FadeLine.js";
import MainPic from "./MainPic.js";
function App() {
  return (
    <div className="main">
      <header>
        <Navbar />
      </header>
      <FadeLine />
      <MainPic />
      <div className="cards">
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  );
}

export default App;
