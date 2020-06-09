import {createBrowserHistory} from 'history';
import {applyMiddleware, compose, createStore } from 'redux';
import {routerMiddleware} from 'connected-react-router';
import createRootReducer from './reducers';

export const history = createBrowserHistory();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(history),
    preloadedState,
    composeEnhancers(
      applyMiddleware(
        routerMiddleware(history),
        // other midllewares
      )
    )
  )
  return store;
}
