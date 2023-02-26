// import logo from "./logo.svg";
// import React, { useState } from "react";
// import "./App.css";
// import Gallery from "./gallery";
// import { residentialImages, commercialImages, processImages } from "./index.js";

// function App() {
//   const [selectedCategory, setSelectedCategory] = useState("residential");

//   let selectedImages;
//   if (selectedCategory === "residential") {
//     selectedImages = residentialImages;
//   } else if (selectedCategory === "commercial") {
//     selectedImages = commercialImages;
//   } else if (selectedCategory === "process") {
//     selectedImages = processImages;
//   }

//   const handleButtonClick = (category) => {
//     setSelectedCategory(category);
//   };

//   return (
//     <div className="App">
//       <div className="gallery-button-container">
//         <button
//           className="category-button"
//           onClick={() => handleButtonClick("residential")}
//         >
//           Residential
//         </button>
//         <button
//           className="category-button"
//           onClick={() => handleButtonClick("commercial")}
//         >
//           Commercial
//         </button>
//         <button
//           className="category-button"
//           onClick={() => handleButtonClick("process")}
//         >
//           Process
//         </button>
//       </div>
//       <Gallery images={selectedImages} />
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import "./App.css";
import Home from "./Home";
import Contact from "./Contact";
import AboutUs from "./AboutUs";
import Gallery from "./Gallery";
import Reviews from "./Reviews";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");

  const handleButtonClick = (page) => {
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
          className="header-button"
          onClick={() => handleButtonClick("home")}
        >
          Home
        </button>
        <button
          className="header-button"
          onClick={() => handleButtonClick("contact")}
        >
          Contact
        </button>
        <button
          className="header-button"
          onClick={() => handleButtonClick("aboutus")}
        >
          About Us
        </button>
        <button
          className="header-button"
          onClick={() => handleButtonClick("gallery")}
        >
          Gallery
        </button>
        <button
          className="header-button"
          onClick={() => handleButtonClick("reviews")}
        >
          Reviews
        </button>
      </header>
      <div className="content">{selectedComponent}</div>
    </div>
  );
}

export default App;
