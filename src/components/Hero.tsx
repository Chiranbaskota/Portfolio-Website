import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900" />

      {/* Blob SVG Decoration */}
      <svg
        className="absolute right-0 top-10 w-[600px] opacity-30 -z-10"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#7c3aed"
          d="M46.6,-61.3C60.4,-52.9,71.7,-40.8,75.6,-27.5C79.4,-14.2,75.7,0.4,69.2,13.7C62.7,27,53.4,38.9,41.7,48.8C30.1,58.8,15.1,66.8,-1.7,69C-18.6,71.1,-37.2,67.3,-47.5,56.3C-57.7,45.3,-59.5,27.1,-61.2,9.8C-62.8,-7.4,-64.3,-23.8,-57.5,-36.6C-50.6,-49.4,-35.3,-58.6,-20.3,-64.4C-5.2,-70.1,9.6,-72.5,24.9,-69.3C40.1,-66.1,53.9,-57.8,46.6,-61.3Z"
          transform="translate(100 100)"
        />
      </svg>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-7xl w-full mx-auto gap-10 md:gap-20">
        
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1 flex flex-col justify-center h-full"
        >
          <h1 className="text-3xl sm:text-5xl font-bold mb-5 text-center md:text-left leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              <br/><br/>
              Hi, I'm <Typewriter
                words={['Chiranjivi Baskota', 'a Java Developer', 'a Computer Engineer']}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={40}
                delaySpeed={1500}
              />
            </span>
          </h1>

        {/* Add vertical space */}
<div className="h-4" />

          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-6 max-w-xl text-center md:text-left">
  Passionate about building secure and scalable backend applications.<br /><br />
  
</p>


  {/* Add vertical space */}
  <div className="h-4" />
          <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-6">
            <a
              href="#projects"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition transform hover:scale-105 shadow-lg"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition transform hover:scale-105"
            >
              Get In Touch
            </a>
            <a
              href="https://drive.google.com/file/d/13arJT7c_dKxMW3l3DODGIQL6R6r3nXbE/view?usp=sharing"
              download
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition transform hover:scale-105"
            >
              View My CV
            </a>
          </div>

{/* Add vertical space */}
<div className="h-4" />

          {/* Social Links */}
          <div className="flex justify-center md:justify-start space-x-6 mb-6">
            <a
              href="https://github.com/Chiranbaskota"
              aria-label="GitHub profile"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/chiranjivi-baskota-9ba6352a4/"
              aria-label="LinkedIn profile"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:baskotachiran48@gmail.com"
              aria-label="Send email"
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition hover:scale-110"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          <div className="animate-bounce mt-4">
            <ArrowDown className="w-6 h-6 mx-auto md:mx-0 text-gray-400" />
          </div>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative group w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] md:w-[520px] md:h-[520px] rounded-3xl overflow-hidden shadow-2xl transform transition hover:scale-105"
        >
          <img
            src="https://i.postimg.cc/k5MRxMP2/IMG-20241127-090453.jpg"
            alt="Chiranjivi Baskota"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
