import { combineReducers } from "redux";
import saleBookReducer from "./saleBookReducer";

const allReducers = combineReducers ({
    saleBooks : saleBookReducer,
});

export default allReducers;