import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useState } from "react";
import { styles } from "./SideNavStyles";

export function SideNav() {
  const Github = `${process.env.PUBLIC_URL}/images/Github.png`;
  const Download = `${process.env.PUBLIC_URL}/images/Download.png`;
  const Linkedin = `${process.env.PUBLIC_URL}/images/Linkedin.png`;
  const Home = `${process.env.PUBLIC_URL}/images/Home.png`;
  const About = `${process.env.PUBLIC_URL}/images/About.png`;
  const Experience = `${process.env.PUBLIC_URL}/images/Experience.png`;
  const Projects = `${process.env.PUBLIC_URL}/images/Projects.png`;

  const [hovered, setHovered] = useState(null);

  const Navigate = useNavigate();

  const handleOpenWebsite = (social) => {
    let websiteURL = "";
    if (social === "Github") {
      websiteURL = "https://github.com/brianbates928";
    } else if (social === "Download") {
      websiteURL = "https://www.instagram.com/brinbats/";
    } else if (social === "Linkedin") {
      websiteURL = "https://www.linkedin.com/in/brianjbates/";
    } else {
      return;
    }
    window.open(websiteURL, "_blank");
  };
  const handlePageClick = (page) => {
    if (page === "Home") {
      Navigate("/");
    } else if (page === "About") {
      Navigate("/about");
    } else if (page === "Experience") {
      Navigate("/experience");
    } else if (page === "Projects") {
      Navigate("/projects");
    } else {
      return;
    }
  };

  const downloadPDF = () => {
    const pdfFilePath = process.env.PUBLIC_URL + "/BrianJBates.pdf";

    const link = document.createElement("a");
    link.href = pdfFilePath;
    link.download = `Brians's Resume`;
    link.click();
  };
  return (
    <div style={styles.sideNavStyle}>
      <div style={styles.namesocial}>
        <h style={styles.name}>Brian Bates</h>
        <div style={styles.socials}>
          <img
            style={styles.github}
            src={Github}
            alt="Github"
            onClick={() => handleOpenWebsite("Github")}
          />
           <img
            style={styles.linkedin}
            src={Linkedin}
            alt="Linkedin"
            onClick={() => handleOpenWebsite("Linkedin")}
          />
         <button style={styles.button} onClick={() => downloadPDF()}>
          Resume
          <img style={styles.download} src={Download} alt="Download" />
          </button>
        </div>
      </div>
      <div style={styles.pages}>
        <div
          style={hovered === "Home" ? styles.pageItemHover : styles.pageItem}
          onMouseEnter={() => setHovered("Home")}
          onMouseLeave={() => setHovered(null)}
          onClick={() => handlePageClick("Home")}
        >
          <img
            style={styles.pageImage}
            src={Home}
            alt="Home"
            // onClick={() => handlePageIconClick("Home")}
          />
          <h style={styles.pagesText}>Home</h>
        </div>
        <div
          style={hovered === "About" ? styles.pageItemHover : styles.pageItem}
          onMouseEnter={() => setHovered("About")}
          onMouseLeave={() => setHovered(null)}
          onClick={() => handlePageClick("About")}
        >
          <img style={styles.pageImage} src={About} alt="About" />
          <h style={styles.pagesText}>About</h>
        </div>
        <div
          style={
            hovered === "Experience" ? styles.pageItemHover : styles.pageItem
          }
          onMouseEnter={() => setHovered("Experience")}
          onMouseLeave={() => setHovered(null)}
          onClick={() => handlePageClick("Experience")}
        >
          <img style={styles.pageImage} src={Experience} alt="Experience" />
          <h style={styles.pagesText}>Experience</h>
        </div>
        <div
          style={
            hovered === "Projects" ? styles.pageItemHover : styles.pageItem
          }
          onMouseEnter={() => setHovered("Projects")}
          onMouseLeave={() => setHovered(null)}
          onClick={() => handlePageClick("Projects")}
        >
          <img style={styles.pageImage} src={Projects} alt="Projects" />
          <h style={styles.pagesText}>Projects</h>
        </div>
      </div>
    </div>
  );
}
