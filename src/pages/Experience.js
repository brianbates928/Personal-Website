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
    "Express",
    "Git",
    "WordPress",
    "CyberSecurity",
    "Agile Methodologies",
  ];
  
  const topRowSkills = skills.slice(0, 5);
  const bottomRowSkills = skills.slice(5);

  return (
    <div style={styles.container}>
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
      <p style={styles.headName}>Experiences</p>

      <div style={styles.experiences}>
        <div style={styles.experiencesBox}>
    
              <h> Software Engineer Intern</h>
              <h>Visual Intelligence, LLC</h>
              <h>January 2024 - May 2024</h>
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
    </div>
  );
};
export default Experience;
