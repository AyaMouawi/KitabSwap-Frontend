import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export const getAllOrders = () => {
  return (dispatch) => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/order/getAll`)
      .then((response) => {
        const orders = response.data.data;
        console.log("Orders", Orders)
        dispatch({
          type: "getAllOrders",
          payload: orders,
        });
      })
      .catch((error) => console.log("Failed to fetch data :", error));
  }
}