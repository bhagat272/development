import * as React from "react";
import Typewriter from "typewriter-effect";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Skills } from "./Skills";
 
function ResponsiveAppBar() {
  const [mode, setMode] = React.useState("Dark Mode");
  const [bgColor, setBgColor] = React.useState(""); // Add this line

  function bgchanger() {
    if (mode === "Dark Mode") {
      setMode("Light Mode");
      setBgColor("black"); // Add this line
    } else {
      setMode("Dark Mode");
      setBgColor(""); // Add this line
    }
  }

  return (
    <div id="port" style={{backgroundColor:bgColor}}>
       <nav style={{background:bgColor}} id="portfolio" className="navbar navbar-expand-lg navbar-light bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
              <a className="nav-link" href="#">Features</a>
              <a className="nav-link" href="#">Pricing</a>
              <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">Disabled</a>
              <Button style={{position:"absolute",right:"23rem"}} onClick={bgchanger} variant="contained">{mode}</Button>
            </div>
          </div>
        </div>
        
      </nav>
      <div>
        <div>
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <img className="myphoto" 
                style={{ width: "500px", height: "500px" }}
                src="/media/Picture1.png"
                alt="sumit kumar bhagat"
              />
              <p className="ms-4.5 myphoto"
                style={{
                  color: "wheat",
                  fontFamily: "cursive",
                  fontSize: "22px",
                }}
              >
                Hey I'm Sumit , a front end developer
              </p>
            </div>
            {/* <div className="row mt-5 ms-5" style={{  }}>
              <img id="sumit" className="col-md-6" src="/media/bhagat.png" />
              <p
                className="col-md-6  about  text-white"
                style={{
                  fontFamily: "cursive",
                  fontSize: "23px",
                  padding: "1rem",
                  background: "hsla(272, 59%, 55%, 0.508)",
                }}
              >
                {" "}
                <h2 style={{  fontFamily: "cursive" }}>About</h2>
                I am Sumit Kumar Bhagat, a Mechanical Engineering graduate with
                a fervent passion for Front-End Development. Currently, I am
                broadening my expertise by immersing myself in HTML, CSS,
                JavaScript, and React JS. My proficiency extends to various
                frameworks and libraries, including Material-UI, Tailwind CSS,
                and Bootstrap, which empower me to create responsive and
                user-centric designs. I firmly believe in the transformative
                power of technology to resolve challenges and simplify our
                lives. My commitment is to the creation of interfaces that are
                not only efficient but also visually captivating. With a solid
                grounding in engineering and a flair for design, I am eager to
                confront the digital era’s challenges. My aspiration is to blend
                my varied skills to develop innovative solutions that delight
                and serve users effectively.
                <a href="/media/Doc.pdf" download="sumitkumarbhagat_resume.pdf">
                  {" "}
                  <Button variant="contained" color="success">
                    Download cv
                  </Button>
                </a>
              </p>
            </div> */}

            <div className="containerr container-fluid mt-5">
              <div className="row mt-5">
                <div className="col-md-6 mt-5">
                  <img className="img-fluid ms-1.5" src="/media/bhagat.png" alt="" />
                </div>
                <div
                  className="col-md-5 mt-5"
                  style={{ padding: "2.2rem", color: "wheat" }}
                >
                  <h4 id="cv">Sumit Kumar Bhagat</h4>
                  <h1  id="cv" className="text-success jd">I'm a Web Developer</h1>
                  <p id="cv">
                    <Typewriter
                      options={{
                        delay: 0, // The delay between each character in milliseconds
                      }}
                      onInit={(typewriter) => {
                        typewriter
                          .typeString(
                            "I am Sumit Kumar Bhagat, a Mechanical Engineering graduate with a fervent passion for Front-End Development. Currently,I am broadening my expertise by immersing myself in HTML, CSS, JavaScript, and React JS.My proficiency extends to various frameworks and libraries, including Material-UI, Tailwind CSS, and Bootstrap, which empower me to create responsive and user-centric designs. I firmly believe in the transformative power of technology to resolve challenges and simplify our lives. My commitment is to the creation of interfaces that are not only efficient but also visually captivating. With a solid grounding in engineering and a flair for design, I am eager to confront the digital era’s challenges. My aspiration is to blend my varied skills to develop innovative solutions that delight and serve users effectively."
                          )
                          .pauseFor(2000) // Pause for 2 seconds
                          .start();
                      }}
                    />
                  </p>
                  <a
                    href="/media/Doc.pdf"
                    download="sumitkumarbhagat_resume.pdf"
                  >
                    {" "}
                    <Button variant="contained" color="success">
                      Download cv
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <h3
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontFamily: "cursive",
              color: "wheat",
              marginTop: "5rem",
            }}
          >
            Skills
          </h3>
          <div className="row skilll ms-5 ">
            {Skills.map((skill, i) => (
              <div className="col-md-3">
                {" "}
                <p key={i}></p>
                <img className="skil" src={skill.image} alt="skills" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default ResponsiveAppBar;
