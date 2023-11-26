import axios from "axios";

const URL = "https://redeamericabe-production.up.railway.app/";

export const createPost = async (endpoint, formData, token) => {
  console.log(formData);

  try {
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    const { data } = await axios.post(`${URL}${endpoint}`, formData, {
      headers,
    });
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

const URL_API = "https://redeamericabe-production.up.railway.app/auth/";

export const postData = async (endpoint, formData) => {
  try {
    const { data } = await axios.post(`${URL_API}${endpoint}`, formData);
    return data;
  } catch (error) {
    console.log(error);
    return { success: false, message: "Error en la solicitud." };
  }
};
