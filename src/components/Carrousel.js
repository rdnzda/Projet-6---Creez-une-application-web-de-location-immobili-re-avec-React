import React, { useState } from 'react';
import arrowBack from "../img/arrow_back_ios-24px 1.png";
import arrowForward from "../img/arrow_forward_ios-24px 1.png";

export const Carrousel = ({ images, title }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handlePrevClick = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const handleNextClick = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <div className="carrousel">
            <button id="arrowBack" onClick={handlePrevClick}><img src={arrowBack} alt="arrow-back"></img></button>
            <img src={images[currentImageIndex]} alt={title}></img>
            <button id="arrowForward" onClick={handleNextClick}><img src={arrowForward} alt="arrow-forward"></img></button>
        </div>
    );
}