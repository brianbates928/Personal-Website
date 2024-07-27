import { styles } from "./ExperiencesStyles";

const Experience = () => {
  const skills = [
    "Python",
    "C",
    "C++",
    "C#",
    "Java",
    "React",
    "TypeScript",
    "JavaScript",
    "Node.JS",
    "Angular",
    "PHP",
    "SQL",
    "HTML/CSS",
    "AWS",
    "Linux",
    "Express.JS",
    "Git",
    "WordPress",
    "CyberSecurity",
    "Agile Methodologies",
  ];
  const sem1 = ["SEMESTER 1:", "Roadmap To Computing",
  "Writing, Speaking, Thinking 1",
  "Calculus 1",
  "Physics 1",
  "Physics 1 Lab",];
  const sem2 = ["SEMESTER 2:","Intro to Computer Science 2",
  "Writing, Speaking, Thinking 2",
  "Calculus 2",
  "Physics 2",
  "Physics 2 Lab",];
  const sem3 = ["SEMESTER 3:","Database System Design and Management",
  "Probability and Statistics",
  "Intro Astronomy Cosmology",
  "Intro to Sociology",];
  const sem4 = ["SEMESTER 4:","Genereal Chemistry 1",
  "Foundations of Computer Science 1",
  "Programming Language Concepts",
  "Technical Writing",
  "Computing and Effective Communication",]
  const sem5 = ["SEMESTER 5:", "Intensive Programming in Linux",
  "Introduction to Data Science",
  "Principles of Operating Systems",
  "Intro to Computer Networks",
  "Computers, Society, and Ethics",
  "Internet Applications",];
  const sem6 = ["SEMESTER 6:","Foundations of Computer Science 2",
  "Intro to Computer Systems",
  "Introduction to Cybersecurity",
  "Intro to Artificial Intelligence",
  "Law and Evidence",
  "Minds and Machines",
  "Professional Development in Computing",];
  const sem7 = ["SEMESTER 7:","Performance Modeling in Computing",
  "Design in Software Engineering",
  "Philosphy Seminar: AI Ethics",
  "Digital Crime",]
  const sem8 = ["SEMESTER 8:","Intro to Machine Learning",
  "Advanced Data Structure and Algorithm Design",
  "Computer Science Project",
  "Engineering Ethics",]
  const classes = [sem1, sem2, sem3, sem4, sem5, sem6, sem7, sem8  ];
  
  const topRowSkills = skills.slice(0, 5);
  const bottomRowSkills = skills.slice(5);
  const Download = `${process.env.PUBLIC_URL}/images/Download.png`;

  const downloadPDF = () => {
    const pdfFilePath = process.env.PUBLIC_URL + "/transcript.pdf";

    const link = document.createElement("a");
    link.href = pdfFilePath;
    link.download = `Brians's Transcript`;
    link.click();
  };
  return (
    <div style={styles.container}>

<p style={styles.headName}>Experiences</p>

<div style={styles.experiences}>
  <div style={styles.experiencesBox}>

        <p>Software Engineer Intern</p>
        <p>Visual Intelligence, LLC</p>
        <p>January 2024 - May 2024</p>
        </div>

        <div style={styles.experiencesBox}>

        <h>Produce Clerk</h>
        <h>Shoprite, Rochelle Park, NJ</h>
        <h>May 2021 - May 2024</h>
        </div>

        <div style={styles.experiencesBox}>

        <h>Summer Tech Help</h>
        <h>Fair Lawn School District, Fair Lawn, NJ</h>
        <h>July 2018 - September 2019</h>
      </div>
</div>

      <div style={styles.skills}>
        <p style={styles.headName}>Skills</p>
        <div style={styles.allSkills}>
          {topRowSkills.map((skill, index) => (
            <p style={styles.skillbox} key={index}>
              {skill}
            </p>
          ))}
        </div>
        <div style={styles.allSkills}>
          {bottomRowSkills.map((skill, index) => (
            <p style={styles.skillbox} key={index + 5}>
              {skill}
            </p>
          ))}
        </div>
      </div>
      <div style={styles.education}>
        <p style={styles.headName}>Education</p>
        <div style={styles.educationBox}>
          <div style={styles.educationTop}>
            <h>NJIT, NEW JERESY INSTITUTE OF TECHNOLOGY</h>
            <h> NEWARK, NJ</h>
          </div>
          <div style={styles.educationBottom}>
            <h>Graduation: May 2024</h>
            <h>Degree: B.S. in Computer Science</h>
          </div>
        </div>
      </div>
      <p style={styles.headName}>Classes</p>

      <div style={styles.class}>
    {classes.map((semester, index) => (
      <div key={index}>
        {semester.map((course, index) => (
          <p key={index}>
            {course}
          </p>
        ))}
      </div>
    ))}
</div>


<button style={styles.button} onClick={() => downloadPDF()}>
          Transcript
          <img style={styles.download} src={Download} alt="Download" />
          </button>

    </div>
  );
};
export default Experience;
