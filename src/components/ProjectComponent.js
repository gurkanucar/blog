import React from "react";
import { makeStyles } from "@mui/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 350,
    height: 420,
    margin: 20,
  },
  media: {
    height: 200,
  },
  /* title: {
    color: "#000",
    fontFamily: "Lato",
    fontWeight: "bold",
    fontSize: "4rem",
    display: "-webkit-box",
    boxOrient: "vertical",
    lineClamp: 2,
    wordBreak: "break-all",
    overflow: "hidden",
  },
  desc: {
    color: "#000",
    fontFamily: "Lato",
    fontSize: "1rem",
    display: "-webkit-box",
    boxOrient: "vertical",
    lineClamp: 3,
    wordBreak: "break-all",
    overflow: "hidden",
  },*/
}));

const ProjectComponent = () => {
  const classes = useStyles();
  return (
    <CardActionArea sx={{ borderRadius: 10 }}>
      <Card
        elevation={5}
        sx={{ background: "#fff", borderRadius: 10 }}
        className={classes.root}
      >
        <CardMedia
          className={classes.media}
          component="img"
          image={"https://avatars.githubusercontent.com/u/25080366?v=4"}
          //{process.env.PUBLIC_URL + "/assets/bg2.jpg"}
          alt="green iguana"
        />

        <CardContent>
          <Typography noWrap={true} sx={{ fontSize: "2rem", font: "lato" }}>
            test deneme baslik
          </Typography>
          <Typography noWrap={true} variant="body2" className={classes.desc}>
            post icerigi deneme
          </Typography>
        </CardContent>
      </Card>
    </CardActionArea>
  );
};

export default ProjectComponent;
