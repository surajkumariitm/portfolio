import React from "react";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Leadership & Strategy",
    skills: [
      "Team Management",
      "QMS (ISO 9001:2015)",
      "Publicity & Growth Planning",
      "Risk Mitigation",
      "Strategic Decision-Making",
      "Event Coordination",
    ],
    icon: "👔",
  },
  {
    title: "Programming & Tools",
    skills: [
      "Python & C++",
      "Pandas & NumPy",
      "LangChain & GPT APIs",
      "Solr Indexing",
      "Scikit-learn, Pinecone",
      "Monday.com, Power BI",
    ],
    icon: "💻",
  },
  {
    title: "AI & Analytics",
    skills: [
      "Classification Models",
      "Feature Engineering (WoE/IV)",
      "PCA & SMOTE",
      "Recommender Systems",
      "RAG & Semantic Search",
      "Decision Tree Modeling",
    ],
    icon: "📊",
  },
  {
    title: "Content & Media",
    skills: [
      "Video Production",
      "Graphic Design",
      "Writing & Direction",
      "Branding Campaigns",
      "Post-production Analytics",
      "Reels & Shortform Content",
    ],
    icon: "🎨",
  },
  {
    title: "Product & Design Thinking",
    skills: [
      "Real-time Analytics",
      "UI/UX Design",
      "Toolchain Building",
      "GenAI Integration",
      "Agentic AI Development",
      "Web App",
    ],
    icon: "🌐",
  },
  {
    title: "Professional Certifications",
    skills: [
      "Python for Data Science",
      "Python for Machine Learning",
      "ISO 9001:2015",
      "Prompt Engineering with ChatGPT",
      "DSA",
      "AI Frameworks",
    ],
    icon: "💼",
  },
];

const SkillCard = React.memo(({ category, index }) => {
  const playOmnitrixSound = () => {
    const audio = new Audio('/music/error_CDOxCYm.mp3');
    audio.volume = 1.0;
    audio.play();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseEnter={playOmnitrixSound}
      className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 shadow-2xl hover:shadow-[0_15px_50px_rgba(145,94,255,0.3)] transition-all duration-300 hover:-translate-y-2 h-full before:absolute before:inset-0 before:rounded-3xl before:p-[1px] before:bg-gradient-to-br before:from-[#915EFF] before:via-transparent before:to-[#7c3aed] before:-z-10 before:opacity-0 hover:before:opacity-100 before:transition-opacity cursor-pointer"
    >
      <div className="absolute inset-0 bg-[#050816] rounded-3xl -z-20" />
      <div className="flex items-center gap-4 mb-6 border-b border-white/10 pb-4">
        <span className="text-4xl">{category.icon}</span>
        <h3 className="text-white text-xl font-bold">{category.title}</h3>
      </div>
      
      <div className="flex flex-col gap-3">
        {category.skills.map((skill, idx) => (
          <div key={idx} className="flex items-start gap-3 group">
            <div className="w-2 h-2 rounded-full bg-[#915EFF] mt-2 group-hover:scale-125 transition-transform duration-300" />
            <p className="text-secondary text-[16px] group-hover:text-white transition-colors duration-300">{skill}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
});

const Skills = () => {
  return (
    <section id="skills" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center py-20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <p className="text-[#915EFF] font-bold tracking-wider uppercase mb-2">My Expertise</p>
        <h2 className="text-white font-black text-4xl sm:text-5xl">My Skills.</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <SkillCard key={index} category={category} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
