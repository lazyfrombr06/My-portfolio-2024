import React from "react";
import "./App.css";
import "./Responsive.css";
import { Routes, Route } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa6";
import { VscMail } from "react-icons/vsc";
import { Link } from "react-scroll";
import pro1desktop from "./Media/Dpsru-desktop.jpg";
import pro1mobile from "./Media/Dpsru-phone.jpg";
import pro1logo from "./Media/dpsru-logo.png";

import pro2desktop from "./Media/Rakesh-desktop.jpg";
import pro2mobile from "./Media/Rakesh-phone.jpg";
import pro2logo from "./Media/Rakesh-logo.jpg";

import pro3desktop from "./Media/Rahul-desktop.jpg";
import pro3mobile from "./Media/Rahul-phone.jpg";
import pro3logo from "./Media/rahul-logo.jpg";

import pro4desktop from "./Media/Avcom-desktop.jpg";
import pro4mobile from "./Media/Avcom-phone.jpg";
import pro4logo from "./Media/ant logo.png";

import frontendlogo from "./Media/Frontendlogo.webp";
import toolsLogo from "./Media/feature__tools.webp";
import backendlogo from "./Media/backend-coding.png";
import wplogo from "./Media/feature__wp.webp";
import NotFound from "./PageNotFound";

import brajeshpic from './Media/brajeshk.jpg'

