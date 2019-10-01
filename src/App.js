import React from "react";
import Navbar from "./Navbar.js";
import "./App.css";
import Cards from "./Cards.js";

function App() {
  return (
    <div className="main">
      <header>
        <Navbar />
      </header>
      <div>
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  );
}

export default App;
