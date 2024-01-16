import { combineReducers } from "redux";
import saleBookReducer from "./saleBookReducer";
import genreReducer from "./genreReducer";
import tradeBookReducer from "./tradeBookReducer";
import tradeRequestReducer from "./tradeRequestReducer";
import userReducer from "./userReducer";
import orderReducer from "./orderReducer";
import bannerReducer from "./bannerReducer";

const allReducers = combineReducers ({
    saleBooks : saleBookReducer,
    genres : genreReducer,
    tradeBooks : tradeBookReducer,
    tradeRequest : tradeRequestReducer,
    users : userReducer,
    orders : orderReducer,
    banners : bannerReducer,
});

export default allReducers;