function App() {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1, // Trigger animation when 10% of the box is in view
  });

  React.useEffect(() => {
    if (inView) {
      controls.start({ x: 0, opacity: 1 });
    } else {
      controls.start({ x: "-100%", opacity: 0 });
    }
  }, [controls, inView]);
  return (
    <div className="App">
      {/* Routes */}
      {/* <Routes>
        <Route path="*" element={<NotFound />} />
      </Routes> */}

      {/* Navbar */}
      <nav className="navbar">
        <ul className="nav-ul-1">
          <li>
            <Link to="home" smooth={true} duration={1000}>
              Home
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={1000}>
              Skills
            </Link>
          </li>
        </ul>
        <ul className="nav-ul-2">
          <li>
            <Link to="projects" smooth={true} duration={1000}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={1000}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* social media icon */}

      <motion.div
        className="social-icons-container"
        initial={{ x: "100%" }} // Start off-screen to the right
        animate={{ x: 0 }} // Animate to its normal position
        transition={{ type: "spring", stiffness: 100, damping: 10, delay: 2 }} // Smooth spring animation
        // whileHover={{ scale: 1.05 }}  // Slightly scale on hover
        exit={{ x: "100%", opacity: 0 }}
      >
        <a
          href="https://instagram.com/lazyfrombr06"
          target="_blank"
          rel="noreferrer"
          className="social-icon"
        >
          <FaInstagram className="social-media-icon-i" />
          <span className="icon-name">Instagram</span>
        </a>
        <a
          href="https://wa.me/917492992502?text=Hi..%20"
          target="_blank"
          rel="noreferrer"
          className="social-icon"
        >
          <FaWhatsapp className="social-media-icon-i" />
          <span className="icon-name">WhatsApp</span>
        </a>
        <a
          href="https://www.linkedin.com/in/brajesh-kumar-881ab2236/"
          target="_blank"
          rel="noreferrer"
          className="social-icon"
        >
          <FaLinkedinIn className="social-media-icon-i" />
          <span className="icon-name">LinkedIn</span>
        </a>
        {/* <div className="social-icon">
       <FaXTwitter className="social-media-icon-i"/>
        <span className="icon-name">Twitter</span>
      </div> */}
      </motion.div>

      {/* Sections */}
      <section id="home" className="home">
        <h1>Hello, I'm Brajesh Kumar</h1>
        <p>A Frontend Developer with Backend skills.</p>
        <motion.div
          className="skills-section-home-container"
          whileHover={{ scale: 1.01, backgroundColor: "#3e361b75" }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 4 }}
        >
          <div className="each-box-of-skill">
            <img src={frontendlogo} alt="frontend" />
            <h3 className="heading-of-skill-home">Front-end development</h3>
            <p className="text-of-skill-frontend">
              Responsive websites built for an optimal user experience that
              achieves your business goals.
            </p>
          </div>

          <div className="each-box-of-skill">
            <img src={backendlogo} alt="frontend" /> <br />
            <br />
            <br />
            <br />
            <h3 className="heading-of-skill-home">Back-end development</h3>
            <p className="text-of-skill-frontend">
              Skilled frontend developer with strong backend knowledge and
              deployment expertise, delivering complete and efficient web
              solutions.
            </p>
          </div>

          <div className="each-box-of-skill">
            <img src={wplogo} alt="frontend" />{" "}
            <h3 className="heading-of-skill-home">Wordpress development</h3>
            <p className="text-of-skill-frontend">
              Skilled WordPress developer specializing in building responsive,
              user-friendly websites, ensuring seamless functionality and smooth
              deployment
            </p>
          </div>

          <div className="each-box-of-skill">
            <img src={toolsLogo} alt="frontend" />{" "}
            <h3 className="heading-of-skill-home">Performance, Tools</h3>
            <p className="text-of-skill-frontend">
              Experienced with Git, GitHub, DigitalOcean, Bootstrap, SSL, and
              many more, ensuring secure, scalable, responsive solutions.
            </p>
          </div>
        </motion.div>
        <br />
        <br />

        <Link to="know-about-me" smooth={true} duration={1000} className="btn">
         Know about me
        </Link>
      </section>

      {/* Project work  */}
      <section id="projects" className="project-of-mine-container">
        <h1 className="project-heading-1">My Works</h1>

        <motion.div
          className="project-container-each"
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 5 }}
        >
          <div className="first-box-of-project-for-details">
            <a href="https://dpsru.edu.in" target="_blank" rel="noreferrer">
              <img src={pro1logo} alt="logo" />
            </a>
            <p className="project-description-text-para">
              {" "}
              Independent developer of the DPSRU website, handling design,
              deployment, debugging, and maintenance. Skilled in frontend and
              backend technologies, with expertise in React.js and site
              management.
            </p>
          </div>
          <div className="second-box-of-project-for-desktop-image">
            <img
              src={pro1desktop}
              alt="Project"
              className="project-desktop-img"
            />
          </div>
          <div className="third-container-of-project-for-mobile-view">
            <img src={pro1mobile} alt="project" className="project-phone-img" />
          </div>
        </motion.div>

        <motion.div
          className="project-container-each"
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 6 }}
        >
          <div className="first-box-of-project-for-details">
            <a
              href="https://rakeshmotion.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={pro2logo} alt="logo" />
            </a>
            <p className="project-description-text-para">
              {" "}
              Developer of rakeshmotion.netlify.app, responsible for design,
              deployment, and maintenance. Proficient in frontend and backend
              technologies, with React.js expertise, ensuring smooth site
              management and debugging.
            </p>
          </div>
          <div className="second-box-of-project-for-desktop-image">
            <img
              src={pro2desktop}
              alt="Project"
              className="project-desktop-img"
            />
          </div>
          <div className="third-container-of-project-for-mobile-view">
            <img src={pro2mobile} alt="project" className="project-phone-img" />
          </div>
        </motion.div>

        <motion.div
          className="project-container-each"
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 7 }}
        >
          <div className="first-box-of-project-for-details">
            <a
              href="https://rahulmotion.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={pro3logo} alt="logo" />
            </a>
            <p className="project-description-text-para">
              {" "}
              Developer of rahulmotion.netlify.app, handling design, deployment,
              and maintenance. Proficient in both frontend and backend
              technologies, with React.js expertise for efficient site
              management and debugging.
            </p>
          </div>
          <div className="second-box-of-project-for-desktop-image">
            <img
              src={pro3desktop}
              alt="Project"
              className="project-desktop-img"
            />
          </div>
          <div className="third-container-of-project-for-mobile-view">
            <img src={pro3mobile} alt="project" className="project-phone-img" />
          </div>
        </motion.div>
        <motion.div
          className="project-container-each"
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 8 }}
        >
          <div className="first-box-of-project-for-details">
            <a
              href="https://avcomnetwork.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={pro4logo} alt="logo" />
            </a>
            <p className="project-description-text-para">
              {" "}
              Developer of avcomnetwork.com, responsible for design, deployment,
              and ongoing maintenance. Skilled in both frontend and backend
              technologies, with React.js expertise ensuring effective site
              management and debugging.
            </p>
          </div>
          <div className="second-box-of-project-for-desktop-image">
            <img
              src={pro4desktop}
              alt="Project"
              className="project-desktop-img"
            />
          </div>
          <div className="third-container-of-project-for-mobile-view">
            <img src={pro4mobile} alt="project" className="project-phone-img" />
          </div>
        </motion.div>
      </section>

      {/* Project work  */}

      <section id="skills" className="skills">
        <h2>My Skills</h2>
        <div className="skills-container">
          <div className="skill">
            <h3>Frontend</h3>
            <p>React.js, HTML, CSS, JavaScript</p>
          </div>
          <div className="skill">
            <h3>Backend</h3>
            <p>Node.js, Express.js, MongoDB</p>
          </div>
          <div className="skill">
            <h3>Tools</h3>
            <p> Git, DigitalOcean, Bootstrap, SSL</p>
          </div>
        </div>
      </section>

      {/* <section id="projects" className="projects">
        <h2>Projects</h2>
        <div className="project-card">
          <h3>Portfolio Website</h3>
          <p>A personal website built with React.js and animations.</p>
        </div>
        <div className="project-card">
          <h3>DPSRU Website</h3>
          <p>Developed and maintained the official DPSRU website.</p>
        </div>
      </section> */}

      <section className="contact-me-container" id="contact">
        <h2 className="contact-me-heading">Contact-me</h2>
        <div className="contact-me-box">
          <div className="wrapper">
            <form
              action="https://formsubmit.co/brajeshkumarthakur1@gmail.com"
              method="POST"
            >
              <div className="input-box">
                <input type="text" placeholder="Name" name="name" />
              </div>

              <div className="input-box">
                <input type="email" placeholder="Email" name="email" />
              </div>

              <div className="input-box">
                <input type="text" placeholder="Message" name="message" />
              </div>
              <input type="hidden" name="_captcha" value="false"></input>

              <button
                type="submit"
                className="btn"
                name="_next"
                value="https://brajeshthakur.netlify.app"
              >
                submit
              </button>
            </form>
          </div>
          {/* <div className="wrapper">
         Email: brajesh
        </div> */}
        </div>
      </section>
      <br />
      <br />

    <section className="about-me-and-right-reserve" id="know-about-me">
      <div className="aboutme-container">
        <h2 className="about-me-heading-h2">
          About me
        </h2>
        <div className="about-me-image-container">
          <img src={brajeshpic} alt="mypic" />
        </div>
        <h3 className="image-heading-about-me">Brajesh Kumar - MERN Stack Developer | Tech Enthusiast</h3>
        <p className="about-me-text">Hello! I'm Brajesh Kumar, a passionate web developer with a focus on frontend technologies, especially React.js, and strong backend skills. I have a Bachelor's in Computer Applications (BCA) from Bihar University and currently work with AVCOM Network Technologies, providing comprehensive web development and IT support. <br /><br />

