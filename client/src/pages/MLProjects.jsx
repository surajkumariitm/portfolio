import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";

const MLProjects = () => {
  const navigate = useNavigate();

  const projects = [
    {
      title: "Custom LLM Finetune RAG Optimized",
      description: "Advanced ML solution with fine-tuned LLM and RAG optimization for enhanced performance.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop",
      tags: ["Python", "LLM", "RAG", "NLP"],
      link: "https://github.com/yourusername/Custom-LLM-Finetune-RAG-optimized"
    },
    {
      title: "RiskGuard - Credit Card Risk Analysis",
      description: "Machine learning model for credit card fraud detection and risk assessment with high accuracy.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop",
      tags: ["Python", "scikit-learn", "Risk Analysis"],
      link: "https://github.com/yourusername/RiskGuard-Credit-Card-Risk-Analysis"
    },
    {
      title: "Market Trend Forecasting",
      description: "Deep learning model for predicting market trends using historical data and advanced neural networks.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&h=300&fit=crop",
      tags: ["Deep Learning", "TensorFlow", "Time Series"],
      link: "https://github.com/yourusername/Market-Trend-Forecasting"
    },
    {
      title: "AI-Powered Phishing Detection",
      description: "ML-based system for detecting phishing attempts using natural language processing and pattern recognition.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500&h=300&fit=crop",
      tags: ["ML", "NLP", "Cybersecurity"],
      link: "https://github.com/yourusername/AI-Powered-Phishing-Detection"
    },
    {
      title: "Bitcoin Price Predictor",
      description: "Deep learning model for cryptocurrency price prediction using LSTM networks and market indicators.",
      image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=500&h=300&fit=crop",
      tags: ["Deep Learning", "LSTM", "Cryptocurrency"],
      link: "https://github.com/yourusername/Bitcoin-Price-Predictor"
    },
    {
      title: "Digit Classification using Neural Networks",
      description: "Deep learning project implementing neural networks for handwritten digit recognition with high accuracy.",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=500&h=300&fit=crop",
      tags: ["Deep Learning", "CNN", "MNIST"],
      link: "https://github.com/yourusername/Digit-Classification-using-NN"
    },
    {
      title: "Crop Disease Identification",
      description: "Deep learning system for crop disease identification using CNN models achieving ~92% accuracy on plant leaf images.",
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=500&h=300&fit=crop",
      tags: ["Deep Learning", "ResNet", "CNN", "Agriculture"],
      link: "https://github.com/yourusername/Crop-Disease-Identification"
    },
    {
      title: "Movie Recommendation System",
      description: "Content-based and collaborative filtering recommendation system using cosine similarity and matrix factorization.",
      image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=500&h=300&fit=crop",
      tags: ["ML", "Collaborative Filtering", "Recommendation"],
      link: "https://github.com/yourusername/Movie-Recommendation-System"
    },
    {
      title: "Demand Forecasting for Retail Store",
      description: "Time-series forecasting model using ARIMA, XGBoost, and LSTM, improving MAPE by 22%.",
      image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=500&h=300&fit=crop",
      tags: ["ML", "LSTM", "XGBoost", "Time Series"],
      link: "https://github.com/yourusername/Demand-Forecasting-for-a-Retail-Store"
    },
    {
      title: "Customer Segmentation with K-Means",
      description: "Clustering algorithm implementation for customer segmentation using K-Means clustering techniques.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      tags: ["ML", "K-Means", "Clustering"],
      link: "https://github.com/yourusername/Customer-Segmentation-with-K-Means-Clustering"
    },
    {
      title: "Image Classification Model",
      description: "Deep learning CNN model for image classification with 95% accuracy on CIFAR-10 dataset.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&h=300&fit=crop",
      tags: ["Deep Learning", "CNN", "CIFAR-10"],
      link: "#"
    },
    {
      title: "Sentiment Analysis",
      description: "NLP model for sentiment analysis using BERT and transformers for social media text classification.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=300&fit=crop",
      tags: ["NLP", "BERT", "Transformers"],
      link: "#"
    },
    {
      title: "Book Recommending System",
      description: "Machine learning based book recommendation system using collaborative filtering techniques.",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&h=300&fit=crop",
      tags: ["ML", "Recommendation", "Python"],
      link: "https://github.com/yourusername/Book-Recommending-System"
    },
    {
      title: "Text Recognition System",
      description: "Deep learning system for text recognition and OCR using advanced neural networks.",
      image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=500&h=300&fit=crop",
      tags: ["Deep Learning", "OCR", "Computer Vision"],
      link: "https://github.com/yourusername/Text-Recognition-System"
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
          <h2 className="text-white font-black text-4xl sm:text-5xl">Machine Learning Models</h2>
          <p className="text-secondary mt-4 max-w-3xl mx-auto">
            Advanced machine learning projects utilizing Python, TensorFlow, PyTorch, and scikit-learn
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h3 className="text-[#915EFF] text-4xl font-bold mb-2">14+</h3>
              <p className="text-white text-lg">ML Models</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h3 className="text-[#915EFF] text-4xl font-bold mb-2">95%</h3>
              <p className="text-white text-lg">Accuracy</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h3 className="text-[#915EFF] text-4xl font-bold mb-2">8+</h3>
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

export default MLProjects;
