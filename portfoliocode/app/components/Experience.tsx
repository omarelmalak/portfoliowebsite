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
}


const Experiences: React.FC = () => {
    const myEdMaster: Experience = {
        companyName: "MyEdMaster", position: "Software Engineering Team Lead", startDate: "January 2025", endDate: "Now",
        bullets:
            ["Leading a team of 7 software engineers to complete a digital transformation of the startup’s tutoring service.",
                "Designed, implemented, and deployed an AI-powered database management system for tutors using Cohere API."]
    }

    const googleDevGroup: Experience = {
        companyName: "Google Developer Group (University of Toronto)", position: "Director of Operations", startDate: "October 2024", endDate: "Now",
        bullets:
            ["Leading the operations and marketing teams of 11 associates to host events (i.e. Women in Tech).",
                "Facilitating outreach to companies and industry professionals to engage and share insights at our events."]
    }

    const teachingAssistant: Experience = {
        companyName: "University of Toronto", position: "Teaching Assistant", startDate: "August 2024", endDate: "December 2024",
        bullets: ["Supported instruction for CSC236 (Theory of Computation) with 550+ registered students.",
            "Hosted tutorial sessions each week with 30+ registered students.",
            "In charge of curating the team’s interactive visual teaching material and algorithm demonstrations each week.",
            "Hosted in-person morning office hours and offered online student forum feedback using Piazza."
        ]
    }

    const geotab: Experience = {
        companyName: "Geotab", position: "Software Engineering Intern", startDate: "June 2024", endDate: "August 2024",
        bullets:
            ["Led the winning team of Geotab’s Intern Innovation Challenge, developing the most innovative video telematics solution with a driver and manager-centered UI/UX design, along with AI collision and distraction detection models.",
                "Worked as an Agile/Kanban backend engineer on the OEM Integration Team, deploying .NET (C#) updates for thousands of vehicles across NA, EU, and LatAM from 7 globally recognized partners.",
                "Conducted a JSON parser optimization project, achieving 80% memory improvement on a specific data type and documented findings in a published, engineer-backed benchmark report.",
                "Created an OEM device activation system with error handling and retry scheduling, impacting 200+ trucks in NA.",
                "Hosted and presented at a Data Platform demo session to an audience of 30+ engineers and senior business management, using UML diagrams to illustrate API handler interactions for a codebase migration project."]
    }

    const grubtech: Experience = {
        companyName: "Grubtech", position: "Software Engineering Intern", startDate: "July 2023", endDate: "August 2023",
        bullets: ["Worked as an Agile mobile and frontend engineer, using Flutter (Dart) to develop new features for the company’s AI mobile application, deployed to 700+ brand clients.",
            "Designed and implemented a comprehensive mobile application guide to onboard clients on application launch.",
            "Enhanced clients’ visibility to company-specific statistical insights through new UI overlay elements.",
            "Solved and pushed bug-fixes that improved cross-device (iOS and Android) application responsiveness."
        ]
    }

    const spiderSilk: Experience = {
        companyName: "spiderSilk", position: "Cybersecurity Intern", startDate: "June 2022", endDate: "August 2022",
        bullets: ["Worked with the AI and Data Science Team to develop data cleaning and bucketing strategies in Python, supporting the company’s asset allocation ML models used to safeguard global brands’ digital assets.",
            "Developed and delivered an engaging slide deck to educate students on internet safety on behalf of the company.",
            "Refined the statistics and machine learning recruitment assessments to enhance candidate evaluation accuracy."
        ]
    }

    const microsoft: Experience = {
        companyName: "Microsoft", position: "Internet of Things (IoT) Intern", startDate: "July 2019", endDate: "N/A",
        bullets: ["Worked with the government and smart cities team and attended government sales meetings to absorb pitching, negotiation, and quick-thinking skills.",
            "Completed cloud computing tasks using Microsoft Azure and practiced IoT assignments using Raspberry Pi."
        ]
    }
    const experienceList = [
        myEdMaster,
        googleDevGroup,
        teachingAssistant,
        geotab,
        grubtech,
        spiderSilk,
        microsoft
    ]

    /*
        const [containerRef, isVisible] = useElementOnScreen({
            root: null,
            rootMargin: "0px",
            threshold: 1
        })
        */
    const [visibleIndex, setVisibleIndex] = useState<number | null>(null);
    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const checkVisibility = () => {
            itemRefs.current.forEach((item, index) => {
                if (item) {
                    const rect = item.getBoundingClientRect();



                    if (rect.y >= 400 && rect.y <= 500) {
                        console.log("DONE");
                        setVisibleIndex(index);
                    }
                }
            });
        };

        // Add event listeners for scroll and resize events
        window.addEventListener("scroll", checkVisibility);
        window.addEventListener("resize", checkVisibility);

        // Initial check in case the page is already scrolled
        checkVisibility();

        // Cleanup listeners on unmount
        return () => {
            window.removeEventListener("scroll", checkVisibility);
            window.removeEventListener("resize", checkVisibility);
        };
    }, []);

    return (
        <div className="relative min-h-screen flex flex-col bg-black h-full">
            <div className="absolute w-full h-full bg-green" />
            <div className="relative sticky top-0 left-[70vw] w-[300px] h-[300px] bg-gradient-to-r from-[#B99CE7] to-[#F1B27A] rounded-full opacity-30 blur-3xl animate-left-hero" />
            <div className="relative sticky top-[60vh] left-[10vw] w-[500px] h-[300px] bg-gradient-to-r from-[#A0E4D9] to-[#A8D9F7] rounded-full opacity-20 blur-3xl animate-right-hero" />


            <motion.div
                className="relative sticky top-[80px] pl-[10vw] text-left"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <h1 className="text-6xl font-sfBold tracking-tight">Experience</h1>
                <p className="text-4xl font-sfBold text-gray-400 mt-2">There is no substitute.</p>
            </motion.div>

            <div className="h-[9vh]"></div>

            <motion.div
                className="relative sticky top-[250px] left-[10vw] bg-white rounded-[16px] h-[50vh] w-[27vw]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
            >

            </motion.div>
            <div className="w-full flex flex-col items-end pr-[10vw]">
                {experienceList.map((experience, index) => (
                    <motion.div
                        className={`flex flex-col text-left max-w-[40vw] mt-24 transition-opacity duration-300`}
                        key={index}
                        ref={(el: HTMLDivElement | null) => { itemRefs.current[index] = el; }}
                        style={{
                            opacity: visibleIndex === index ? 1 : 0.4,
                        }}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{
                            opacity: visibleIndex === index ? 1 : 0.4,
                            x: 0,
                        }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        {/* Experience Text */}
                        <div className="w-full">
                            <h1 className="text-4xl font-sfBold tracking-tight">{experience.companyName}</h1>
                            <p className="text-2xl font-sfBold text-gray-400">{experience.position}</p>
                            <p className="text-2xl font-sfRegular">
                                {experience.startDate} {experience.endDate === "N/A" ? (
                                    <span />
                                ) : experience.endDate === "Now" ? (
                                    <span>
                                        <span> - </span>
                                        <span className="text-[#0071E3]">Now</span>
                                    </span>

                                ) : (
                                    <span> - {experience.endDate} </span>
                                )}
                            </p>

                            <ul className="text-lg font-sfRegular mt-3">
                                {experience.bullets.map((bullet, idx) => (
                                    <motion.li
                                        key={idx}
                                        className="relative before:content-['●'] before:relative before:pr-2 before:text-xs before:text-white"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3, delay: idx * 0.08 }}
                                    >
                                        {bullet}
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
            <div className="h-[30vh]" />
        </div>
    );

};

/*
const useElementOnScreen = (options) => {
    const containerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const callbackFunction = (entries) => {
        const [entry] = entries
        setIsVisible(entry.isIntersecting)
    }

    useEffect(() => {
        const observer = new IntersectionObserver(callbackFunction, options)
        if (containerRef.current) {
            observer.observe(containerRef.current)
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current)
            }
        }
    }, [containerRef, options])

    return [containerRef, isVisible]
}
*/




export default Experiences;
