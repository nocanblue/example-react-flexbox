import React from 'react';
import ReactDOM from 'react-dom';
import App from './AppContainer';
import './index.css';


import { render } from 'react-dom';
import createLogger from 'redux-logger';

import thunk from 'redux-thunk';
import promise from 'redux-promise';


import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

import reducers from './reducers';

const reducer = combineReducers(reducers);
const logger = createLogger();

const store = createStore(
  reducer,
  applyMiddleware(thunk, promise, logger)
);

const ReduxApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);


ReactDOM.render(
  <ReduxApp />,
  document.getElementById('root')
);
