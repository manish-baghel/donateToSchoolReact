import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store, history } from "./store";

import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router';

import * as serviceWorker from './serviceWorker';

import App from './components/App';
// Comment for poerline status check
ReactDOM.render((
  <Provider store={store}>
  	<ConnectedRouter history={history}>
  		<Switch>
  			<Route path="/" component={App} />
  		</Switch>
  	</ConnectedRouter>
  </Provider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
