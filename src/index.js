import store from '../src/store';

import addTodo from './todos/actions/add-todo';
import loadTodos from './todos/actions/load-todos';
import removeTodo from './todos/actions/remove-todo';



const actions = {
	todos: {
		addTodo,
		loadTodos,
		removeTodo
	}
};

const final = {
	...Object.keys(actions).reduce((p1, key1) => {
		p1[key1] = Object.keys(actions.todos).reduce((p2, key2) => {
			p2[key2] = function() { store.dispatch(actions.todos[key2].apply(null, arguments)) };
			return p2;
		}, {});
		return p1;
	}, {}),

	subscribe: store.subscribe
};

Object.defineProperty(final, "state", { get: () => store.getState() });

export default final;
