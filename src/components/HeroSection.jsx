"use client"

import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import "./pages/home-content/Home.css"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100) // Small delay to ensure transition triggers
    return () => clearTimeout(timer)
  }, [])

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }

  return (
    <section className="hero-section">
      <div className="hero-left-side">
        <div
          className={`hero-bg-image ${isVisible ? "visible" : ""}`}
        />
      </div>

      <div className="hero-right-side">
        <div className="hero-text-content">
          <h1 className="hero-headline">
            <span
              className={`hero-headline-span ${isVisible ? "visible" : ""}`}
              style={{ transitionDelay: "200ms" }}
            >
              Educate,{" "}
            </span>
            <span
              className={`hero-headline-inspire ${isVisible ? "visible" : ""}`}
              style={{ transitionDelay: "400ms" }}
            >
              inspire
            </span>
            <span
              className={`hero-headline-span ${isVisible ? "visible" : ""}`}
              style={{ transitionDelay: "600ms" }}
            >
              {" "}
              & Empower
            </span>
          </h1>

          <p
            className={`hero-subheadline ${isVisible ? "visible" : ""}`}
            style={{ transitionDelay: "800ms" }}
          >
            Encouraging young girls to pursue career paths in STEM related disciplines and reach their full potentials.
          </p>

          <div
            className={`hero-buttons-container ${isVisible ? "visible" : ""}`}
            style={{ transitionDelay: "1000ms" }}
          >
            <Link to="/start-new">
              <button
                className="hero-button start-site"
              >
                START A SITE
              </button>
            </Link>
            <Link to="/volunteer">
              <button
                className="hero-button volunteer"
              >
                VOLUNTEER
              </button>
            </Link>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToContent}
        className={`scroll-button ${isVisible ? "visible" : ""}`}
        style={{ transitionDelay: "1200ms" }}
        aria-label="Scroll to content"
      >
        <span className="scroll-text">Scroll</span>
        <svg
          className="scroll-chevron"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
    </section>
  )
}
