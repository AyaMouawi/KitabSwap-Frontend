import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export const getAll = () => {
  return (dispatch) => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/banner/getAll`)
      .then((response) => {
        const banners = response.data.data;
        console.log("banners", banners)
        dispatch({
          type: "getAll",
          payload: banners,
        });
      })
      .catch((error) => console.log("Failed to fetch data :", error));
  }
}

export const getHighlighted = () => {
  return (dispatch) => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/banner/getHighlighted`)
      .then((response) => {
        const banners = response.data.data;
        console.log("banners", banners)
        dispatch({
          type: "getHighlighted",
          payload: banners,
        });
      })
      .catch((error) => console.log("Failed to fetch data :", error));
  }
}

export const Highlight = (id) => {
  return (dispatch) => {
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const requestData = {
      highlight: 1,
    };

    axios
      .put(`${process.env.REACT_APP_API_URL}/banner/update/${id}`, requestData, { headers })
      .then((response) => {
        const banners = response.data.data;
        console.log("banners", banners);

        dispatch({
          type: "Highlight",
          payload: banners,
        });

      })
      .catch((error) => console.log("Failed to fetch data :", error));
  };
};


export const UnHighlight = (id) => {
  return (dispatch) => {
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const requestData = {
      highlight: 0,
    };

    axios
      .put(`${process.env.REACT_APP_API_URL}/banner/update/${id}`, requestData, { headers })
      .then((response) => {
        const banners = response.data.data;
        console.log("banners", banners);

        dispatch({
          type: "Highlight",
          payload: banners,
        });

      })
      .catch((error) => console.log("Failed to fetch data :", error));
  };
};
