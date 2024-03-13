const styles = {
  sideNavStyle: {
    display: "flex",
    flexDirection: "column",
    width: "15vw",
    // backgroundColor: "#646464",
    paddingTop: "5.5em",
  },
  namesocial: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  name: {
    alignItems: "center",
    // fontWeight: "bold",
    color: "white",
    fontSize: "5.5vh",
  },
  socials: {
    flexDirection: "row",
    justifyContent: "space-around",
    display: "flex",
    marginBottom: "4vh",
    padding: "4vh 1vw",
  },
  insta: {
    cursor: "pointer",
    width: "2.5em",
    height: "2.5em",
  },
  github: {
    cursor: "pointer",
    width: "2.5em",
    height: "2.5em",
  },
  linkedin: {
    cursor: "pointer",
    width: "2.5em",
    height: "2.5em",
  },
  pages: {
    display: "flex",
    flexDirection: "column",
    alignSelf: "flex-start",
    width: "100%",
  },
  pageItem: {
    display: "flex",
    paddingLeft: "1.5vw",
    paddingTop: "0.5vh",
    paddingBottom: "0.5vh",
    alignItems: "center",
    marginBottom: "10vh",
    cursor: "pointer",
  },
  pageItemHover: {
    display: "flex",
    paddingLeft: "1.5vw",
    paddingTop: "0.5vh",
    paddingBottom: "0.5vh",
    alignItems: "center",
    marginBottom: "10vh",
    cursor: "pointer",
    backgroundColor: "#4A4A4A",
    transition: "color 0.3s ease, textDecoration 0.3s ease",
  },
  pageImage: {
    width: "2.5em",
    height: "2.5em",
    marginRight: "0.5em",
  },
  pagesText: {
    fontFamily: "Genos",
    // fontWeight: "bold",
    textDecoration: "none",
    fontSize: "2.5vh",
    color: "white",
  },
  button: {
    backgroundColor: "#1E1E1E",
    color: "white",
    borderRadius: ".5em",
    boxShadow:
      "0 0.5px 0.5px black, 0 0.5px 0.5px black,inset 0 0.5px 0.5px black, inset 0 0 10px black",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "5vw",
    height: "5vh",
    border: "none",
  },
  download: {
    marginLeft: "0.5vw",
    width: "10px",
    height: "10px",
  },
};

const mediaStyles = {
  sideNavStyle: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
  namesocial: {
    display: "flex",
    flexDirection: "row",
    padding: "3vh 3vw",
    justifyContent: "space-between",
    width: "100%",
  },
  name: {
    fontWeight: "bold",
    color: "white",
    fontSize: "1.5rem",
    paddingLeft: "2vw",
  },
  socials: {
    display: "flex",
    flexDirection: "row",
    alignSelf: "center",
  },
  insta: {
    cursor: "pointer",
    width: "1.5em",
    height: "1.5em",
    marginRight: "1vw",
  },
  github: {
    cursor: "pointer",
    width: "1.5em",
    height: "1.5em",
    marginRight: "1vw",
  },
  linkedin: {
    cursor: "pointer",
    width: "1.5em",
    height: "1.5em",
  },
  pages: {
    display: "flex",
    flexDirection: "row",
    // alignSelf: "center",
    justifyContent: "space-evenly",
    // alignItems: "center",
    width: "90%",
    backgroundColor: "#060016",
  },
  pageItem: {
    paddingTop: "0.5vh",
    paddingBottom: "0.5vh",
    alignItems: "center",
    cursor: "pointer",
    flexDirection: "row",
  },
  pageItemHover: {
    paddingTop: "0.5vh",
    paddingBottom: "0.5vh",
    alignItems: "center",
    cursor: "pointer",
    flexDirection: "row",
  },
  pageImage: {
    width: "1.75em",
    height: "1.75em",
    marginRight: "0.25em",
  },
  pagesText: {
    fontFamily: "Genos",
    // fontWeight: "bold",
    textDecoration: "none",
    fontSize: "1.8vh",
    color: "white",
    marginRight: "0.5em",
  },
  button: {
    backgroundColor: "#1E1E1E",
    color: "white",
    fontSize: "1.5vh",
    borderRadius: "1em",
    boxShadow:
      "0 2px 2px black, 0 2px 2px black,inset 0 2px 2px black, inset 0 0 10px black",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "20vw",
    height: "5vh",
    border: "none",
  },
  download: {
    marginLeft: "1vw",
    width: "10px",
    height: "10px",
  },
};

const mergedStyles = window.matchMedia("(max-width: 900px)").matches
  ? { ...styles, ...mediaStyles }
  : styles;

export { mergedStyles as styles };
