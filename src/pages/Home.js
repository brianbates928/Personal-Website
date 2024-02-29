import { styles } from "./HomeStyles";

const Home = () => {
  const MobileBeach = `${process.env.PUBLIC_URL}/images/MobileBeach.png`;

  const isMobile = window.innerWidth < 900;

  return (
    <div style={styles.background}>
      {isMobile && (
        <img style={styles.image} src={MobileBeach} alt="MobileBeach" />
      )}
      <div style={styles.info}>
        <h style={styles.name}>Sandeep Singh</h>
        <h style={styles.title}>Software Developer!</h>
      </div>
    </div>
  );
};

export default Home;
