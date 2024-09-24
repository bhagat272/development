import React, { useEffect, useRef, useState } from 'react';
import Typewriter from "typewriter-effect";
import Button from "@mui/material/Button";
import { Skills } from "./Skills"; // Ensure this imports the Skills array
import { Projects } from "./Projects"; // Import the Projects array
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Tilt } from 'react-tilt'; // Import the Tilt component
import ContactForm from './ContactForm';
import { educationData } from './education'

function ResponsiveAppBar() {
  const [mode, setMode] = useState("Dark Mode");
  const [bgColor, setBgColor] = useState("");
  const skillsRef = useRef(null);

  // Function to change background color
  function bgchanger() {
    if (mode === "Dark Mode") {
      setMode("Light Mode");
      setBgColor("black");
    } else {
      setMode("Dark Mode");
      setBgColor("");
    }
  }

  // Intersection Observer for skills section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.target.classList.contains('skill-item')) {
          entry.target.classList.toggle("active", entry.isIntersecting);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
      }
    );

    if (skillsRef.current) {
      skillsRef.current.querySelectorAll('.skill-item').forEach(skill => {
        observer.observe(skill);
      });
    }

    return () => {
      if (skillsRef.current) {
        skillsRef.current.querySelectorAll('.skill-item').forEach(skill => {
          observer.unobserve(skill);
        });
      }
    };
  }, []);

  return (
    <div id="port" style={{ backgroundColor: bgColor }}>
      <nav style={{ background: bgColor, position: "fixed", width: '100%', top: '0', zIndex: "1000" }} id="portfolio" className="navbar navbar-expand-lg navbar-light bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Sumit Bhagat</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="#about">About</a>
              <a className="nav-link" href="#skill">Skills</a>
              <a className="nav-link" href="#project">Projects</a>
              <a className="nav-link" href="#contact" tabIndex={-1} aria-disabled="true">Contact</a>
              <Button variant="contained" onClick={bgchanger} style={{ marginRight: 16 }}>
                {mode}
              </Button>
            </div>
          </div>
        </div>
      </nav>
      <div>
        <div>
          <div>
            <div style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}>
              {/* Apply Tilt effect to the image */}
              <Tilt className="Tilt" options={{ max: 25, scale: 1.05, speed: 400 }}>
                <img className="myphoto profile" style={{ width: "500px", height: "500px" }} src="/media/Picture1.png" alt="sumit kumar bhagat" />
              </Tilt>
              <p className="ms-4 myphoto" style={{
                color: "wheat",
                fontFamily: "cursive",
                fontSize: "22px",
              }}>
                Hey I'm Sumit, a full stack developer
              </p>
            </div>
            <div className="containerr container-fluid mt-5">
              <div className="row mt-5">
                <div className="col-md-6 mt-5">
                  <Tilt className="Tilt" options={{ max: 25, scale: 1.05, speed: 400 }}>
                    <img className="img-fluid ms-1.5" src="/media/bhagat.png" alt="" />
                  </Tilt>
                </div>
                <div id="about" className="col-md-5 mt-5" style={{ padding: "2.2rem", color: "wheat" }}>
                  <h4 id="cv">Sumit Kumar Bhagat</h4>
                  <h1 id="cv" className="text-success jd">I'm a Web Developer</h1>
                  <p id="cv">
                    <div style={{ fontFamily: "cursive", marginBottom: "1rem" }}>
                      <Typewriter
                        options={{ delay: 0 }}
                        onInit={(typewriter) => {
                          typewriter
                            .typeString(
                              "I am Sumit Kumar Bhagat, a Mechanical Engineering graduate with a fervent passion for Front-End Development. Currently,I am broadening my expertise by immersing myself in HTML, CSS, JavaScript, and React JS.My proficiency extends to various frameworks and libraries, including Material-UI, Tailwind CSS, and Bootstrap, which empower me to create responsive and user-centric designs. I firmly believe in the transformative power of technology to resolve challenges and simplify our lives. My commitment is to the creation of interfaces that are not only efficient but also visually captivating. With a solid grounding in engineering and a flair for design, I am eager to confront the digital era’s challenges. My aspiration is to blend my varied skills to develop innovative solutions that delight and serve users effectively."
                            )
                            .pauseFor(2000)
                            .start();
                        }}
                      />
                    </div>
                  </p>
                  <a href="/media/Doc.pdf" download="sumitkumarbhagat_resume.pdf">
                    {" "}
                    <Button variant="contained" color="success">
                      Download CV
                    </Button>
                  </a>

                  {/* Social Media Links */}
                  <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "10px" }}>
                    <a href="https://www.linkedin.com/in/bhagat987/" target="_blank" rel="noopener noreferrer" style={{ margin: "0 5px" }}>
                      <Button variant="contained" style={socialButtonStyle}>
                        <LinkedInIcon />
                      </Button>
                    </a>
                    <a href="https://github.com/bhagat272" target="_blank" rel="noopener noreferrer" style={{ margin: "0 5px" }}>
                      <Button variant="contained" style={socialButtonStyle}>
                        <GitHubIcon />
                      </Button>
                    </a>
                    <a href="mailto:sumitkumarbhagat987@gmail.com" target="_blank" rel="noopener noreferrer" style={{ margin: "0 5px" }}>
                      <Button variant="contained" style={socialButtonStyle}>
                        <EmailIcon />
                      </Button>
                    </a>
                    <a href="https://api.whatsapp.com/send/?phone=7742462885&text=Hi%20I%27m+Sumit+Kumar+Bhagat+%2C+this+is+my+whatsapp+contact&type=phone_number&app_absent=0&utm_source=heylink.me" target="_blank" rel="noopener noreferrer" style={{ margin: "0 5px" }}>
                      <Button variant="contained" style={socialButtonStyle}>
                        <WhatsAppIcon />
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row ms-4 me-4">
            <h3 className="mb-4" id='skill' style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontFamily: "cursive",
              color: "wheat",
              marginTop: "5rem",
            }}>
              Education
            </h3>
            {educationData.map((education, index) => (
              <div key={index} className="col-md-4 mb-4" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div style={{
                  backgroundColor: "#333",
                  padding: "20px",
                  borderRadius: "10px",
                  textAlign: "center",
                  width: "100%",
                  maxWidth: "300px",
                  color: "white"
                }} id='edu'>
                  <div style={{ marginBottom: "15px" }}>
                    <span style={{ fontSize: "1.5em", fontWeight: "bold" }}>{education.degree}</span>
                    <div>{education.title}</div>
                  </div>
                  <div style={{ marginBottom: "10px" }}>
                    <span style={{ fontWeight: "bold" }}>{education.institution}</span>
                  </div>
                  <div>{education.batch ? `Batch: ${education.batch}` : `Passing Year: ${education.passingYear}`}</div>
                  <div>{education.cgpa ? `Aggregate CGPA: ${education.cgpa}` : `Percentage: ${education.percentage}`}</div>
                  <div>{education.location}</div>
                </div>
              </div>
            ))}
          </div>
          <h3 className="mb-4" id='skill' style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontFamily: "cursive",
            color: "wheat",
            marginTop: "5rem",
          }}>
            Skills
          </h3>
          <div className="row skilll ms-4" ref={skillsRef}>
            {Skills.map((skill, i) => (
              <div key={i} className="col-md-3 mb-5 skill-item" style={{ display: "flex", flexWrap: "wrap" }}>
                <img className="skil" style={{ animationDelay: `${i * 0.2}s` }} src={skill.image} alt="skills" />
              </div>
            ))}
          </div>

          <h3 className="mb-4" id='project' style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontFamily: "cursive",
            color: "wheat",
            marginTop: "5rem",
          }}>
            Projects
          </h3>
          <div className="ms-3 me-3 text-light">
            <div className="row" style={{ display: 'flex', flexWrap: 'wrap' }}>
              {Projects.map((project, i) => (
                <div key={i} className="col-md-4 mb-5 project-item" style={{ padding: '15px' }} >
                  <div className='proj' style={{ border: '1px solid #ccc', borderRadius: '10px', overflow: 'hidden' }}>
                    <img src={project.image} alt={project.title} style={{ objectFit: "cover", aspectRatio: "5/3" }} className='pro' />
                    <div style={{ padding: '15px' }}>
                      <h5>{project.title}</h5>
                      <p>{project.description}</p>
                      <p style={{ display: "flex", justifyContent: "space-between" }}>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <Button variant="contained" color="primary">View Project</Button>
                        </a>
                        <a href={project.git} target="_blank" rel="noopener noreferrer">
                          <Button className='bg-dark' variant="contained"><GitHubIcon className='me-2' />GitHub</Button>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
      <ContactForm id="contact" />
    </div>
  );
}

// Styles for social buttons
const socialButtonStyle = {
  borderRadius: "50%",
  width: "40px",
  height: "40px",
  minWidth: "40px", // Ensure the button maintains the same width even with icon
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#fff", // You can customize this color
  color: "#000", // Icon color
  boxShadow: "0 2px 5px rgba(0,0,0,0.2)", // Light shadow
  padding: "0"
};

export default ResponsiveAppBar;