import React from "react";
import { makeStyles } from "@mui/styles";
// import { AppBar, CardMedia, IconButton, Toolbar } from "@mui/styles/createStyles/";
//import MenuComponent from "./MenuComponent";
import { Link } from "react-router-dom";
import { AppBar, CardMedia, Divider, IconButton, Toolbar } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  link: {
    marginTop:"auto",
    marginBottom:"auto",
    color: "inherit",
    textDecoration: "inherit",
  },
  name: {
    color: "red",
  },
  title: {
    fontFamily: "consolas",
    fontWeight: "normal",
    fontSize: "2rem",
    color: "#FF4C29",
    textAlign: "start",
    marginRight: "50px",
  },
  pageLink: {
    fontFamily: "consolas",
    fontWeight: "normal",
    fontSize: "1.5rem",
    color: "#000",
    marginLeft: 20,
  },
  toolbar: {
    display: "flex",
    marginLeft: "20px",
    justifyContent: "left",
  },
  root: {
    marginBottom: "200px",
  },
  components:{
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar
        style={{
          background: "#fff",
        }}
        elevation={0}
      >
        <Toolbar className={classes.toolbar}>
          <div className={classes.components}>
            <Link className={classes.link} to={`/`}>
              <h1 className={classes.title}>~/home/gurkan</h1>
            </Link>
            <Link className={classes.link} to={`/about`}>
              <h1 className={classes.pageLink}>/about</h1>
            </Link>
            <Link className={classes.link} to={`/contact`}>
              <h1 className={classes.pageLink}>/contact</h1>
            </Link>
            <Link className={classes.link} to={`/blog`}>
              <h1 className={classes.pageLink}>/blog</h1>
            </Link>
          </div>
          <Link
            className={classes.link}
            style={{ marginLeft: "auto" }}
            to={`/blog`}
          >
            <CardMedia
              className={classes.media}
              component="img"
              style={{ height: 50, width: 50 }}
              image={process.env.PUBLIC_URL + "/assets/gu-logo.png"}
              //{process.env.PUBLIC_URL + "/assets/bg2.jpg"}
              alt=""
            />
          </Link>
        </Toolbar>
        <Divider />
      </AppBar>
    </div>
  );
}
