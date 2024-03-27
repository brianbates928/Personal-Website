import { styles } from "./ProjectsStyles";

const Projects = () => {
  const handleOpenWebsite = (project) => {
    let websiteURL = "";
    if (project === "Chess - A web game built in covey.town with React, Typescript, Javascript, Python, and SQL") {
      websiteURL = "https://github.com/njit-cs-490-002-spring23/group-project-team-1";
    } else if (project === "Web Scraping - Website built with PHP, SQL, Python, and Bash") {
      websiteURL = "https://github.com/brianbates928/WebScraping";
    } else if (project === "Bookstore - A bookstore website made in PHP, SQL, Javascript, HTML and CSS.") {
      websiteURL = "https://github.com/brianbates928/Bookstore";
    } else if (project === "Taxi Driver - A machine learning model to solve a modified OpenAIs taxi driver problem in Python.") {
      websiteURL = "https://github.com/brianbates928/taxidriver";
    } else if (project === "AWS Certified Cloud Practitioner Training (In Progress)") {
      websiteURL = "https://aws.amazon.com/certification/certified-cloud-practitioner/";
    } else if (project === "IBM Cybersecurity Analyst Professional Certificate Courses (In Progress)") {
      websiteURL = "https://www.coursera.org/professional-certificates/ibm-cybersecurity-analyst";
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
        title="Chess - A web game built in covey.town with React, Typescript, Javascript, Python, and SQL"
        button="Link to  Git Repo"
        color="1"
        text1="This is an implementation of an online chess game with a leaderboard."
        text2="Players have the choice of versing a human or the stockfish AI with an adjustable elo."
      />
      <ProjectReturner
        title="Web Scraping - Website built with PHP, SQL, Python, and Bash"
        button="Link to Git Repo"
        color="3"
        text1="This was built by taking two similar items, like Pepsi and Coke, from two websites, Albertsons and Rite Aid, and reselling them for a markup."
        text2="This website can automatically pull 25 items from each store, including prices, names, and descriptions, and redisplay them.  Whenever an item is clicked on, the user is brought to a new page where the item is compared to the other store's similar item and with the better deal highlighted before the user confirms the purchase."
      />
      <ProjectReturner
        title="Bookstore - A bookstore website made in PHP, SQL, Javascript, HTML and CSS."
        button="Link to Git Repo"
        color="1"
        text1="This has 6  pages: the home page,  about the bookstore, add a new book to the store, list all current books, contact the store, and join the mailing list."
        text2="All the books and mailing lists are stored inside a SQL database."
      />
      <ProjectReturner
        title="Taxi Driver - A machine learning model to solve a modified OpenAIs taxi driver problem in Python."
        button="Link to Git Repo"
        color="2"
        text1="The problem uses a  25X25 maze which starts at a random location and the model finds the most efficient path to pick up a passenger and bring them to their location."
        text2="A Q-learning model was used to solve this problem."
      />
      <ProjectReturner
        title="AWS Certified Cloud Practitioner Training (In Progress)"
        button="Link to AWS Practitioner Page"
        color="2"
        text1="Currently undergoing AWS training modules to prepare for the AWS Certified Cloud Practitioner exam."
        text2="The plan is to complete the training and take the exam in early May."

/>
<ProjectReturner
        title="IBM Cybersecurity Analyst Professional Certificate (In Progress)"
        button="Link to Certificate Page"
        color="2"
        text1="Currently enrolled IBM Cybersecurity Analyst Professional Certificate courses to become certified."
        text2="The plan is to complete the training and take the exam by mid April."

/>
    </div>
  );
};
export default Projects;
