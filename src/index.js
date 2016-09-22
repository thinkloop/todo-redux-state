import store from '../src/store';

import * as PAGES from './site/constants/pages';

import updateSelectedPage from './site/actions/update-selected-page';

import addTodo from './todos/actions/add-todo';
import loadTodos from './todos/actions/load-todos';
import removeTodo from './todos/actions/remove-todo';

const constants = {
	PAGES
};

const actions = {
	site: {
		updateSelectedPage
	},
	todos: {
		addTodo,
		loadTodos,
		removeTodo
	}
};

const final = {
	...Object.keys(actions).reduce((p1, key1) => {
		p1[key1] = Object.keys(actions[key1]).reduce((p2, key2) => {
			p2[key2] = function() { store.dispatch(actions[key1][key2].apply(null, arguments)) };
			return p2;
		}, {});
		return p1;
	}, {}),

	constants,

	subscribe: store.subscribe
};

Object.defineProperty(final, "state", { get: () => store.getState() });

export default final;
