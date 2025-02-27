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
    useMotionValue
} from "framer-motion";
import { useRef, useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaChevronCircleLeft, FaChevronCircleRight, FaGithub } from 'react-icons/fa';


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


const Projects: React.FC = () => {
    const sokoban: Project = {
        title: "Sokoban",
        summary: "An implementation of the popular Sokoban video game.",
        technologies: ["/assets/technologies/assembly.png"],
        demoPath: "/assets/projectdemos/sokobandemo.png",
        githubLink: "https://github.com/omarelmalak/SokobanGame",
        width: "18vw",
        height: "22vh",
        marginTop: "6vh",
        scale: "0.9",
        bottom: 50
    }

    const md5: Project = {
        title: "MD5 Password Hasher",
        summary: "An implementation of the MD5 Hashing algorithm for efficient password validation and security.",
        technologies: ["/assets/technologies/python.png"],
        demoPath: "/assets/projectdemos/md5demo.png",
        githubLink: "https://github.com/omarelmalak/MD5HashingProject",
        width: "15vw",
        height: "20vh",
        marginTop: "0vh",
        scale: "0.9",
        bottom: 30
    }

    const fortcraft: Project = {
        title: "FortCraft",
        summary: "An adventure video game created with 4 design patterns.",
        technologies: ["/assets/technologies/java.png", "/assets/technologies/javafx.png"],
        demoPath: "/assets/projectdemos/fortcraftdemo.png",
        githubLink: "https://github.com/omarelmalak/FortCraftGame",
        width: "19vw",
        height: "23vh",
        marginTop: "10vh",
        scale: "0.9",
        bottom: 50
    }

    const estimap: Project = {
        title: "EstiMap",
        summary: "An AI-powered app aimed to provide a predictive forecast on housing prices.",
        technologies: ["/assets/technologies/reactnative.png", "/assets/technologies/scikit.png", "/assets/technologies/typescript.png", "/assets/technologies/javascript.png", "/assets/technologies/googlemaps.png", "/assets/technologies/figma.png"],
        demoPath: "/assets/projectdemos/estimapdemo2.png",
        githubLink: "https://github.com/omarelmalak/EstiMap",
        width: "15vw",
        height: "15vh",
        marginTop: "0vh",
        scale: "0.9",
        bottom: 10
    }

    const playfair: Project = {
        title: "Playfair Cipher",
        summary: "An implementation of the Playfair Cipher with examples.",
        technologies: ["/assets/technologies/python.png"],
        demoPath: "/assets/projectdemos/playfairdemo.png",
        githubLink: "https://github.com/omarelmalak/PlayfairCipher",
        width: "15vw",
        height: "15vh",
        marginTop: "6vh",
        scale: "0.9",
        bottom: 50
    }

    const ufc: Project = {
        title: "UFC Fight Predictor",
        summary: "A webscraper + AI project that predicts UFC fight outcomes based on past performances.",
        technologies: ["/assets/technologies/tensorflow.png", "/assets/technologies/pandas.png", "/assets/technologies/beautifulsoup.png", "/assets/technologies/scikit.png"],
        demoPath: "/assets/projectdemos/ufcdemo.png",
        githubLink: "https://github.com/omarelmalak/UFCPredictor",
        width: "15vw",
        height: "15vh",
        marginTop: "3vh",
        scale: "0.9",
        bottom: 30
    }

    const scriptorium: Project = {
        title: "Scriptorium",
        summary: "A hybrid between Piazza, Reddit, and GitHub, allowing users to share their code ideas with the world.",
        technologies: ["/assets/technologies/prisma.png", "/assets/technologies/sqlite.png", "/assets/technologies/javascript.png", "/assets/technologies/typescript.png", "/assets/technologies/docker.png", "/assets/technologies/react.png", "/assets/technologies/nextjs.png"],
        demoPath: "/assets/projectdemos/scriptoriumdemo.png",
        githubLink: "https://github.com/omarelmalak/Scriptorium",
        width: "15vw",
        height: "15vh",
        marginTop: "4vh",
        scale: "1",
        bottom: 60
    }

    const flare: Project = {
        title: "flare.",
        summary: "A social media platform for you to share your hot takes (unpopular opinions) with your friends.",
        technologies: ["/assets/technologies/supabase.png", "/assets/technologies/django.png", "/assets/technologies/figma.png", "/assets/technologies/reactnative.png", "/assets/technologies/sqlite.png"],
        demoPath: "/assets/projectdemos/flaredemo.png",
        githubLink: "https://github.com/amr-radwan1/opinions-frontend",
        width: "15vw",
        height: "15vh",
        marginTop: "2vh",
        scale: "1.6",
        bottom: -115
    }

    const roadmapr: Project = {
        title: "Roadmapr",
        summary: "An AI-powered career planning tool that analyzes resumes to generate personalized career roadmaps.",
        technologies: ["/assets/technologies/flask.png", "/assets/technologies/nextjs.png", "/assets/technologies/framermotion.png", "/assets/technologies/supabase.png"],
        demoPath: "/assets/projectdemos/roadmaprdemo.png",
        githubLink: "https://github.com/omarelmalak/deerhacks2025",
        width: "15vw",
        height: "15vh",
        marginTop: "0vh",
        scale: "0.9",
        bottom: -15
    }


    const projects = [
        roadmapr,
        flare,
        scriptorium,
        ufc,
        playfair,
        estimap,
        fortcraft,
        md5,
        sokoban
    ]



    const [screenWidth, setScreenWidth] = useState(0);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setScreenWidth(window.innerWidth);

            const handleResize = () => {
                setScreenWidth(window.innerWidth);
            };

            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }
    }, []);

    const dragLeft = -(screenWidth * 1.05);
    const dragRight = 0;

    // const sliderRef = useRef<Slider | null>(null);

    const dragControls = useDragControls();
    const carouselRef = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);



    const colors = ["#CEA594", "#E3F0FE", "#BCE491", "#FFF3F7"];


    return (
        <div className="relative min-h-screen max-w-[100vw] overflow-x-hidden flex flex-col bg-yellow h-full">
            <div className="absolute left-[0vw] top-[30vh] w-[300px] h-[460px] bg-gradient-to-r from-[#B99CE7] to-[#F1B27A] rounded-full opacity-30 blur-3xl animate-left-hero" />
            <div className="absolute left-[60vw] top-[0vh] w-[460px] h-[370px] bg-gradient-to-r from-[#A0E4D9] to-[#A8D9F7] rounded-full opacity-20 blur-3xl animate-right-hero" />
            <div className="absolute left-[40vw] top-[60vh] w-[380px] h-[300px] bg-gradient-to-r from-[#F7D1A4] to-[#F4F1A1] rounded-full opacity-20 blur-3xl animate-right-hero" />

            <motion.div
                className="top-[80px] pl-[10vw] text-left mt-[10vh]"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <h1 className="text-6xl font-sfBold tracking-tight">Projects</h1>
                <p className="text-4xl font-sfBold text-gray-400 mt-2">Where the magic happens.</p>
            </motion.div>

            <motion.div
                ref={carouselRef}
                className="flex gap-6 items-start cursor-grab active:cursor-grabbing mt-10"
                drag="x"
                dragControls={dragControls}
                style={{ x }}
                dragConstraints={{ left: dragLeft, right: dragRight }}
            >
                {projects.map((project, i) => (
                    <motion.div
                        key={i}
                        className="flex-col h-[60vh] min-w-[20vw] max-w-[20vw] overflow-hidden rounded-2xl text-white flex hover:scale-110 hover:shadow-xl hover:cursor-pointer shadow-lg transition-all duration-500 ease-out transform"
                        style={{
                            marginLeft: i === 0 ? "10vw" : "0",
                            background: `linear-gradient(to bottom, ${colors[i % colors.length]} 0%, #FFFFFF 100%)`,
                        }}
                    >
                        <h1 className="mt-[3vh] ml-[1.3vw] text-xl text-[#2D2D2F] font-sfSemiBold">{project.title}</h1>
                        <p className="mt-[1vh] ml-[1.3vw] text-2xl text-[#2D2D2F] font-sfBold w-full max-w-[17vw]">
                            {project.summary}</p>
                        <motion.img
                            src={project.demoPath}
                            key={i}
                            className="self-center mt-[1vh] object-cover self-end"
                            initial={{ opacity: 0.95 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                            draggable="false"

                            style={{
                                transform: `scale(${project.scale})`,
                                position: 'absolute',
                                bottom: project.bottom
                            }}
                        />

                        <a
                            className="absolute bottom-[1vh] right-[0.5vw] flex justify-center items-center w-[50px] h-[50px] bg-[#2D2D2F] rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#2D2D2F]"
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaGithub size={40} className="text-white" />
                        </a>


                    </motion.div>
                ))}
            </motion.div>


            {/* <button
                onClick={next}
                className="absolute right-[5vw] bottom-[3vh] bg-white px-4 py-2 rounded-full shadow-md"
            >
                Next
            </button> */}



        </div>

    );
}

export default Projects;