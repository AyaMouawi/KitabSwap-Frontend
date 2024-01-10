import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export const getById = (id) => {
  return (dispatch) => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/user/getById/${id}`)
      .then((response) => {
        const user = response.data.data;
        console.log('usersssss', user)
        dispatch({
          type: "getById",
          payload: user,
        });
      })
      .catch((error) => console.log("Failed to fetch data :", error));
    
  };
  
}