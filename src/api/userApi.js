import axios from "axios";
const baseUrl = "https://zipzip-firstbackend.onrender.com";


export const login = async (email, password) => {
  try {
      const res = await axios({
      method: 'post',
      url: baseUrl + '/login',
      data: {
        email,
        password
      }
    });
    return res;
  } catch (error) {
    throw error;
  }
}




