const styles = {
  content: {
    textAlign: "center",
    display: "flex",
    flexDirection: "row",
    height: "100%",
    width: "100%",
    background: "linear-gradient(to left, #060016, #1F1F1F)",
    transition: "background 1s linear",
  },
};

const mediaStyles = {
  content: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%",
    padding:
      "env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)",
    background: "linear-gradient(to top, #060016, #1F1F1F)",
    transition: "background 1s linear",
  },
};

const mergedStyles = window.matchMedia("(max-width: 900px)").matches
  ? { ...styles, ...mediaStyles }
  : styles;

export { mergedStyles as styles };
