import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { Collapse, Fade, IconButton } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import WelcomeTextComponent from "./WelcomeTextComponent";
import SocialContact from "./SocialContact";
import Typewriter from "typewriter-effect";
import { fontSize } from "@mui/system";

// import { Link as Scroll } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  appbar: {
    background: "rgba(33,37,41,0.9)",
  },

  icon: {
    color: "#fff",
    fontSize: "10rem",
  },
  expandIcon: {
    color: "#000",
    fontSize: "10rem",
  },
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10vh",
  },
  appbarWrapper: {
    width: "80%",
    margin: "0 auto",
  },
  appbarTitle: {
    flexGrow: "1",
    fontFamily: "nunito",
  },

  container: {
    textAlign: "center",
    fontFamily: "consolas",
    fontSize: "3rem",
  },
  title: {},
}));

export default function FadeTextComponent() {
  const classes = useStyles();

  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <div className={classes.root} id="header">
      <Fade in={checked} {...(checked ? { timeout: 1500 } : {})}>
        <div className={classes.container}>
          <Typewriter
            options={{
              cursor: "",
              loop: true,
              delay: 80,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString("Hi, I'm Gurkan!")
                .callFunction(() => {
                  console.log("String typed out!");
                })
                .pauseFor(1200)
                .deleteAll()
                .callFunction(() => {
                  console.log("All strings were deleted");
                })
                .start();
            }}
          />

          <WelcomeTextComponent />
          <SocialContact />
          {/* <Scroll to="post-list" smooth={true}> */}
          <IconButton sx={{ fontSize: 60, marginTop: 10 }}>
            <ExpandMore sx={{ fontSize: 60 }} />
          </IconButton>
          {/* </Scroll> */}
        </div>
      </Fade>
    </div>
  );
}
