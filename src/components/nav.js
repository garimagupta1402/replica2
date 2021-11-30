import React from "react";
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import SearchIcon from "@mui/icons-material/Search";

const useStyles = makeStyles((theme) => ({
  navDiv: {
    width: "100%",
    padding: "25px 0px 26px",
    borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
    position: "fixed",
    zIndex: "9999",
    height: "44px",
    zIndex:"50"
    
  },
  navBtn: {
    float: "right",
    left: "170px",
    top: "5px",
    borderRadius: "5px !important",
    fontWeight: "700 !important",
    paddingLeft: "13px !important",
    paddingRight: "13px !important",
    minHeight: "42px",
    color: "rgb(255, 255, 255) !important",
    backgroundColor: "rgb(209, 57, 124) !important",
    //     "&:.css-sghohy-MuiButtonBase-root-MuiButton-root": {},
  },
  home: {
    color: "rgb(255, 255, 255)",
    fontSize: " 16px",
    fontWeight: "700",
  },
  navImg: {
    width: " 128px",
    marginLeft: "332px",
    marginTop: "5px",
  },
  list: {
    display: "flex",
    float: "right",
    paddingLeft: "0px",
    position: "relative",
    right: "550px",
    listStyleType: "none",
  },
  li: {
    fontSize: "16px",
    color: "white",
    marginLeft: "25px",
  },
  searchIcon: {
    color: "white",
    float: " right",
    position: "relative",
    left: "135px",
    top: "10px",
    "&:.makeStyles-searchIcon-7  ": {
      height: "35px",
      width: "35px",
    },
  },
}));
function Nav() {
  const classes = useStyles();
  return (
    <div className={classes.navDiv}>
      <img
        className={classes.navImg}
        src="images/reactNext.png"
        alt="reactImg"
      />
      <ul className={classes.list}>
        <li className={classes.home}>Home</li>
        <li className={classes.li}>Key</li>
        <li className={classes.li}>Features</li>
        <li className={classes.li}>Testimonial</li>
        <li className={classes.li}>Pricing</li>
        <li className={classes.li}>Team Members</li>
      </ul>
      <Button variant="contained" className={classes.navBtn}>
        Try for Free
      </Button>
      <SearchIcon className={classes.searchIcon} />
    </div>
  );
}
export default Nav;
