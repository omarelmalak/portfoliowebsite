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



const Gallery: React.FC = () => {
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
        <div>
            <motion.div
                className="top-[80px] pl-[10vw] text-left mt-[10vh]"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <h1 className="text-6xl font-sfBold text-white tracking-tight">Gallery</h1>
                <p className="text-4xl font-sfBold text-gray-400 mt-2">Welcome to my world.</p>
                <div className="relative min-h-[100vh] max-w-[100vw] mt-[6vh] pr-[10vw] overflow-x-hidden flex flex-row gap-10 bg-black h-full">
                    <Column images={[photoPaths[0], photoPaths[11], photoPaths[2], photoPaths[10], photoPaths[6]]} />
                    <Column images={[photoPaths[14], photoPaths[3], photoPaths[13], photoPaths[4], photoPaths[8], photoPaths[12]]} />
                    <Column images={[photoPaths[1], photoPaths[9], photoPaths[7], photoPaths[15], photoPaths[5]]} />
                </div>
            </motion.div>
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
                        <img className="w-full h-full object-cover" src={image} alt="experience" />
                    </div>
                );
            })}
        </motion.div>
    );
};


export default Gallery;