import React from "react";
import '../styles/globals.css';
import Herosection from "./components/Herosection/Herosection";
import Features from "./components/Features/Features";
import Subsection from "./components/Subsection/Subsection";
import Pricing from "./components/Pricing/Pricing";
import Pricingsubsection from "./components/Subsection/Pricingsubsection";
import Footer from "./components/Footer/Footer";
import Footersubsection from "./components/Subsection/Footersubsection";



export default function Home() {
  return (
    <div>
      <Herosection />
      <Features />
      <Subsection />
      <Pricing />
      <Pricingsubsection />
      <Footer />
      <Footersubsection />
    </div>
  );
}






