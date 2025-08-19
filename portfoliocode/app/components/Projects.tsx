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

interface ProjectsProps {
    isLight: boolean
}


const Projects: React.FC<ProjectsProps> = ({ isLight }) => {
    const sokoban: Project = {
        title: "Sokoban",
        summary: "An implementation of the popular Sokoban video game.",
        technologies: ["/assets/technologies/languages/assembly.png"],
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
        technologies: ["/assets/technologies/languages/python.png"],
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
        technologies: ["/assets/technologies/languages/java.png", "/assets/technologies/framelibs/javafx.png"],
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
        technologies: ["/assets/technologies/languages/typescript.png", "/assets/technologies/languages/javascript.png", "/assets/technologies/framelibs/reactnative.png", "/assets/technologies/framelibs/scikit.png", "/assets/technologies/framelibs/googlemaps.png", "/assets/technologies/devtools/figma.png"],
        demoPath: "/assets/projectdemos/estimapdemo2.png",
        githubLink: "https://github.com/omarelmalak/EstiMap",
        width: "15vw",
        height: "15vh",
        marginTop: "0vh",
        scale: "0.8",
        bottom: 0
    }

    const playfair: Project = {
        title: "Playfair Cipher",
        summary: "An implementation of the Playfair Cipher with examples.",
        technologies: ["/assets/technologies/languages/python.png"],
        demoPath: "/assets/projectdemos/playfairdemo.png",
        githubLink: "https://github.com/omarelmalak/PlayfairCipher",
        width: "15vw",
        height: "15vh",
        marginTop: "6vh",
        scale: "0.9",
        bottom: 50
    }

    const ufc: Project = {
        title: "UFC Predictor",
        summary: "A webscraper + AI project that predicts UFC fight outcomes based on past performances.",
        technologies: ["/assets/technologies/framelibs/tensorflow.png", "/assets/technologies/framelibs/pandas.png", "/assets/technologies/framelibs/beautifulsoup.png", "/assets/technologies/framelibs/scikit.png"],
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
        technologies: ["/assets/technologies/framelibs/prisma.png", "/assets/technologies/framelibs/sqlite.png", "/assets/technologies/devtools/postman.png", "/assets/technologies/devtools/docker.png", "/assets/technologies/framelibs/react.png"],
        demoPath: "/assets/projectdemos/scriptoriumdemo.png",
        githubLink: "https://github.com/omarelmalak/Scriptorium",
        width: "15vw",
        height: "15vh",
        marginTop: "4vh",
        scale: "1",
        bottom: 60
    }

    const pca: Project = {
        title: "AI Lab Inc.",
        summary: "A student exam score prediction report with multiple AI models using mock Khan Academy data.",
        technologies: ["/assets/technologies/languages/python.png", "/assets/technologies/framelibs/numpy.png", "/assets/technologies/framelibs/tensorflow.png", "/assets/technologies/framelibs/pandas.png"],
        demoPath: "/assets/projectdemos/pcademo.png",
        githubLink: "https://github.com/omarelmalak/AILabInc",
        width: "15vw",
        height: "15vh",
        marginTop: "4vh",
        scale: "0.9",
        bottom: 30
    }

    const flare: Project = {
        title: "flare.",
        summary: "A social media platform for you to share your hot takes (unpopular opinions) with your friends.",
        technologies: ["/assets/technologies/languages/typescript.png", "/assets/technologies/devtools/supabase.png", "/assets/technologies/framelibs/django.png", "/assets/technologies/devtools/figma.png", "/assets/technologies/framelibs/reactnative.png", "/assets/technologies/framelibs/sqlite.png", "/assets/technologies/devtools/expo.png"],
        demoPath: "/assets/projectdemos/flaredemo.png",
        githubLink: "https://github.com/amr-radwan1/opinions-frontend",
        width: "15vw",
        height: "15vh",
        marginTop: "2vh",
        scale: "1.5",
        bottom: -115
    }

    const roadmapr: Project = {
        title: "Roadmapr",
        summary: "An AI-powered career planning tool that analyzes resumes to generate personalized career roadmaps.",
        technologies: ["/assets/technologies/framelibs/flask.png", "/assets/technologies/framelibs/cohere.png", "/assets/technologies/framelibs/react.png", "/assets/technologies/framelibs/nextjs.png", "/assets/technologies/framelibs/framermotion.png", "/assets/technologies/devtools/supabase.png"],
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
        pca,
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
                console.log(window.innerWidth)
            };

            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }
    }, []);

    const dragLeft = -(screenWidth * 1.3);
    const dragRight = 0;

    // const sliderRef = useRef<Slider | null>(null);

    const dragControls = useDragControls();
    const carouselRef = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);

    const [isAtStart, setIsAtStart] = useState(true);
    const [isAtEnd, setIsAtEnd] = useState(false);

    const checkScrollPosition = () => {
        if (carouselRef.current) {
            const isAtStart = carouselRef.current.scrollLeft === 0;
            const isAtEnd = carouselRef.current.scrollLeft + carouselRef.current.clientWidth >= carouselRef.current.scrollWidth;

            setIsAtStart(isAtStart);
            setIsAtEnd(isAtEnd);
        }
    };

    const leftButton = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: -800, behavior: 'smooth' });
            checkScrollPosition()
        }
    };

    const rightButton = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: 800, behavior: 'smooth' });
            checkScrollPosition()
        }
    };


    const colors = ["#FFF3F7", "#E3F0FE", "#CEA594", "#BCE491"];


    return (
        <div className={`relative ${isLight ? "bg-[#F2F2F7] text-black" : "bg-black text-white"} min-h-[100vh] max-w-[100vw] overflow-x-hidden overflow-y-hidden flex flex-col h-full`}>
            <div className="absolute left-[0vw] top-[30vh] w-[300px] h-[460px] bg-gradient-to-r from-[#B99CE7] to-[#F1B27A] rounded-full opacity-30 blur-3xl animate-left-hero" />
            <div className="absolute left-[60vw] top-[15vh] w-[460px] h-[370px] bg-gradient-to-r from-[#A0E4D9] to-[#A8D9F7] rounded-full opacity-30 blur-3xl animate-right-hero" />
            <div className="absolute left-[40vw] top-[50vh] w-[430px] h-[300px] bg-gradient-to-r from-[#F7D1A4] to-[#F4F1A1] rounded-full opacity-30 blur-3xl animate-right-hero" />

            <motion.div
                className="top-[80px] pl-[10vw] text-left mt-[10vh]"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <h1 className="text-6xl font-sfBold tracking-tight" style={{ fontSize: '6.3vmin' }}>Projects</h1>
                <p className="text-4xl font-sfBold text-gray-400 mt-[0.8vh]" style={{ fontSize: '3.7vmin' }}>Where the magic happens.</p>
            </motion.div>

            <motion.div
                ref={carouselRef}
                className="flex gap-[1.3vw] pr-[2vw] items-start mt-[3vh] overflow-x-auto items-center scroll-smooth scrollbar-hide"
                style={{
                    height: '66vh',
                    overflowY: 'hidden',

                }}
            >
                {projects.map((project, i) => (
                    <motion.div
                        key={i}
                        className="group flex-col h-[60vh] min-w-[20vw] max-w-[20vw] overflow-hidden rounded-2xl flex hover:scale-110 hover:cursor-pointer transition-all duration-500 ease-out transform"
                        style={{
                            marginLeft: i === 0 ? "10vw" : "0",
                            background: `linear-gradient(to bottom, ${colors[i % colors.length]} 0%, #FFFFFF 100%)`,
                        }}
                    >
                        <div className="ml-[1.3vw] mr-[1.3vw] mt-[3vh] group flex flex-row justify-between items-center">
                            <h1 className="text-xl text-[#2D2D2F] font-sfSemiBold" style={{ fontSize: '2vmin' }}>{project.title}</h1>
                            <div className="flex gap-x-2">
                                {project.technologies.map((technology, j) => (
                                    <img
                                        key={j}
                                        className="w-[1.3vw] max-h-[3vh] opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out"
                                        style={{ transitionDelay: `${j * 100}ms` }}
                                        src={technology}
                                    />
                                ))}
                            </div>
                        </div>
                        <p className="mt-[1vh] ml-[1.3vw] text-2xl text-[#2D2D2F] font-sfBold w-full max-w-[17vw]"
                            style={{ fontSize: '2.5vmin', lineHeight: '1.3em' }}
                        >
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
                            className={`absolute bottom-[1vh] right-[0.5vw] flex justify-center items-center w-[50px] h-[50px] ${isLight ? "bg-white text-[#2D2D2F]" : "bg-[#2D2D2F] text-white"} rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#2D2D2F]`}
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaGithub size={40} />
                        </a>
                    </motion.div>
                ))}
            </motion.div>

            <div className="flex justify-end mr-[6vw] mt-[1vh] flex-row gap-x-[1vw]">
                <button onClick={leftButton}>
                    <FaChevronCircleLeft size={40} color={isLight ? "#2D2D2F" : "#DEDEE2"} className="duration-300 hover:scale-105" />
                </button>

                <button onClick={rightButton}>
                    <FaChevronCircleRight size={40} color={isLight ? "#2D2D2F" : "#DEDEE2"} className="duration-300 hover:scale-105" />
                </button>
            </div>
        </div>


    );
}

export default Projects;