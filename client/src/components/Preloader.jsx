import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(null);
  const [audioLoaded, setAudioLoaded] = useState(false);

  useEffect(() => {
    // Create audio element
    const audio = new Audio('/music/bin.mp3');
    audioRef.current = audio;
    
    audio.volume = 0.7;
    audio.loop = false;
    
    // Add event listeners
    audio.addEventListener('canplaythrough', () => {
      setAudioLoaded(true);
      audio.play().then(() => {
        console.log("Preloader audio started");
      }).catch(err => {
        console.error("Audio play error:", err);
      });
    });

    audio.addEventListener('error', (e) => {
      console.error("Audio loading error:", e);
    });

    // Load the audio
    audio.load();

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          // Stop audio when loading is complete
          if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
          }
          return 100;
        }
        return prev + 2;
      });
    }, 15);

    return () => {
      clearInterval(timer);
      // Cleanup audio on unmount
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: progress === 100 ? 0 : 1, transition: { delay: 0.3, duration: 0.5 } }}
      className={`fixed inset-0 z-[99999] bg-[#050816] flex flex-col items-center justify-center overflow-hidden ${progress === 100 ? 'pointer-events-none' : ''}`}
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0" style={{
        backgroundImage: `
          linear-gradient(rgba(145, 94, 255, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(145, 94, 255, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
        transform: 'perspective(500px) rotateX(60deg)',
        transformOrigin: 'center bottom'
      }} />

      {/* Floating Orbs */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-3xl"
            style={{
              width: `${150 + i * 50}px`,
              height: `${150 + i * 50}px`,
              background: i % 2 === 0 
                ? 'radial-gradient(circle, rgba(145, 94, 255, 0.3) 0%, transparent 70%)'
                : 'radial-gradient(circle, rgba(124, 58, 237, 0.2) 0%, transparent 70%)',
              left: `${20 + i * 15}%`,
              top: `${10 + i * 10}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Holographic Code Symbol */}
      <motion.div
        className="relative mb-12"
        style={{
          width: '200px',
          height: '200px',
          transformStyle: 'preserve-3d',
          perspective: '1000px',
        }}
      >
        {/* Rotating Rings */}
        {[0, 1, 2].map((ring) => (
          <motion.div
            key={ring}
            className="absolute inset-0"
            style={{
              border: '3px solid',
              borderColor: ring === 0 ? '#915EFF' : ring === 1 ? '#7c3aed' : '#6d28d9',
              borderRadius: '50%',
              opacity: 0.6,
            }}
            animate={{
              rotateX: ring === 0 ? 360 : 0,
              rotateY: ring === 1 ? 360 : 0,
              rotateZ: ring === 2 ? 360 : 0,
            }}
            transition={{
              duration: 3 + ring,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}

        {/* Central Code Brackets */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            fontSize: '80px',
            fontWeight: 'bold',
            color: '#915EFF',
            textShadow: '0 0 30px rgba(145, 94, 255, 0.8), 0 0 60px rgba(145, 94, 255, 0.4)',
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          &lt;/&gt;
        </motion.div>

        {/* Orbiting Particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              width: '10px',
              height: '10px',
              background: `linear-gradient(135deg, ${i % 2 === 0 ? '#915EFF' : '#7c3aed'}, transparent)`,
              borderRadius: '50%',
              boxShadow: `0 0 15px ${i % 2 === 0 ? '#915EFF' : '#7c3aed'}`,
              top: '50%',
              left: '50%',
              transform: `translate(-50%, -50%) rotate(${i * 45}deg) translateX(100px)`,
            }}
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'linear',
              delay: i * 0.1,
            }}
          />
        ))}
      </motion.div>

      {/* Portfolio Text with 3D Effect */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        className="relative mb-8"
        style={{ perspective: '1000px' }}
      >
        <motion.h1
          animate={{
            textShadow: [
              '0 0 20px rgba(145, 94, 255, 0.8), 0 0 40px rgba(145, 94, 255, 0.5)',
              '0 0 30px rgba(124, 58, 237, 0.9), 0 0 60px rgba(124, 58, 237, 0.6)',
              '0 0 20px rgba(145, 94, 255, 0.8), 0 0 40px rgba(145, 94, 255, 0.5)',
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-6xl font-black text-white tracking-wider"
          style={{
            transform: 'rotateY(0deg)',
            transformStyle: 'preserve-3d',
          }}
        >
          <span className="text-[#915EFF]">P</span>
          <span className="text-white">O</span>
          <span className="text-[#7c3aed]">R</span>
          <span className="text-white">T</span>
          <span className="text-[#915EFF]">F</span>
          <span className="text-white">O</span>
          <span className="text-[#7c3aed]">L</span>
          <span className="text-white">I</span>
          <span className="text-[#915EFF]">O</span>
        </motion.h1>
      </motion.div>

      {/* 3D Progress Ring */}
      <div className="relative w-48 h-48 mb-6">
        <svg className="w-48 h-48 transform -rotate-90">
          {/* Background Circle */}
          <circle
            cx="96"
            cy="96"
            r="88"
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="8"
            fill="none"
          />
          {/* Progress Circle */}
          <motion.circle
            cx="96"
            cy="96"
            r="88"
            stroke="url(#gradient)"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={`${2 * Math.PI * 88}`}
            strokeDashoffset={`${2 * Math.PI * 88 * (1 - progress / 100)}`}
            style={{
              filter: 'drop-shadow(0 0 10px rgba(145, 94, 255, 0.8))'
            }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#915EFF" />
              <stop offset="50%" stopColor="#7c3aed" />
              <stop offset="100%" stopColor="#915EFF" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Percentage in Center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="text-center"
          >
            <p className="text-5xl font-black text-white" style={{
              textShadow: '0 0 20px rgba(145, 94, 255, 0.8)'
            }}>
              {progress}
              <span className="text-3xl text-[#915EFF]">%</span>
            </p>
          </motion.div>
        </div>
      </div>

      {/* Loading Dots */}
      <div className="flex gap-3 mt-4">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-3 h-3 rounded-full bg-gradient-to-r from-[#915EFF] to-[#7c3aed]"
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              delay: i * 0.2,
            }}
            style={{
              boxShadow: '0 0 10px rgba(145, 94, 255, 0.8)'
            }}
          />
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="text-[#915EFF] mt-6 text-sm tracking-widest uppercase font-bold"
      >
        Loading Your Experience
      </motion.p>
    </motion.div>
  );
};

export default Preloader;
