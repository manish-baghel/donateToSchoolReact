import {createBrowserHistory} from 'history';
import {applyMiddleware, compose, createStore } from 'redux';
import {routerMiddleware} from 'connected-react-router';
import createRootReducer from './reducers';
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";

const loggerMiddleware = createLogger();

export const history = createBrowserHistory();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore() {
  const store = createStore(
    createRootReducer(history),
    composeEnhancers(
      applyMiddleware(
        routerMiddleware(history),
        thunkMiddleware,
        loggerMiddleware
        // other midllewares
      )
    )
  )
  return store;
}
