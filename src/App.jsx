import { useState } from "react";
import "./App.css";

import Hero from "./components/Hero";
import heroImage from "./assets/images/hero.jpg";
import Process from "./components/Process";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";

import order from "./assets/images/order.jpg";
import wait from "./assets/images/await.jpg";
import enjoy from "./assets/images/enjoy.jpg";
import about from "./assets/images/about.jpg";
function App() {
  const cardData = [
    {
      title: "Act",
      description: "Choose the plan that works best for you.",
      imageSrc: order,
    },
    {
      title: "Await",
      description: "We are selecting the best coffee for you.",
      imageSrc: wait,
    },
    {
      title: "Enjoy",
      description: "Have coffee delivered right to your doorstep.",
      imageSrc: enjoy,
    },
  ];
  return (
    <>
      <Hero
        title={"HAND-SELECTED COFFEE"}
        subTitle={"DELIVERED TO YOUR DOOR MONTHLY"}
        description={"Have a look at our selection"}
        btnText={"Start Now"}
        bgSrc={heroImage}
      ></Hero>
      <Process title={"Our Process"} cardData={cardData}></Process>
      <About
        image={about}
        overlayOpacity={0.7}
        title="About Our Coffee Shop"
        subtitle="Crafted with Love"
        description="We pride ourselves on selecting the finest beans and providing a warm atmosphere for all coffee lovers."
      />
      <Contact></Contact>
    </>
  );
}

export default App;
