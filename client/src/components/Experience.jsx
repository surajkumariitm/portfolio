import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Cyber Security Intern",
    company_name: "Centre for Cybersecurity, Trust and Reliability, IITM",
    date: "June 2025 - Present",
    description: "Developed an AI-based phishing domain detection system aimed at identifying and monitoring fraudulent URLs targeting Critical Sector Entities (CSEs). Built a scalable ML pipeline to crawl, parse, and analyze both structured and unstructured web data in near real time. Integrated URL-based, domain-based, and content-based features to flag phishing and suspected domains with high precision. Designed an operator-friendly dashboard for continuous monitoring and reporting.",
    link: "#",
    linkText: "under Professor N.S. Narayanaswamy"
  },
  {
    title: "Project Monitoring Intern",
    company_name: "Office of Alumni and Corporate Relations, IIT Madras",
    date: "May 2025 - Present",
    description: "Worked on project monitoring and process automation, overseeing diverse projects and endowments across multiple funding categories. Developed prompt-based CSV generators for milestone tracking and leveraged LLMs with Monday.com to automate operational workflows. Currently working on an AI-driven donor prediction and matching model using live LinkedIn data to identify potential donors and enhance alumni engagement strategies.",
  },
  {
    title: "R&D Intern",
    company_name: "PECS Lab",
    date: "May 2024 - July 2024",
    description: "Optimised UV-curable resin formulations with silica additives, enhancing 3D printed substrate strength & precision. Conducted rheology, SEM, and wetting experiments to evaluate structural integrity and material performance. Calibrated 3D printing parameters for porous substrates, improving dimensional accuracy and mechanical stability.",
    link: "#",
    linkText: "under Professor Abhijit Deshpande"
  },
];

const ExperienceCard = React.memo(({ experience, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="relative pl-8 pb-12 border-l-2 border-[#915EFF] last:border-l-0 last:pb-0"
    >
      {/* Dot */}
      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gradient-to-br from-[#915EFF] to-[#7c3aed] border-2 border-[#1d1836] shadow-lg shadow-[#915EFF]/50" />
      
      <div className="relative bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-3xl shadow-2xl hover:shadow-[0_15px_50px_rgba(145,94,255,0.2)] transition-all duration-300 hover:scale-[1.02] before:absolute before:inset-0 before:rounded-3xl before:p-[1px] before:bg-gradient-to-r before:from-[#915EFF]/50 before:to-transparent before:-z-10 before:opacity-0 hover:before:opacity-100 before:transition-opacity"
      >
        <div className="absolute inset-0 bg-[#050816] rounded-3xl -z-20" />
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <div>
            <h3 className="text-white text-2xl font-bold">{experience.title}</h3>
            <p className="text-[#915EFF] text-lg font-medium mt-1">{experience.company_name}</p>
            {experience.linkText && (
               <a href={experience.link} className="text-secondary text-sm hover:text-white transition-colors block mt-1">
                 {experience.linkText}
               </a>
            )}
          </div>
          <p className="text-white/60 text-sm font-mono mt-2 md:mt-0 bg-gradient-to-r from-white/10 to-white/5 px-3 py-1 rounded-full border border-white/10 whitespace-nowrap shadow-lg">
            {experience.date}
          </p>
        </div>
        
        <p className="text-secondary text-[16px] leading-[30px]">
          {experience.description}
        </p>
      </div>
    </motion.div>
  );
});

const Experience = () => {
  return (
    <section id="experience" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center py-20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <p className="text-[#915EFF] font-bold tracking-wider uppercase mb-2">What I have done so far</p>
        <h2 className="text-white font-black text-4xl sm:text-5xl mb-16">Professional Experience.</h2>
      </motion.div>

      <div className="flex flex-col max-w-4xl mx-auto">
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
