import { Container, useMediaQuery, Box } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { AppCard, AppFooter, AppHeader, CategoryBar } from "../../Components";
import { API_GET_CATEGORIES, API_GET_PRODUCT_LIST } from "../../Utils/APIURLS.js";
import { GET } from "../../Utils/WebAPI.service";
export default function HomePage() {
  const [productsData, setProductsData] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const isMobileScreen = useMediaQuery("(max-width:600px)");
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
  const onCategoryChange = (category_id) => {
    GET(API_GET_PRODUCT_LIST(category_id))
      .then(({ data }) => {
        let { products } = data;
        setProductsData(products);
      })
      .catch((err) => {
        throw err;
      });
  };
  return (
    <React.Fragment>
      <AppHeader />
      <Container>
        <CategoryBar categoryList={categoryList} onCategoryChange={onCategoryChange} />
        <Box display={isMobileScreen ? "inherit" : "flex"} flexWrap="wrap" justifyContent={"space-between"}>
          {productsData?.map((productData, index) => {
            return <AppCard productData={productData} />;
          })}
        </Box>
      </Container>
      {/* <AppFooter /> */}
    </React.Fragment>
  );
}
