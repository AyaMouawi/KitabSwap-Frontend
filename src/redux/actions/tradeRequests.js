import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export const getByBookId = (id) => {
  return (dispatch) => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/tradeRequest/getByTradeBook/${id}`)
      .then((response) => {
        const tradeRequest = response.data.data;
        dispatch({
          type: "getByBookId",
          payload: tradeRequest,
        });
      })
      .catch((error) => console.log("Failed to fetch data :", error));
    
  };
  
}