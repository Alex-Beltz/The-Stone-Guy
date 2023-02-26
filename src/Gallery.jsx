import React, { useState } from "react";
import "./App.css";
import { residentialImages, commercialImages, processImages } from "./index.js";

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  const handleImageHover = (index, hover) => {
    const elements = document.getElementsByClassName("image-container");
    elements[index].style.transform = hover ? "scale(1.1)" : "none";
    elements[index].style.opacity = hover ? "1" : "0.8";
  };

  const handleCloseClick = () => {
    setSelectedImage(null);
  };

  const selectedImages =
    selectedImage !== null
      ? [residentialImages[selectedImage]]
      : residentialImages;

  const imageElements = selectedImages.map((image, index) => {
    return (
      <div
        key={index}
        className="image-container"
        onClick={() => handleImageClick(index)}
        onMouseEnter={() => handleImageHover(index, true)}
        onMouseLeave={() => handleImageHover(index, false)}
      >
        <img src={image} alt={`Image ${index}`} />
      </div>
    );
  });

  return (
    <>
      {/* <div className="gallery-button-container">
        <button
          className="category-button"
          onClick={() => handleButtonClick("residential")}
        >
          {" "}
          Residential
        </button>{" "}
        <button
          className="category-button"
          onClick={() => handleButtonClick("commercial")}
        >
          Commercial
        </button>
        <button
          className="category-button"
          onClick={() => handleButtonClick("process")}
        >
          Process
        </button>
      </div> */}
      <div className="gallery">{imageElements}</div>
      {selectedImage !== null && (
        <div className="overlay" onClick={handleCloseClick}>
          <div className="image-popup">
            <img
              src={residentialImages[selectedImage]}
              alt={`Image ${selectedImage}`}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Gallery;
