import React, { useState, useEffect } from 'react';
import styles from '../pages/index/carousel.module.css';

const Carousel = () => {
  const imagesWithTitles = [
    { src: 'images/carrusel/carrusel-1.webp', title: 'Allons-y!' },
    { src: 'images/carrusel/carrusel-2.jpg', title: 'The Giggle' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesWithTitles.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentIndex, imagesWithTitles.length]);

  const handleButtonClick = () => {
    window.location.href = 'https://www.doctorwho.tv/';
    console.log(`Botón clickeado para la imagen ${currentIndex + 1}`);
  };

  return (
    <div className={`${styles.carousel} my-carousel`}>
      <div className="my-carousel-content">
        <img className="my-carousel-image" src={imagesWithTitles[currentIndex].src} alt={`Imagen ${currentIndex + 1}`} />
        <h3 className="my-carousel-title">{imagesWithTitles[currentIndex].title}</h3>
        <button className="my-carousel-button" onClick={handleButtonClick}>
          Ver ahora
        </button>
      </div>
    </div>
  );
};

export default Carousel;
