import { UPDATE_TODOS } from '../../todos/actions/update-todos';

export default function (todos = {}, action) {
	switch (action.type) {
	case UPDATE_TODOS:
		if (action.isRemove) {
			return Object.keys(todos).filter(key => !action.todos[key]).reduce((p, key) => {
				p[key] = todos[key];
				return p;
			}, {});
		}

		return {
			...todos,
			...action.todos
		};

	default:
		return todos;
	}
}
