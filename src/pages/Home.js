import React from "react";
import FadeTextComponent from "../components/FadeTextComponent";
import ProjectList from "../components/ProjectList";

import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/bg.jpg"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    overflow: "hidden",
    marginBottom: "200px",
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <FadeTextComponent />
      <ProjectList />
    </div>
  );
};

export default Home;
