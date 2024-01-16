import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export const getById = (id) => {
  return (dispatch) => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/user/getById/${id}`)
      .then((response) => {
        const user = response.data.data;
        console.log('usersssss', user)
        dispatch({
          type: "getById",
          payload: user,
        });
      })
      .catch((error) => console.log("Failed to fetch data :", error));
    
  };
  
}

export const getAllClients = () => {
  return (dispatch) => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/user/getAll`)
      .then((response) => {
        const users = response.data.data;
        const clients = users.filter(user => user.role === "client");
        console.log("users", clients)
        dispatch({
          type: "getAllClients",
          payload: clients,
        });
      })
      .catch((error) => console.log("Failed to fetch data :", error));
  }
}


export const login = (Info) => {
  return (dispatch) => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/user/login`, Info)
      .then((response) => {
        const login = response.data;
        const shipment = 'delivery';
        console.log('login', login);
        dispatch({
          type: "login",
          payload: login,
        });

        const { userId, userFullName, userAddress, role, token } = login;
        localStorage.setItem("userId", userId);
        localStorage.setItem("userFullName", userFullName);
        localStorage.setItem("userAddress", userAddress);
        localStorage.setItem("token", token);
        localStorage.setItem("role", role);
        localStorage.setItem("cart",[]);
        localStorage.setItem("cartDetails",[]);
        localStorage.setItem("shipment", shipment)

        toast.success(`Welcome ${userFullName}`);
        if (role === "admin") {
          window.location.href = "/AdminDashboard";
        } else {
          window.location.href = "/";
        }

        return response.data;
      })
      .catch((error) => {
        console.log("Failed to login:", error);
        const errorMessage = error.response?.data?.message || "Failed to login. Please try again.";
        toast.error(errorMessage);
      });
  }
}

export const register = (data) => {
  return (dispatch) => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/user/register`, data)
      .then((response) => {
        const register = response.data;
        dispatch({
          type: "register",
          payload: register,
        });


        toast.success(`we sent you a verification email please follow it then login`);

      })
      .catch((error) => {
        console.log("Failed to register:", error);
        const errorMessage = error.response?.data?.message || "Failed to register. Please try again.";
        toast.error(errorMessage);
      });
  }
}