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

export const requestTrade = (data) => {
  const Auth = localStorage.getItem("token");
  return (dispatch) => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/tradeRequest/RequestTrade`, data, {
        headers: {
          Authorization: `Bearer ${Auth}`, 
        },
      })
      .then((response) => {
        const tradeRequest = response.data.data;
        dispatch({
          type: "requestTrade",
          payload: tradeRequest,
        });
        toast.success("Request sent successfully. Please check your email.");
      })
      .catch((error) => {
        console.log("Failed to request trade :", error.response.data);
        toast.error(
          error.response.data.message || "Failed to send request. Please try again."
        );
      });
  };
};