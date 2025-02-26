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
      <div className="relative h-[100vh] w-[100vw] flex items-center justify-center bg-black overflow-y-hidden">
        <div className="absolute top-1 left-3 w-[500px] h-[400px] bg-gradient-to-r from-[#A7C7E7] to-[#A1D6B3] rounded-full opacity-20 blur-3xl animate-left-hero" />
        <div className="absolute top-1 right-[0vw] w-[500px] h-[400px] bg-gradient-to-r from-[#3B82F6] from-[#F4F1A1] rounded-full opacity-35 blur-3xl animate-right-hero" />
        <div className="absolute top-[60vh] right-[30vw] w-[600px] h-[300px] bg-gradient-to-r from-[#F1B27A] from-[#F4F1A1] rounded-full opacity-35 blur-3xl animate-right-hero" />
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-sfBold text-gray-400 tracking-tight">Coming soon...</h1>
        </motion.div>
      </div>

    </div>

  );
};

export default Website;