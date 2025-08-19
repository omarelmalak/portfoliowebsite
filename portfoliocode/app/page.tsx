"use client";
import Hero from "./components/Hero";
import Experiences from "./components/Experience";
import Projects from "./components/Projects";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import ComingSoon from "./components/ComingSoon";
import Lenis from "lenis";
import { Meteors } from "./components/meteors";
import { Particles } from "./components/particles";

const Website: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const toggleMode = () => {
    setIsLight(!isLight);
  };


  const texts = ["Hello", "Bonjour", "مرحبا"];

  const [isLoading, setIsLoading] = useState(1);
  const [index, setIndex] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 1000);

    setTimeout(() => {
      setIsLoading(0);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`transition-all duration-500 ease-in-out ${isLight ? "bg-[#F2F2F7] text-black" : "bg-black text-white"}`}>
      <div className={`relative transition-all duration-500 ease-in-out ${isLight ? "bg-[#F2F2F7] text-black" : "bg-black text-white"}`}>
        <AnimatePresence>
          {isLoading && (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 1, y: "-100vh" }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="bg-black h-screen absolute inset-0 flex items-center justify-center text-gray-400 text-5xl font-SfSemibold z-50"
            >

              <motion.span
                key={index}
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                }}
              >
                {texts[index]}
              </motion.span>
            </motion.div>
          )}
        </AnimatePresence>


        <motion.div
          className={`relative transition-all duration-500 ease-in-out ${isLight ? "bg-[#F2F2F7] text-black" : "bg-black text-white"} min-h-screen max-w-screen flex flex-col h-full z-0`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          style={{ visibility: isLoading ? 'hidden' : 'visible' }}
        >

          <Hero toggleMode={toggleMode} isLight={isLight} />
        </motion.div>
      </div>




      {!isMobile && !isLoading && (
        <>
          <motion.div
            id="experiences"
            className={`relative transition-all duration-500 ease-in-out ${isLight ? "bg-[#F2F2F7] text-black" : "bg-black text-white"} min-h-screen max-w-screen flex flex-col h-full`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Experiences isLight={isLight} />
          </motion.div>

          <div className={"overflow-hidden"}>

            <motion.div
              id="projects"
              className={`relative  z-[0] transition-all duration-500 ease-in-out ${isLight ? "bg-[#F2F2F7] text-black" : "bg-black text-white"} min-h-screen max-w-screen flex flex-col h-full`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <Projects isLight={isLight} />
            </motion.div>

            <motion.div
              id="gallery"
              className={`relative transition-all duration-500 ease-in-out ${isLight ? "bg-[#F2F2F7] text-black" : "bg-black text-white"} min-h-screen max-w-screen flex flex-col h-full`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Gallery isLight={isLight} />
            </motion.div>

            {/* <motion.div
            className={`relative transition-all duration-500 ease-in-out ${isLight ? "bg-[#F2F2F7] text-black" : "bg-black text-white"} min-h-screen max-w-screen flex flex-col h-full`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <ComingSoon isLight={isLight} />
          </motion.div> */}
            <motion.footer
              className={`w-full py-[50px] mt-auto ${isLight ? "bg-[#F2F2F7] text-black" : "bg-black text-white"}
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Footer isLight={isLight} />
            </motion.footer>
          </div>
        </>
      )}
    </div>
  );
};

export default Website;

