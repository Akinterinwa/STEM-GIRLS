import React from "react";
import HeroSection from "../../HeroSection";
import FocusSection from "./Focus";
import HomeCarousel from "./HomeCarousel";
import StemForEveryone from "./StemForEveryone";
import Quote from "./Quote";
import FaqSection from "./FaqSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <FocusSection />
      <HomeCarousel />
      <StemForEveryone />
      <Quote />
      <FaqSection />
    </>
  );
};

export default Home;
