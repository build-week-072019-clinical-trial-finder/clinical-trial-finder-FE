import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter, withRouter } from 'react-router-dom';
import { logger } from 'redux-logger';

import 'semantic-ui-css/semantic.min.css'
import './index.css';
import "semantic-ui-css/semantic.min.css";
import App from './App';

const store = createStore(reducer, applyMiddleware(thunk, logger))

const AppWithRouter = withRouter(App);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <AppWithRouter />
    </BrowserRouter>
  </Provider>, document.getElementById('root'));
