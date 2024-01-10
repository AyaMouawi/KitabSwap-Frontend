import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export const getAllSaleBooks = () => {
  return (dispatch) => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/saleBook/getAll`)
      .then((response) => {
        const saleBooks = response.data.data;
        console.log("saleBooks", saleBooks)
        dispatch({
          type: "getAllSaleBooks",
          payload: saleBooks,
        });
      })
      .catch((error) => console.log("Failed to fetch data :", error));
  }
}

export const getSaleBookById = (id) => {
  return (dispatch) => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/saleBook/getById/${id}`)
      .then((response) => {
        const saleBook = response.data.data;
        dispatch({
          type: "getSaleBookById",
          payload: saleBook,
        });
      })
      .catch((error) => console.log("Failed to fetch data :", error));
    
  };
  
}

export const getLatestSaleBooks = () => {
  return (dispatch) => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/saleBook/getAll`)
      .then((response) => {
        const allSaleBooks = response.data.data;
        const sortedSaleBooks = allSaleBooks.sort((a, b) => new Date(b.postDate) - new Date(a.postDate));
        const latestSaleBooks = sortedSaleBooks.slice(0, 5);
        console.log("newestSaleBooks", latestSaleBooks);
        dispatch({
          type: "getLatestSaleBooks",
          payload:latestSaleBooks,
        });
      })
      .catch((error) => console.log("Failed to fetch data :", error));
  }
}


