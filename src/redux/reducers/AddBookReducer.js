import {
   
    ADD_BOOK_REQUEST,
    ADD_BOOK_SUCCESS,
    ADD_BOOK_FAIL,
    
    CLEAR,
  } from "../types/AddBookTypes";

  export const initialState = {
    loading: false,
    requests: [],
    error: "",
    addLoading: false,
    addError: "",
  };


  const AddBookReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_BOOK_REQUEST:
      return {
        ...state,
        addLoading: true,
        addError: "",
      };
    case ADD_BOOK_SUCCESS:
      return {
        ...state,
        addLoading: false,
        addError: ""
      };
    case ADD_BOOK_FAIL:
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

  export default AddBookReducer;