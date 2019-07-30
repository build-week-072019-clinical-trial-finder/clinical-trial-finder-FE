<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, withRouter } from "react-router-dom";
import { logger } from "redux-logger";
import { reducer } from "./store/reducers/index";
=======
import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import { logger } from 'redux-logger';
import { reducer } from './store/reducers/index';
>>>>>>> 9c350711767a0de2bd6b2ff091afaac83d5aa69d

import "semantic-ui-css/semantic.min.css";
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
