"use client";
import exp from "constants";
import {
    motion,
    useScroll,
    useTransform,
    useMotionTemplate,
} from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface Experience {
    companyName: string;
    position: string;
    startDate: string;
    endDate: string;
    bullets: string[];
    color: string;
    companySummary: string;
    demoPath: string;
    logoPath: string;
    website: string;
}

export const MyEdMasterCard: React.FC<{ info: Experience, index: number, itemRefs: (HTMLDivElement | null)[] }> = ({ info, index, itemRefs }) => {
    return (
        <motion.div
            className={`relative sticky top-[30vh] left-[10vw] bg-[${info.color}] rounded-[16px] h-[50vh] w-[27vw] flex flex-col items-center justify-center gap-4`}
            style={{
                boxShadow: '0px -2px 20px rgba(255, 255, 255, 0.25)',
            }}
            key={index}
            ref={(el: HTMLDivElement | null) => { itemRefs.current[index] = el; }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
        >
            <p className="text-3xl font-sfBold text-white text-center">{info.companySummary}</p>

            <img
                src={info.demoPath}
                className="rounded-[16px] h-auto"
            />
        </motion.div>
    );
}

export const MyEdMasterLogo: React.FC<{ info: Experience }> = ({ info }) => {
    return (
        <motion.div
            className="relative sticky top-[75vh] left-[34vw] bg-white rounded-[100px] shadow-lg hover:shadow-2xl transition-shadow duration-300 max-w-[6vw] max-h-[10vh]"
        >
            <a href={info.website}>
                <img
                    src={info.logoPath}
                    className="rounded-[100px] max-w-[6vw] max-h-[10vh] object-cover w-[20vw] bg-blue-50 rounded-lg shadow-md transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:cursor-pointer" />
            </a>

        </motion.div>
    );
}


export const GeotabCard: React.FC<{ info: Experience }> = ({ info }) => {
    return (
        <motion.div
            className={`relative sticky top-[30vh] left-[10vw] bg-[${info.color}] rounded-[16px] h-[50vh] w-[27vw] flex flex-col items-center justify-center gap-4`}
            style={{
                boxShadow: '0px -2px 20px rgba(255, 255, 255, 0.25)',
            }}
        >
            <p className="text-3xl font-sfBold text-white text-center">{info.companySummary}</p>

            <img
                src={info.demoPath}
                className="rounded-[16px] h-auto"
            />
        </motion.div>
    );
}

export const GeotabLogo: React.FC<{ info: Experience }> = ({ info }) => {
    return (
        <motion.div
            className="relative sticky top-[75vh] left-[34vw] bg-white rounded-[100px] shadow-lg hover:shadow-2xl transition-shadow duration-300 max-w-[6vw] max-h-[10vh]"
        >
            <a href={info.website}>
                <img
                    src={info.logoPath}
                    className="rounded-[100px] max-w-[6vw] max-h-[10vh] object-cover w-[20vw] bg-blue-50 rounded-lg shadow-md transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:cursor-pointer" />
            </a>

        </motion.div>
    );
}
