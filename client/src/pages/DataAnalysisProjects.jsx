import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";

const DataAnalysisProjects = () => {
  const navigate = useNavigate();

  const projects = [
    {
      title: "Uber Revenue Analysis",
      description: "Analyzed Uber revenue data for 1 year and extracted meaningful insights on trends and patterns.",
      image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=500&h=300&fit=crop",
      tags: ["Python", "pandas", "matplotlib"],
      link: "https://github.com/yourusername/Uber-Revenue-Analysis"
    },
    {
      title: "Shaastra Footfall Analysis",
      description: "Analyzed Shaastra 2025 footfall data, identifying most popular events, campaign effectiveness, and demographics insights.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&h=300&fit=crop",
      tags: ["Python", "Data Analysis", "Visualization"],
      link: "#"
    },
    {
      title: "Healthcare Data Analysis",
      description: "Medical data analysis for disease prediction and healthcare outcome optimization using machine learning.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&h=300&fit=crop",
      tags: ["Python", "scikit-learn", "matplotlib", "pandas"],
      link: "#"
    },
    {
      title: "Social Media Analytics",
      description: "Social media sentiment analysis and engagement metrics for brand performance tracking and insights.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&h=300&fit=crop",
      tags: ["Python", "TextBlob", "Tweepy", "Tableau"],
      link: "#"
    },
    {
      title: "E-commerce Sales Analysis",
      description: "Comprehensive analysis of e-commerce sales data with customer behavior insights and trend predictions.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      tags: ["Python", "pandas", "matplotlib", "seaborn"],
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
          <h2 className="text-white font-black text-4xl sm:text-5xl">Data Analysis Projects</h2>
          <p className="text-secondary mt-4 max-w-3xl mx-auto">
            Comprehensive data analysis using Python, pandas, NumPy, and advanced visualization libraries
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h3 className="text-[#915EFF] text-4xl font-bold mb-2">5+</h3>
              <p className="text-white text-lg">Analyses</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h3 className="text-[#915EFF] text-4xl font-bold mb-2">10M+</h3>
              <p className="text-white text-lg">Data Points</p>
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

export default DataAnalysisProjects;
