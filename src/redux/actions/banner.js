import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export const getAll = () => {
  return (dispatch) => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/banner/getAll`)
      .then((response) => {
        const banners = response.data.data;
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

    axios
      .put(`${process.env.REACT_APP_API_URL}/banner/highlite/${id}`, null,  { headers })
      .then((response) => {
        const banners = response.data.data;
        console.log("banners", banners);
        dispatch(getAll());
        dispatch({
          type: "Highlight",
          payload: banners,
        });

      })
      .catch((error) => console.log("Failed to fetch data :", error));
  };
};



export const updateBanner = (Id, data) => {
  return (dispatch) => {
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    axios
      .put(`${process.env.REACT_APP_API_URL}/banner/update/${Id}`, data, { headers })
      .then((response) => {
        const banner = response.data;
        toast.success("Banner edited successfully.");
        dispatch(getAll());
        dispatch({
          type: "updateBanner",
          payload: { Id, banner },
        });
      })
      .catch((error) => console.log("Failed to update the banner :", error));
  };
};
