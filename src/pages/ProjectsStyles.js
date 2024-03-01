const styles = {
  projects: {
    display: "flex",
    flexDirection: "column",
    paddingTop: "1vh",
  },
  project: {
    flexDirection: "column",
    alignItems: "flex-start",
    width: "100%",
    paddingBottom: "2vh",
  },
  title: {
    display: "flex",
    flexDirection: "row",
    paddingTop: "1vh",
    justifyContent: "space-between",
    width: "95%",
  },
  titleText: {
    color: "white",
    fontFamily: "Black Ops One",
    fontSize: "4vh",
    paddingRight: "4vw",
  },
  titleButton: {
    backgroundColor: "#181521",
    borderRadius: "0.5em",
    fontFamily: "Bubbler One",
    fontWeight: "bold",
    color: "white",
    fontSize: "2.5vh",
    border: "none",
    cursor: "pointer",
    width: "17vw",
    height: "6vh",
  },
  descriptionBox1: {
    width: "95%",
    backgroundColor: "#D9D9D9",
    borderRadius: "1.25em",
    padding: "3vh 1vw",
    paddingBottom: "1vh",
    marginBottom: "2vh",
    boxShadow:
      "0 4px 4px #011B77, 0 4px 4px #011B77,inset 0 4px 4px #011B77, inset 0 0 35px black",
  },
  descriptionBox2: {
    width: "95%",
    backgroundColor: "#D9D9D9",
    borderRadius: "1.25em",
    padding: "3vh 1vw",
    paddingBottom: "1vh",
    marginBottom: "2vh",
    boxShadow:
      "0 4px 4px #580177, 0 4px 4px #580177,inset 0 4px 4px #580177, inset 0 0 35px black",
  },
  descriptionBox3: {
    width: "95%",
    backgroundColor: "#D9D9D9",
    borderRadius: "1.25em",
    padding: "3vh 1vw",
    paddingBottom: "1vh",
    marginBottom: "2vh",
    boxShadow:
      "0 4px 4px #017777, 0 4px 4px #017777,inset 0 4px 4px #017777, inset 0 0 35px black",
  },
  descriptionText: {
    fontFamily: "Alegreya",
    fontSize: "2.5vh",
    textAlign: "left",
  },
};

const mediaStyles = {
  projects: {
    display: "flex",
    flexDirection: "column",
    paddingTop: "5vh",
  },
  title: {
    display: "flex",
    flexDirection: "column",
    paddingTop: "1vh",
    width: "100%",
  },
  titleText: {
    color: "white",
    fontFamily: "Black Ops One",
    fontSize: "2.5vh",
  },
  titleButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#181521",
    borderRadius: "0.5em",
    fontFamily: "Bubbler One",
    fontWeight: "bold",
    color: "white",
    fontSize: "1.2vh",
    border: "none",
    cursor: "pointer",
    width: "25vw",
    height: "6vh",
  },
  titleRight: {
    display: "flex",
    justifyContent: "flex-start",
    marginLeft: "1vw",
  },
  titleLeft: {
    display: "flex",
    justifyContent: "flex-end",
    paddingBottom: "2vh",
    marginLeft: "1vw",
    marginTop: "-1vh",
  },
  descriptionBox1: {
    width: "100%",
    backgroundColor: "#D9D9D9",
    borderRadius: "1.25em",
    padding: "3vh 1vw",
    paddingBottom: "1vh",
    marginBottom: "2vh",
    boxShadow:
      "0 4px 4px #011B77, 0 4px 4px #011B77,inset 0 4px 4px #011B77, inset 0 0 35px black",
  },
  descriptionBox2: {
    width: "100%",
    backgroundColor: "#D9D9D9",
    borderRadius: "1.25em",
    padding: "3vh 1vw",
    paddingBottom: "1vh",
    marginBottom: "2vh",
    boxShadow:
      "0 4px 4px #580177, 0 4px 4px #580177,inset 0 4px 4px #580177, inset 0 0 35px black",
  },
  descriptionBox3: {
    width: "100%%",
    backgroundColor: "#D9D9D9",
    borderRadius: "1.25em",
    padding: "3vh 2vw",
    paddingBottom: "1vh",
    marginBottom: "2vh",
    boxShadow:
      "0 4px 4px #017777, 0 4px 4px #017777,inset 0 4px 4px #017777, inset 0 0 35px black",
  },
  descriptionText: {
    fontFamily: "Alegreya",
    fontSize: "2.2vh",
    textAlign: "left",
  },
};

const mergedStyles = window.matchMedia("(max-width: 900px)").matches
  ? { ...styles, ...mediaStyles }
  : styles;

export { mergedStyles as styles };
