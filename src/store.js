import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// reducers
import url from './site/reducers/url';
import selectedPage from './site/reducers/selected-page';

import todos from './todos/reducers/todos';
import selectedSummaryStatus from './todos/reducers/selected-summary-status';

const reducers = {
	url,
	selectedPage,
	todos,
	selectedSummaryStatus
};

// middleware that logs all actions to console
const consoleLog = store => next => action => {
	if (typeof action !== 'function') {
		console.log(action);
	}
	return next(action);
};

// middleware
let middleWare;
if (process.env.NODE_ENV !== 'production') {
	middleWare = applyMiddleware(consoleLog, thunk);
} else {
	middleWare = applyMiddleware(thunk);
}

// create store
export default createStore(combineReducers(reducers), middleWare);
