import store from '../src/store';

import * as PAGES from './site/constants/pages';
import * as TODOS_STATUSES from './todos/constants/statuses';

import updateStateFromURL from './site/actions/update-state-from-url';
import updateSelectedPage from './site/actions/update-selected-page';

import addTodo from './todos/actions/add-todo';
import loadTodos from './todos/actions/load-todos';
import removeTodo from './todos/actions/remove-todo';
import completeTodo from './todos/actions/complete-todo';
import updateSelectedSummaryStatus from './todos/actions/update-selected-summary-status';

const actionsSet = {
	site: {
		updateStateFromURL,
		updateSelectedPage
	},
	todos: {
		addTodo,
		loadTodos,
		removeTodo,
		completeTodo,
		updateSelectedSummaryStatus
	}
};

const actions = Object.keys(actionsSet).reduce((p1, key1) => {
	p1[key1] = Object.keys(actionsSet[key1]).reduce((p2, key2) => {
		p2[key2] = function() {
			const action = actionsSet[key1][key2].apply(null, arguments);
			store.dispatch(action);
			return action;
		};
		return p2;
	}, {});
	return p1;
}, {});

const constants = {
	PAGES,
	TODOS_STATUSES
};

const subscribe = store.subscribe;

const getState = store.getState;

export default {
	getState,
	actions,
	constants,
	subscribe
};

export {
	getState,
	actions,
	constants,
	subscribe
};
