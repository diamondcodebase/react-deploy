"use client";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './GameGuide.css'; // Import your CSS styles
import plant from "../static/img/lovely_plant.png";

// Import your images
import image1 from '../static/img/guide_page1.png';
import image2 from '../static/img/guide_page2.png';
import image3 from '../static/img/guide_page3.png';
import image4 from '../static/img/guide_page4.png';
import image5 from '../static/img/guide_page5.png';
import image6 from '../static/img/guide_page6.png';
import image7 from '../static/img/guide_page7.png';
import image8 from '../static/img/guide_page8.png';

const GameGuide = ({ returnUrl = '/' }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const history = useNavigate();

  const pages = [
    {
      image: image1,
      title: 'START',
      text: 'To start the game, click "Start Game".'
    },
    {
      image: image2,
      title: 'TIME REMAINING',
      text: 'Timer will start counting down, you have a minute to take this challenge.'
    },
    {
      image: image3,
      title: 'QUESTION',
      text: 'The first question will be shown in the box.'
    },
    {
      image: image4,
      title: 'CHOICE',
      text: 'You can determine the given statement is right or wrong.'
    },
    {
      image: image5,
      title: 'CONFIRM',
      text: 'If you made your decision, click "Confirm Answer".'
    },
    {
      image: image6,
      title: 'RESULT',
      text: 'The result of your choice will be shown. You will get one Score if you got the right answer.'
    },
    {
      image: image7,
      title: 'NEXT QUESTION',
      text: 'You can read the result, the time counter pauses until you click "Next Question" to the next question.'
    },
    {
      image: image8,
      title: 'GO AHEAD',
      text: 'You will see the next question. Totally there are 5 questions in a single trial. Enjoy!'
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
    setCurrentPage(0);
    history({returnUrl});
  };

  const handleOpenModal = () => {
    console.log("Opening modal...");
    setIsModalOpen(true);
  };

  return (
    <div>
      <div className="group rounded-lg border border-transparent px-5 py-4 transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 hover:border-green-500 hover:bg-green-100/50" 
        onClick={handleOpenModal}>
          <div className="flex flex-col items-center">
            <h2 className={`mb-3 text-2xl sm:text-3xl font-bold text-green-600`}>
              Guide
            </h2>       
            <img className="rounded-md opacity-30 object-cover ease-in-out duration-300 group-hover:-rotate-12 group-hover:scale-120 group-hover:opacity-60 w-20 sm:w-28 md:w-40 max-w-full h-auto px-1 py-1 sm:px-3 sm:py-2" 
              src={ plant } 
              // width={80} 
              // height={160} 
              alt="Plant"/> 
          </div>  
      </div>
      {isModalOpen && (
        <div className={`modal ${isModalOpen ? 'modal-open' : ''}`}>
          <div className="modal-overlay" onClick={handleHomeClick} />
          <div className="modal-content">
            <div className="carousel">
              <img src={pages[currentPage].image} alt={pages[currentPage].title} />
              <div className="carousel-content">
                <h2>{pages[currentPage].title}</h2>
                <p>{pages[currentPage].text}</p>
              </div>
              <div className="carousel-indicators">
                {pages.map((_, index) => (
                  <span
                    key={index}
                    className={`indicator ${index === currentPage ? 'active' : ''}`}
                  ></span>
                ))}
              </div>
              <div className="carousel-controls">
                {currentPage > 0 && (
                  <button onClick={handlePrevClick}>
                    Prev
                </button>
                )}
                {currentPage < pages.length - 1 && (
                  <button onClick={handleNextClick}>
                    Next
                  </button>
                )}
                <button onClick={handleHomeClick}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GameGuide;