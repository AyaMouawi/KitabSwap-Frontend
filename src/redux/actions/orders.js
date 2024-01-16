import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export const getAllOrders = () => {
  return (dispatch) => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/order/getAll`)
      .then((response) => {
        const orders = response.data.data;
        console.log("Orderssss", orders)
        dispatch({
          type: "getAllOrders",
          payload: orders,
        });
      })
      .catch((error) => console.log("Failed to fetch data :", error));
  }
}

export const placeOrder = (userId, orderInfo, shipmentMethod ) => {
  return (dispatch) => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/order/checkout/${userId}`, {
        orderInfo,
        shipmentMethod,
      })
      .then((response) => {
        const orderData = response.data.data;

        dispatch({
          type: "placeOrder",
          payload: orderData,
        });
        toast.success("Order placed successfully! check your email for confirmation");
      })
      .catch((error) => {
        console.error("Error placing order:", error);
        toast.error("Failed to place the order. Please try again.");
      });
  };
};