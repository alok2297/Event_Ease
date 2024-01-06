import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Scroll from "./components/ScrollToTop"
import { BrowserRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <Scroll />
        <App />
    </BrowserRouter>
);
