import React from "react";
import About from "../Components/MainPage/About";
import Footer from "../Components/MainPage/Footer";
import Hero from "../Components/MainPage/Hero";
import Features from "../Components/MainPage/Features";
import Header from "../Components/MainPage/Header";

import "../index.css";

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <About />
      <Footer />
    </>
  );
}
