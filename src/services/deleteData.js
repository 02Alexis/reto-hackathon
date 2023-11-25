import axios from "axios";

const URL_API = "redeamericabe-production.up.railway.app/";

export const deleteData = async (endpoint) => {
  try {
    const { data } = await axios.delete(`${URL_API}${endpoint}`);
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
