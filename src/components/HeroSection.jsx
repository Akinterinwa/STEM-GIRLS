import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import "./HeroSection.css";

const slides = [
  {
    title: "Educate",
    subtitle: "Building foundations for tomorrow's leaders",
    description:
      "Encouraging young girls to pursue career paths in STEM related disciplines and reach their full potentials...",
    image: "/black-girls-coding.jpg",
    cta1: "Join Us",
    cta2: "Learn More",
    link1: "/volunteer",
    link2: "/mission",
  },
  {
    title: "Inspire",
    subtitle: "Igniting passion through mentorship",
    description:
      "STEM girls inspire others with their passion, dedication, and resilience in pursuing their STEM aspirations.",
    image: "/black-girls-math.jpg",
    cta1: "Join Us",
    cta2: "Our Programs",
    link1: "/volunteer",
    link2: "/events",
  },
  {
    title: "Empower",
    subtitle: "Shaping the future of technology",
    description:
      "STEM girls are the leaders and innovators of tomorrow, shaping the future with their ideas and expertise.",
    image: "/black-girls-mentor-session.jpg",
    cta1: "Get Involved",
    cta2: "Contact Us",
    link1: "/volunteer",
    link2: "/contact",
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [currentSlide, isPaused]);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  const goToSlide = (index) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  return (
    <div
      className="hero-carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? "active" : ""}`}
        >
          <div className="background-image">
            <img
              src={slide.image || "/placeholder.svg"}
              alt={slide.title}
            />
            <div className="overlay" />
          </div>

          <div className="content-container">
            <div className="content">
              {index === currentSlide && (
                <>
                  <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
                    <p className="subtitle">{slide.subtitle}</p>
                  </div>
                  <div className="animate-slide-up" style={{ animationDelay: "0.4s" }}>
                    <h1 className="title">{slide.title}</h1>
                  </div>
                  <div className="animate-slide-up" style={{ animationDelay: "0.6s" }}>
                    <p className="description">{slide.description}</p>
                  </div>
                  <div className="cta-container animate-slide-up" style={{ animationDelay: "0.8s" }}>
                    <Link to={slide.link1}>
                      <button className="cta-button primary">{slide.cta1}</button>
                    </Link>
                    <Link to={slide.link2}>
                      <button className="cta-button outline">{slide.cta2}</button>
                    </Link>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        disabled={isAnimating}
        className="nav-button prev-button"
        aria-label="Previous slide"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={nextSlide}
        disabled={isAnimating}
        className="nav-button next-button"
        aria-label="Next slide"
      >
        <ChevronRight />
      </button>

      <div className="dots-container">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            disabled={isAnimating}
            className={`dot ${index === currentSlide ? "active" : ""}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="scroll-indicator">
        <span className="scroll-text">Scroll</span>
        <div className="scroll-line">
          <div className="scroll-line-pulse" />
        </div>
      </div>
    </div>
  );
}
