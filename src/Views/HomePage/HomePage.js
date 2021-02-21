import { Container, useMediaQuery, Box, Grid, Select, MenuItem } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { AppCard, AppHeader, CategoryBar } from "../../Components";
import { API_GET_CATEGORIES, API_GET_PRODUCT_LIST } from "../../Utils/APIURLS.js";
import { GET } from "../../Utils/WebAPI.service";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  grow: {
    flexGrow: 1,
  },
  bottomContainer: {
    fontSize: 14,
    color: "#757575",
    border: "1px solid #757575",
    borderRadius: 1,
    padding: "10px 5px",
    verticalAlign: "middle",
    cursor: "pointer",
  },
  leftSection: {
    borderRight: "1px solid #757575",
    display: "flex",
    position: "relative",
  },
  showingFor: {
    fontSize: 12,
    color: "#1d1d1d",
    lineHeight: 1.8,
  },
  essentials: {
    marginLeft: 10,
    fontSize: 16,
    color: "#1d1d1d",
    fontWeight: 600,
  },
  change: {
    marginRight: 10,
  },
  dropDown: {
    opacity: 0,
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  bottomContainerWeb: {
    width: "40%",
    margin: "50px auto",
  },
});
export default function HomePage() {
  const [productsData, setProductsData] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [isAllProducts, setIsAllProducts] = useState(false);
  const [categoryType, setCategoryType] = useState("Sale");
  const isMobileScreen = useMediaQuery("(max-width:600px)");
  const classes = useStyles();
  useEffect(() => {
    GET(API_GET_CATEGORIES)
      .then(({ data }) => {
        let { category_list, product_list } = data;
        setProductsData(product_list.products);
        setCategoryList(category_list);
      })
      .catch((err) => {
        throw err;
      });
  }, []);
  const onCategoryChange = (category_name, category_id) => {
    setCategoryType(category_name);
    GET(API_GET_PRODUCT_LIST(category_id))
      .then(({ data }) => {
        let { products } = data;
        setProductsData(products);
      })
      .catch((err) => {
        throw err;
      });
  };
  let productsDataToShow = isAllProducts ? productsData : productsData.slice(0, 3);
  return (
    <React.Fragment>
      <AppHeader />
      <Container>
        <CategoryBar categoryList={categoryList} onCategoryChange={onCategoryChange} activeCategory={categoryType} />
        <Box display={isMobileScreen ? "inherit" : "flex"} flexWrap="wrap" justifyContent={"space-between"}>
          {productsDataToShow?.map((productData, index) => {
            return <AppCard productData={productData} key={`product-data-${index}`} />;
          })}
        </Box>
        <Box my={2} className={`${classes.bottomContainer} ${!isMobileScreen ? classes.bottomContainerWeb : null}`}>
          <Grid container>
            <Grid item xs={9}>
              <Box className={classes.leftSection} mr={1}>
                <Box className={classes.showingFor}>Showing For</Box>
                <Select
                  value={categoryType}
                  className={classes.dropDown}
                  onChange={(e) => onCategoryChange(e.target.value.category_name, e.target.value.category_id)}
                  inputProps={{ "aria-label": "Without label" }}
                >
                  {categoryList?.map((category) => {
                    return (
                      <MenuItem value={category} key={category.category_id}>
                        {category.category_name}
                      </MenuItem>
                    );
                  })}
                </Select>
                <Box className={classes.essentials}>{categoryType}</Box>
                <Box className={classes.grow} />
                <Box className={classes.change}>change</Box>
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box onClick={() => setIsAllProducts(!isAllProducts)}>
                {isAllProducts ? "[-]View Less" : "[+]View More"}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
}
