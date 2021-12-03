import React from "react";
import { makeStyles } from "@mui/styles";
import SocialContactButton from "./SocialContactButton";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  flexItems: {
    flex: "auto",
  },
}));

const SocialContact = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <SocialContactButton
        className={classes.flexItems}
        image={process.env.PUBLIC_URL + "/assets/github.png"}
        link="https://github.com/gurkanucar"
        info="github"
      />
      <SocialContactButton
        className={classes.flexItems}
        image={process.env.PUBLIC_URL + "/assets/youtube.png"}
        link="https://www.youtube.com/c/gurkanucar"
        info="youtube"
      />
      <SocialContactButton
        className={classes.flexItems}
        image={process.env.PUBLIC_URL + "/assets/linkedin.png"}
        link="https://www.linkedin.com/in/ucargurkan/"
        info="linkedin"
      />
      <SocialContactButton
        className={classes.flexItems}
        image={process.env.PUBLIC_URL + "/assets/logoStackoverflow.png"}
        link="https://stackoverflow.com/users/10277150"
        info="stackoverflow"
      />
    </div>
  );
};

export default SocialContact;
