import { styles } from "./ProjectsStyles";

const Projects = () => {
  const handleOpenWebsite = (project) => {
    let websiteURL = "";
    if (project === "Online Multiplayer Chess Game- React, Typescript, Javascript, Python, and SQL") {
      websiteURL = "https://github.com/njit-cs-490-002-spring23/group-project-team-1";
    } else if (project === "Web Scraping - Website built with PHP, SQL, Python, and Bash") {
      websiteURL = "https://github.com/brianbates928/WebScraping";
    } else if (project === "Bookstore - PHP, SQL, JavaScript, HTML, CSS") {
      websiteURL = "https://github.com/brianbates928/Bookstore";
    } else if (project === "Taxi Driver - Python") {
      websiteURL = "https://github.com/brianbates928/taxidriver";
    } else if (project === "AWS Academy Graduate") {
      websiteURL = "https://aws.amazon.com/certification/certified-cloud-practitioner/";
    } else if (project === "IBM Cybersecurity Analyst Professional Certificate") {
      websiteURL = "https://www.credly.com/badges/9af477b5-a0b2-4c80-a2c3-13dfc8e97824/linked_in_profile";
    }else {
      return; 
    }
    window.open(websiteURL, "_blank");
  };

  const ProjectReturner = ({ title, button, text1, text2, color }) => {
    return (
      <div style={styles.project}>
        <div style={styles.title}>
          <div style={styles.titleRight}>
            <p style={styles.titleText}> {title}</p>
          </div>
          <div style={styles.titleLeft}>
            <button
              onClick={() => handleOpenWebsite(title)}
              style={styles.titleButton}
            >
              {button}
            </button>
          </div>
        </div>
        <div
          style={
            color === "1"
              ? styles.descriptionBox1
              : color === "2"
              ? styles.descriptionBox2
              : styles.descriptionBox3
          }
        >
          <ul style={styles.descriptionText}>
            <li>{text1}</li>
            <li>{text2}</li>
          </ul>
        </div>
      </div>
    );
  };

  return (
    <div style={styles.projects}>
      <ProjectReturner
        title="Online Multiplayer Chess Game- React, Typescript, Javascript, Python, and SQL"
        button="Link to  Git Repo"
        color="1"
        text1="Developed a real-time online multiplayer chess game with a leaderboard feature."
        text2="Integrated the Stockfish AI with adjustable ELO for single-player mode and managed an SQL database to store player profiles and leaderboard rankings."
      />
      <ProjectReturner
        title="E-commerce Web Scraper - PHP, SQL, Python, Bash"
        button="Link to Git Repo"
        color="3"
        text1="Built a web scraper to extract data from two retail stores and display similar items on
        an e-commerce site."
        text2="Automated the extraction of 25 similar items from each store with their name,
        description, and price using Curl, TagSoup, and a Parser."
      />
      <ProjectReturner
        title=" Bookstore - PHP, SQL, JavaScript, HTML, CSS"
        button="Link to Git Repo"
        color="1"
        text1="Designed a full-stack web application to view the bookstore, request to add books,
        and join the mailing list."
        text2="Managed an SQL database to store the current books and mailing list recipients."
      />
      <ProjectReturner
        title="Taxi Driver - Python"
        button="Link to Git Repo"
        color="2"
        text1="Created a machine learning model to solve a modified OpenAI's taxi driver problem
        using Reinforcement Learning."
        text2="Implemented a Q-learning algorithm for efficient pathfinding in a 25X25 maze with
        randomized locations."
      />
      <ProjectReturner
        title="IBM Cybersecurity Analyst Professional Certificate"
        button="Link to Certificate Page"
        color="2"
        text1="Complated IBM Cybersecurity Analyst Professional Certificate course offfered by Couresa"
        text2="This was an 8 course assessment that taught the fundamentals of being a cybersecurity analyst"

/>
      <ProjectReturner
        title="AWS Academy Graduate"
        button="Link to AWS Practitioner Page"
        color="2"
        text1="This AWS Academy is used for preparation to take the AWS Certified Cloud Practitioner exam."
        text2="This class teaches all the foundamentals of AWS."

/>
    </div>
  );
};
export default Projects;
