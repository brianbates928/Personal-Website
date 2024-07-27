const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    borderRadius: "1.25em",
    height: "100%",
  },
  headName: {
    display: "flex",
    fontFamily: "Black Ops One",
    fontSize: "4.5vh",
    color: "white",
    alignItems: "flex-start",
  },
  skills: {
    flex: 1.5,
    flexDirection: "row",
    marginBottom: "1vh",
    width: "95%",
  },
  allSkills: {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gap: "10px", // adjust this to add space between boxes
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
  class: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    margin: '20px',
    padding: '20px',
    fontFamily: "Black Ops One",
    border: '1px solid #000',
    borderRadius: '1.25em',
    backgroundColor: '#D9D9D9',
    boxShadow:
      "0 4px 4px #580177, 0 4px 4px #580177,inset 0 4px 4px #580177, inset 0 0 50px black",
  },
  skillbox: {
    backgroundColor: "#D9D9D9",
    width: "11vw",
    height: "10vh",
    borderRadius: "1.25em",
    fontFamily: "Indie Flower",
    fontSize: "3.3vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow:
      "0 4px 4px #FF0000, 0 4px 4px #017777,inset 0 4px 4px #FF0000, inset 0 0 30px black",
  },
  education: {
    flex: 1,
    marginBottom: "1vh",
  },
  educationBox: {
    backgroundColor: "#D9D9D9",
    borderRadius: "1.25em",
    marginBottom: "2vh",
    width: "95%",
    boxShadow:
      "0 4px 4px #011B77, 0 4px 4px #011B77,inset 0 4px 4px #011B77, inset 0 0 35px black",
  },
  educationTop: {
    display: "flex",
    fontFamily: "Bakbak One",
    fontSize: "2.5vh",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "1vw",
    paddingTop: "1vh",
    marginBottom: "-4vh",
  },
  educationBottom: {
    fontFamily: "Alegreya",
    fontSize: "2.3vh",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "1vw",
  },
  experiences: {
    display: "flex", 
    flexDirection: "row",
    gap: "40px",
  },  
  experiencesBox: {
    backgroundColor: "#D9D9D9",
    borderRadius: "1.25em",
    fontFamily: "Kavivanar",
    fontWeight: "bold",
    fontSize: "2.5vh",
    width: "25vw",
    height: "19vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    boxShadow:
      "0 4px 4px #580177, 0 4px 4px #580177,inset 0 4px 4px #580177, inset 0 0 50px black",
  },
 
};

const mediaStyles = {
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    paddingTop: "5vh",
    fontSize: "1.3vh",
  },
  skills: {
    flex: 1.5,
    flexDirection: "row",
    marginBottom: "1vh",
    width: "100%",
    wordWrap: "break-word",
  },
  headName: {
    display: "flex",
    fontFamily: "Black Ops One",
    fontSize: "1.5vh",
    color: "white",
    alignItems: "flex-start",
    marginLeft: "1vw",
  },
  skillbox: {
    backgroundColor: "#D9D9D9",
    width: "15vw",
    height: "8vh",
    borderRadius: "1.25em",
    fontFamily: "Indie Flower",
    fontSize: "1.3vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow:
      "0 4px 4px #017777, 0 4px 4px #017777,inset 0 4px 4px #017777, inset 0 0 30px black",
  },
  education: {
    flex: 1,
    marginBottom: "1vh",
  },
  educationBox: {
    backgroundColor: "#D9D9D9",
    borderRadius: "1.25em",
    width: "100%",
    marginBottom:"2vh",
    overflow: "auto",
    boxShadow:
      "0 4px 4px #011B77, 0 4px 4px #011B77,inset 0 4px 4px #011B77, inset 0 0 35px black",
  },
  educationTop: {
    display: "flex",
    fontFamily: "Bakbak One",
    fontSize: "1.7vh",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: "3vh",
    paddingLeft: "1.8vw",
    paddingRight: "1.8vw",
    overflow: "auto",
  },
  educationBottom: {
    fontFamily: "Alegreya",
    fontSize: "1.7vh",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: "3vh",
    paddingLeft: "1.8vw",
    paddingRight: "1.8vw",
    overflow: "auto",
  },
  experienceBoxes: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    wordWrap: "break-word",
    fontSize: "1.3vh",
  },
  experiences: {
    display: "flex", 
    flexDirection: "row", // change this to 'column' for mobile
    gap: "20px", // adjust this value as needed
    fontSize: "1.3vh",

  },
  class: {
    display: 'flex',
    flexDirection: 'column', // change this to 'column' for mobile
    alignItems: 'center', // add this line
    justifyContent: 'center', // add this line
    margin: '10px', // adjust this value as needed
    padding: '10px', // adjust this value as needed
    fontFamily: "Black Ops One",
    border: '1px solid #000',
    borderRadius: '1.25em',
    backgroundColor: '#D9D9D9',
    boxShadow:
      "0 4px 4px #580177, 0 4px 4px #580177,inset 0 4px 4px #580177, inset 0 0 50px black",
  },
};

const mergedStyles = window.matchMedia("(max-width: 900px)").matches
  ? { ...styles, ...mediaStyles }
  : styles;

export { mergedStyles as styles };
