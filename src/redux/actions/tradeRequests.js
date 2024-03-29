import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getAllTradeBooks } from "./tradeBook";


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
        toast.warning(
         "You already send a request for this book."
        );
      });
  };
};


export const decline = (id) => {
  const token = localStorage.getItem('token');
  return (dispatch) => {
    axios
      .put(
        `${process.env.REACT_APP_API_URL}/tradeRequest/decline/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        const tradeRequest = response.data.data;
        toast.success("Request declined successfully. Check your email");
        dispatch(getByBookId());
        dispatch(getAllTradeBooks());
        dispatch({
          type: "decline",
          payload: tradeRequest,
        });
      })
      .catch((error) => console.log("Failed to fetch data :", error));
  };
};

export const accept = (id) => {
  const token = localStorage.getItem('token');
  return (dispatch) => {
    axios
      .put(
        `${process.env.REACT_APP_API_URL}/tradeRequest/accept/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        const tradeRequest = response.data.data;
        toast.success("Request accepted successfully. Check your email");
        dispatch(getByBookId());
        dispatch(getAllTradeBooks());
        dispatch({
          type: "accept",
          payload: tradeRequest,
        });
      })
      .catch((error) => console.log("Failed to fetch data :", error));
  };
};