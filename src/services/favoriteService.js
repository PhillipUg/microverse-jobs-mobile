import axios from "axios";
import authHeader from '../services/authHeader'

const API_URL = "https://microverse-jobs-api.herokuapp.com/api/v1/";

const updateFav = (user_id, job_id) => {
  console.log(user_id, job_id)
  return axios.put(API_URL + `favorites/${job_id}`, {
    user_id,
    job_id,
  }, { headers: authHeader() })
    .then((response) => {
      if (response.data) {
        localStorage.setItem("favorited", JSON.stringify(response.data));
      }
      console.log(response.data)
      return response.data;
    });
};

export default {
  updateFav
};
