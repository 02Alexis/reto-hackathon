import axios from "axios";

const URL_API = "https://redeamericabe-production.up.railway.app/";

export const getData = async (endpoint, token) => {
  try {
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    const { data } = await axios.get(`${URL_API}${endpoint}`, { headers });
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
