import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAllTradeBooks } from "./tradeBook";

import {
   
    ADD_POST_REQUEST,
    ADD_POST_SUCCESS,
    ADD_POST_FAIL,
    
    CLEAR,
  } from "../types/PostTrade";



  export const addPostRequest = () => {
    return {
      type: ADD_POST_REQUEST,
    };
  };
  
  export const addRequestSuccess = () => {
    return {
      type: ADD_POST_SUCCESS,
    };
  };
  
  export const addRequestFail = (error) => {
    return {
      type: ADD_POST_FAIL,
      payload: error,
    };
  };

  export const clearSuccess = () => {
    return {
      type: CLEAR,
    };
  };


  export const postTrade =
  (data) => async (dispatch) => {
    dispatch(addPostRequest());
    const token = localStorage.getItem("token");
 
    try {
        await axios.post(`${process.env.REACT_APP_API_URL}/tradeBook/add`,  data , {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
      dispatch(getAllTradeBooks());
      dispatch(addRequestSuccess());
      dispatch(clearSuccess());
      toast.success('Post added successfully');
    } catch (e) {
      dispatch(addRequestFail(e.response.data));
      toast.error("error");
    }
  };

  export const clear = () => (dispatch) => {
    dispatch(clearSuccess());
  };