import React from "react";
import { Outlet } from "react-router";

export function BoxContainer() {
  return (
    <div style={styles.boxContainer}>
      <div style={styles.pageContainer}>
        <Outlet />
      </div>
    </div>
  );
}

const styles = {
  boxContainer: {
    display: "flex",
    flex: "1",
    // backgroundColor: "#646464",
    minHeight: "100vh",
  },
  pageContainer: {
    margin: "1vh",
    width: "100%",
  },
};
