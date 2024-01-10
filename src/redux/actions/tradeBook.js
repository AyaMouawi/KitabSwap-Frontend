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
        dispatch({
          type: "getByOwnerId",
          payload: tradeBook,
        });
      })
      .catch((error) => console.log("Failed to fetch data :", error));
    
  };
  
}