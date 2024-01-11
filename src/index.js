import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {ScrollToTop} from "./Utility"
import { BrowserRouter} from "react-router-dom";
import { Provider } from 'react-redux';
import store from './state/store';

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store = {store}>
  <BrowserRouter>
        <ScrollToTop />
        <App />
    </BrowserRouter>
  </Provider>
);
