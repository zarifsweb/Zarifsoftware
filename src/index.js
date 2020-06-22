import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const loader = document.querySelector(".load");

// if you want to show the loader when React loads data again
const showLoader = () => loader.classList.remove("loader--hide");

const hideLoader = () => loader.classList.add("loader--hide");

// the setTimeout simulates the time it takes react to load, and is not part of the solution
setTimeout(
  () =>
    // the show/hide functions are passed as props
    ReactDOM.render(
      <React.StrictMode>
        <App hideLoader={hideLoader} showLoader={showLoader} />
      </React.StrictMode>,
      document.getElementById("root")
    ),
  1000
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
