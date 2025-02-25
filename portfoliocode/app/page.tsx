"use client";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";



const Website: React.FC = () => {


  return (
    <div>
      <Hero />
      <Experience />
    </div>

  );
};

export default Website;