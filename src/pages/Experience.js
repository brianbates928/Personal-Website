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
  ];
  const Download = `${process.env.PUBLIC_URL}/images/Download.png`;

  const topRowSkills = skills.slice(0, 5);
  const bottomRowSkills = skills.slice(5);

  const downloadPDF = () => {
    const pdfFilePath = process.env.PUBLIC_URL + "/My Resume.pdf";

    const link = document.createElement("a");
    link.href = pdfFilePath;
    link.download = `Brians's Resume`;
    link.click();
  };
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
            <h>Expected Graduation: May 2024</h>
            <h>B.S. in Computer Science</h>
          </div>
        </div>
      </div>
      <div style={styles.experiences}>
        <p style={styles.headName}>Experiences</p>
        <div style={styles.experienceBoxes}>
          <div style={styles.experienceLeft}>
            <div style={styles.experiencesBoxStart}>
              <h>Produce Clerk</h>
              <h>Shoprite, Rochelle Park, NJ</h>
              <h>May 2021 - Present</h>
            </div>
          </div>
          <div style={styles.experienceRight}>
            <div style={styles.experiencesBoxEnd}>
              <h>Summer Tech Help</h>
              <h>Fair Lawn School District, Fair Lawn, NJ</h>
              <h>July 2018 - September 2019</h>
            </div>
          </div>
        </div>
      </div>
      <div style={styles.resume}>
        <button style={styles.button} onClick={() => downloadPDF()}>
          Resume
          <img style={styles.download} src={Download} alt="Download" />
        </button>
      </div>
    </div>
  );
};
export default Experience;
