import { styles } from "./ProjectsStyles";

const Projects = () => {
  const handleOpenWebsite = (project) => {
    let websiteURL = "";
    if (project === "BitFit Web Application") {
      websiteURL = "https://bitfitapp.azurewebsites.net/";
    } else if (project === "Amazon Intern Python Project") {
      websiteURL = "https://github.com/SandeepS3/InternProject";
    } else if (project === "Simple Arcade Website") {
      websiteURL = "https://github.com/SandeepS3/IT202-011";
    } else if (project === "Sport Notifier (In Progress)") {
      websiteURL = "https://github.com/SandeepS3/Sport-Notifier";
    } else if (project === "Schedule Suggestor (In Progress)") {
      websiteURL = "https://github.com/NJIT-Schedule-Suggestor";
    } else {
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
        title="BitFit Web Application"
        button="Link to Website"
        color="1"
        text1="Collaborated with a team to develop a fully functional website
        using a technology stack comprising React for the front end, MySQL
        for the database, and Flask for the back end."
        text2="Successfully implemented user authentication, enabling seamless
        signup and login processes. Designed and integrated features for
        users to hire coaches and monitor their fitness progress, while
        also incorporating live messaging capabilities for enhanced user
        engagement."
      />
      <ProjectReturner
        title="Amazon Intern Python Project"
        button="Link to Git Repo"
        color="2"
        text1="Automated daily role assignments for associates through a
        Python-based program, VBA macros, and Excel sheets. Implemented a
        randomization algorithm to accommodate role rotations and address
        company distribution needs."
        text2="Enabled associates to effortlessly view their daily work
        assignments by integrating badge scanning functionality into the
        system. Utilized Python code and Excel sheets to streamline the
        process and enhance operational efficiency"
      />
      <ProjectReturner
        title="Simple Arcade Website"
        button="Link to Git Repo"
        color="3"
        text1="Engineered a dynamic and interactive Tic-Tac-Toe web application
              from the ground up, employing HTML, CSS, JavaScript, SQL, and
              Bootstrap."
        text2="Integrated a robust SQL database to store user profiles, track
              scores, and facilitate live competitive gameplay experiences
              between players."
      />
      <ProjectReturner
        title="Sport Notifier (In Progress)"
        button="Link to Git Repo"
        color="1"
        text1="Engineered a Python script capable of delivering customized sports
        notifications through text messages, leveraging phone number
        gateways."
        text2="Integrated Sports APIs to dynamically fetch and transmit real-time
        data about users' specified sports teams, enhancing the
        personalized and timely delivery of sports information."
      />
      <ProjectReturner
        title="Schedule Suggestor (In Progress)"
        button="Link to Git Repo"
        color="2"
        text1="Spearheaded a collaborative project to develop a user-friendly application enabling users to customize their schedules by selecting preferred days and times. Implemented an aesthetically pleasing React-based frontend for an intuitive user experience."
        text2="Leveraged Flask and Python to seamlessly web scrape available courses, dynamically generating and storing personalized schedules in an SQL database. Streamlined the scheduling process, enhancing user convenience and accessibility."
      />
    </div>
  );
};
export default Projects;
