import { styles } from "./ProjectsStyles";

const Projects = () => {
  const handleOpenWebsite = (project) => {
    let websiteURL = "";
    if (project === "Chess") {
      websiteURL = "https://github.com/njit-cs-490-002-spring23/group-project-team-1";
    } else if (project === "Taxi Driver") {
      websiteURL = "https://github.com/brianbates928/taxidriver";
    } else if (project === "Web Scraping") {
      websiteURL = "https://github.com/brianbates928/WebScraping";
    } else if (project === "Book") {
      websiteURL = "https://github.com/brianbates928/Bookstore";
    } else if (project === "AWS Certified Cloud Practitioner Training (In Progress)") {
      websiteURL = "https://aws.amazon.com/certification/certified-cloud-practitioner/";
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
          </ul>
        </div>
      </div>
    );
  };

  return (
    <div style={styles.projects}>
      <ProjectReturner
        title="Chess"
        button="Link to  Git Repo"
        color="1"
        text1="A deployment of chess created in a 4-person team that is added onto the
        covey.town code base. Covey Town is a basic online game where people can walk
        around and join different conversation areas. This deployment uses Chess.js and
        react-chessboard to ensure the functionality of the chess logic. There is an added
        timer, a leaderboard connected to a database, and a forfeit button added to the
        game. This game allows you to either play against another player in the game or
        against the stockfish AI with an Elo setting that the users can adjust."
      />
      <ProjectReturner
        title="Taxi Driver"
        button="Link to Git Repo"
        color="2"
        text1="A Q-learning program based on OpenAI Gym’s Taxi Driver problem.  This uses a 25X25 maze which starts at a random location and the algorithm finds the most efficient path to pick up a passenger and bring them to their location. 
        "
      />
      <ProjectReturner
        title="Web Scraping"
        button="Link to Git Repo"
        color="3"
        text1="This took two similar items, like Pepsi and Coke, from two different websites, Albertsons and Rite Aid, and resold them. This automatically pulled 25 items from each store, including prices, names, and descriptions, and displayed them on the website for a markup.  Whenever an item is clicked on, the item is compared to the other store's similar item and highlights the better deal before the user confirms the purchase.        "
      />
      <ProjectReturner
        title="Bookstore"
        button="Link to Git Repo"
        color="1"
        text1="A bookstore website that has 5 main pages. These are the home page, create a new book to add to the store, about the bookstore, contact the store, and join the mailing list. All the books and mailing lists are stored inside a SQL database."
      />
      <ProjectReturner
        title="AWS Certified Cloud Practitioner Training (In Progress)"
        button="Link to AWS Practitioner Page"
        color="2"
        text1="Currently undergoing AWS training modules to prepare for the AWS Certified Cloud Practitioner exam."

/>
    </div>
  );
};
export default Projects;
