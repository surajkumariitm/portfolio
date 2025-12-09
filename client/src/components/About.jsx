import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";

const Counter = React.memo(({ value }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, { duration: 2, ease: "easeOut" });
      return controls.stop;
    }
  }, [count, inView, value]);

  return <span ref={ref}><motion.span>{rounded}</motion.span>+</span>;
});

const About = () => {
  const stats = [
    { count: 1, label: "Years Experience (Internship)" },
    { count: 25, label: "Projects Completed" },
    { count: 11, label: "Certifications" },
  ];

  const education = [
    {
      degree: "B.Tech Degree",
      major: "B.Tech in Chemical Engineering",
      institution: "Indian Institute of Technology, Madras",
      year: "2026",
      icon: "/Grad.png",
    },
    {
      degree: "Class XII",
      major: "Class XII (BSEB)",
      institution: "College of Commerce, Arts and Science, Patna",
      year: "2021",
      icon: "/12.png",
    },
    {
      degree: "Class X",
      major: "Class X (CBSE)",
      institution: "Aadarsh Vikas Vidyalaya, Patna",
      year: "2019",
      icon: "/10.png",
    },
  ];

  return (
    <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center py-20">
      <div className="flex flex-col lg:flex-row gap-16">
        {/* About Me & Stats */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <p className="text-[#915EFF] font-bold tracking-wider uppercase mb-2">About me</p>
          
          <div className="text-secondary text-[17px] leading-[30px] space-y-4">
            <p>
              I'm Suraj Kumar, a Final Year B.Tech Chemical Engineering student at IIT Madras with a strong passion for AI/ML, Data Science, and Agentic AI. With experience in software development, cybersecurity, and data analysis, I aim to bridge engineering principles with tech-driven innovation.
            </p>
            <p>
              Passionate about C++ (DSA), GenAI tools, and real-world AI applications, I'm eager to contribute to impactful projects in tech. I enjoy working with data to uncover insights and build smart, scalable solutions.
            </p>
          </div>

          <div className="mt-10 flex flex-row gap-4 w-full">
            {stats.map((stat, index) => (
              <div key={index} className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-4 flex-1 flex flex-col items-center justify-center text-center shadow-2xl hover:shadow-[0_10px_40px_rgba(145,94,255,0.4)] hover:scale-105 transition-all duration-300 before:absolute before:inset-0 before:rounded-3xl before:p-[1px] before:bg-gradient-to-br before:from-[#915EFF] before:to-[#7c3aed] before:-z-10 before:opacity-0 hover:before:opacity-100 before:transition-opacity">
                <div className="absolute inset-0 bg-[#050816] rounded-3xl -z-20" />
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-2 drop-shadow-lg">
                  <Counter value={stat.count} />
                </h3>
                <p className="text-secondary text-xs lg:text-sm font-medium uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Education Timeline */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <h3 className="text-white font-bold text-3xl mb-8">Education</h3>
          <div className="space-y-8 border-l-2 border-[#915EFF] pl-8 ml-4">
            {education.map((edu, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-[#915EFF] border-4 border-[#1d1836]" />
                
                <div className="flex items-start gap-4">
                  {edu.icon && (
                    <div className="w-20 h-20 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-2 flex items-center justify-center overflow-hidden shrink-0 shadow-xl hover:shadow-[0_8px_30px_rgba(145,94,255,0.3)] hover:scale-110 hover:border-[#915EFF]/50 transition-all duration-300">
                      <img src={edu.icon} alt={edu.degree} loading="lazy" className="w-full h-full object-contain" />
                    </div>
                  )}
                  <div className="flex-1">
                    <h4 className="text-white text-xl font-bold">{edu.degree}</h4>
                    <p className="text-white/80 text-lg mt-1">{edu.major}</p>
                    <p className="text-secondary mt-1">{edu.institution}</p>
                    <span className="inline-block mt-2 px-3 py-1 bg-[#915EFF]/20 text-[#915EFF] rounded-full text-sm font-medium">
                      {edu.year}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
