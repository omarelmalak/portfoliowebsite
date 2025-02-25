"use client";
import exp from "constants";
import {
    motion,
    useScroll,
    useTransform,
    useMotionTemplate,
} from "framer-motion";
import { useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";


import { Parallax, ParallaxLayer } from '@react-spring/parallax';

interface Experience {
    companyName: string;
    position: string;
    startDate: string;
    endDate: string;
    bullets: string[];
}


const Experiences: React.FC = () => {
    const { ref, inView } = useInView({
        threshold: 1, // 1 means 100% of the component must be in view
    });
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

    const alignCenter = { display: 'flex', alignItems: 'center' }

    return (
        <div>
            <div className="absolute min-h-screen bg-green w-[100vw] h-[100vh]" />
            <motion.div
                className="text-left ml-[250px] mt-[100px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-6xl font-sfBold tracking-tight">Experience</h1>
                <p className="text-4xl font-sfBold text-gray-400 mt-2">There is no substitute.</p>
            </motion.div>

            <Parallax pages={5}>
                <ParallaxLayer offset={0} speed={0.5} style={{ ...alignCenter, justifyContent: 'center' }}>

                </ParallaxLayer>

                <ParallaxLayer sticky={{ start: 1, end: 3 }} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
                    <div className="flex justify-center items-center h-[10rem] w-[25%] text-center rounded-[10px] ml-[15%] bg-green">
                        <p>I'm a sticky layer</p>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer offset={1.5} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
                    <div className={"flex justify-center items-center h-[10rem] w-[25%] text-center rounded-[10px] mr-[15%] bg-red"}>
                        <p>I'm not</p>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer offset={2.5} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
                    <div className={`flex justify-center items-center h-[10rem] w-[25%] text-center rounded-[10px] mr-[15%] bg-purple`}>
                        <p>Neither am I</p>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer offset={4} speed={0.5} style={{ ...alignCenter, justifyContent: 'center' }}>
                    <p className="text-white">Experience</p>
                </ParallaxLayer>
            </Parallax>
        </div>
    );

};




export default Experiences;
