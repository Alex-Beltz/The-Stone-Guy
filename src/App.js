import React, { useState } from "react";
import "./App.css";
import "./mediaQueries.css";
import Home from "./Home";
import Contact from "./Contact";
import AboutUs from "./AboutUs";
import Gallery from "./Gallery";
import Reviews from "./Reviews";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");

  const handleComponentButtonClick = (page) => {
    setSelectedPage(page);
  };

  let selectedComponent;
  if (selectedPage === "home") {
    selectedComponent = <Home />;
  } else if (selectedPage === "contact") {
    selectedComponent = <Contact />;
  } else if (selectedPage === "aboutus") {
    selectedComponent = <AboutUs />;
  } else if (selectedPage === "gallery") {
    selectedComponent = <Gallery />;
  } else if (selectedPage === "reviews") {
    selectedComponent = <Reviews />;
  }

  return (
    <div className="App">
      <header className="header">
        <button
          className="header-button btn"
          onClick={() => handleComponentButtonClick("home")}
        >
          Home
        </button>
        <button
          className="header-button btn"
          onClick={() => handleComponentButtonClick("contact")}
        >
          Contact
        </button>
        <button
          className="header-button btn"
          onClick={() => handleComponentButtonClick("aboutus")}
        >
          About Us
        </button>
        <button
          className="header-button btn"
          onClick={() => handleComponentButtonClick("gallery")}
        >
          Gallery
        </button>
        <button
          className="header-button btn"
          onClick={() => handleComponentButtonClick("reviews")}
        >
          Reviews
        </button>
      </header>
      <div className="content">{selectedComponent}</div>
    </div>
  );
}

export default App;
