"use client";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import ComingSoon from "./components/ComingSoon";



const Website: React.FC = () => {


  return (
    <div className="bg-black">
      <motion.div
        className="relative min-h-screen max-w-screen flex flex-col bg-black h-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 1, ease: "easeOut" }}>
        <Hero />
      </motion.div>
      <motion.div
        className="relative min-h-screen max-w-screen flex flex-col bg-black h-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 1, ease: "easeOut" }}>
        <Experience />
      </motion.div>

      <div className="h-[30vh] bg-black" />
      <ComingSoon />
    </div>
  );
};

export default Website;