import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
const useStyles = makeStyles({
  heading: {
    fontWeight: "bold",
    fontSize: 22,
    marginTop: 10,
  },
  categoryContainer: {
    display: "flex",
    overflow: "auto",
    padding: "10px 0",
    outline: "none",
  },
  viewAllWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minWidth: 140,
    borderRadius: 5,
    height: 79,
    marginRight: 10,
    fontWeight: "bold",
    color: "#757575",
    border: "1px solid #757575",
  },
  categoryWrapper: {
    position: "relative",
    marginRight: 10,
    borderRadius: 10,
  },
  categoryImage: {
    height: 80,
    borderRadius: 5,
    minWidth: 140,
  },
  categoryName: {
    position: "absolute",
    top: "50%",
    left: "50%",
    color: "#fff",
    transform: `translate(-${50}%, -${50}%)`,
    textAlign: "center",
  },
  activeCategory: {
    borderBottom: "3px solid #4FCF64",
  },
});
export default function CategoryBar({ categoryList, onCategoryChange, activeCategory }) {
  const classes = useStyles();
  const onCategoryClick = (category_name, category_id) => {
    onCategoryChange(category_name, category_id);
  };
  return (
    <React.Fragment>
      <Box className={classes.heading}>Our Products</Box>
      <Box className={classes.categoryContainer}>
        <Box className={classes.viewAllWrapper}>View All</Box>
        {categoryList.map((category) => {
          let { category_name, category_image, category_id } = category;
          return (
            <Box
              className={classes.categoryWrapper}
              key={category_id}
              onClick={() => onCategoryClick(category_name, category_id)}
            >
              <img
                src={category_image}
                alt={"Test"}
                className={`${classes.categoryImage} ${
                  activeCategory === category_name ? classes.activeCategory : null
                }`}
              />
              <Box className={classes.categoryName}>{category_name}</Box>
            </Box>
          );
        })}
        <Box className={classes.viewAllWrapper}>View All</Box>
      </Box>
    </React.Fragment>
  );
}
