import {
   
    ADD_POST_REQUEST,
    ADD_POST_SUCCESS,
    ADD_POST_FAIL,
    
    CLEAR,
  } from "../types/PostTrade";

  export const initialState = {
    loading: false,
    requests: [],
    error: "",
    addLoading: false,
    addError: "",
  };


  const AddPostReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_POST_REQUEST:
      return {
        ...state,
        addLoading: true,
        addError: "",
      };
    case ADD_POST_SUCCESS:
      return {
        ...state,
        addLoading: false,
        addError: ""
      };
    case ADD_POST_FAIL:
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

  export default AddPostReducer;