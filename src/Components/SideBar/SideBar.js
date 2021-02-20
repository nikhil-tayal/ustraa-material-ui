import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid } from "@material-ui/core";
import { Notifications, Clear, ChevronRight } from "@material-ui/icons";
const useStyles = makeStyles({
  sideBarWrapper: {
    minWidth: "100vw",
  },
  crossButton: {
    color: "#fff",
    position: "absolute",
    top: 10,
    right: 10,
  },
  topSection: {
    backgroundImage: "linear-gradient(275deg, #526b7a, #0f4667 39%, #09334c) !important",
    height: "25vh",
    position: "relative",
  },
  bellIcon: {
    transform: "translateY(7px)",
    margin: "0 10px",
  },
  loginTextWrapper: {
    color: "#fff",
    position: "absolute",
    bottom: 10,
  },
  loginText: {
    fontSize: 12,
    textDecoration: "underline",
    lineHeight: 2,
  },
  menuBox: {
    border: "1px solid #f0f0f0",
    padding: "20px 10px",
  },
  menuHeading: {
    fontWeight: "bold",
  },
  menuBoxSecondary: {
    border: "1px solid #f0f0f0",
    padding: "15px 10px",
    color: "#757575",
  },
  category: {
    backgroundColor: "#f8f8f8",
    borderRadius: 4,
    padding: 15,
    position: "relative",
  },
  rightIcon: {
    position: "absolute",
    right: 20,
  },
});
export default function SideBar() {
  const classes = useStyles();
  return (
    <Box className={classes.sideBarWrapper}>
      <Box className={classes.topSection}>
        <Clear className={classes.crossButton} />
        <Box className={classes.loginTextWrapper}>
          <Box className={classes.loginText}>
            <Box component={"span"}>
              <Notifications fontSize={"small"} className={classes.bellIcon} />
            </Box>
            <Box component={"span"}>Login to check notifications and track your order</Box>
          </Box>
        </Box>
      </Box>
      <Box className={classes.menuBox}>
        <Box className={classes.menuHeading}>Shop by Category</Box>
        <Box mt={2}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Box className={classes.category}>
                Sale <ChevronRight className={classes.rightIcon} />
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box className={classes.category}>
                Beard Growth
                <ChevronRight className={classes.rightIcon} />
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box className={classes.category}>
                Hair Growth
                <ChevronRight className={classes.rightIcon} />
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box className={classes.category}>
                Perfume for Men
                <ChevronRight className={classes.rightIcon} />
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box className={classes.category}>
                View More
                <ChevronRight className={classes.rightIcon} />
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box className={classes.category}>
                All Products
                <ChevronRight className={classes.rightIcon} />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box className={classes.menuBox}>
        <Box className={classes.menuHeading}>Gift Packs For Men</Box>
        <Box className={classes.menuSubheading}>This Is What He Needs!</Box>
      </Box>
      <Box className={classes.menuBox}>
        <Box className={classes.menuHeading}>USTRAA Subscription Plan</Box>
        <Box className={classes.menuSubheading}>Save Upto 40%</Box>
      </Box>
      <Box className={classes.menuBox}>
        <Box className={classes.menuHeading}>Register With Trimmer</Box>
        <Box className={classes.menuSubheading}>Register to avail warranty or see Warranty INfo</Box>
      </Box>
      <Box className={classes.menuBoxSecondary}>Inter With Us</Box>
      <Box className={classes.menuBoxSecondary}>Any Issue? Contact Us</Box>
      <Box className={classes.menuBoxSecondary}>We Are Hiring</Box>

      <Box mt={2} ml={1}>
        <Box>Contact Us</Box>
        <Box mt={2}>Call: 1800 103 6121</Box>
        <Box>Email: help@ustraa.com</Box>
      </Box>
    </Box>
  );
}
