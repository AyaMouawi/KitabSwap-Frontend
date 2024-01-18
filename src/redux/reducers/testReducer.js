import {
   
    ADD_REQUEST_REQUEST,
    ADD_REQUEST_SUCCESS,
    ADD_REQUEST_FAIL,
    
    CLEAR,
  } from "../types/testTypes";

  export const initialState = {
    loading: false,
    requests: [],
    error: "",
    addLoading: false,
    addError: "",
  };


  const testReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_REQUEST_REQUEST:
      return {
        ...state,
        addLoading: true,
        addError: "",
      };
    case ADD_REQUEST_SUCCESS:
      return {
        ...state,
        addLoading: false,
        addError: ""
      };
    case ADD_REQUEST_FAIL:
      return {
        ...state,
        addLoading: false,
        addError: action.payload,
      };

      case CLEAR:
        return {
          ...state,
          loading: false,
          error: "",
          addLoading: false,
          addError: "",
        };
      default:
        return state;
    }
  };

  export default testReducer;