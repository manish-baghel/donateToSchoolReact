import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from './reducer';
import { createLogger } from 'redux-logger';

export const history = createBrowserHistory();

const myRouterMiddleware = routerMiddleware(history);
const rootReducer = createRootReducer(history);
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const getMiddleware = () => {
	if(process.env==='production')
		return applyMiddleware(myRouterMiddleware);
	else
		return applyMiddleware(myRouterMiddleware,createLogger());
}

export const store = createStore(rootReducer, composeEnhancers(getMiddleware()));

