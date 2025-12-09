import React, { Suspense, lazy, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaDownload } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';
import { useAuth } from "../context/AuthContext";

const Spline = lazy(() => import('@splinetool/react-spline'));
// import ShapesCanvas from "./canvas/Shapes";

const Hero = () => {
  const [isSplineLoaded, setIsSplineLoaded] = useState(false);
  const { user, openAuthModal } = useAuth();

  const handleDownloadCV = () => {
    if (!user) {
      openAuthModal();
    } else {
      // Replace with actual resume path
      window.open("/resume.pdf", "_blank");
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section id="home" className={`relative w-full min-h-screen mx-auto flex items-center overflow-hidden pt-40`}>
      
      {/* 3D Background Elements */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Suspense fallback={null}>
          <div className={`w-full h-full transition-opacity duration-1000 ${isSplineLoaded ? 'opacity-100' : 'opacity-0'}`}>
             <Spline scene="/scene.splinecode" onLoad={() => setIsSplineLoaded(true)} />
          </div>
          {!isSplineLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-black z-10">
               <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[#915EFF]"></div>
            </div>
          )}
        </Suspense>
      </div>

      {/* Gradient Overlay for Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent z-0 pointer-events-none" />

      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-28 lg:gap-64`} style={{ marginTop: '-100px', position: 'relative', zIndex: 100 }}>
        
        {/* Left Content */}
        <motion.div 
          className="flex-1 flex flex-col gap-6 w-full relative"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ pointerEvents: 'auto', zIndex: 100 }}
        >
          
          {/* Tagline */}
          <motion.h3 variants={textVariants} className="text-transparent bg-clip-text bg-[linear-gradient(to_right,#ffb1ff,#a78bfa,#60a5fa,#2dd4bf,#4ade80,#ffb1ff)] bg-[length:200%_auto] animate-text-gradient text-base sm:text-lg lg:text-[23px] font-bold tracking-widest uppercase whitespace-nowrap">
            Do beyond what the world thinks
          </motion.h3>

          {/* Main Heading */}
          <motion.h1 variants={textVariants} className="text-white font-black lg:text-[50px] sm:text-[40px] xs:text-[30px] text-[26px] leading-tight drop-shadow-2xl mt-2 whitespace-nowrap">
            Hi, I'm <span className="text-transparent bg-clip-text bg-[linear-gradient(to_right,#ffb1ff,#a78bfa,#60a5fa,#2dd4bf,#4ade80,#ffb1ff)] bg-[length:200%_auto] animate-text-gradient drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
              <TypeAnimation
                sequence={[
                  'Suraj Kumar',
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </motion.h1>

          {/* Role */}
          <motion.h2 variants={textVariants} className="text-[28px] font-bold">
            <span className="text-transparent bg-clip-text bg-[linear-gradient(to_right,#ffb1ff,#a78bfa,#60a5fa,#2dd4bf,#4ade80,#ffb1ff)] bg-[length:200%_auto] animate-text-gradient">Software Developer</span> <span className="text-white">| AI/ML</span>
          </motion.h2>

          {/* Description */}
          <motion.p variants={textVariants} className="text-gray-300 text-[18px] leading-[32px] max-w-[480px] drop-shadow-lg">
            Final-year B.Tech student in Chemical Engineering at IIT Madras, driven by a strong interest in AI/ML, Agentic AI, and Cybersecurity. I am passionate about leveraging data to uncover insights, build smart and scalable solutions, and integrate AI/ML and Agentic AI into cybersecurity frameworks to enhance digital security.
          </motion.p>

          {/* Social Icons */}
          <motion.div variants={textVariants} className="flex gap-4 mt-4">
            <motion.a 
              href="https://linkedin.com/in/surajam"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, backgroundColor: "rgba(145, 94, 255, 0.2)", borderColor: "#915EFF" }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-full bg-gray-900/50 border-2 border-white/20 flex items-center justify-center text-gray-400 transition-all backdrop-blur-sm hover:text-white"
            >
              <FaLinkedin size={20} />
            </motion.a>
            <motion.a 
              href="mailto:surajkumariitm@gmail.com"
              whileHover={{ scale: 1.1, backgroundColor: "rgba(145, 94, 255, 0.2)", borderColor: "#915EFF" }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-full bg-gray-900/50 border-2 border-white/20 flex items-center justify-center text-gray-400 transition-all backdrop-blur-sm hover:text-white"
            >
              <FaEnvelope size={20} />
            </motion.a>
            <motion.div
              onClick={(e) => {
                e.stopPropagation();
                if (user) {
                  window.location.href = 'tel:+919939096243';
                } else {
                  openAuthModal();
                }
              }}
              whileHover={{ scale: 1.1, backgroundColor: "rgba(145, 94, 255, 0.2)", borderColor: "#915EFF" }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-full bg-gray-900/50 border-2 border-white/20 flex items-center justify-center text-gray-400 cursor-pointer transition-all backdrop-blur-sm hover:text-white"
            >
              <FaPhone size={20} />
            </motion.div>
            <motion.a 
              href="https://github.com/devlop-suraj"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, backgroundColor: "rgba(145, 94, 255, 0.2)", borderColor: "#915EFF" }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-full bg-gray-900/50 border-2 border-white/20 flex items-center justify-center text-gray-400 transition-all backdrop-blur-sm hover:text-white"
            >
              <FaGithub size={20} />
            </motion.a>
          </motion.div>

          {/* Buttons */}
          <motion.div variants={textVariants} className="flex flex-wrap gap-6 mt-4" style={{ position: 'relative', zIndex: 10 }}>
            <motion.a 
              href="#projects"
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 25px rgba(145, 94, 255, 0.6)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#915EFF] to-[#6b33cc] text-white font-bold py-4 px-10 rounded-full shadow-[0_0_15px_rgba(145,94,255,0.4)] transition-all border border-white/10 inline-block cursor-pointer"
              style={{ pointerEvents: 'auto' }}
            >
              My Projects
            </motion.a>
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: "rgba(145, 94, 255, 0.1)", borderColor: "#915EFF" }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownloadCV}
              className="flex items-center gap-2 border-2 border-white/20 text-white font-bold py-4 px-10 rounded-full transition-all backdrop-blur-sm cursor-pointer"
              style={{ pointerEvents: 'auto' }}
            >
              <FaDownload /> Download CV
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Content - Image/Scanner */}
        <motion.div 
          className="flex-1 relative w-full max-w-md flex items-center justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{ marginTop: '-60px' }}
        >
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-[#915EFF] blur-[100px] opacity-20 rounded-full" />

          {/* Scanner Frame */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full p-4 border border-[#915EFF]/50 rounded-3xl bg-black/30 backdrop-blur-md overflow-hidden group shadow-[0_0_50px_rgba(145,94,255,0.1)]"
          >
            
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-[#915EFF] rounded-tl-3xl shadow-[0_0_15px_#915EFF]" />
            <div className="absolute top-0 right-0 w-20 h-20 border-t-4 border-r-4 border-[#915EFF] rounded-tr-3xl shadow-[0_0_15px_#915EFF]" />
            <div className="absolute bottom-0 left-0 w-20 h-20 border-b-4 border-l-4 border-[#915EFF] rounded-bl-3xl shadow-[0_0_15px_#915EFF]" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-[#915EFF] rounded-br-3xl shadow-[0_0_15px_#915EFF]" />

            {/* Image Placeholder / 3D Cube */}
            <div className="w-full rounded-2xl overflow-hidden relative bg-gray-900/50 flex items-center justify-center">
               {/* User Image */}
               <img 
                src="/mypic.png" 
                alt="Suraj Kumar" 
                className="w-full h-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-500"
              />
              
              {/* Scanning Line */}
              <motion.div 
                className="absolute top-0 left-0 w-full h-1 bg-[#915EFF] shadow-[0_0_20px_rgba(145,94,255,1)] z-10 pointer-events-none"
                animate={{ top: ["0%", "100%", "0%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Grid Overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(145,94,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(145,94,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
            </div>

            {/* Scanner Text */}
            <div className="absolute bottom-8 left-8 bg-black/80 px-4 py-2 rounded-lg border-l-4 border-[#915EFF] backdrop-blur-sm">
              <p className="text-[12px] text-[#915EFF] font-mono font-bold tracking-wider">SCANNING PROFILE...</p>
              <p className="text-[12px] text-white font-mono tracking-wider">NEURAL PATTERNS DETECTED</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-20'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
