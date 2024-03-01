const styles = {
  background: {
    backgroundImage: `url(${process.env.PUBLIC_URL}/images/Forest.jpg)`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    WebkitBackgroundSize: "cover",
    backgroundSize: "100%",
    minHeight: "100vh",
    borderRadius: "1.25em",
  },
  info: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    paddingLeft: "5vw",
    paddingTop: "65vh",
  },
  name: {
    fontFamily: "Acme",
    fontSize: "5.25rem",
    color: "white",
    marginBottom: "-1.75rem",
  },
  title: {
    fontFamily: "Actor",
    fontSize: "1.563rem",
    color: "white",
    borderBottom: "0.5vh solid #3C84AC",
    marginBottom: "1vh",
  },
};

const mediaStyles = {
  background: {
    display: "flex",
    flexDirection: "column",
    paddingTop: "5vh",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "325px",
    height: "325px",
  },
  info: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    width: "100%",
    paddingLeft: "5vw",
    paddingTop: "3vh",
  },
  name: {
    fontFamily: "Acme",
    fontSize: "2.25rem",
    color: "white",
  },
  title: {
    fontFamily: "Actor",
    fontSize: "1rem",
    color: "white",
    borderBottom: "0.5vh solid #3C84AC",
    marginBottom: "1vh",
  },
};

const mergedStyles = window.matchMedia("(max-width: 900px)").matches
  ? { ...styles, ...mediaStyles }
  : styles;

export { mergedStyles as styles };
