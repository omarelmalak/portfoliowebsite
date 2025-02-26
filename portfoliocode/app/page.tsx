"use client";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import ComingSoon from "./components/ComingSoon";



const Website: React.FC = () => {


  return (
    <div>
      <Hero />
      <Experience />
      <div className="h-[30vh] bg-black" />
      <ComingSoon />
    </div>
  );
};

export default Website;