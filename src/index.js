import store from '../src/store';

import * as PAGES from './site/constants/pages';
import * as TODOS_STATUSES from './todos/constants/statuses';

import updateSelectedPage from './site/actions/update-selected-page';

import addTodo from './todos/actions/add-todo';
import loadTodos from './todos/actions/load-todos';
import removeTodo from './todos/actions/remove-todo';
import completeTodo from './todos/actions/complete-todo';
import updateSelectedSummaryStatus from './todos/actions/update-selected-summary-status';

let final = {};

const actionsSet = {
	site: {
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

final.actions = Object.keys(actionsSet).reduce((p1, key1) => {
	p1[key1] = Object.keys(actionsSet[key1]).reduce((p2, key2) => {
		p2[key2] = function() { store.dispatch(actionsSet[key1][key2].apply(null, arguments)) };
		return p2;
	}, {});
	return p1;
}, {});

final.constants = {
	PAGES,
	TODOS_STATUSES
};

final.subscribe = store.subscribe;

Object.defineProperty(final, "state", { get: () => store.getState() });

export default final;

export const actions = final.actions;
export const constants = final.constants;
export const subscribe = final.subscribe;
export const state = final.state;
