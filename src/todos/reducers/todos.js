import { UPDATE_TODOS } from '../../todos/actions/update-todos';

export default function (todos = {}, action) {
	let newTodos;

	switch (action.type) {
	case UPDATE_TODOS:
		newTodos = {
			...todos
		};

		Object.keys(action.todos).forEach(key => {
			if (action.todos[key]) {
				newTodos[key] = action.todos[key];
			}
			else {
				delete newTodos[key];
			}
		});

		return newTodos;

	default:
		return todos;
	}
}
