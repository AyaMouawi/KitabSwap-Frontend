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