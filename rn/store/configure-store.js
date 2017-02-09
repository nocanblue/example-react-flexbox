import createLogger from 'redux-logger';

import thunk from 'redux-thunk';
import promise from 'redux-promise';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import reducers from '../reducers';

const reducer = combineReducers(reducers);
const logger = createLogger();

const store = createStore(
  reducer,
  applyMiddleware(thunk, promise, logger)
);

export default store