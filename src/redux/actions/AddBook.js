import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAllSaleBooks } from "./saleBooks";

import {
   
    ADD_BOOK_REQUEST,
    ADD_BOOK_SUCCESS,
    ADD_BOOK_FAIL,
    
    CLEAR,
  } from "../types/AddBookTypes";



  export const addBookRequest = () => {
    return {
      type: ADD_BOOK_REQUEST,
    };
  };
  
  export const addRequestSuccess = () => {
    return {
      type: ADD_BOOK_SUCCESS,
    };
  };
  
  export const addRequestFail = (error) => {
    return {
      type: ADD_BOOK_FAIL,
      payload: error,
    };
  };

  export const clearSuccess = () => {
    return {
      type: CLEAR,
    };
  };


  export const addBook =
  (data) => async (dispatch) => {
    dispatch(addBookRequest());
    const token = localStorage.getItem("token");
 
    try {
        await axios.post(`${process.env.REACT_APP_API_URL}/saleBook/add`,  data , {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
      dispatch(getAllSaleBooks());
      dispatch(addRequestSuccess());
      dispatch(clearSuccess());
      toast.success('Book added successfully');
    } catch (e) {
      dispatch(addRequestFail(e.response.data));
      toast.error("error");
    }
  };

  export const clear = () => (dispatch) => {
    dispatch(clearSuccess());
  };