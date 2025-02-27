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


const Experiences: React.FC = () => {
    const myEdMaster: Experience = {
        companyName: "MyEdMaster", position: "Software Engineering Team Lead", startDate: "January 2025", endDate: "Now",
        bullets:
            ["Leading a team of 7 software engineers to complete a digital transformation of the startup’s tutoring service.",
                "Designed, implemented, and deployed an AI-powered database management system for tutors using Cohere API."],
        color: "#EF5815",
        companySummary: "Virginia-based tutoring platform leveraging automation to enhance learning.",
        demoPath: "/assets/MyEdMasterDemo.png",
        logoPath: "/assets/MyEdMaster.png",
        website: "https://www.myedmaster.com/"
    }

    const googleDevGroup: Experience = {
        companyName: "Google Developer Group (University of Toronto)", position: "Director of Operations", startDate: "October 2024", endDate: "Now",
        bullets:
            ["Leading the operations and marketing teams of 11 associates to host events (i.e. Women in Tech).",
                "Facilitating outreach to companies and industry professionals to engage and share insights at our events."],
        color: "#4285F4",
        companySummary: "Student-led community backed by Google Developers.",
        demoPath: "/assets/GoogleDemo2.mp4",
        logoPath: "/assets/Google.png",
        website: "https://gdg.community.dev/gdg-on-campus-university-of-toronto-st-george-campus-toronto-canada/"
    }

    const teachingAssistant: Experience = {
        companyName: "University of Toronto", position: "Teaching Assistant", startDate: "August 2024", endDate: "December 2024",
        bullets: ["Supported instruction for CSC236 (Theory of Computation) with 550+ registered students.",
            "Hosted tutorial sessions each week with 30+ registered students.",
            "In charge of curating the team’s interactive visual teaching material and algorithm demonstrations each week.",
            "Hosted in-person morning office hours and offered online student forum feedback using Piazza."
        ],
        color: "#002F65",
        companySummary: "Globally recognized top 10 institution in computer science.",
        demoPath: "/assets/uoftDemo.mp4",
        logoPath: "/assets/uoft.png",
        website: "https://www.utoronto.ca/"
    }

    const geotab: Experience = {
        companyName: "Geotab", position: "Software Engineering Intern", startDate: "June 2024", endDate: "August 2024",
        bullets:
            ["Led the winning team of Geotab’s Intern Innovation Challenge, developing the most innovative video telematics solution with a driver and manager-centered UI/UX design, along with AI collision and distraction detection models.",
                "Worked as an Agile/Kanban backend engineer on the OEM Integration Team, deploying .NET (C#) updates for thousands of vehicles across NA, EU, and LatAM from 7 globally recognized partners.",
                "Conducted a JSON parser optimization project, achieving 80% memory improvement on a specific data type and documented findings in a published, engineer-backed benchmark report.",
                "Created an OEM device activation system with error handling and retry scheduling, impacting 200+ trucks in NA.",
                "Hosted and presented at a Data Platform demo session to an audience of 30+ engineers and senior business management, using UML diagrams to illustrate API handler interactions for a codebase migration project."],
        color: "#2D4677",
        companySummary: "The world's leading commercial telematics provider.",
        demoPath: "/assets/GeotabDemo.png",
        logoPath: "/assets/Geotab.png",
        website: "https://www.geotab.com/"
    }

    const grubtech: Experience = {
        companyName: "Grubtech", position: "Software Engineering Intern", startDate: "July 2023", endDate: "August 2023",
        bullets: ["Worked as an Agile mobile and frontend engineer, using Flutter (Dart) to develop new features for the company’s AI mobile application, deployed to 700+ brand clients.",
            "Designed and implemented a comprehensive mobile application guide to onboard clients on application launch.",
            "Enhanced clients’ visibility to company-specific statistical insights through new UI overlay elements.",
            "Solved and pushed bug-fixes that improved cross-device (iOS and Android) application responsiveness."
        ],
        color: "#1C1C1E",
        companySummary: "The Middle East's leading all-in-one F&B integration platform.",
        demoPath: "/assets/GrubDemo.mp4",
        logoPath: "/assets/Grubtech.png",
        website: "https://www.grubtech.com/"
    }

    const spiderSilk: Experience = {
        companyName: "spiderSilk", position: "Cybersecurity Intern", startDate: "June 2022", endDate: "August 2022",
        bullets: ["Worked with the AI and Data Science Team to develop data cleaning and bucketing strategies in Python, supporting the company’s asset allocation ML models used to safeguard global brands’ digital assets.",
            "Developed and delivered an engaging slide deck to educate students on internet safety on behalf of the company.",
            "Refined the statistics and machine learning recruitment assessments to enhance candidate evaluation accuracy."
        ],
        color: "#ed2a66",
        companySummary: "Leading cyber threat detection and AI-powered security platform in the Middle East.",
        demoPath: "/assets/spiderDemo.png",
        logoPath: "/assets/spiderSilk.png",
        website: "https://spidersilk.com/"
    }

    const microsoft: Experience = {
        companyName: "Microsoft", position: "Internet of Things (IoT) Intern", startDate: "July 2019", endDate: "N/A",
        bullets: ["Worked with the government and smart cities team and attended government sales meetings to absorb pitching, negotiation, and quick-thinking skills.",
            "Completed cloud computing tasks using Microsoft Azure and practiced IoT assignments using Raspberry Pi."
        ],
        color: "#F25022",
        companySummary: "Global leader in IoT using Azure's cloud and AI capabilities.",
        demoPath: "/assets/MicrosoftDemo.png",
        logoPath: "/assets/Microsoft.png",
        website: "https://azure.microsoft.com/en-ca/products/iot-hub/?ef_id=_k_Cj0KCQiA8fW9BhC8ARIsACwHqYrP80hbQRDkch_wA8MSNdMSe9iZvm0hnJVs5qHUconyRWD_t13tj_waAix-EALw_wcB_k_&OCID=AIDcmmqz3gd78m_SEM__k_Cj0KCQiA8fW9BhC8ARIsACwHqYrP80hbQRDkch_wA8MSNdMSe9iZvm0hnJVs5qHUconyRWD_t13tj_waAix-EALw_wcB_k_&gad_source=1&gclid=Cj0KCQiA8fW9BhC8ARIsACwHqYrP80hbQRDkch_wA8MSNdMSe9iZvm0hnJVs5qHUconyRWD_t13tj_waAix-EALw_wcB"
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
    const [visibleIndex, setVisibleIndex] = useState<number | null>(0);
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

        window.addEventListener("scroll", checkVisibility);
        window.addEventListener("resize", checkVisibility);

        checkVisibility();

        return () => {
            window.removeEventListener("scroll", checkVisibility);
            window.removeEventListener("resize", checkVisibility);
        };
    }, []);


    const [imageLoaded, setImageLoaded] = useState(false);
    console.log("Image is:", imageLoaded);

    useEffect(() => {
        console.log(visibleIndex);
        if (visibleIndex === 0) {
            setImageLoaded(true);
        } else {
            setImageLoaded(false);
        }


    }, [visibleIndex]);


    const handleImageLoad = () => {
        console.log("Image Loaded");

        setImageLoaded(true);
    };

    return (
        <div className="relative min-h-screen max-w-screen flex flex-col bg-black h-full">
            <div className="sticky top-0 w-full h-full">
                <div className="absolute left-[70vw] top-0 w-[300px] h-[300px] bg-gradient-to-r from-[#B99CE7] to-[#F1B27A] rounded-full opacity-30 blur-3xl animate-left-hero" />
                <div className="absolute left-[10vw] top-[60vh] w-[500px] h-[300px] bg-gradient-to-r from-[#A0E4D9] to-[#A8D9F7] rounded-full opacity-20 blur-3xl animate-right-hero" />
            </div>

            <motion.div
                className="relative sticky top-[80px] pl-[10vw] text-left"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <h1 className="text-6xl font-sfBold tracking-tight">Experience</h1>
                <p className="text-4xl font-sfBold text-gray-400 mt-2">There is no substitute.</p>
            </motion.div>



            <div className="h-[9vh]"></div>






            {visibleIndex !== null && experienceList[visibleIndex] ? (
                <>
                    <motion.div

                        className={`relative sticky top-[30vh] left-[10vw] rounded-[16px] h-[50vh] w-[30vw] center-items justify-center flex flex-col`}
                        style={{
                            backgroundColor: experienceList[visibleIndex]?.color || "#ffffff",
                            // boxShadow: '0px -2px 20px rgba(255, 255, 255, 0.25)',
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <motion.div
                            className="flex flex-col items-center justify-center gap-[3vh]"
                            key={visibleIndex}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: imageLoaded ? 1 : 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}>

                            <p className="text-3xl font-sfBold text-white text-center max-w-[28vw]">
                                {experienceList[visibleIndex]?.companySummary}
                            </p>

                            {experienceList[visibleIndex]?.demoPath?.endsWith(".mp4") ? (
                                <motion.video
                                    src={experienceList[visibleIndex]?.demoPath}
                                    loop={visibleIndex !== 4}
                                    autoPlay
                                    muted
                                    key={visibleIndex}
                                    className="rounded-[16px] max-w-[28vw] max-h-[30vh]"
                                    initial={{ scale: 0.95 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.3 }}
                                    onCanPlay={handleImageLoad}

                                />
                            ) : (
                                <motion.img
                                    src={experienceList[visibleIndex]?.demoPath}
                                    key={visibleIndex}
                                    className="rounded-[16px] max-w-[24vw] max-h-[30vh]"
                                    initial={{ opacity: 0.95 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                    onLoad={handleImageLoad} // Trigger handleImageLoad when the image has loaded
                                />
                            )}
                        </motion.div>




                    </motion.div>
                    <a
                        href={experienceList[visibleIndex]?.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative sticky top-[80vh] left-[37vw] bg-white rounded-full shadow-lg transition-all duration-500 ease-out transform flex items-center justify-center max-w-[8vw] h-[8vh] hover:scale-110 hover:shadow-xl hover:cursor-pointer inline-flex"

                    >
                        <img
                            src={experienceList[visibleIndex]?.logoPath}
                            className="object-contain h-[6vh] max-w-[6vw] w-auto bg-white transition-all duration-500 ease-out"
                        />
                    </a>





                </>
            ) : (
                <motion.div
                    className={`relative sticky top-[30vh] left-[10vw] bg-white rounded-[16px] h-[50vh] w-[27vw] flex flex-col items-center justify-center gap-4`}
                    style={{
                        boxShadow: '0px -2px 20px rgba(255, 255, 255, 0.25)',
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                >

                </motion.div>
            )
            }


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
        </div >
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
