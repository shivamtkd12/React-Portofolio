import React, { useState } from "react";
import './portfolio.css';
import MusicApp from "../../img/musicapp.png";
import PP from "../../img/pp.png";

import { themeContext } from '../../context'
import { useContext } from 'react'


const Portfolio = () => {

  const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  // State to track the current image index
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [MusicApp, PP];

  // Function to handle next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to handle previous slide
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex < images.length ) % images.length
    );
  };

  return (
    <div className="Slider">
      {/* Titles positioned at the top of the slider */}
      <div className="slider-header">
        <span style={{fontSize:"3.5rem", fontFamily:'sans-serif', color: darkMode? 'white': ''}}>My Recent</span>
        <span style={{fontSize:"3.5rem", color:'var(--orange)', fontFamily:'sans-serif'}}>Projects</span>
      </div>

      <div className="content-area"> 
      
        <div className="prev" onClick={prevSlide}>
          &#10094;
        </div>
        <div className="i-slider">
          <img src={images[currentIndex]} alt="slider" />
        </div>
        
          <div className="next" onClick={nextSlide}>
            &#10095; 
          </div>
        
      </div>
    </div>
  );
};

export default Portfolio;
