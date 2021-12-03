import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "1em",
    margin: "auto",
    fontFamily: "lato",
  },
  title: {
    fontFamily: "lato",
    fontSize: "2rem",
    color: "#000",
  },

  toolbar: {
    display: "flex",
    marginLeft: "20px",
    justifyContent: "left",
  },
}));

const WelcomeTextComponent = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1 className={classes.title}>
        I'm a person who like to make projects, especially software projects.
      </h1>
    </div>
  );
};

export default WelcomeTextComponent;
