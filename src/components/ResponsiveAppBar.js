import * as React from "react";
import Typewriter from 'typewriter-effect';
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
const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div id="port">
      <AppBar id="portfolio" position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
             <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              PORTFOLIO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
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
              <img
                style={{ width: "500px", height: "500px" }}
                src="/media/Picture1.png"
                alt="sumit kumar bhagat"
              />
              <p
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
                  <img className="img-fluid" src="/media/bhagat.png" alt="" />
                </div>
                <div className="col-md-5 mt-5" style={{ padding: "2.2rem",color:"wheat" }}>
                  <h4 id="cv">Sumit Kumar Bhagat</h4>
                  <h1 id="cv">I'm a Web Developer</h1>
                  <p id="cv"> 
                  <Typewriter
        options={{
          delay: 0, // The delay between each character in milliseconds
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString('I am Sumit Kumar Bhagat, a Mechanical Engineering graduate with a fervent passion for Front-End Development. Currently, I am broadening my expertise by immersing myself in HTML, CSS, JavaScript, and React JS. My proficiency extends to various frameworks and libraries, including Material-UI, Tailwind CSS, and Bootstrap, which empower me to create responsive and user-centric designs. I firmly believe in the transformative power of technology to resolve challenges and simplify our lives. My commitment is to the creation of interfaces that are not only efficient but also visually captivating. With a solid grounding in engineering and a flair for design, I am eager to confront the digital era’s challenges. My aspiration is to blend my varied skills to develop innovative solutions that delight and serve users effectively.')
            .pauseFor(2000) // Pause for 2 seconds
             .start()
            ;
        }}
      />
                  </p>
                  <a href="/media/Doc.pdf" download="sumitkumarbhagat_resume.pdf">
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
          <div className="row skilll ms-4">
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
