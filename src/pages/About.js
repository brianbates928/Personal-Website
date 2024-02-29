import { styles } from "./AboutStyles";

const About = () => {
  const Picture = `${process.env.PUBLIC_URL}/images/AboutPic.png`;
  return (
    <div style={styles.container}>
      <div style={styles.contactInfo}>
        <p style={styles.contactText}>Phone Number: 201-927-6063</p>
        <p style={styles.contactText}>Email: singh.deep8302@gmail.com</p>
      </div>
      <div style={styles.aboutMe}>
        <div style={styles.leftHalf}>
          <p style={styles.aboutText}>
            A little bit about me: I am a student specializing in computer
            science actively pursuing opportunities for a full-time position or
            internship in Software Engineering. This website serves as an
            extended introduction to my professional profile.
          </p>
        </div>
        <div style={styles.rightHalf}>
          <div style={styles.imageBox}>
            <img style={styles.image} src={Picture} alt="About Me" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
