import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const getAllGenres = () => {
   return (dispatch) => {
     axios
     .get(`${process.env.REACT_APP_API_URL}/genre/getAll`)
     .then((response) => {
       const genres = response.data.data;
       dispatch({
         type: "getAllGenres",
         payload: genres,
       });
     })
     .catch((error) => console.log("Failed to fetch data :", error));
      
   }
}

export const deleteById = (id) => {
  const Auth = localStorage.getItem("token");
  return (dispatch) => {
    axios
    .delete(`${process.env.REACT_APP_API_URL}/genre/delete/${id}`, {
      headers: {
        Authorization: `Bearer ${Auth}`,
      },
    })
      .then((response) => {
        toast.success("Genre deleted successfully");
        dispatch(getAllGenres());
        dispatch({
          type: "deleteById",
          payload: id,
        });

       
        
      })
      .catch((error) =>  ("Failed to fetch data :", error));
      
  };
  
}

export const addGenre = (genreName) => {
  const Auth = localStorage.getItem("token");
  return (dispatch) => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/genre/add`, {genreName}, {
        headers: {
          Authorization: `Bearer ${Auth}`, 
        },
      })
      .then((response) => {
        const genre = response.data.data;
        dispatch({
          type: "addGenre",
          payload: genre,
        });
        toast.success("Genre added successfully .");
      })
      .catch((error) => {
        toast.error(
          error.response.data.message || "Failed to add genre. Please try again."
        );
      });
  };
}