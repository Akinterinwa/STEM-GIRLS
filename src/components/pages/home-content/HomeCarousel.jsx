import React, { useState, useEffect } from 'react';
import './HomeCarousel.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import breakingBarriers from '../../../images/stem-girls-img.jpg';
import roleModels from '../../../images/stem-girls-img-2.jpg';
import lifelongLearners from '../../../images/stem-girls-img-3.jpg';
import shapingTheFuture from '../../../images/stem-girls-img-4.jpg';

const slides = [
  {
    title: "Breaking Barriers",
    description: "STEM girls are challenging stereotypes and proving that gender is not a barrier to success in STEM fields.",
    image: breakingBarriers,
  },
  {
    title: "Role Models",
    description: "STEM girls inspire others with their passion, dedication, and resilience in pursuing their STEM aspirations.",
    image: roleModels,
  },
  {
    title: "Lifelong Learners",
    description: "STEM girls are curious and eager to learn, constantly seeking new knowledge and skills to further their understanding of the world.",
    image: lifelongLearners,
  },
  {
    title: "Shaping the Future",
    description: "STEM girls are the leaders and innovators of tomorrow, shaping the future of technology, science, engineering, and mathematics with their ideas, passion, and expertise.",
    image: shapingTheFuture,
  },
];

function StemCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  return (
    <div className="stem-carousel">
      <div className="carousel-main-container">
        <div className="slides-container">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`slide ${index === currentSlide ? 'active' : ''}`}>
              <div className="slide-grid">
                <div className="slide-content">
                  <span className="slide-badge">STEM Excellence</span>
                  <h2 className="slide-title">{slide.title}</h2>
                  <div className="slide-divider"></div>
                  <p className="slide-description">{slide.description}</p>
                </div>
                <div className="slide-image-container">
                  <div className="slide-image-gradient"></div>
                  <img src={slide.image} alt={slide.title} className="slide-image" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <button onClick={goToPrevious} className="carousel-arrow left" aria-label="Previous slide">
          <FaChevronLeft />
        </button>
        <button onClick={goToNext} className="carousel-arrow right" aria-label="Next slide">
          <FaChevronRight />
        </button>

        <div className="carousel-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`carousel-dot ${index === currentSlide ? 'active' : 'inactive'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="carousel-progress-bar-container">
        <div
          className="carousel-progress-bar"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>
    </div>
  );
}

export default function HomeCarousel() {
  return (
    <div className="programs-page">
      <div className="programs-container">
        <div className="programs-header">
          <h1 className="programs-title">Our Programs</h1>
          <div className="header-divider"></div>
          <p className="programs-subtitle">Empowering the next generation of women in STEM</p>
        </div>
        <StemCarousel />
      </div>
    </div>
  );
}
