import axios from "axios";

//Task List:
//Build and export a function used to send in our authorization token

export const axiosWithAuth = () => {
  const token = JSON.parse(localStorage.getItem('token'));

  return axios.create({
    headers: {
      Authorization: token,
    },
    baseURL: 'http://localhost:5000',
  });
} 