With over 2 years of experience, I've honed my skills in building interactive, dynamic, and responsive websites that offer a seamless user experience. I’m proficient in creating both the visual and functional aspects of websites, ensuring that they are visually appealing while performing optimally across devices. <br /> <br /> <center><b> Let’s build something great together!</b></center></p>
      </div>

      <div className="parition-line-of-footer">

      </div>
      <div className="all-right-reserve-container">
        <h2 className="all-right-reserve-heading">
        Copyright © 2024 . All rights reserved.
        </h2> 
      <div className="social-media-bottom">
        <a
          href="https://instagram.com/lazyfrombr06"
          target="_blank"
          rel="noreferrer"
          className="social-icon"
        >
          <FaInstagram className="social-media-icon-i" />
          <span className="icon-name">Instagram</span>
        </a> 
        <a
          href="https://wa.me/917492992502?text=Hi..%20"
          target="_blank"
          rel="noreferrer"
          className="social-icon"
        >
          <FaWhatsapp className="social-media-icon-i" />
          <span className="icon-name">WhatsApp</span>
        </a>
        <a
          href="https://www.linkedin.com/in/brajesh-kumar-881ab2236/"
          target="_blank"
          rel="noreferrer"
          className="social-icon"
        >
          <FaLinkedinIn className="social-media-icon-i" />
          <span className="icon-name">LinkedIn</span>
        </a>
        <a
          href="mailto:brajeshfrombr06@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="social-icon"
        >
          <VscMail className="social-media-icon-i" />
          <span className="icon-name">Email</span>
        </a>
      
     </div>
      </div>
    </section>
    </div>
  );
}

export default App;
