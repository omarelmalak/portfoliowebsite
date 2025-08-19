// components/Footer.tsx
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaFileAlt, FaFilePdf } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';


interface FooterProps {
    isLight: boolean;
}

const Footer: React.FC<FooterProps> = ({ isLight }) => {
    return (

        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 px-6">
            <p className="text-sm">
                © {new Date().getFullYear()} Omar El Malak. All rights reserved.
            </p>

            {/* Right side: social links */}
            <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/omarelmalak" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={40} className="duration-300 hover:scale-105 hover:shadow-2xl" />
                </a>
                <a href="https://github.com/omarelmalak" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={40} className="duration-300 hover:scale-105 hover:shadow-2xl" />
                </a>
                <a href="/assets/resume.pdf" target="_blank" rel="noopener noreferrer">
                    <FaFileAlt size={40} className="duration-300 hover:scale-105 hover:shadow-2xl" />
                </a>
                <a href="mailto:omarelmalak28@gmail.com" target="_blank" rel="noopener noreferrer">
                    <MdEmail size={45} className="duration-300 hover:scale-105 hover:shadow-2xl" />
                </a>
            </div>
        </div>
    );
}

export default Footer;
