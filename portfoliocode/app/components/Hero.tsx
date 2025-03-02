"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { FaLinkedin, FaGithub, FaFileAlt, FaFilePdf } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';


const Hero: React.FC = () => {
    const [rotation, setRotation] = useState({ x: -5, y: 3 });

    const handleMouseMove = (event: React.MouseEvent) => {
        const element = document.querySelector('.avatar-container');
        if (element) {
            const rect = element.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const { clientX, clientY } = event;

            setRotation({
                x: Math.max(Math.min(((clientY - centerY) / centerY) * 15, 8), -8),
                y: Math.max(Math.min(((clientX - centerX) / centerX) * 15, 8), -8),
            });
        }
    };

    return (
        <div
            className="relative min-h-screen max-w-screen bg-black text-white overflow-x-hidden flex items-center justify-center px-6"
            onMouseMove={handleMouseMove}
        >
            <div className="absolute top-1 left-3 w-[500px] h-[400px] bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-30 blur-3xl animate-left-hero pointer-events: none" />
            <div className="absolute top-1 right-0 w-[500px] h-[500px] bg-gradient-to-r from-[#F7D1A4] from-[#F4F1A1] rounded-full opacity-35 blur-3xl animate-right-hero pointer-events: none" />

            <div className="flex flex-col sm:flex-row items-center justify-between max-w-5xl w-full gap-12 sm:gap-16">
                <motion.div
                    className="text-center sm:text-left"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl font-sfBold tracking-tight">Omar El Malak</h1>
                    <p className="text-3xl font-sfBold text-gray-400 mt-2">Software Developer & Designer</p>

                    <motion.div
                        className="flex flex-col sm:flex-row w-full gap-3 sm:gap-5 mt-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex space-x-4 relative z-20">
                            <a href="https://www.linkedin.com/in/omarelmalak" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin size={40} className="duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50" />
                            </a>
                            <a href="https://github.com/omarelmalak" target="_blank" rel="noopener noreferrer">
                                <FaGithub size={40} className="duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50" />
                            </a>
                            <a href="/assets/resume.pdf" target="_blank" rel="noopener noreferrer">
                                <FaFileAlt size={40} className="duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50" />
                            </a>
                            <a href="mailto:omarelmalak28@gmail.com" target="_blank" rel="noopener noreferrer">
                                <MdEmail size={45} className="duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50" />
                            </a>
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="avatar-container"
                    style={{
                        display: "flex",
                        backgroundColor: "white",
                        justifyContent: "center",
                        alignItems: "flex-end",
                        perspective: "1000px",
                        borderRadius: "15px",
                        height: "300px",
                        width: "500px",
                        position: "relative",
                    }}
                >
                    <div
                        style={{
                            position: "relative",
                            width: 500,
                            height: 500,
                            transformStyle: "preserve-3d",
                            transition: "transform 1s",
                        }}
                    >
                        <Image
                            src="/assets/shoulderswide.png"
                            alt="Shoulders"
                            width={500}
                            height={500}
                            style={{
                                position: "absolute",
                                marginTop: 'auto',
                                top: 15,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                transform: "translateZ(-100px)",
                            }}
                        />

                        {/* LEFT EYE */}
                        <motion.div
                            style={{
                                position: "absolute",
                                top: "56%",
                                left: "40%",
                                transform: "translateZ(-800px)",
                            }}
                            animate={{
                                x: Math.max(Math.min(rotation.y * 1, 10), -10),
                                y: Math.max(Math.min(rotation.x * 0.3, 1), -5),
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 100,
                                damping: 15,
                            }}
                        >
                            <div
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "20px",
                                    height: "20px",
                                    backgroundColor: "rgba(0, 0, 0, 0.3)",
                                    borderRadius: "50%",
                                    filter: "blur(6px)",
                                    zIndex: 0,
                                }}
                            ></div>

                            <Image
                                src="/assets/lefteye.png"
                                alt="Eyes"
                                width={20}
                                height={20}
                                style={{
                                    objectFit: "contain",
                                    position: "relative",
                                    zIndex: 1,
                                }}
                            />
                        </motion.div>

                        {/* RIGHT EYE */}
                        <motion.div
                            style={{
                                position: "absolute",
                                top: "56%",
                                left: "55%",
                                transform: "translateZ(-800px)",
                            }}
                            animate={{
                                x: Math.max(Math.min(rotation.y * 1, 10), -10),
                                y: Math.max(Math.min(rotation.x * 0.3, 1), -5),
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 100,
                                damping: 15,
                            }}
                        >
                            <div
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "20px",
                                    height: "20px",
                                    backgroundColor: "rgba(0, 0, 0, 0.3)",
                                    borderRadius: "50%",
                                    filter: "blur(6px)",
                                    zIndex: 0,
                                }}
                            ></div>

                            <Image
                                src="/assets/righteye.png"
                                alt="Eyes"
                                width={20}
                                height={20}
                                style={{
                                    objectFit: "contain",
                                    position: "relative",
                                    zIndex: 1,
                                }}
                            />
                        </motion.div>

                        <motion.div
                            style={{
                                position: "absolute",
                                top: "12%",
                                left: "5%",
                                transformOrigin: "center",
                            }}
                            animate={{
                                rotateX: rotation.x * -1,
                                rotateY: rotation.y,
                                rotateZ: rotation.y * -0.1,
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 100,
                                damping: 15,
                            }}
                        >
                            <Image
                                src="/assets/facenoeyes.png"
                                alt="Head"
                                width={450}
                                height={450}
                                style={{
                                    borderRadius: "50%",
                                    objectFit: "cover",
                                }}
                            />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>

    );
};

export default Hero;
