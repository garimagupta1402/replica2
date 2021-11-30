import React from "react";
import { makeStyles } from "@mui/styles";
import StarIcon from "@mui/icons-material/Star";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import PlayCircleOutlineOutlinedIcon from "@mui/icons-material/PlayCircleOutlineOutlined";
import { Button, Typography } from "@mui/material";


const useStyles = makeStyles((theme) => ({
  homeDiv: {
    background:
      "linear-gradient(135deg, rgba(198,66,110,1) 0%, rgba(100,43,115,1) 100%, rgba(0,212,255,1) 100%)",
    borderRadius: "0px 0px 330px 0px",
    zIndex: "0",
    height: "980px",
    width: "100%",
  },
// mainDiv:{
//       display: "flex",
//     marginLeft: "20%",
//     marginTop: "5%",
//     marginRight: "15%",
// },
  banner: {
    position: "relative",
    left: "294px",
    width: "1060px",
    bottom: "220px",
  },
  starDiv: {
    position: "relative",
    top: "200px",
    left: "350px",
    width: "310px",
    display: "flex",
  },
  star: {
    color: " white",
    width: "18px !important",
  },
  startext: {
    color: "white",

    margin: "0px 10px !important",
  },
  envato: {
    height: "18px",
  },
  heading: {
    fontSize: "46px !important",
    lineHeight: "1.2 !important",
    fontWeight: "700 !important",
    color: " rgb(255, 255, 255)",
    width: "446px",
    position: "relative",
    top: "220px",
    left: "345px",
    marginBottom: "50px",
  },
  subHeading: {
    color: "rgba(255, 255, 255, 0.8)",
    fontSize: "16px !important",
    lineHeight: "29px !important",
    width: "446px",
    position: "relative",
    top: "220px",
    left: "345px",
    paddingTop: "15px",
    paddingBottom: "15px",
  },
  free: {
    color: "black !important",
    backgroundColor: "white !important",
    fontSize: "16px",
    letterSpacing: "-0.1px",
    position: "relative",
    left: "345px",
    top: "250px",
    fontWeight: "bold !important",
  },
  playIcon: {
    position: "relative",
    left: "380px",
    top: "260px",
    width: "30px",
    height: "30px",
    color: "white",
  },
  watch: {
    position: "relative",
    top: "223px",
    left: "580px",
    color: "white",
    fontSize: "16px !important",
    fontWeight: "bold !important",
    width: "100px",
  },
  video1: {
    position: "relative",
    bottom: "335px",
    left: "345px",
  },
  video2: {
    position: "relative",
    bottom: "335px",
    left: "355px",
  },
  company: {
    width: "1300px",
    color: "white",
    bottom: "215px",
    left: " 500px",
    position: "relative",
    display: "flex",
  },
  comImg: {
    marginLeft: "30px",
  },
  verge: { 
    marginLeft: "30px",
    width:"100px",
    height:"20px"
 },
 msg:{
       position:" relative",
    left: "1750px",
    bottom: "265px",
 },
 
}));
function Home() {
  const classes = useStyles();
  return (
    <div className={classes.homeDiv}>
          <div className={classes.starDiv}>
            <StarIcon className={classes.star} />
            <StarIcon className={classes.star} />
            <StarIcon className={classes.star} />
            <StarIcon className={classes.star} />
            <StarBorderOutlinedIcon className={classes.star} />
            <Typography className={classes.startext}>4.9 of 5 By</Typography>
            <img className={classes.envato} src="images/envato.png" alt="img" />
          </div>

          <Typography className={classes.heading}>
            The Revolution of Ultimate Platform to monitor your task
          </Typography>
          <Typography className={classes.subHeading}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod
            tempor incididunt labore dolore magna ipsum dolor sit amet
            consectetur.
          </Typography>
          <Button variant="contained" className={classes.free}>
            Start Free trial
          </Button>
          <PlayCircleOutlineOutlinedIcon className={classes.playIcon} />
          <Typography className={classes.watch}>Watch Video</Typography>
          <img
            className={classes.video1}
            src="images/video1.png"
            alt="video1"
          />
          <img
            className={classes.video2}
            src="images/video2.png"
            alt="video2"
          />
     
      
          <img
            className={classes.banner}
            src="images/banner.png"
            alt="banner"
          />
     
    
      <div className={classes.company}>
        <Typography>Trusted by companies like:</Typography>
        <img
          className={classes.comImg}
          src="images/newyork.png"
          alt="newyork"
        />
        <img className={classes.comImg} src="images/amazon.png" alt="amazon" />
        <img
          className={classes.comImg}
          src="images/evernote.png"
          alt="evernote"
        />
        <img className={classes.verge} src="images/verge.png" alt="verge" />
      </div>
      <img className={classes.msg} src="images/msg.png" alt="msg" />
    </div>
  );
}
export default Home;
