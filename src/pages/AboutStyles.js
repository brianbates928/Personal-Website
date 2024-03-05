const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  contactInfo: {
    display: "flex",
    flexDirection: "row",
    padding: "5vh 6vw",
    justifyContent: "space-between",
  },
  contactText: {
    color: "white",
    fontSize: "2vh",
    fontFamily: "Krona One",
    textShadow: "0.25rem 0.25rem 0.5rem rgba(0, 0, 0, 0.7)",
  },
  aboutMe: {
    display: "flex",
    flexDirection: "row",
  },
  leftHalf: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  rightHalf: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  aboutText: {
    color: "white",
    fontFamily: "Regular",
    fontSize: "4vh",
    padding: "3vh",
    margin: "2vw",
    textShadow: "0.125rem 0.125rem 0.25rem rgba(0, 0, 0, 0.8)",
    backgroundColor: "#181521",
    borderRadius: "1.25em",
  },
  imageBox: {
    padding: "1vh",
    backgroundColor: "#181521",
    borderRadius: "1.25em",
  },
  image: {
    width: "25vw",
    height: "75vh",
    borderRadius: "1.25em",
  },
};

const mediaStyles = {
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    paddingTop: "5vh",
  },
  contactText: {
    color: "white",
    fontSize: "2vh",
    fontFamily: "Krona One",
    textShadow: "0.25rem 0.25rem 0.5rem rgba(0, 0, 0, 0.7)",
  },
  contactInfo: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    marginLeft:"2vw",
  },
  aboutText: {
    color: "white",
    fontFamily: "Regular",
    fontSize: "2.8vh",
    paddingTop: "8vh",
    paddingBottom: "8vh",
    paddingLeft: "3vw",
    paddingRight: "3vw",
    textShadow: "0.125rem 0.125rem 0.25rem rgba(0, 0, 0, 0.8)",
    backgroundColor: "#181521",
    borderRadius: "1.25em",
  },
  aboutMe: {
    display: "flex",
    flexDirection: "row",
  },
  leftHalf: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  rightHalf: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "35vw",
    height: "55vw",
    borderRadius: "1.25em",
  },
  imageBox: {
    padding: "1vh",
    backgroundColor: "#181521",
    borderRadius: "1.25em",
    marginTop: "-6vh",
    marginLeft: "3vw",
  },
};

const mergedStyles = window.matchMedia("(max-width: 900px)").matches
  ? { ...styles, ...mediaStyles }
  : styles;

export { mergedStyles as styles };
