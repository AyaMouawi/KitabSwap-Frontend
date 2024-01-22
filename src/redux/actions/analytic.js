import axios from "axios";

export const getAll = () => {
  return (dispatch) => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/analytic/get`)
      .then((response) => {
        const analytics = response.data.data;
        console.log("analytics", analytics)
        dispatch({
          type: "getAll",
          payload: analytics,
        });
      })
      .catch((error) => console.log("Failed to fetch data :", error));
  }
}

