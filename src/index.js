import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import {thunk} from "redux-thunk";
import allReducers from "./redux/reducers/index";


const store = createStore(allReducers, applyMiddleware(thunk));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
    <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} />
  </React.StrictMode>
 
);