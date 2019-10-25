import React from "react";
import ReactDOM from "react-dom";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter } from "react-router-dom";
import { logger } from "redux-logger";
import { reducer } from "./store/reducers/index";

import "semantic-ui-css/semantic.min.css";
import '../src/assets/fonts/stylesheet.css';
import "./index.css";
import App from "./App";

const store = createStore(reducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
