import React from "react";
import ReactDOM from "react-dom";
import "leaflet/dist/leaflet.css";
import "./index.css";
import App from "./App";
import serviceWorker from "./serviceWorker";
ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker();

