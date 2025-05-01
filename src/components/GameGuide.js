"use client";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './GameGuide.css'; // Import your CSS styles

// Import your images
import image1 from '../static/img/hongkongOX_bg.jpg';
import image2 from '../static/img/bibleOX_bg.jpg';
import image3 from '../static/img/canadaOX_bg.jpg';
import image4 from '../static/img/plant_bg.jpg';

const GameGuide = ({ returnUrl = '/' }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const history = useNavigate();

  const pages = [
    {
      image: image1,
      title: 'Step 1',
      text: 'This is the first step of the game guide. Provide a brief explanation of what the player needs to do in this step.'
    },
    {
      image: image2,
      title: 'Step 2',
      text: 'This is the second step of the game guide. Provide a brief explanation of what the player needs to do in this step.'
    },
    {
      image: image3,
      title: 'Step 3',
      text: 'This is the third step of the game guide. Provide a brief explanation of what the player needs to do in this step.'
    },
    {
      image: image4,
      title: 'Step 4',
      text: 'This is the fourth step of the game guide. Provide a brief explanation of what the player needs to do in this step.'
    }
  ];

  const handlePrevClick = () => {
    setCurrentPage(currentPage === 0 ? pages.length - 1 : currentPage - 1);
  };

  const handleNextClick = () => {
    setCurrentPage(currentPage === pages.length - 1 ? 0 : currentPage + 1);
  };

  const handleHomeClick = () => {
    setIsModalOpen(false);
    history({returnUrl});
  };

  const handleOpenModal = () => {
    console.log("Opening modal...");
    setIsModalOpen(true);
  };

  const handleOpenModal2 = () => {
    alert("Button clicked!");
  };

  return (
    <div>
      <p>Modal Open: {isModalOpen.toString()}</p>
      <button onClick={handleOpenModal}>Open Game Guide</button>
      <button onClick={handleOpenModal2}>Click Me</button>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-overlay" onClick={handleHomeClick} />
          <div className="modal-content">
            <div className="carousel">
              <img src={pages[currentPage].image} alt={pages[currentPage].title} />
              <div className="carousel-content">
                <h2>{pages[currentPage].title}</h2>
                <p>{pages[currentPage].text}</p>
              </div>
              <div className="carousel-controls">
                <button onClick={handlePrevClick}>Prev</button>
                <button onClick={handleNextClick}>Next</button>
                <button onClick={handleHomeClick}>Exit</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GameGuide;