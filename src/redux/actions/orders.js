import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export const getAllOrders = () => {
  return (dispatch) => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/order/getAll`)
      .then((response) => {
        const orders = response.data.data;
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

export const getById = (id) => {
  return (dispatch) => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/order/getById/${id}`)
      .then((response) => {
        const order = response.data.data;
        dispatch({
          type: "getById",
          payload: order,
        });
        
      })
      .catch((error) =>  ("Failed to fetch data :", error));
       
  };
  
}

export const deleteById = (id) => {
  const Auth = localStorage.getItem("token");
  return (dispatch) => {
    axios
    .delete(`${process.env.REACT_APP_API_URL}/order/delete/${id}`, {
      headers: {
        Authorization: `Bearer ${Auth}`,
      },
    })
      .then((response) => {
        toast.success("Order deleted successfully");
        dispatch(getAllOrders());
        dispatch({
          type: "deleteById",
          payload: id,
        });
        
      })
      .catch((error) =>  ("Failed to fetch data :", error));
      
  };
  
}

export const editById = (id) => {
  const Auth = localStorage.getItem("token");

  return (dispatch) => {
    axios
      .put(`${process.env.REACT_APP_API_URL}/order/update/${id}`, null, {
        headers: {
          Authorization: `Bearer ${Auth}`,
        },
      })
      .then((response) => {
        toast.success("Status set to delivered successfully");
        dispatch(getAllOrders());
        dispatch({
          type: "editById",
          payload: id,
        });
      })
      .catch((error) => {
        console.error("Failed to fetch data:", error);
      });
  };
};
