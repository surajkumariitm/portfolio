import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";

const WebProjects = () => {
  const navigate = useNavigate();

  const projects = [
    {
      title: "Booking App - Full Stack Chat Application",
      description: "Real-time messaging platform built using MERN stack (MongoDB, Express.js, React, Node.js) with user registration, authentication, and real-time chat.",
      image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=500&h=300&fit=crop",
      tags: ["React", "Node.js", "MongoDB", "Socket.io"],
      link: "https://github.com/yourusername/Booking-App"
    },
    {
      title: "Fluzing - Realtime Chat App",
      description: "Real-time chat application built with Flutter and Firebase for seamless cross-platform communication.",
      image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=500&h=300&fit=crop",
      tags: ["Flutter", "Firebase", "Real-time", "Mobile"],
      link: "https://github.com/yourusername/Fluzing-Realtime-Chat-App-In-Flutter-Firebase"
    },
    {
      title: "RESTful Web Service",
      description: "RESTful API using Node.js & MongoDB with CRUD operations for person management (GET, POST, PUT, DELETE endpoints).",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop",
      tags: ["Node.js", "MongoDB", "Express", "REST API"],
      link: "https://github.com/yourusername/Restful-Web-Service-with-Node.js-and-MongoDB"
    },
    {
      title: "Financial Analytics Dashboard",
      description: "Real-time financial data visualization and analysis platform for investment tracking with interactive charts.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      tags: ["Next.js", "D3.js", "FastAPI", "Redis"],
      link: "#"
    },
    {
      title: "Project Management Tool",
      description: "Collaborative project management platform with task tracking, team communication, and progress monitoring.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop",
      tags: ["Svelte", "Pusher", "Laravel", "MySQL"],
      link: "#"
    },
    {
      title: "Event Management System",
      description: "Comprehensive event planning and management platform with booking, scheduling, and attendee management features.",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=500&h=300&fit=crop",
      tags: ["Angular", "Socket.io", "Django", "MySQL"],
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
          <h2 className="text-white font-black text-4xl sm:text-5xl">Web Applications</h2>
          <p className="text-secondary mt-4 max-w-3xl mx-auto">
            Full-stack web applications built with React, Node.js, and modern web technologies
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h3 className="text-[#915EFF] text-4xl font-bold mb-2">6+</h3>
              <p className="text-white text-lg">Web Apps</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h3 className="text-[#915EFF] text-4xl font-bold mb-2">100%</h3>
              <p className="text-white text-lg">Responsive</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h3 className="text-[#915EFF] text-4xl font-bold mb-2">10+</h3>
              <p className="text-white text-lg">Technologies</p>
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

export default WebProjects;
