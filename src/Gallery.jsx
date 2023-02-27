import React, { useState } from "react";
import "./App.css";
import { residentialImages, commercialImages, processImages } from "./index.js";

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("residential");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedImage(null);
  };

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

  const getImagesForCategory = () => {
    switch (selectedCategory) {
      case "residential":
        return residentialImages;
      case "commercial":
        return commercialImages;
      case "process":
        return processImages;
      default:
        return residentialImages;
    }
  };

  const selectedImages =
    selectedImage !== null
      ? [getImagesForCategory()[selectedImage]]
      : getImagesForCategory();

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
      <div className="gallery-button-container">
        <button
          className={`category-button btn${
            selectedCategory === "residential" ? " selected" : ""
          }`}
          onClick={() => handleCategoryClick("residential")}
        >
          Residential
        </button>
        <button
          className={`category-button btn${
            selectedCategory === "commercial" ? " selected" : ""
          }`}
          onClick={() => handleCategoryClick("commercial")}
        >
          Commercial
        </button>
        <button
          className={`category-button btn${
            selectedCategory === "process" ? " selected" : ""
          }`}
          onClick={() => handleCategoryClick("process")}
        >
          Process
        </button>
      </div>
      <div className="gallery">{imageElements}</div>
      {selectedImage !== null && (
        <div className="overlay" onClick={handleCloseClick}>
          <div className="image-popup">
            <img
              src={getImagesForCategory()[selectedImage]}
              alt={`Image ${selectedImage}`}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Gallery;
