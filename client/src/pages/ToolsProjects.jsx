import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";

const ToolsProjects = () => {
  const navigate = useNavigate();

  const projects = [
    {
      title: "IIT Madras CGPA Calculator",
      description: "Academic tool for IIT Madras students to calculate CGPA and GPA with course credit management and Excel export.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&h=300&fit=crop",
      tags: ["Python", "Tkinter", "Excel", "SQLite"],
      link: "https://devlop-suraj.github.io/iit-madras-cgpa"
    },
    {
      title: "Visionary Agent",
      description: "Advanced AI-powered tool for intelligent task automation and workflow optimization.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&h=300&fit=crop",
      tags: ["Python", "AI", "Automation"],
      link: "https://github.com/yourusername/Visionary-Agent"
    },
    {
      title: "EventEase - Power Automate",
      description: "Event automation tool using Power Automate for streamlined event management and coordination.",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=500&h=300&fit=crop",
      tags: ["Power Automate", "Automation", "Events"],
      link: "https://github.com/yourusername/EventEase"
    },
    {
      title: "PDF Text Extractor",
      description: "Tool for extracting and processing text from PDF documents with OCR capabilities and GUI interface.",
      image: "https://images.unsplash.com/photo-1568667256549-094345857637?w=500&h=300&fit=crop",
      tags: ["Python", "PyPDF2", "OCR", "GUI"],
      link: "#"
    },
    {
      title: "Code Formatter",
      description: "VS Code extension for automatic code formatting and syntax highlighting for multiple programming languages.",
      image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=500&h=300&fit=crop",
      tags: ["TypeScript", "VS Code API", "Prettier", "ESLint"],
      link: "#"
    },
    {
      title: "Multi Search Extension",
      description: "Chrome extension that allows users to search across multiple search engines simultaneously with a single click.",
      image: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?w=500&h=300&fit=crop",
      tags: ["JavaScript", "HTML/CSS", "Chrome API", "Manifest V3"],
      link: "#"
    }
  ];

  return (
    <div className="relative z-0 bg-primary min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.button
          onClick={() => navigate("/")}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 text-white mb-8 hover:text-[#915EFF] transition-colors"
        >
          <FaArrowLeft /> Back to Home
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-[#915EFF] font-bold tracking-wider uppercase mb-2">My Work</p>
          <h2 className="text-white font-black text-4xl sm:text-5xl">Tools & Utilities</h2>
          <p className="text-secondary mt-4 max-w-3xl mx-auto">
            Productivity tools, Chrome extensions, and utility applications for various purposes
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h3 className="text-[#915EFF] text-4xl font-bold mb-2">6+</h3>
              <p className="text-white text-lg">Tools Built</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h3 className="text-[#915EFF] text-4xl font-bold mb-2">5K+</h3>
              <p className="text-white text-lg">Active Users</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h3 className="text-[#915EFF] text-4xl font-bold mb-2">5+</h3>
              <p className="text-white text-lg">Platforms</p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.length === 0 ? (
            <div className="col-span-full text-center text-secondary py-20">
              <p className="text-xl">Projects coming soon...</p>
            </div>
          ) : (
            projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden shadow-xl hover:bg-white/10 transition-all duration-300 h-full flex flex-col"
              >
                <div className="relative w-full h-[230px]">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-white font-bold text-[24px]">{project.title}</h3>
                  <p className="mt-2 text-secondary text-[14px] leading-[24px] flex-grow">{project.description}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags?.map((tag, idx) => (
                      <p key={idx} className="text-[14px] text-[#915EFF]">#{tag}</p>
                    ))}
                  </div>

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-block bg-[#915EFF] text-white px-4 py-2 rounded-lg hover:bg-[#7c3aed] transition-colors text-center"
                    >
                      View Project
                    </a>
                  )}
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ToolsProjects;
