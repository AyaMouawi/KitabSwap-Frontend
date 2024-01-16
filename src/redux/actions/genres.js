import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const getAllGenres = () => {
   return (dispatch) => {
     axios
     .get(`${process.env.REACT_APP_API_URL}/genre/getAll`)
     .then((response) => {
       const genres = response.data.data;
       console.log("genres", genres)
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

        dispatch({
          type: "deleteById",
          payload: id,
        });
        toast.success("Genre deleted successfully");
      })
      .catch((error) =>  ("Failed to fetch data :", error));
      
  };
  
}

export const addGenre = (genreName) => {
  console.log("Genre Name:", genreName);
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
        console.log("Failed to add genre :", error.response.data);
        toast.error(
          error.response.data.message || "Failed to add genre. Please try again."
        );
      });
  };
}