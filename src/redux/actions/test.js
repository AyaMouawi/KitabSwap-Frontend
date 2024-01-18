import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
   
    ADD_REQUEST_REQUEST,
    ADD_REQUEST_SUCCESS,
    ADD_REQUEST_FAIL,
    
    CLEAR,
  } from "../types/testTypes";



  export const addRequestRequest = () => {
    return {
      type: ADD_REQUEST_REQUEST,
    };
  };
  
  export const addRequestSuccess = () => {
    return {
      type: ADD_REQUEST_SUCCESS,
    };
  };
  
  export const addRequestFail = (error) => {
    return {
      type: ADD_REQUEST_FAIL,
      payload: error,
    };
  };

  export const clearSuccess = () => {
    return {
      type: CLEAR,
    };
  };


  export const requestTrade =
  (data) => async (dispatch) => {
    dispatch(addRequestRequest());
    const token = localStorage.getItem("token");
 
    try {
        await axios.post(`${process.env.REACT_APP_API_URL}/tradeRequest/RequestTrade`,  data , {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
      dispatch(addRequestSuccess());
      dispatch(clearSuccess());
      toast.success('Trade request successful!');
    } catch (e) {
      dispatch(addRequestFail(e.response.data));
      toast.error('Trade request failed.');
    }
  };

  export const clear = () => (dispatch) => {
    dispatch(clearSuccess());
  };