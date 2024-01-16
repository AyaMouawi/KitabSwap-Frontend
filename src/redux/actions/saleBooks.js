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

export const getAllAvailableSaleBooks = () => {
  return (dispatch) => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/saleBook/getAll`)
      .then((response) => {
        const saleBooks = response.data.data;
        const available = saleBooks.filter(book => book.status === "available");
        console.log("saleBooks", available)
        dispatch({
          type: "getAllSaleBooks",
          payload: available,
        });
      })
      .catch((error) => console.log("Failed to fetch data :", error));
  }
}

export const deleteById = (id) => {
  const Auth = localStorage.getItem("token");
  return (dispatch) => {
    axios
    .delete(`${process.env.REACT_APP_API_URL}/saleBook/delete/${id}`, {
      headers: {
        Authorization: `Bearer ${Auth}`,
      },
    })
      .then((response) => {

        dispatch({
          type: "deleteById",
          payload: id,
        });
        toast.success("Book deleted successfully");
      })
      .catch((error) =>  ("Failed to fetch data :", error));
      
  };
  
}


export const addBook = (data) => {
  return async (dispatch) => {
    try {
      const Auth = localStorage.getItem("token");
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/saleBook/add`, data, {
        headers: {
          Authorization: `Bearer ${Auth}`,
        },
      });

      const book = response.data.data;
      dispatch({
        type: "addBook",
        payload: book,
      });

      toast.success("Book added successfully.");
    } catch (error) {
      console.error("Failed to add book:", error.response?.data);
    }
  };
};
