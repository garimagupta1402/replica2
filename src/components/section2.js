import React from "react";
import {
  Typography,
  Grid,
  Box,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import SimpleImageSlider from "react-simple-image-slider";


const useStyles = makeStyles((theme) => ({
  wrapper: {
    textAlign: "center",
    marginTop: "5%",
    display: "grid",
  },
  gridDiv1: {
    width: "1200px !important",
    marginLeft: "20% !important",
    marginTop: "5% !important",
  },
  gridDiv2: {
    width: "1200px !important",
    marginLeft: "20% !important",
    marginTop: "10% !important",
    textAlign: "left",
  },
  cardDiv: {
    width: "250px !important",
    height: "250px !important",
    paddingTop: "2rem",
    textAlign: "left ",
  },
  cardImg: {
    width: "90px",
    marginBottom: "10px",
  },
  heading: {
    fontWeight: " 700 !important",
    lineHeight: "24px !important",
    marginBottom: "12px",
    letterSpacing: " 1.5px !important",
    color: "rgb(209, 57, 124)",
    textTransform: "uppercase",
  },
  subHeading: {
    fontSize: "30px !important",
    lineHeight: " 36px !important",
    fontWeight: "700 !important",
    color: "rgb(15, 33, 55)",
    margin: " 0px",
    letterSpacing: "-1px !important",
  },
  contextText: {
    fontSize: "19px !important",
    lineHeight: "30px !important",
    fontWeight: " 500 !important ",
    marginBottom: "15px !important",
  },
  secondaryText: {
    color: "rgba(52, 61, 72, 0.8)",
    fontSize: "15px !important",
    lineHeight: "28px !important",
    margin: " 0px",
  },
  secondaryText2:{
      width:"324px",
      color: "rgba(52, 61, 72, 0.8)",
    fontSize: "15px !important",
    lineHeight: "28px !important",
    margin: " 0px",
  },
  sliderHeading: {
    color: "rgb(15, 33, 55)",
    fontSize: "36px !important",
    lineHeight: "44px !important",
    fontWeight: " 700 !important",
    marginBottom: "20px !important",
    width: "430px",
  },
  sliderSubheading: {
    color: "rgba(52, 61, 72, 0.8)",
    fontSize: "16px !important",
    lineHeight: "28px !important",
    marginBottom: "50px !important",
    width: "430px",
  },
  rightDiv: {
    width: "430px",
  },
  contextDiv:{
      display:"flex",
      marginBottom:"10%"
  },
  textDiv:{
    marginLeft: "5%",
  }
}));
function Section2() {
  const classes = useStyles();
  const images = [
    {
      url: "images/slider1.png",
    },
    {
      url: "images/slider2.png",
    },
    {
      url: "images/slider3.png",
    },
  ];

  return (
    <Box className={classes.wrapper}>
      <Typography className={classes.heading}>KEY FEATURES </Typography>
      <Typography className={classes.subHeading}>
        Why you choose our app
      </Typography>
      <Grid container spacing={2} className={classes.gridDiv1}>
        <Grid item sm={6} md={3} xs={12}>
          <div className={classes.cardDiv}>
            <img
              className={classes.cardImg}
              src="images/pic.png"
              alt="iconImg"
            />
            <Typography
              variant="h5"
              component="div"
              className={classes.contextText}
            >
              App Development
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              className={classes.secondaryText}
            >
              We are specialized at custom Saas Application Development and
              special features.
            </Typography>
          </div>
        </Grid>
        <Grid item sm={6} md={3} xs={12}>
          <div className={classes.cardDiv}>
            <img
              className={classes.cardImg}
              src="images/pic.png"
              alt="iconImg"
            />
            <Typography
              variant="h5"
              component="div"
              className={classes.contextText}
            >
              10 Times Award
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              className={classes.secondaryText}
            >
              We are globally recognised for our services and won a lot of
              prices arou nd the world .
            </Typography>
          </div>
        </Grid>
        <Grid item sm={6} md={3} xs={12}>
          <div className={classes.cardDiv}>
            <img
              className={classes.cardImg}
              src="images/pic.png"
              alt="iconImg"
            />
            <Typography
              variant="h5"
              component="div"
              className={classes.contextText}
            >
              Cloud Storage
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              className={classes.secondaryText}
            >
              LiteSpeed Web Server known for its high performance and low
              resource consumption.
            </Typography>
          </div>
        </Grid>
        <Grid item sm={6} md={3} xs={12}>
          <div className={classes.cardDiv}>
            <img
              className={classes.cardImg}
              src="images/pic.png"
              alt="iconImg"
            />
            <Typography
              variant="h5"
              component="div"
              className={classes.contextText}
            >
              Customization
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              className={classes.secondaryText}
            >
              Client Satisfaction is our first priority and We are best at it.
              Keep In Touch for the best outpu
            </Typography>
          </div>
        </Grid>
      </Grid>

      <Grid container spacing={2} className={classes.gridDiv2}>
        <Grid xs={12} sm={6}>
          <SimpleImageSlider
            width={400}
            height={800}
            images={images}
            showBullets={false}
            showNavs={false}
          />
        </Grid>
        <Grid xs={12} sm={6} className={classes.rightDiv}>
          <Typography className={classes.sliderHeading}>
            Smart Jackpots that you may love this anytime & anywhere
          </Typography>
          <Typography className={classes.sliderSubheading}>
            The rise of mobile devices transforms the way we consume information
            entirely and the world's most elevant channels such as Facebook.
          </Typography>
          <div className={classes.contextDiv}>
            <img
              className={classes.cardImg}
              src="images/pic.png"
              alt="iconImg"
            />
            <div className={classes.textDiv}>
              <Typography className={classes.contextText}>
                Easy Invoicing
              </Typography>
              <Typography className={classes.secondaryText2}>
                Surprice your clients with professional looking invoices.
              </Typography>
            </div>
          </div>
          <div className={classes.contextDiv}>
            <img
              className={classes.cardImg}
              src="images/pic.png"
              alt="iconImg"
            />
            <div className={classes.textDiv}>
              <Typography className={classes.contextText}>
                UX Planning
              </Typography>
              <Typography className={classes.secondaryText2}>
                UI/UX Design by following and maintaining the latest trends
              </Typography>
            </div>
          </div>
          <div className={classes.contextDiv}>
            <img
              className={classes.cardImg}
              src="images/pic.png"
              alt="iconImg"
            />
            <div className={classes.textDiv}>
              <Typography className={classes.contextText}>
                Customer Support
              </Typography>
              <Typography className={classes.secondaryText2}>
                A Dedicated support team will be always ready for you
              </Typography>
            </div>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}
export default Section2;
