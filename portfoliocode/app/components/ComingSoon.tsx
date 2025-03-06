"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

interface ComingSoonProps {
    isLight: boolean
}

const ComingSoon: React.FC<ComingSoonProps> = ({ isLight }) => {
    return (
        <div className={`relative h-[100vh] w-[100vw] flex items-center justify-center ${isLight ? "bg-white text-black" : "bg-black text-white"} overflow-x-hidden overflow-y-hidden`}>
            <div className="absolute top-[20vh] left-3 w-[400px] h-[400px] bg-gradient-to-r from-[#A7C7E7] to-[#A1D6B3] rounded-full opacity-20 blur-3xl animate-left-hero" />
            <div className="absolute top-[20vh] right-[0vw] w-[400px] h-[400px] bg-gradient-to-r from-[#3B82F6] from-[#F4F1A1] rounded-full opacity-35 blur-3xl animate-right-hero" />
            <div className="absolute top-[70vh] right-[30vw] w-[600px] h-[200px] bg-gradient-to-r from-[#F1B27A] from-[#F4F1A1] rounded-full opacity-35 blur-3xl animate-right-hero" />
            <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-5xl font-sfBold text-gray-400 tracking-tight">More to come soon...</h1>
            </motion.div>
        </div>
    );
}
export default ComingSoon;