import Axios from "axios"
import authHeader from "../services/authHeader"

export const getData = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: "AWAITING_JOBS",

      })
      const response = await Axios.get('https://microverse-jobs-api.herokuapp.com/api/v1/jobs', { headers: authHeader() })
      dispatch({
        type: "SUCCESS_JOBS",
        payload: response.data
      })
    } catch (error) {

    }
  }
}