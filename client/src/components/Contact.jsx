import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaPaperPlane } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const { user, openAuthModal } = useAuth();
  const [state, handleSubmit] = useForm("xqardeep");
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const onSubmit = async (e) => {
    await handleSubmit(e);
    
    // Play voice message after successful submission using Web Speech API
    if (!state.submitting) {
      const speech = new SpeechSynthesisUtterance("We will get back to you soon");
      speech.rate = 0.9;
      speech.pitch = 1;
      speech.volume = 1;
      speech.lang = 'en-US';
      
      // Wait a bit for form submission to complete
      setTimeout(() => {
        window.speechSynthesis.speak(speech);
      }, 500);
    }
  };

  if (state.succeeded) {
      return (
        <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center py-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-[#915EFF] font-bold tracking-wider uppercase mb-2">Thank You!</h2>
            <h3 className="text-white font-black text-4xl sm:text-5xl">Message Sent.</h3>
            <p className="text-secondary mt-4 text-lg">I will get back to you as soon as possible.</p>
          </motion.div>
        </section>
      );
  }

  return (
    <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center py-20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10"
      >
        <h2 className="text-[#915EFF] font-bold tracking-wider uppercase mb-2">Get in touch</h2>
        <h3 className="text-white font-black text-4xl sm:text-5xl">Contact</h3>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-8 overflow-hidden">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-[0.75] bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl shadow-xl"
        >
          <h3 className="text-white text-2xl font-bold mb-6">Contact Information</h3>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#915EFF]/10 rounded-full flex items-center justify-center text-[#915EFF] text-xl shrink-0">
                <FaEnvelope />
              </div>
              <div>
                <p className="text-white/60 text-sm mb-1">Email</p>
                <a href="mailto:surajkumariitm@gmail.com" className="text-white font-medium hover:text-[#915EFF] transition-colors">
                  surajkumariitm@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#915EFF]/10 rounded-full flex items-center justify-center text-[#915EFF] text-xl shrink-0">
                <FaPhone />
              </div>
              <div>
                <p className="text-white/60 text-sm mb-1">Phone</p>
                {user ? (
                  <a href="tel:+919939096243" className="text-white font-medium hover:text-[#915EFF] transition-colors">
                    +91 9939096243
                  </a>
                ) : (
                  <p 
                    onClick={openAuthModal}
                    className="text-white font-medium cursor-pointer hover:text-[#915EFF] transition-colors blur-[2px] hover:blur-none select-none"
                    title="Login to view full number"
                  >
                    +91 ********43
                  </p>
                )}
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#915EFF]/10 rounded-full flex items-center justify-center text-[#915EFF] text-xl shrink-0">
                <FaMapMarkerAlt />
              </div>
              <div>
                <p className="text-white/60 text-sm mb-1">Location</p>
                <p className="text-white font-medium">
                  IIT Madras, Chennai, Tamil Nadu, India
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#915EFF]/10 rounded-full flex items-center justify-center text-[#915EFF] text-xl shrink-0">
                <FaLinkedin />
              </div>
              <div>
                <p className="text-white/60 text-sm mb-1">LinkedIn</p>
                <a href="https://linkedin.com/in/surajam" target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-[#915EFF] transition-colors">
                  linkedin.com/in/surajam
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl shadow-xl"
        >
          <form ref={formRef} onSubmit={onSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-white font-medium">Your Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className="bg-black/20 py-3 px-4 placeholder:text-secondary text-white rounded-lg outline-none border border-white/10 focus:border-[#915EFF] font-medium transition-colors"
                required
              />
              <ValidationError 
                prefix="Name" 
                field="name"
                errors={state.errors}
                className="text-red-500 text-sm"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-white font-medium">Your Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                className="bg-black/20 py-3 px-4 placeholder:text-secondary text-white rounded-lg outline-none border border-white/10 focus:border-[#915EFF] font-medium transition-colors"
                required
              />
              <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
                className="text-red-500 text-sm"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-white font-medium">Subject</label>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="What's the subject?"
                className="bg-black/20 py-3 px-4 placeholder:text-secondary text-white rounded-lg outline-none border border-white/10 focus:border-[#915EFF] font-medium transition-colors"
                required
              />
              <ValidationError 
                prefix="Subject" 
                field="subject"
                errors={state.errors}
                className="text-red-500 text-sm"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-white font-medium">Your Message</label>
              <textarea
                rows="4"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to say?"
                className="bg-black/20 py-3 px-4 placeholder:text-secondary text-white rounded-lg outline-none border border-white/10 focus:border-[#915EFF] font-medium transition-colors resize-none"
                required
              />
              <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
                className="text-red-500 text-sm"
              />
            </div>

            <button
              type="submit"
              disabled={state.submitting}
              className="bg-[#915EFF] py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl hover:bg-[#804dee] transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {state.submitting ? "Sending..." : "Send Message"}
              {!state.submitting && <FaPaperPlane className="text-sm" />}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
