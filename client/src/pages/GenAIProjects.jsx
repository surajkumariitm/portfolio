import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";

const GenAIProjects = () => {
  const navigate = useNavigate();

  const projects = [
    {
      title: "Stakeholder Assist Chatbot",
      description: "GenAI-powered chatbot for stakeholder assistance with intelligent conversation capabilities.",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=500&h=300&fit=crop",
      tags: ["GenAI", "LangChain", "Chatbot"],
      link: "https://github.com/yourusername/Stakeholder-Assist-Chatbot"
    },
    {
      title: "Medical Chatbot",
      description: "AI-powered medical assistant chatbot providing health information and preliminary diagnosis support.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&h=300&fit=crop",
      tags: ["GenAI", "Healthcare", "NLP"],
      link: "https://github.com/yourusername/Medical-Chatbot"
    },
    {
      title: "AI Image Generator",
      description: "Text-to-image generation using DALL-E API with custom prompt engineering for creative outputs.",
      image: "https://images.unsplash.com/photo-1686191128892-c3fd8b17f5c0?w=500&h=300&fit=crop",
      tags: ["Python", "DALL-E API", "Node.js", "React"],
      link: "#"
    },
    {
      title: "AI Music Composer",
      description: "AI-powered music composition tool using advanced language models and MIDI processing.",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=500&h=300&fit=crop",
      tags: ["Python", "LangChain", "TensorFlow", "MIDI"],
      link: "#"
    },
    {
      title: "AI Document Summarizer",
      description: "Automated document summarization using advanced NLP and transformer models for efficient content extraction.",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=500&h=300&fit=crop",
      tags: ["Python", "Streamlit", "BERT", "PDF Processing"],
      link: "#"
    },
    {
      title: "AI Translation Tool",
      description: "Multi-language translation system with context-aware language processing capabilities.",
      image: "https://images.unsplash.com/photo-1503424886307-b090341d25d1?w=500&h=300&fit=crop",
      tags: ["Python", "FastAPI", "Google Translate", "React"],
      link: "#"
    },
    {
      title: "AI Code Assistant",
      description: "Intelligent code completion and debugging assistant using GitHub Copilot API for enhanced productivity.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop",
      tags: ["Python", "GitHub API", "OpenAI"],
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
          <h2 className="text-white font-black text-4xl sm:text-5xl">GenAI Applications</h2>
          <p className="text-secondary mt-4 max-w-3xl mx-auto">
            Innovative applications built with Generative AI, LangChain, and modern AI frameworks
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h3 className="text-[#915EFF] text-4xl font-bold mb-2">7+</h3>
              <p className="text-white text-lg">AI Apps</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h3 className="text-[#915EFF] text-4xl font-bold mb-2">5+</h3>
              <p className="text-white text-lg">AI Models</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h3 className="text-[#915EFF] text-4xl font-bold mb-2">6+</h3>
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

export default GenAIProjects;
