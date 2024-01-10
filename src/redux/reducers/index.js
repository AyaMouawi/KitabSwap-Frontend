import { combineReducers } from "redux";
import saleBookReducer from "./saleBookReducer";
import genreReducer from "./genreReducer";
import tradeBookReducer from "./tradeBookReducer";
import tradeRequestReducer from "./tradeRequestReducer";
import userReducer from "./userReducer";

const allReducers = combineReducers ({
    saleBooks : saleBookReducer,
    genres : genreReducer,
    tradeBooks : tradeBookReducer,
    tradeRequest : tradeRequestReducer,
    users : userReducer,
});

export default allReducers;