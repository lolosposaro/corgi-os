import React from "react";
import Navbar from "./Navbar.js";
import Background from "./Background.js";
import "./App.css";
import Cards from "./Cards.js";

function App() {
  return (
    <div>
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
