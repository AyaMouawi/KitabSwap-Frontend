import axios from "axios";

export const getAllSaleBooks = () => {
  return (dispatch) => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/saleBook/getAll`)
      .then((response) => {
        const saleBooks = response.data.data;
        console.log("shit", saleBooks)
        dispatch({
          type: "getAllSaleBooks",
          payload: saleBooks,
        });
      })
      .catch((error) => console.log("Failed to fetch data :", error));
  }
}


export const getByGenreName = (genreName) => {
    return (dispatch) => {
        axios
          .get(`${process.env.REACT_APP_API_URL}/saleBook/getAll`)
          .then((response) => {
            const saleBooks = response.data.data;
            console.log("shit", response)
            dispatch({
              type: "getByGenreName",
              payload:{genreName,saleBooks}
            });
          })
          .catch((error) => console.log("Failed to fetch data :", error));
      }
}