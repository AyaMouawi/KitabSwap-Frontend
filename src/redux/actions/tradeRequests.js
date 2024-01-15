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
  const Auth = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsInJvbGUiOiJjbGllbnQiLCJpYXQiOjE3MDUyMzgzMzAsImV4cCI6MTcwNTI0MTkzMH0.8Tt0j68przkUmvYiMKo5WlX_d-k9KBrsThuhEzznHZE'
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