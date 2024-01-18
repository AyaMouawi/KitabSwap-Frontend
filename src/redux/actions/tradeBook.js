import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export const getAllTradeBooks = () => {
  return (dispatch) => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/tradeBook/getAll`)
      .then((response) => {
        const TradeBooks = response.data.data;
        console.log("TradeBooks", TradeBooks)
        dispatch({
          type: "getAllTradeBooks",
          payload: TradeBooks,
        });
      })
      .catch((error) => console.log("Failed to fetch data :", error));
  }
}

export const getByOwnerId = (id) => {
  return (dispatch) => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/tradeBook/getByOwner/${id}`)
      .then((response) => {
        const tradeBook = response.data.data;
        console.log("tradeBook",tradeBook)
        dispatch({
          type: "getByOwnerId",
          payload: tradeBook,
        });
      })
      .catch((error) => console.log("Failed to fetch data :", error));
    
  };
  
}

export const postTrade = (data) => {
  const Auth = localStorage.getItem("token");
  return (dispatch) => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/tradeBook/add`, data, {
        headers: {
          Authorization: `Bearer ${Auth}`, 
        },
      })
      .then((response) => {
        const tradeBook = response.data.data;
        dispatch({
          type: "postTrade",
          payload: tradeBook,
        });
        toast.success("book posted successfully ");
      })
      .catch((error) => {
        console.log("Failed to request trade :", error.response.data);
        toast.error(
          error.response.data.message || "Failed to post book. Please try again."
        );
      });
  };
};
