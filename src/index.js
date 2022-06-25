import React from "react";
import ReactDom from "react-dom";
import App from "./App/App";
import {HashRouter} from "react-router-dom";

ReactDom.render(
    <React.StrictMode>
        <HashRouter>
            <App/>
        </HashRouter>
    </React.StrictMode>, document.getElementById('root'));