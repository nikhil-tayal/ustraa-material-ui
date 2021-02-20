const API_GET_CATEGORIES = "/homemenucategories/v1.0.1?device_type=mob",
  API_GET_PRODUCT_LIST = (category_id) => `/catalog/v1.0.1?category_id=${category_id}`;

export { API_GET_CATEGORIES, API_GET_PRODUCT_LIST };
