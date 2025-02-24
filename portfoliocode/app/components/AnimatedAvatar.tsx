"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const AnimatedAvatar: React.FC = () => {
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
        <motion.div
            className="avatar-container"
            onMouseMove={handleMouseMove}
            style={{
                display: "flex",
                backgroundColor: "white",
                justifyContent: "center",
                alignItems: "center",
                perspective: "1000px",
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
                        top: 0,
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
                        top: "52%",
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
                        top: "52%",
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
                        top: "8%",
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
    );
};

export default AnimatedAvatar;
