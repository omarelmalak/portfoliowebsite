"use client";
import exp from "constants";
import {
    motion,
    useScroll,
    useTransform,
    useMotionTemplate,
    useAnimation,
    useDragControls,
    animate,
    useMotionValue,
    MotionValue
} from "framer-motion";
import { useRef, useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaChevronCircleLeft, FaChevronCircleRight, FaGithub } from 'react-icons/fa';
import useDimension from "../utils/useDimension";

interface GalleryProps {
    isLight: boolean
}

const Gallery: React.FC<GalleryProps> = ({ isLight }) => {
    const photoPaths = [
        "/assets/galleryphotos/deerhacks.png",
        "/assets/galleryphotos/ecc1.png",
        "/assets/galleryphotos/ecc2.png",
        "/assets/galleryphotos/geotab.png",
        "/assets/galleryphotos/grubtech1.png",
        "/assets/galleryphotos/grubtech2.png",
        "/assets/galleryphotos/grubtech3.png",
        "/assets/galleryphotos/uofthacks1.png",
        "/assets/galleryphotos/uofthacks2.png",
        "/assets/galleryphotos/uofthacks3.png",
        "/assets/galleryphotos/uofthacks4.png",
        "/assets/galleryphotos/uofthacks5.png",
        "/assets/galleryphotos/collision1.png",
        "/assets/galleryphotos/collision2.png",
        "/assets/galleryphotos/collision3.png",
        "/assets/galleryphotos/collision4.png"
    ];

    return (
        <div className={`overflow-x-hidden ${isLight ? "bg-[#F2F2F7] text-black" : "bg-black text-white"}`} >
            <div className="absolute right-[20vw] top-[0vh] w-[400px] h-[460px] bg-gradient-to-r from-[#3B82F6] to-[#7C3AED] rounded-full opacity-30 blur-3xl animate-left-hero" />
            <div className="absolute right-[0vw] top-[60vh] w-[300px] h-[460px] bg-gradient-to-r from-[#B99CE7] to-[#F1B27A] rounded-full opacity-30 blur-3xl animate-right-hero" />
            <div className="absolute left-[0vw] top-[30vh] w-[300px] h-[460px] bg-gradient-to-b from-[#B99CE7] to-[#7C3AED] rounded-full opacity-30 blur-3xl animate-left-hero" />
            <div className="absolute left-[30vw] top-[80vh] w-[400px] h-[460px] bg-gradient-to-b from-[#77A7D5] to-[#A1D6B3] rounded-full opacity-30 blur-3xl animate-left-hero" />
            <div className="absolute left-[0vw] top-[170vh] w-[300px] h-[460px] bg-gradient-to-b from-[#F7D1A4] to-[#F4F1A1] rounded-full opacity-30 blur-3xl animate-left-hero" />
            <div className="absolute right-[25vw] top-[160vh] w-[400px] h-[460px] bg-gradient-to-b from-[#77A7D5] to-[#F2A9C6] rounded-full opacity-30 blur-3xl animate-left-hero" />
            <div className="absolute right-[5vw] top-[230vh] w-[400px] h-[460px] bg-gradient-to-b from-[#A0E4D9] to-[#A8D9F7] rounded-full opacity-30 blur-3xl animate-right-hero" />
            <div className="absolute left-[30vw] top-[240vh] w-[400px] h-[460px] bg-gradient-to-b from-[#F7D1A4] to-[#F2A9C6] rounded-full opacity-30 blur-3xl animate-right-hero" />


            <motion.div
                className="top-[80px] pl-[10vw] text-left mt-[10vh]"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                <h1 className="text-6xl font-sfBold tracking-tight" style={{ fontSize: '6.3vmin' }}>Gallery</h1>
                <p className="text-4xl font-sfBold text-gray-400 mt-2" style={{ fontSize: '3.7vmin' }}>My work, through the lens.</p>
                <div className="relative min-h-[100vh] max-w-[100vw] mt-[6vh] pr-[10vw] overflow-x-hidden flex flex-row gap-10 h-full">
                    <Column images={[photoPaths[0], photoPaths[11], photoPaths[2], photoPaths[10], photoPaths[6]]} />
                    <Column images={[photoPaths[14], photoPaths[3], photoPaths[13], photoPaths[4], photoPaths[8], photoPaths[12]]} />
                    <Column images={[photoPaths[1], photoPaths[9], photoPaths[7], photoPaths[15], photoPaths[5]]} />
                </div>
            </motion.div>
        </div >
    );
};
const LazyImage = ({ src, alt }: { src: string; alt: string }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    const handleLoad = () => {
        setIsLoaded(true);
    };

    return (
        <div className="relative w-full min-w-[250px] rounded-[25px] overflow-hidden">
            <motion.img
                src={src}
                alt={alt}
                className={`w-full h-full object-cover transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: isLoaded ? 1 : 0 }}
                onLoad={handleLoad}
                loading="lazy"
            />
            {!isLoaded && (
                <div className="absolute skeleton inset-0 bg-gray-300 animate-pulse"></div>
            )}
        </div>
    );
};

const Column = ({ images, y }: { images: string[]; y?: MotionValue<number> }) => {
    const defaultY = useMotionValue(0);

    return (
        <motion.div className="flex flex-col gap-[2vw] w-[33%]">
            {images.map((image, index) => {

                return (
                    <div key={index} className="relative w-full min-w-[250px] rounded-[25px] overflow-hidden">
                        <LazyImage key={index} src={image} alt={`experience ${index}`} />
                    </div>
                );
            })}
        </motion.div>
    );
};


export default Gallery;