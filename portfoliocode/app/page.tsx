"use client";
import Hero from "./components/Hero";
import Experiences from "./components/Experience";
import Projects from "./components/Projects";
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
        <Experiences />
      </motion.div>

      <motion.div
        className="relative min-h-screen max-w-screen flex flex-col bg-black h-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 1, ease: "easeOut" }}>
        <Projects />
      </motion.div>

      <motion.div
        className="relative min-h-screen max-w-screen flex flex-col bg-black h-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 1, ease: "easeOut" }}>
        <ComingSoon />
      </motion.div>


    </div>
  );
};

export default Website;