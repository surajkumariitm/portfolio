import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight, FaBrain, FaRobot, FaChartBar, FaMobileAlt, FaGlobe, FaTools } from "react-icons/fa";

const projects = [
  {
    title: "Machine Learning Models",
    description: "Developed various ML models for data analysis and prediction using Python, scikit-learn, and TensorFlow.",
    tags: ["Python", "scikit-learn", "TensorFlow", "PyTorch"],
    image: "/machine.png",
    link: "/projects/ml-models",
  },
  {
    title: "GenAI Applications",
    description: "Built innovative applications using Generative AI and ChatGPT for real-world problem solving.",
    tags: ["Python", "OpenAI API", "LangChain"],
    image: "/genai.png",
    link: "/projects/genai",
  },
  {
    title: "Data Analysis Projects",
    description: "Comprehensive data analysis projects using Python, pandas, and visualization libraries.",
    tags: ["Python", "pandas", "matplotlib"],
    image: "/analytics.png",
    link: "/projects/data-analysis",
  },
  {
    title: "Software - Android App",
    description: "Developed innovative Android applications with modern UI/UX and cutting-edge features.",
    tags: ["Java", "Kotlin", "Android Studio"],
    image: "/soft.png",
    link: "/projects/android-apps",
  },
  {
    title: "Web Applications",
    description: "Full-stack web applications with modern frameworks and responsive design.",
    tags: ["React", "Node.js", "MongoDB"],
    image: "/web.png",
    link: "/projects/web-apps",
  },
  {
    title: "Tools",
    description: "Utility tools and extensions for productivity and academic purposes.",
    tags: ["JavaScript", "Chrome Extension", "Python"],
    image: "/tools.png",
    link: "/projects/tools",
  },
];

const ProjectCard = React.memo(({ project, index }) => {
  const navigate = useNavigate();

  const playClickSound = () => {
    const audio = new Audio('/music/click.mp3');
    audio.volume = 1.0;
    audio.play();
  };

  const handleClick = () => {
    navigate(project.link);
  };

  const handleMouseEnter = () => {
    playClickSound();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden shadow-2xl hover:shadow-[0_20px_50px_rgba(145,94,255,0.3)] transition-all duration-300 group h-full flex flex-col cursor-pointer before:absolute before:inset-0 before:rounded-3xl before:p-[1px] before:bg-gradient-to-br before:from-[#915EFF] before:via-transparent before:to-[#915EFF] before:-z-10 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300"
    >
      <div className="absolute inset-0 bg-[#050816] rounded-3xl -z-20" />
      <div className="relative w-full h-[230px]">
        <img 
          src={project.image} 
          alt={project.title} 
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          <div className="black-gradient w-10 h-10 rounded-full flex justify-center items-center hover:scale-110 transition-transform duration-300">
            <FaArrowRight className="text-white text-sm -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
          </div>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-white font-bold text-[24px]">{project.title}</h3>
        <p className="mt-2 text-secondary text-[14px] leading-[24px] flex-grow">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag, idx) => (
            <p key={idx} className={`text-[14px] text-[#915EFF]`}>
              #{tag}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
});

const Projects = () => {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center py-20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <p className="text-[#915EFF] font-bold tracking-wider uppercase mb-2">My Work</p>
        <h2 className="text-white font-black text-4xl sm:text-5xl">My Projects.</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
