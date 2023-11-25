import axios from "axios";

const URL_API = "redeamericabe-production.up.railway.app/";

export const getData = async (endpoint) => {
  try {
    const { data } = await axios.get(`${URL_API}${endpoint}`);
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
