"use client";
import Hero from "./components/Hero";
import Experiences from "./components/Experience";
import Projects from "./components/Projects";
import Gallery from "./components/Gallery";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";
import ComingSoon from "./components/ComingSoon";
import Lenis from "lenis";


const Website: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // const [scrollY, setScrollY] = useState(0);

  // useEffect(() => {
  //   const lenis = new Lenis();

  //   function raf(time: any) {
  //     lenis.raf(time);
  //     setScrollY(lenis.scroll);
  //     requestAnimationFrame(raf);
  //   }
  //   requestAnimationFrame(raf);
  //   return () => {
  //     lenis.destroy();
  //   };
  // }, []);



  return (
    <div className="bg-black">
      <motion.div
        className="relative min-h-screen max-w-screen flex flex-col bg-black h-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Hero />
      </motion.div>

      {!isMobile && (
        <>
          <motion.div
            id="experiences"
            className="relative min-h-screen max-w-screen flex flex-col bg-black h-full"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Experiences />
          </motion.div>

          <motion.div
            id="projects"
            className="relative min-h-screen max-w-screen flex flex-col bg-black h-full"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Projects />
          </motion.div>

          <motion.div
            id="gallery"
            className="relative min-h-screen max-w-screen flex flex-col bg-black h-full"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Gallery />
          </motion.div>

          <motion.div
            className="relative min-h-screen max-w-screen flex flex-col bg-black h-full"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <ComingSoon />
          </motion.div>
        </>
      )}
    </div>
  );
};

export default Website;