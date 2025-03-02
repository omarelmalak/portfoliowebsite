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
import Lenis from "lenis";
import useDimension from "../utils/useDimension";

interface Project {
    title: string,
    summary: string,
    technologies: string[],
    demoPath: string,
    githubLink: string,
    width: string,
    height: string,
    marginTop: string,
    scale: string,
    bottom: number,
}



const Gallery: React.FC = () => {
    const photoPaths = [
        "/assets/galleryphotos/deerhacks.png",
        "/assets/galleryphotos/ecc1.png",
        "/assets/galleryphotos/ecc2.png",
        "/assets/galleryphotos/geotab.png",
        "/assets/galleryphotos/grubtech1.png",
        "/assets/galleryphotos/uofthacks1.png",
        "/assets/galleryphotos/uofthacks2.png",
        "/assets/galleryphotos/uofthacks3.png",
        "/assets/galleryphotos/uofthacks4.png",
        "/assets/galleryphotos/uofthacks5.png",
    ]

    // useEffect(() => {
    //     const lenis = new Lenis()

    //     function raf(time: number) {
    //         lenis.raf(time)
    //         requestAnimationFrame(raf)
    //     }

    //     requestAnimationFrame(raf)
    // }, [])

    const container = useRef(null);
    const { height } = useDimension();
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start']
    })
    const y = useTransform(scrollYProgress, [0, 1], [0, height * 2])
    const y1 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3])
    const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25])
    const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 3])



    return (
        <div>
            <div className="bg-black h-[500vh] flex flex-row gap-[2vw] p-[2vw] overflow-hidden">
                <Column images={[photoPaths[0], photoPaths[1], photoPaths[2]]} y={y} />
                <Column images={[photoPaths[3], photoPaths[4], photoPaths[5]]} y={y2} />
                <Column images={[photoPaths[6], photoPaths[7], photoPaths[8]]} y={y3} />
            </div>
        </div>

    );
}



const Column = ({ images, y }: { images: string[]; y?: MotionValue<number> }) => {
    const defaultY = useMotionValue(0);

    return (
        <motion.div style={{ y: y ?? defaultY }} className="w-33% h-100% flex flex-col gap-2vw">
            {images.map((image, index) => (
                <div key={index} className="relative w-100% h-100% min-w-[250px] border-[1vw] overflow-hidden">
                    <img className="fit-cover" src={image} alt="experience" />
                </div>
            ))}
        </motion.div>
    );

}

export default Gallery;