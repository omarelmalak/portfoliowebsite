"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const Hero: React.FC = () => {
    const [rotation, setRotation] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event: React.MouseEvent) => {
        const { clientX, clientY } = event;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        setRotation({
            x: Math.max(Math.min(((clientY - centerY) / centerY) * 15, 8), -8),
            y: Math.max(Math.min(((clientX - centerX) / centerX) * 15, 8), -8),
        });
    };

    return (
        <div
            className="min-h-screen bg-black text-white flex items-center justify-center px-6"
            onMouseMove={handleMouseMove}
        >
            <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl w-full gap-12">
                <motion.div
                    className="text-center md:text-left"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl font-semibold tracking-tight">Omar El Malak</h1>
                    <p className="text-xl text-gray-400 mt-4">Software Developer & Designer</p>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-6 px-6 py-3 bg-white text-black font-medium rounded-full shadow-lg backdrop-blur-md bg-opacity-80 hover:bg-opacity-100 transition"
                    >
                        Learn More
                    </motion.button>
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
                        overflow: "visible",
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

            <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-20 blur-3xl" />
        </div>
    );
};

export default Hero;
