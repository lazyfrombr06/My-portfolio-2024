import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";

import "../App.css";
import "../Responsive.css";
import { Routes, Route } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import { VscMail } from "react-icons/vsc";
import { Link } from "react-scroll";
import pro1desktop from "../Media/Dpsru-desktop.jpg";
import pro1mobile from "../Media/Dpsru-phone.jpg";
import pro1logo from "../Media/dpsru-logo.png";

import pro2desktop from "../Media/Rakesh-desktop.jpg";
import pro2mobile from "../Media/Rakesh-phone.jpg";
import pro2logo from "../Media/Rakesh-logo.jpg";

import pro3desktop from "../Media/Rahul-desktop.jpg";
import pro3mobile from "../Media/Rahul-phone.jpg";
import pro3logo from "../Media/rahul-logo.jpg";

import pro4desktop from "../Media/Avcom-desktop.jpg";
import pro4mobile from "../Media/Avcom-phone.jpg";
import pro4logo from "../Media/ant logo.png";

import frontendlogo from "../Media/Frontendlogo.webp";
import toolsLogo from "../Media/feature__tools.webp";
import backendlogo from "../Media/backend-coding.png";
import wplogo from "../Media/feature__wp.webp";
import brajeshtechlogo from "../Media/Brajesh.tech__1_-removebg-preview.png";

import brajeshpic from "../Media/brajeshk.jpg";
// import FormSubmitThanks from "./FormSubmitThanks";

