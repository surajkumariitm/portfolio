import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, openAuthModal, logout } = useAuth();
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);

      // Detect active section based on scroll position
      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'positions', 'contact'];
      
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          // Check if section is in viewport (with some offset for navbar)
          if (rect.top <= 100 && rect.bottom >= 100) {
            const title = sectionId.charAt(0).toUpperCase() + sectionId.slice(1);
            setActive(title);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    {
      id: "home",
      title: "Home",
    },
    {
      id: "about",
      title: "About",
    },
    {
      id: "experience",
      title: "Experience",
    },
    {
      id: "skills",
      title: "Skills",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "positions",
      title: "Positions",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];

  return (
    <nav
      className={`w-full flex items-center py-5 fixed top-0 left-0 right-0 z-[9999] bg-primary/90 backdrop-blur-sm`}
      style={{ position: 'fixed' }}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className="flex items-center gap-4">
          <div 
            className="cursor-pointer text-white hover:text-[#915EFF] transition-colors relative group"
            onClick={user ? undefined : openAuthModal}
            title={user ? user.name : "Login / Signup"}
          >
            <FaUserCircle size={28} />
            {user && (
              <div className="absolute top-full left-0 mt-2 w-32 bg-[#1d1836] border border-white/10 rounded-lg shadow-xl hidden group-hover:block">
                <div className="p-3 text-sm text-white border-b border-white/10 truncate font-medium">{user.name}</div>
                <Link 
                  to="/profile"
                  className="block w-full text-left p-3 text-sm text-white hover:bg-white/5 transition-colors"
                >
                  Profile
                </Link>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    logout();
                  }} 
                  className="w-full text-left p-3 text-sm text-red-400 hover:bg-white/5 transition-colors rounded-b-lg"
                >
                  Logout
                </button>
              </div>
            )}
          </div>

          <Link
            to='/'
            className='flex items-center gap-2'
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <p className='text-transparent bg-clip-text bg-gradient-to-r from-[#915EFF] to-[#00cea8] text-[24px] font-black cursor-pointer flex '>
              SK
            </p>
          </Link>
        </div>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white border-b-2 border-[#915EFF]" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer transition-all pb-1`}
              onClick={() => setActive(link.title)}
            >
              {location.pathname === '/' ? (
                <a href={`#${link.id}`}>{link.title}</a>
              ) : (
                <Link to={`/#${link.id}`}>{link.title}</Link>
              )}
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <div
            className='w-[28px] h-[28px] object-contain cursor-pointer flex items-center justify-center text-white'
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? <FaTimes size={24} /> : <FaBars size={24} />}
          </div>

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === link.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  {location.pathname === '/' ? (
                    <a href={`#${link.id}`}>{link.title}</a>
                  ) : (
                    <Link to={`/#${link.id}`}>{link.title}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      {/* Gradient Glow Border Separator */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#915EFF] to-transparent opacity-70"></div>
      <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-gradient-to-r from-transparent via-[#915EFF] to-transparent opacity-30 blur-sm"></div>
    </nav>
  );
};

export default Navbar;
