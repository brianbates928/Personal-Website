import { styles } from "./AboutStyles";

const About = () => {
  const Picture = `${process.env.PUBLIC_URL}/images/niagara.png`;
  return (
    <div style={styles.container}>
      <div style={styles.contactInfo}>
        <p style={styles.contactText}>Phone Number: 201-923-3412</p>
        <p style={styles.contactText}>Email: brianbates5354@gmail.com</p>
      </div>
      <div style={styles.aboutMe}>
        <div style={styles.leftHalf}>
          <p style={styles.aboutText}>
            A little bit about me: I am a student majoring in computer science with a May 2024 graduation date. 
            I am currently actively pursuing opportunities for a full-time position or internship in Software Engineering. 
            This website serves as an extended introduction to my professional profile.
          </p>
          <p style={styles.aboutText}>
          Some personal, non-technical, goals of mine are to continue traveling to all of America's national parks and to run a marathon.
</p>
          
        </div>
        <div style={styles.imageBox}>
            <img style={styles.image} src={Picture} alt="About Me" />
          </div>
      </div>
    </div>
  );
};
export default About;
