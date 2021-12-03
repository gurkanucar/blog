import React from "react";
import { makeStyles } from "@mui/styles";
import ProjectComponent from "./ProjectComponent";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    marginTop: "20vh",
  },
  flexItems: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
}));

const ProjectList = () => {
  const classes = useStyles();
  return (
    <div className={classes.root} id="post-list">
      <div className={classes.flexItems}>
        <ProjectComponent />
      </div>
      <div className={classes.flexItems}>
        <ProjectComponent />
      </div>
      <div className={classes.flexItems}>
        <ProjectComponent />
      </div>
      <div className={classes.flexItems}>
        <ProjectComponent />
      </div>
      <div className={classes.flexItems}>
        <ProjectComponent />
      </div>
      <div className={classes.flexItems}>
        <ProjectComponent />
      </div>
    </div>
  );
};

export default ProjectList;
