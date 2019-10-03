import React from "react";
import Navbar from "./Navbar.js";
import "./App.css";
import Cards from "./Cards.js";
import FadeLine from "./FadeLine.js";
function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <FadeLine />
      <div className="cards">
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  );
}

export default App;
