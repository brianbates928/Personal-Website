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
            A little bit about me: I received my B.S. in computer science from NJIT in May 2024. 
            I am currently actively pursuing opportunities for a full-time position in Software Engineering. 
            This website serves as an extended introduction to my professional profile. You can find the full Javascript code for this website on my Github.
<br></br><br></br>
          Some personal, non-technical, goals of mine are to continue traveling to all of America's national parks and to run a marathon. 
          My current favorite national park is either Acadia in Maine or Olympic in Washinton. 
          Running has been really inconsistent for me these past 4 years but with the completion of college I plan on having a more concrete plan. 
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
