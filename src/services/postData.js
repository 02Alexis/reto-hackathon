import axios from "axios";

const URL_API = "https://redeamericabe-production.up.railway.app/auth/";


export const postData = async (endpoint, formData) => {

  try {
    const { data }  = await axios.post(`${URL_API}${endpoint}`, formData);
    return data;
  } catch (error) {
    console.log(error);
    return { success: false, message: "Error en la solicitud." };
  }
};



export const userFind = async (email, password) => {
  const url = `${URL_LOGIN}?email=${email}&password=${password}`;
  try {
    const { data } = await axios.get(url);
    return data[0];
  } catch (error) {
    return {
      error,
      data: null,
    };
  }
};
