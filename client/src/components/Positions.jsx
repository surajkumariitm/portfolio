import React from "react";
import { motion } from "framer-motion";

const positions = [
  {
    role: "QMS Manager",
    organization: "Shaastra 2025, IIT Madras",
    date: "June 2024 - May 2025",
    duration: "1 year",
    description: "Led Quality Management System team ensuring high standards and efficient processes for India's largest technical festival."
  },
  {
    role: "Coordinator",
    organization: "Publicity & Marketing Team, Shaastra 2024",
    date: "June 2023 - June 2024",
    duration: "1 year 1 month",
    description: "Managed publicity and marketing strategies for Shaastra 2024, reaching thousands of students nationwide."
  },
  {
    role: "Manager",
    organization: "Graphics Design & Media, E-Cell IIT Madras",
    date: "June 2023 - May 2024",
    duration: "1 year",
    description: "Led creative design initiatives and media management for the Entrepreneurship Cell, enhancing brand visibility."
  },
  {
    role: "Facilitator",
    organization: "LifeSkill, IIT Madras",
    date: "Aug 2025 - Present",
    duration: "1 year",
    description: "Mentored students in life skills development, providing guidance and support for personal and professional growth."
  },
  {
    role: "Sergeant (SGT)",
    organization: "National Cadet Corps (NCC)",
    date: "October 2022 - March 2025",
    duration: "2 years 6 months",
    description: "Demonstrated leadership and discipline while serving in the National Cadet Corps, developing strong organizational skills."
  },
  {
    role: "Content Creator",
    organization: "Design & Animation, IITM TV",
    date: "June 2023 - May 2024",
    duration: "1 year",
    description: "Created engaging visual content and animations for IITM TV, reaching the campus community effectively."
  }
];

const PositionCard = React.memo(({ position, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 shadow-2xl hover:shadow-[0_15px_50px_rgba(145,94,255,0.3)] hover:scale-[1.02] transition-all duration-300 h-full flex flex-col before:absolute before:inset-0 before:rounded-3xl before:p-[1px] before:bg-gradient-to-bl before:from-[#915EFF] before:to-transparent before:-z-10 before:opacity-0 hover:before:opacity-100 before:transition-opacity"
  >
    <div className="absolute inset-0 bg-[#050816] rounded-3xl -z-20" />
    <div className="mb-4">
      <h3 className="text-white text-xl font-bold">{position.role}</h3>
      <p className="text-[#915EFF] font-medium mt-1">{position.organization}</p>
      <div className="flex items-center gap-2 mt-2 text-secondary text-sm">
        <span>{position.date}</span>
        <span className="w-1 h-1 bg-secondary rounded-full" />
        <span>{position.duration}</span>
      </div>
    </div>
    <p className="text-white/80 text-[15px] leading-relaxed flex-grow">
      {position.description}
    </p>
  </motion.div>
));

const Positions = () => {
  return (
    <section id="positions" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center py-20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <p className="text-[#915EFF] font-bold tracking-wider uppercase mb-2">Leadership</p>
        <h2 className="text-white font-black text-4xl sm:text-5xl">Positions of Responsibility</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {positions.map((position, index) => (
          <PositionCard key={index} position={position} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Positions;
