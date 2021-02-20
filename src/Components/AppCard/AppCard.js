import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box, Button, useMediaQuery } from "@material-ui/core";
import StarRate from "@material-ui/icons/StarRate";
const useStyles = makeStyles((theme) => ({
  cardWrapper: {
    padding: "10px",
    marginTop: 10,
  },
  webCard: {
    width: "30%",
  },
  productName: {
    color: "#1d1d1d",
    fontWeight: 600,
    fontSize: 14,
  },
  ratings: {
    color: "#bababa",
    fontSize: 14,
    width: 60,
    textAlign: "right",
  },
  ratingIcon: {
    fontSize: 14,
  },
  productWeight: {
    fontSize: 14,
    color: "#bcbcbc",
    marginTop: 4,
  },
  productPrice: {
    color: "#1d1d1d",
    fontWeight: "bold",
    marginTop: 6,
  },
  originalPrice: {
    textDecoration: "line-through",
    fontSize: 14,
    fontWeight: "400",
    color: "#bababa",
  },
  button: {
    background: "#4FCF64",
    color: "#fff",
    marginTop: 10,
  },
}));
export default function AppCard({ productData }) {
  const classes = useStyles();
  const isMobileScreen = useMediaQuery("(max-width:600px)");
  let { name, price, weight, weight_unit, image_urls, final_price, is_in_stock } = productData;
  return (
    <Box boxShadow={1} className={`${classes.cardWrapper} ${!isMobileScreen ? classes.webCard : null}`}>
      <Grid container>
        <Grid item xs={4}>
          <img src={image_urls.x120} alt="" className={classes.productImage} />
        </Grid>
        <Grid item xs={8}>
          <Box display="flex" justifyContent="space-between">
            <Box className={classes.productName}>{name}</Box>
            <Box className={classes.ratings}>
              4
              <StarRate className={classes.ratingIcon} />
            </Box>
          </Box>
          {weight ? <Box className={classes.productWeight}>{`(${weight} ${weight_unit})`}</Box> : null}

          <Box className={classes.productPrice}>
            ₹ {final_price}
            <Box m={1} component="span" className={classes.originalPrice}>
              ₹ {price}
            </Box>
          </Box>
          <Button variant="contained" className={classes.button} disabled={!is_in_stock}>
            {is_in_stock ? "Add To Cart" : "Out of Stock"}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
