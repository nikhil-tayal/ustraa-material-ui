import axios from "axios";

const BASE_URL = "https://backend.ustraa.com/rest/V1/api";

const createHeader = (_URL, options = {}) => {
  return { URL: `${BASE_URL}${_URL}`, options: options };
};
const GET = (_URL, API_KEY, _options) => {
  let { URL, options } = createHeader(_URL, _options);
  return axios.get(URL, options);
};

export { GET };