function Home() {
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.3 });

  const [ref5, inView5] = useInView({ triggerOnce: true, threshold: 0.3 });

  const [ref6, inView6] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [ref7, inView7] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [ref8, inView8] = useInView({ triggerOnce: true, threshold: 0.3 });

  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  // formdetail
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formMsg, setFormMsg] = useState("");
  const [currntTime, setCurrentTime] = useState("");

  const [formError, setFormError] = useState("");

  const addFormData = async () => {
    console.log(formName, formEmail, formPhone, formMsg);

    // check empty inputbox
    if (!formName || !formEmail || !formPhone || !formMsg) {
      setFormError(true);
      return false;
    }

    // Date and time
    // const date = new Date();
    //   const showTime = date.getHours()
    //       + ':' + date.getMinutes()
    //       + ":" + date.getSeconds();

    let result = await fetch("http://brajesh.tech/add-form-data", {
      method: "POST",
      body: JSON.stringify({ formName, formEmail, formPhone, formMsg }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
    navigate("/thanks-form-submit-page");
  };

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
      <nav className="navbar">
        <div className="logo-container-brajesh-tech">
          <img src={brajeshtechlogo} alt="brajesh.tech" />
        </div>
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

          <li>
            {auth ? (
              <Link onClick={logout} to="/admin" smooth={true} duration={1000}>
                Logout
              </Link>
            ) : (
              <Link to="/admin" />
            )}
          </li>
        </ul>
      </nav>
      {/* Routes */}

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

        {/* <motion.div
          className="skills-section-home-container"
          whileHover={{ scale: 1.01, backgroundColor: "#3e361b75" }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.4 }}
        > */}
        <motion.div
          className="skills-section-home-container"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
        >
          <motion.div
            className="each-box-of-skill"
            whileTap={{ scale: 1.1 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <img src={frontendlogo} alt="frontend" />
            <h3 className="heading-of-skill-home">Front-end development</h3>
            <p className="text-of-skill-frontend">
              Responsive websites built for an optimal user experience that
              achieves your business goals.
            </p>
          </motion.div>

          <motion.div
            className="each-box-of-skill"
            whileTap={{ scale: 1.1 }}
            animate={{ opacity: 1, y: 0 }}
          >
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
          </motion.div>

          <motion.div
            className="each-box-of-skill"
            whileTap={{ scale: 1.1 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <img src={wplogo} alt="frontend" />{" "}
            <h3 className="heading-of-skill-home">Wordpress development</h3>
            <p className="text-of-skill-frontend">
              Skilled WordPress developer specializing in building responsive,
              user-friendly websites, ensuring seamless functionality and smooth
              deployment
            </p>
          </motion.div>

          <motion.div
            className="each-box-of-skill"
            whileTap={{ scale: 1.1 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <img src={toolsLogo} alt="frontend" />{" "}
            <h3 className="heading-of-skill-home">Performance, Tools</h3>
            <p className="text-of-skill-frontend">
              Experienced with Git, GitHub, DigitalOcean, Bootstrap, SSL, and
              many more, ensuring secure, scalable, responsive solutions.
            </p>
          </motion.div>
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

        {/* <motion.div
          className="project-container-each"
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 5 }}
        > */}

        {/* <motion.div
          ref={ref1}
          className={`feature-box project-container-each ${
            inView1 ? "slide-in" : ""
          }`}
        >
          <div className="first-box-of-project-for-details">
            <a href="https://dpsru.edu.in" target="_blank" rel="noreferrer">
              <img src={pro1logo} alt="logo" />
            </a>
            <p className="project-description-text-para">
              DPSRU website developer, overseeing design, deployment, and
              maintenance with React.js skills for smooth management and
              debugging.
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
        </motion.div> */}

        {/* <motion.div
          className="project-container-each"
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 6 }}
        > */}

        {/* <motion.div
          ref={ref2}
          className={`feature-box-left project-container-each ${
            inView2 ? "slide-in-left" : ""
          }`}
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
              rakeshmotion.netlify.app creator, managing design, deployment, and
              upkeep, using React.js for seamless performance and
              troubleshooting.
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
        </motion.div> */}

        {/* <motion.div
          className="project-container-each"
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 7 }}
        > */}
        {/* <motion.div
          ref={ref3}
          className={`feature-box project-container-each ${
            inView3 ? "slide-in" : ""
          }`}
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
              rahulmotion.netlify.app developer, handling design, deployment,
              and maintenance with expertise in React.js for efficient site
              handling and issue fixing.
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
        </motion.div> */}

        {/* <motion.div
          className="project-container-each"
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 8 }}
        > */}
  

{/* Upper comment lines are old design and there is 2 comment like first motion.div is old style and second motion.div is fro sliding effect with ref  */}

        {/* trying new style project */}

        <motion.div
          ref={ref1}
          className={`feature-box project-container-each ${
            inView1 ? "slide-in" : ""
          }`}
        >
          <div className="first-box-of-project-for-details">
            <a href="https://dpsru.edu.in" target="_blank" rel="noreferrer">
              <img src={pro1logo} alt="logo" />
            </a>
            <p className="project-description-text-para">
              DPSRU website developer, overseeing design, deployment, and
              maintenance with React.js skills for smooth management and
              debugging.
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
          ref={ref2}
          className={`feature-box-left project-container-each ${
            inView2 ? "slide-in-left" : ""
          }`}
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
              rakeshmotion.netlify.app creator, managing design, deployment, and
              upkeep, using React.js for seamless performance and
              troubleshooting.
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
          ref={ref3}
          className={`feature-box project-container-each ${
            inView3 ? "slide-in" : ""
          }`}
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
              rahulmotion.netlify.app developer, handling design, deployment,
              and maintenance with expertise in React.js for efficient site
              handling and issue fixing.
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
          ref={ref4}
          className={`feature-box-left project-container-each ${
            inView4 ? "slide-in-left" : ""
          }`}
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
              avcomnetwork.com developer, responsible for design, deployment,
              and site upkeep, leveraging React.js for optimal management and
              debugging.
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
      <motion.div
        ref={ref5}
        className={`feature-box-fade-in ${inView5 ? "fade-in-up" : ""}`}
      >
        <section id="skills" className="skills">
          <h2>My Skills</h2>
          <div className="skills-container">
            <div className="skill">
              <h3>Frontend</h3>
              <p
                ref={ref6}
                className={`feature-box-fade-in-text ${
                  inView5 ? "fade-in-up-text" : ""
                }`}
              >
                React.js, HTML, CSS, JavaScript
              </p>
            </div>
            <div className="skill">
              <h3>Backend</h3>
              <p
                ref={ref7}
                className={`feature-box-fade-in-text ${
                  inView5 ? "fade-in-up-text" : ""
                }`}
              >
                Node.js, Express.js, MongoDB
              </p>
            </div>
            <div className="skill">
              <h3>Tools</h3>
              <p
                ref={ref8}
                className={`feature-box-fade-in-text ${
                  inView5 ? "fade-in-up-text" : ""
                }`}
              >
                {" "}
                Git, DigitalOcean, Bootstrap, SSL
              </p>
            </div>
          </div>
        </section>
      </motion.div>

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
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={formName}
                  onChange={(e) => {
                    setFormName(e.target.value);
                  }}
                />
                <br />
                {formError && !formName && (
                  <span className="form-error-msg-span">Enter Name</span>
                )}
              </div>

              <div className="input-box">
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={formEmail}
                  onChange={(e) => {
                    setFormEmail(e.target.value);
                  }}
                />
                <br />{" "}
                {formError && !formEmail && (
                  <span className="form-error-msg-span">Enter Email</span>
                )}
              </div>

              <div className="input-box">
                <input
                  type="phone"
                  placeholder="Phone"
                  name="phone"
                  value={formPhone}
                  onChange={(e) => {
                    setFormPhone(e.target.value);
                  }}
                />
                <br />
                {formError && !formPhone && (
                  <span className="form-error-msg-span">Enter Phone No.</span>
                )}
              </div>

              <div className="input-box">
                <input
                  type="text"
                  placeholder="Message"
                  name="message"
                  value={formMsg}
                  onChange={(e) => {
                    setFormMsg(e.target.value);
                  }}
                />
                <br />{" "}
                {formError && !formMsg && (
                  <span className="form-error-msg-span">Enter Msg</span>
                )}
              </div>

              <input
                type="hidden"
                name="_next"
                value="https://brajesh.tech/thanks-form-submit-page"
              />
              <input type="hidden" name="_captcha" value="false" />
              {/* <input
                type="hidden"
                name="_next"
                value="https://brajesh.tech/FormSubmitThanks"
              /> */}
              {/* <button type="button" onClick={addFormData} className="btn"> */}
              <button type="submit" className="btn">
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
          <h2 className="about-me-heading-h2">About me</h2>
          <div className="about-me-image-container">
            <img src={brajeshpic} alt="mypic" />
          </div>
          <h3 className="image-heading-about-me">
            Brajesh Kumar - MERN Stack Developer | Tech Enthusiast
          </h3>
          <p className="about-me-text">
            Hello! I'm Brajesh Kumar, a passionate web developer with a focus on
            frontend technologies, especially React.js, and strong backend
            skills. I have a Bachelor's in Computer Applications (BCA) from
            Bihar University and currently work with AVCOM Network Technologies,
            providing comprehensive web development and IT support. <br />
            <br />
            With over 2 years of experience, I've honed my skills in building
            interactive, dynamic, and responsive websites that offer a seamless
            user experience. I’m proficient in creating both the visual and
            functional aspects of websites, ensuring that they are visually
            appealing while performing optimally across devices. <br /> <br />{" "}
            <center>
              <b> Let’s build something great together!</b>
            </center>
          </p>
        </div>

        <div className="parition-line-of-footer"></div>
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
      {/* <NavLink to="/admin" className="admin-login-navlink">
        Admin Login
      </NavLink>

      <br /> */}
      <div className="admin-login-nav-container-bottom">
        <NavLink to="/admin" className="admin-login-nav-bottom">
          Admin Login
        </NavLink>
      </div>
    </div>
  );
}

export default Home;
